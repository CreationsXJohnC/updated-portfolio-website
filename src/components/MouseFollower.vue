<template>
  <div
    ref="followerRef"
    class="mouse-follower"
    :class="{ 'is-active': isActive }"
  >
    <div class="mouse-follower__inner"></div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'MouseFollower',
  setup() {
    const followerRef = ref(null)
    const isActive = ref(false)
    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0

    const updateMousePosition = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateFollower = () => {
      const speed = 0.1
      followerX += (mouseX - followerX) * speed
      followerY += (mouseY - followerY) * speed

      if (followerRef.value) {
        followerRef.value.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`
      }

      requestAnimationFrame(animateFollower)
    }

    const handleMouseEnter = () => {
      isActive.value = true
    }

    const handleMouseLeave = () => {
      isActive.value = false
    }

    onMounted(() => {
      document.addEventListener('mousemove', updateMousePosition)
      document.addEventListener('mouseenter', handleMouseEnter)
      document.addEventListener('mouseleave', handleMouseLeave)
      
      // Start animation loop
      animateFollower()
    })

    onUnmounted(() => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    })

    return {
      followerRef,
      isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.mouse-follower {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  pointer-events: none;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.3s ease;

  @include mobile {
    display: none;
  }

  &.is-active {
    opacity: 1;
  }

  &__inner {
    width: 100%;
    height: 100%;
    background: var(--accent-primary);
    border-radius: 50%;
    transform: scale(0.5);
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  // Hover states for different elements
  :global(.hover-target:hover) ~ & &__inner,
  :global(a:hover:not(.nav-brand)) ~ & &__inner,
  :global(button:hover) ~ & &__inner {
    transform: scale(2);
    background: var(--accent-secondary);
  }

  :global(.hover-large:hover) ~ & &__inner {
    transform: scale(3);
    background: rgba(var(--accent-primary-rgb), 0.3);
    border: 2px solid var(--accent-primary);
  }
}
</style>