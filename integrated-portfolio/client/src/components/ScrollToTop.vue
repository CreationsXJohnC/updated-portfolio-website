<template>
  <transition name="scroll-fade">
    <button
      v-if="isVisible"
      class="scroll-to-top hover-target"
      @click="scrollToTop"
      aria-label="Scroll to top"
    >
      <i class="fas fa-chevron-up"></i>
    </button>
  </transition>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ScrollToTop',
  setup() {
    const isVisible = ref(false)

    const handleScroll = () => {
      isVisible.value = window.scrollY > 300
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isVisible,
      scrollToTop
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--accent-primary);
  color: var(--bg-primary);
  border: none;
  border-radius: 50%;
  @include flex-center;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(var(--accent-primary-rgb), 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(var(--accent-primary-rgb), 0.4);
  }

  &:active {
    transform: translateY(-1px);
  }

  i {
    font-size: 1.2rem;
  }

  @include mobile {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}

.scroll-fade-enter-active,
.scroll-fade-leave-active {
  transition: all 0.3s ease;
}

.scroll-fade-enter-from,
.scroll-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>