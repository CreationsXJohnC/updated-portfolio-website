<template>
  <div class="lazy-image-container" :class="{ 'loaded': isLoaded }">
    <img
      v-if="shouldLoad"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onLoad"
      @error="onError"
      :loading="loading"
    />
    <div v-else-if="!isLoaded" class="lazy-placeholder" :style="placeholderStyle">
      <div class="lazy-spinner" v-if="!error">
        <div class="spinner"></div>
      </div>
      <div v-else class="lazy-error">
        <i class="fas fa-image"></i>
        <span>Failed to load image</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue'

export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: ''
    },
    loading: {
      type: String,
      default: 'lazy',
      validator: (value) => ['lazy', 'eager'].includes(value)
    },
    threshold: {
      type: Number,
      default: 0.1
    },
    rootMargin: {
      type: String,
      default: '50px'
    },
    width: {
      type: [String, Number],
      default: null
    },
    height: {
      type: [String, Number],
      default: null
    }
  },
  emits: ['load', 'error'],
  setup(props, { emit }) {
    const containerRef = ref(null)
    const shouldLoad = ref(false)
    const isLoaded = ref(false)
    const error = ref(false)
    let observer = null

    const placeholderStyle = computed(() => {
      const style = {}
      if (props.width) {
        style.width = typeof props.width === 'number' ? `${props.width}px` : props.width
      }
      if (props.height) {
        style.height = typeof props.height === 'number' ? `${props.height}px` : props.height
      }
      if (props.placeholder) {
        style.backgroundImage = `url(${props.placeholder})`
      }
      return style
    })

    const onLoad = () => {
      isLoaded.value = true
      error.value = false
      emit('load')
    }

    const onError = () => {
      error.value = true
      emit('error')
    }

    const startObserving = () => {
      if (!containerRef.value || !('IntersectionObserver' in window)) {
        // Fallback for browsers without IntersectionObserver
        shouldLoad.value = true
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              shouldLoad.value = true
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: props.threshold,
          rootMargin: props.rootMargin
        }
      )

      observer.observe(containerRef.value)
    }

    onMounted(() => {
      if (props.loading === 'eager') {
        shouldLoad.value = true
      } else {
        startObserving()
      }
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })

    return {
      containerRef,
      shouldLoad,
      isLoaded,
      error,
      placeholderStyle,
      onLoad,
      onError
    }
  }
}
</script>

<style lang="scss" scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
  background-color: #f5f5f5;
  transition: opacity 0.3s ease;

  &.loaded {
    .lazy-placeholder {
      opacity: 0;
      pointer-events: none;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
}

.lazy-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.3s ease;
}

.lazy-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 24px;
  height: 24px;
  border: 2px solid #e0e0e0;
  border-top: 2px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.lazy-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.875rem;

  i {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    opacity: 0.5;
  }

  span {
    opacity: 0.7;
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

// Responsive adjustments
@media (max-width: 768px) {
  .lazy-error {
    font-size: 0.75rem;
    
    i {
      font-size: 1.5rem;
    }
  }
}
</style>