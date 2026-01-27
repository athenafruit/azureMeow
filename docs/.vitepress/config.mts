import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Azure's Blog",
  description: "探索 · 记录 · 分享",
  lang: 'zh-CN',
  
  // GitHub Pages 部署路径
  base: '/azureMeow/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#0d9488' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: "Azure's Blog" }],
    ['meta', { name: 'og:description', content: '探索 · 记录 · 分享' }],
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: "Azure's Blog",
    
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/posts/': [
        {
          text: '📚 文章列表',
          items: [
            { text: '从 Dia 浏览器引发的产品思考', link: '/posts/从Dia浏览器引发的产品思考' },
            { text: '一些关于 AI 创作的思考', link: '/posts/一些关于AI创作的思考' },
            { text: '为什么办公场景下播客是伪需求', link: '/posts/为什么说办公场景下做播客是个伪需求' },
            { text: 'NotebookLM 与知识管理（二）', link: '/posts/产品思考_NotebookLM_知识管理相关_2' },
            { text: 'NotebookLM 与知识管理（一）', link: '/posts/产品思考：notebookLM & 知识管理相关' },
            { text: '欢迎来到我的博客', link: '/posts/welcome' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: '用心记录，用爱分享',
      copyright: '© 2026 Azure\'s Blog · Powered by VitePress'
    },

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            noResultsText: '没有找到相关结果',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: '← 上一篇',
      next: '下一篇 →'
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  },

  lastUpdated: true,
  
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
