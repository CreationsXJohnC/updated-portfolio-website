<template>
  <div id="app" class="app">
    <!-- Mouse Follower -->
    <MouseFollower />
    
    <!-- Navigation -->
    <AppNavigation />
    
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
    })

    return {
      isLoading
    }
  }
}
</script>

<style lang="scss">
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