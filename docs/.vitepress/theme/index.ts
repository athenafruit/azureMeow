// https://vitepress.dev/guide/custom-theme
import { h, onMounted, onUnmounted, ref, watch } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import './style.css'

// 阅读进度条组件
const ReadingProgress = {
  setup() {
    const progress = ref(0)
    const route = useRoute()
    
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        progress.value = Math.min((scrollTop / docHeight) * 100, 100)
      }
    }
    
    onMounted(() => {
      window.addEventListener('scroll', updateProgress, { passive: true })
      updateProgress()
    })
    
    onUnmounted(() => {
      window.removeEventListener('scroll', updateProgress)
    })
    
    // 路由变化时重置进度
    watch(() => route.path, () => {
      progress.value = 0
      setTimeout(updateProgress, 100)
    })
    
    return () => h('div', {
      class: 'reading-progress',
      style: { width: `${progress.value}%` }
    })
  }
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(ReadingProgress)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 可以在这里注册全局组件
  }
} satisfies Theme
