import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import router from './router'
import { apolloClient } from './apollo'
import App from './App.vue'
import { performanceMonitor, logBundleInfo, checkPerformanceBudget } from './utils/performance'

// Styles
import './styles/main.scss'

// Initialize performance monitoring
if (process.env.NODE_ENV === 'development') {
  // Start monitoring core web vitals
  performanceMonitor.observeLCP((lcp) => {
    console.log(`🎯 Largest Contentful Paint: ${lcp.toFixed(2)}ms`)
  })
  
  performanceMonitor.observeFID((fid) => {
    console.log(`⚡ First Input Delay: ${fid.toFixed(2)}ms`)
  })
  
  performanceMonitor.observeCLS((cls) => {
    console.log(`📐 Cumulative Layout Shift: ${cls.toFixed(4)}`)
  })

  // Check performance budget
  setTimeout(() => {
    const budgetResults = checkPerformanceBudget()
    if (!budgetResults.passed) {
      console.warn('⚠️ Performance budget violations:', budgetResults.violations)
    }
    logBundleInfo()
  }, 3000)
}

// Start app initialization timing
performanceMonitor.startTiming('app-initialization')

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)

// Provide Apollo Client for Vue Apollo Composable
app.provide(DefaultApolloClient, apolloClient)

// Mount app and end timing
app.mount('#app')
performanceMonitor.endTiming('app-initialization')

// Log initialization time in development
if (process.env.NODE_ENV === 'development') {
  const initTime = performanceMonitor.getTiming('app-initialization')
  console.log(`🚀 App initialized in ${initTime.duration.toFixed(2)}ms`)
}