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
      { text: '串串烧', link: '/chuanchuanshao/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/chuanchuanshao/': [
        {
          text: '🍢 产品串串烧',
          items: [
            { text: '关于串串烧', link: '/chuanchuanshao/' },
            { text: 'No.50 NotebookLM思考 260110', link: '/chuanchuanshao/No.50 NotebookLM思考 260110' },
            { text: 'No.49 千问小剧场体验 251217', link: '/chuanchuanshao/No.49 千问小剧场体验 251217' },
            { text: 'No.48 灵光体验 251118', link: '/chuanchuanshao/No.48 灵光体验 251118' },
            { text: 'No.47 AI买药问诊对比 251113', link: '/chuanchuanshao/No.47 AI买药问诊对比 251113' },
            { text: 'No.46 AQ体验 250930', link: '/chuanchuanshao/No.46 AQ体验 250930' },
            { text: 'No.45 兔兔鸭体验 250926', link: '/chuanchuanshao/No.45 兔兔鸭体验 250926' },
            { text: 'No.44 观猹体验 250916', link: '/chuanchuanshao/No.44 观猹体验 250916' },
            { text: 'No.43 AutoGLM体验 250905', link: '/chuanchuanshao/No.43 AutoGLM体验 250905' },
            { text: 'No.42 支小宝探一下体验 250901', link: '/chuanchuanshao/No.42 支小宝探一下体验 250901' },
            { text: 'No.41 Banana体验 250901', link: '/chuanchuanshao/No.41 Banana体验 250901' },
            { text: 'No.40 TensorArt和Liblib体验 250823', link: '/chuanchuanshao/No.40 TensorArt和Liblib体验 250823' },
            { text: 'No.39 Dia浏览器思考 250812', link: '/chuanchuanshao/No.39 Dia浏览器思考 250812' },
            { text: 'No.38 Roboneo体验 250812', link: '/chuanchuanshao/No.38 Roboneo体验 250812' },
            { text: 'No.37 博查搜索体验 250722', link: '/chuanchuanshao/No.37 博查搜索体验 250722' },
            { text: 'No.36 Tizzy.zi体验 250720', link: '/chuanchuanshao/No.36 Tizzy.zi体验 250720' },
            { text: 'No.35 X家机器人Ani体验 250720', link: '/chuanchuanshao/No.35 X家机器人Ani体验 250720' },
            { text: 'No.34 星流Agent体验 250707', link: '/chuanchuanshao/No.34 星流Agent体验 250707' },
            { text: 'No.33 可颂体验 250706', link: '/chuanchuanshao/No.33 可颂体验 250706' },
            { text: 'No.32 ima知识库体验 250706', link: '/chuanchuanshao/No.32 ima知识库体验 250706' },
            { text: 'No.31 MiniMax R1体验 250622', link: '/chuanchuanshao/No.31 MiniMax R1体验 250622' },
            { text: 'No.30 Granola体验 250602', link: '/chuanchuanshao/No.30 Granola体验 250602' },
            { text: 'No.29 海绵音乐体验 250531', link: '/chuanchuanshao/No.29 海绵音乐体验 250531' },
            { text: 'No.28 YouWare体验 250527', link: '/chuanchuanshao/No.28 YouWare体验 250527' },
            { text: 'No.27 秘塔搜索今天学点啥 250525', link: '/chuanchuanshao/No.27 秘塔搜索今天学点啥 250525' },
            { text: 'No.26 Medeo体验 250525', link: '/chuanchuanshao/No.26 Medeo体验 250525' },
            { text: 'No.25 Lovart体验 250525', link: '/chuanchuanshao/No.25 Lovart体验 250525' },
            { text: 'No.24 Manus体验 250515', link: '/chuanchuanshao/No.24 Manus体验 250515' },
            { text: 'No.23 Poify.ai体验 250512', link: '/chuanchuanshao/No.23 Poify.ai体验 250512' },
            { text: 'No.22 飞猪旅行体验 250426', link: '/chuanchuanshao/No.22 飞猪旅行体验 250426' },
            { text: 'No.21 通义首尾帧模型体验 250423', link: '/chuanchuanshao/No.21 通义首尾帧模型体验 250423' },
            { text: 'No.20 扣子空间体验 250420', link: '/chuanchuanshao/No.20 扣子空间体验 250420' },
            { text: 'No.19 可灵2.0体验 250420', link: '/chuanchuanshao/No.19 可灵2.0体验 250420' },
            { text: 'No.18 GPT4o可灵即梦Gemini对比 250413', link: '/chuanchuanshao/No.18 GPT4o可灵即梦Gemini对比 250413' },
            { text: 'No.17 秒哒体验 250411', link: '/chuanchuanshao/No.17 秒哒体验 250411' },
            { text: 'No.16 独响体验 250223', link: '/chuanchuanshao/No.16 独响体验 250223' },
            { text: 'No.15 DeepSeek体验 250130', link: '/chuanchuanshao/No.15 DeepSeek体验 250130' },
            { text: 'No.14 GenSpark体验 250119', link: '/chuanchuanshao/No.14 GenSpark体验 250119' },
            { text: 'No.13 点评小贴士必吃攻略 250101', link: '/chuanchuanshao/No.13 点评小贴士必吃攻略 250101' },
            { text: 'No.12 点点体验 240922', link: '/chuanchuanshao/No.12 点点体验 240922' },
            { text: 'No.11 支小宝和文小言体验 240908', link: '/chuanchuanshao/No.11 支小宝和文小言体验 240908' },
            { text: 'No.10 山海奇境之劈波斩浪 240825', link: '/chuanchuanshao/No.10 山海奇境之劈波斩浪 240825' },
            { text: 'No.9 如果相机体验 240818', link: '/chuanchuanshao/No.9 如果相机体验 240818' },
            { text: 'No.8 圆周轨迹体验 240811', link: '/chuanchuanshao/No.8 圆周轨迹体验 240811' },
            { text: 'No.7 胃之书体验 240804', link: '/chuanchuanshao/No.7 胃之书体验 240804' },
            { text: 'No.6 Coze模型广场体验 240613', link: '/chuanchuanshao/No.6 Coze模型广场体验 240613' },
            { text: 'No.4&5 知我AI&飞脑体验 240612', link: '/chuanchuanshao/No.4&5 知我AI&飞脑体验 240612' },
            { text: 'No.3 海螺AI体验 240603', link: '/chuanchuanshao/No.3 海螺AI体验 240603' },
            { text: 'No.2 百度文库体验 240602', link: '/chuanchuanshao/No.2 百度文库体验 240602' },
            { text: 'No.1 腾讯元宝体验 240531', link: '/chuanchuanshao/No.1 腾讯元宝体验 240531' }
          ]
        }
      ],
      '/posts/': [
        {
          text: '📅 全部文章（按时间排序）',
          items: [
            { text: '2026.02.02 · 聊一下 OpenClaw（二）', link: '/posts/聊一下OpenClaw&Moltbot&Clawdbot（2）' },
            { text: '2026.01.30 · 聊一下 OpenClaw（一）', link: '/posts/聊一下OpenClaw_Moltbot_Clawdbot' },
            { text: '2026.01.25 · 为什么办公场景下播客是伪需求', link: '/posts/为什么说办公场景下做播客是个伪需求' },
            { text: '2026.01.18 · NotebookLM 与知识管理（二）', link: '/posts/产品思考_NotebookLM_知识管理相关_2' },
            { text: '2026.01.10 · NotebookLM 与知识管理（一）', link: '/posts/产品思考：notebookLM & 知识管理相关' },
            { text: '2025.08.23 · 解锁新玩具', link: '/posts/解锁新玩具' },
            { text: '2025.08.16 · 一些关于 AI 创作的思考', link: '/posts/一些关于AI创作的思考' },
            { text: '2025.08.12 · 从 Dia 浏览器引发的产品思考', link: '/posts/从Dia浏览器引发的产品思考' },
            { text: '2025.07.13 · 一些关于 AI 搜索的思考', link: '/posts/一些关于AI搜索的思考' },
            { text: '2025.06.22 · 和 DeepSeek/MiniMax M1 讨论产品问题', link: '/posts/和DeepSeek_MiniMax_M1讨论几个产品问题' },
            { text: '2025.05.18 · Manus 体验（最后有故事）', link: '/posts/Manus体验_最后有故事' },
            { text: '2025.02.23 · 产品体验：独响', link: '/posts/产品体验_独响' },
            { text: '2025.02.02 · Mark 下 DeepSeek', link: '/posts/Mark下DeepSeek' }
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
