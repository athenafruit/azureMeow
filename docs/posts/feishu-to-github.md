# 从飞书到 GitHub：文档迁移指南

> 如何优雅地将飞书文档转换为 Markdown 并托管到 GitHub

## 问题背景

飞书是一款优秀的协作工具，但当我们想把文档分享到更广泛的平台（如 GitHub、个人博客）时，会遇到格式兼容问题。

## 解决方案

### 方案一：在线工具

使用 [feishu2md](https://feishu2md.onrender.com/) 在线转换：

1. 在飞书文档中开启链接分享
2. 复制文档链接
3. 粘贴到工具网站
4. 下载 Markdown 文件

### 方案二：Chrome 插件

安装 **Cloud Document Converter** 插件，直接在飞书页面导出。

### 方案三：命令行工具

对于批量转换，可以使用 `feishu2md` CLI 工具：

```bash
# 安装
npm install -g feishu2md

# 使用
feishu2md export <document-url>
```

## 最佳实践

1. **统一图片管理** - 将图片上传到图床或存放在仓库中
2. **保持格式一致** - 使用 Prettier 格式化 Markdown
3. **自动化流程** - 配合 GitHub Actions 自动部署

## 总结

选择适合自己的工具，建立一套可持续的工作流，让知识管理更高效！

---

*欢迎在评论区分享你的经验！*

