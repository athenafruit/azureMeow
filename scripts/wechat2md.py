#!/usr/bin/env python3
"""
公众号文章批量转换为 Markdown
使用方法：
1. 把公众号文章链接放到 articles.txt，每行一个
2. 运行：python scripts/wechat2md.py
3. 转换后的文章会保存到 docs/posts/ 目录
"""

import os
import re
import sys
import time
import hashlib
import requests
from pathlib import Path
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup
import html2text

# 配置
OUTPUT_DIR = Path(__file__).parent.parent / "docs" / "posts"
IMAGES_DIR = Path(__file__).parent.parent / "docs" / "public" / "images" / "wechat"
ARTICLES_FILE = Path(__file__).parent / "articles.txt"

# 请求头，模拟浏览器
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
}


def setup_dirs():
    """创建必要的目录"""
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def fetch_article(url: str) -> str:
    """获取文章 HTML 内容"""
    try:
        response = requests.get(url, headers=HEADERS, timeout=30)
        response.raise_for_status()
        response.encoding = 'utf-8'
        return response.text
    except Exception as e:
        print(f"  ❌ 获取文章失败: {e}")
        return None


def download_image(img_url: str, article_slug: str) -> str:
    """下载图片并返回本地路径"""
    try:
        # 处理相对路径
        if img_url.startswith('//'):
            img_url = 'https:' + img_url
        
        # 跳过 data URL
        if img_url.startswith('data:'):
            return img_url
        
        # 生成文件名
        ext = os.path.splitext(urlparse(img_url).path)[1] or '.jpg'
        if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']:
            ext = '.jpg'
        
        # 使用 URL 的 hash 作为文件名
        img_hash = hashlib.md5(img_url.encode()).hexdigest()[:12]
        filename = f"{article_slug}_{img_hash}{ext}"
        filepath = IMAGES_DIR / filename
        
        # 如果已存在则跳过
        if filepath.exists():
            return f"/images/wechat/{filename}"
        
        # 下载图片
        response = requests.get(img_url, headers=HEADERS, timeout=30)
        response.raise_for_status()
        
        with open(filepath, 'wb') as f:
            f.write(response.content)
        
        return f"/images/wechat/{filename}"
    
    except Exception as e:
        print(f"    ⚠️ 图片下载失败: {img_url[:50]}... ({e})")
        return img_url


def parse_wechat_article(html: str, url: str) -> dict:
    """解析公众号文章"""
    soup = BeautifulSoup(html, 'html.parser')
    
    # 获取标题
    title_tag = soup.find('h1', class_='rich_media_title') or soup.find('h1')
    title = title_tag.get_text(strip=True) if title_tag else "未命名文章"
    
    # 获取作者/公众号名
    author_tag = soup.find('a', id='js_name') or soup.find('span', class_='rich_media_meta_nickname')
    author = author_tag.get_text(strip=True) if author_tag else ""
    
    # 获取发布时间
    time_tag = soup.find('em', id='publish_time') or soup.find('span', id='publish_time')
    pub_time = time_tag.get_text(strip=True) if time_tag else ""
    
    # 获取正文内容
    content_tag = soup.find('div', id='js_content') or soup.find('div', class_='rich_media_content')
    
    if not content_tag:
        return None
    
    # 生成文章 slug（用于图片命名）
    slug = re.sub(r'[^\w\u4e00-\u9fff]', '_', title)[:30]
    
    # 处理图片
    for img in content_tag.find_all('img'):
        # 公众号图片可能在 data-src 属性
        img_url = img.get('data-src') or img.get('src')
        if img_url:
            local_path = download_image(img_url, slug)
            img['src'] = local_path
            # 移除其他属性
            for attr in list(img.attrs.keys()):
                if attr not in ['src', 'alt']:
                    del img[attr]
    
    # 移除不需要的元素
    for tag in content_tag.find_all(['script', 'style', 'iframe']):
        tag.decompose()
    
    # 转换为 Markdown
    h2t = html2text.HTML2Text()
    h2t.ignore_links = False
    h2t.ignore_images = False
    h2t.ignore_emphasis = False
    h2t.body_width = 0  # 不换行
    h2t.unicode_snob = True
    
    markdown = h2t.handle(str(content_tag))
    
    # 清理多余空行
    markdown = re.sub(r'\n{3,}', '\n\n', markdown)
    
    return {
        'title': title,
        'author': author,
        'pub_time': pub_time,
        'content': markdown,
        'slug': slug,
        'url': url
    }


def save_article(article: dict) -> str:
    """保存文章为 Markdown 文件"""
    # 生成文件名
    filename = re.sub(r'[^\w\u4e00-\u9fff\-]', '_', article['title'])
    filename = re.sub(r'_+', '_', filename).strip('_')
    filepath = OUTPUT_DIR / f"{filename}.md"
    
    # 避免重名
    counter = 1
    while filepath.exists():
        filepath = OUTPUT_DIR / f"{filename}_{counter}.md"
        counter += 1
    
    # 生成 frontmatter
    frontmatter = f"""---
title: {article['title']}
description: {article['author']} 的公众号文章
source: {article['url']}
---

"""
    
    # 写入文件
    content = frontmatter + f"# {article['title']}\n\n" + article['content']
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return filepath.name


def main():
    """主函数"""
    print("=" * 50)
    print("📝 公众号文章批量转换工具")
    print("=" * 50)
    
    # 检查文章列表文件
    if not ARTICLES_FILE.exists():
        print(f"\n⚠️ 未找到文章列表文件: {ARTICLES_FILE}")
        print(f"\n请创建 {ARTICLES_FILE} 文件，每行放一个公众号文章链接")
        print("\n示例：")
        print("https://mp.weixin.qq.com/s/xxxxx")
        print("https://mp.weixin.qq.com/s/yyyyy")
        
        # 创建示例文件
        with open(ARTICLES_FILE, 'w', encoding='utf-8') as f:
            f.write("# 把公众号文章链接放在下面，每行一个\n")
            f.write("# 以 # 开头的行会被忽略\n")
            f.write("# https://mp.weixin.qq.com/s/xxxxx\n")
        
        print(f"\n✅ 已创建示例文件: {ARTICLES_FILE}")
        return
    
    # 读取文章链接
    with open(ARTICLES_FILE, 'r', encoding='utf-8') as f:
        urls = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    
    if not urls:
        print("\n⚠️ 文章列表为空，请添加公众号文章链接")
        return
    
    print(f"\n📋 共找到 {len(urls)} 篇文章待转换\n")
    
    setup_dirs()
    
    success_count = 0
    failed_urls = []
    
    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] 处理: {url[:60]}...")
        
        # 获取文章
        html = fetch_article(url)
        if not html:
            failed_urls.append(url)
            continue
        
        # 解析文章
        article = parse_wechat_article(html, url)
        if not article:
            print(f"  ❌ 解析失败")
            failed_urls.append(url)
            continue
        
        # 保存文章
        filename = save_article(article)
        print(f"  ✅ 已保存: {filename}")
        success_count += 1
        
        # 避免请求过快
        if i < len(urls):
            time.sleep(1)
    
    # 汇总
    print("\n" + "=" * 50)
    print(f"✅ 成功转换: {success_count} 篇")
    if failed_urls:
        print(f"❌ 失败: {len(failed_urls)} 篇")
        print("\n失败的链接：")
        for url in failed_urls:
            print(f"  - {url}")
    
    print(f"\n📁 文章保存位置: {OUTPUT_DIR}")
    print(f"📁 图片保存位置: {IMAGES_DIR}")
    
    # 清空已处理的链接（保留说明注释）
    if success_count > 0:
        with open(ARTICLES_FILE, 'w', encoding='utf-8') as f:
            f.write("# 把公众号文章链接放在下面，每行一个\n")
            f.write("# 以 # 开头的行会被忽略\n")
            f.write("# 转换完成后会自动清空此文件\n\n")
            # 保留失败的链接，方便重试
            if failed_urls:
                f.write("# 以下是转换失败的链接，可以重试：\n")
                for url in failed_urls:
                    f.write(f"# {url}\n")
        print("\n🧹 已清空链接列表")
    
    print("\n💡 提示：转换完成后，记得更新 config.mts 的 sidebar 配置")


if __name__ == '__main__':
    main()

