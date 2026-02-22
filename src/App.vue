<template>
  <div id="app" class="app">
    <!-- Mouse Follower -->
    <MouseFollower />
    
    <!-- Navigation -->
    <AppNavigation />

    <!-- Global Theme Toggle (always visible) -->
    <button 
      class="global-theme-toggle" 
      @click="toggleTheme()" 
      :aria-pressed="theme === 'dark'"
      aria-label="Toggle light/dark theme"
    >
      <span class="toggle-icon" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none">
          <rect x="4" y="2" width="16" height="20" rx="1" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.005"/>
          <circle cx="8" cy="5" r="1" fill="currentColor"/>
          <circle cx="16" cy="5" r="1" fill="currentColor"/>
          <circle cx="8" cy="19" r="1" fill="currentColor"/>
          <circle cx="16" cy="19" r="1" fill="currentColor"/>
          <rect x="9" :y="theme === 'dark' ? 12 : 8" width="6" height="4" rx="1" fill="currentColor"/>
          <rect x="11" :y="theme === 'dark' ? 12.8 : 8.8" width="2" height="1.4" rx="0.3" fill="currentColor" fill-opacity="0.3"/>
        </svg>
      </span>
      <span class="toggle-text">{{ theme === 'dark' ? 'Dark' : 'Light' }}</span>
    </button>

    
    <!-- Main Content -->
    <main class="main-content">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    
    <!-- Footer -->
    <AppFooter />
    
    <!-- Loading Overlay -->
    <LoadingOverlay v-if="isLoading" />
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script>
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import MouseFollower from '@/components/MouseFollower.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import AppFooter from '@/components/AppFooter.vue'
import LoadingOverlay from '@/components/LoadingOverlay.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'

export default {
  name: 'App',
  components: {
    MouseFollower,
    AppNavigation,
    AppFooter,
    LoadingOverlay,
    ScrollToTop
  },
  setup() {
    const router = useRouter()
    const isLoading = ref(false)
    const theme = ref('light')

    const applyTheme = (t) => {
      theme.value = t
      const root = document.documentElement
      root.setAttribute('data-theme', t)
      try { localStorage.setItem('theme', t) } catch (e) {}
    }

    const detectSystemTheme = () => {
      try {
        const saved = localStorage.getItem('theme')
        if (saved === 'light' || saved === 'dark') return saved
      } catch (e) {}
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const toggleTheme = () => {
      applyTheme(theme.value === 'dark' ? 'light' : 'dark')
    }

    // Native scrolling - no Locomotive Scroll for maximum responsiveness
    const initNativeScrolling = () => {
      // Use native browser scrolling for instant responsiveness
      console.log('Using native browser scrolling for optimal performance')
      return null
    }

    // Handle route changes
    router.beforeEach((to, from, next) => {
      isLoading.value = true
      next()
    })

    router.afterEach(() => {
      setTimeout(() => {
        isLoading.value = false
      }, 300)
    })

    onMounted(() => {
      initNativeScrolling()
      applyTheme(detectSystemTheme())
      try {
        if (window.matchMedia) {
          const mq = window.matchMedia('(prefers-color-scheme: dark)')
          const handler = () => {
            const saved = localStorage.getItem('theme')
            if (!saved) applyTheme(mq.matches ? 'dark' : 'light')
          }
          mq.addEventListener('change', handler)
        }
      } catch (e) {}
    })

    provide('theme', theme)
    provide('toggleTheme', toggleTheme)

    return { isLoading, theme, toggleTheme }
  }
}
</script>

<style lang="scss">
@use "@/styles/main.scss";

// Page transitions
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

// App layout
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg-primary);
  color: var(--text-primary);
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}

/* Global always-visible theme toggle */
.global-theme-toggle {
  position: fixed;
  right: 32px;
  top: 28px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 8px;
  z-index: 3000;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: none !important;
}

.global-theme-toggle:hover, .global-theme-toggle:focus { 
  transform: none !important; 
  filter: none !important; 
  box-shadow: none !important; 
}

:root[data-theme="light"] .global-theme-toggle {
  color: #000000;
  background: transparent;
}

:root[data-theme="dark"] .global-theme-toggle {
  color: #ffffff;
  background: transparent;
}


// Native scrolling - no container restrictions

// Enhanced scrolling
html {
  scroll-behavior: auto;
  scroll-padding-top: 80px; // Account for fixed navigation
}

body {
  scroll-behavior: auto;
}

// Improved scroll performance
* {
  scroll-behavior: auto;
}

// Better scroll momentum on mobile
body {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

// Focus styles
*:focus {
  outline: 2px solid var(--accent-primary);
  outline-offset: 2px;
}

// Selection styles
::selection {
  background: var(--accent-primary);
  color: var(--bg-primary);
}

::-moz-selection {
  background: var(--accent-primary);
  color: var(--bg-primary);
}
</style>