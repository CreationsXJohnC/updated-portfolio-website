<template>
  <div class="not-found-view">
    <div class="not-found-container">
      <div class="not-found-content">
        <!-- Animated 404 -->
        <div class="error-code">
          <span class="digit">4</span>
          <span class="digit">0</span>
          <span class="digit">4</span>
        </div>

        <!-- Error Message -->
        <div class="error-message">
          <h1 class="error-title">Page Not Found</h1>
          <p class="error-description">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even the best developers get lost sometimes.
          </p>
        </div>

        <!-- Navigation Options -->
        <div class="navigation-options">
          <router-link to="/" class="nav-btn primary hover-target">
            <i class="fas fa-home"></i>
            Go Home
          </router-link>
          
          <router-link to="/projects" class="nav-btn secondary hover-target">
            <i class="fas fa-folder-open"></i>
            View Projects
          </router-link>
          
          <button @click="goBack" class="nav-btn ghost hover-target">
            <i class="fas fa-arrow-left"></i>
            Go Back
          </button>
        </div>

        <!-- Fun Facts -->
        <div class="fun-facts">
          <h3 class="facts-title">While you're here, did you know?</h3>
          <div class="fact-item">
            <i class="fas fa-lightbulb"></i>
            <p>{{ currentFact }}</p>
          </div>
          <button @click="getRandomFact" class="fact-btn hover-target">
            <i class="fas fa-sync-alt"></i>
            Another fact
          </button>
        </div>

        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="floating-element" v-for="n in 6" :key="n" :style="getFloatingStyle(n)">
            <i :class="getFloatingIcon(n)"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'NotFoundView',
  setup() {
    const router = useRouter()
    const currentFact = ref('')

    const funFacts = [
      "The first computer bug was an actual bug - a moth trapped in a Harvard Mark II computer in 1947!",
      "The term 'debugging' was coined by Grace Hopper when she found that moth in the computer.",
      "The first website ever created is still online at info.cern.ch",
      "JavaScript was created in just 10 days by Brendan Eich in 1995.",
      "The '@' symbol was used in email addresses because it was the only preposition available on the keyboard.",
      "The first computer programmer was Ada Lovelace in the 1840s, about 100 years before computers were invented!",
      "Google's name comes from 'googol', which is the number 1 followed by 100 zeros.",
      "The first computer mouse was made of wood in 1964.",
      "WiFi doesn't stand for anything - it's just a catchy name!",
      "The first domain name ever registered was symbolics.com on March 15, 1985."
    ]

    const getRandomFact = () => {
      const randomIndex = Math.floor(Math.random() * funFacts.length)
      currentFact.value = funFacts[randomIndex]
    }

    const goBack = () => {
      if (window.history.length > 1) {
        router.go(-1)
      } else {
        router.push('/')
      }
    }

    const getFloatingStyle = (index) => {
      const positions = [
        { top: '10%', left: '10%', animationDelay: '0s' },
        { top: '20%', right: '15%', animationDelay: '1s' },
        { top: '60%', left: '5%', animationDelay: '2s' },
        { top: '70%', right: '10%', animationDelay: '0.5s' },
        { top: '40%', left: '80%', animationDelay: '1.5s' },
        { top: '80%', left: '70%', animationDelay: '2.5s' }
      ]
      return positions[index - 1] || {}
    }

    const getFloatingIcon = (index) => {
      const icons = [
        'fas fa-code',
        'fas fa-laptop-code',
        'fas fa-bug',
        'fas fa-coffee',
        'fas fa-rocket',
        'fas fa-cog'
      ]
      return icons[index - 1] || 'fas fa-code'
    }

    onMounted(() => {
      getRandomFact()
    })

    return {
      currentFact,
      getRandomFact,
      goBack,
      getFloatingStyle,
      getFloatingIcon
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.not-found-view {
  min-height: 100vh;
  @include flex-center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
}

.not-found-container {
  max-width: 800px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
}

.error-code {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  .digit {
    font-size: 8rem;
    font-weight: 900;
    @include text-gradient;
    animation: bounce 2s infinite;
    
    @include mobile {
      font-size: 5rem;
    }

    &:nth-child(1) {
      animation-delay: 0s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}

.error-message {
  margin-bottom: 3rem;

  .error-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text-primary);

    @include mobile {
      font-size: 2rem;
    }
  }

  .error-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @include mobile {
      font-size: 1rem;
    }
  }
}

.navigation-options {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &.primary {
    @include button-primary;
  }

  &.secondary {
    @include button-secondary;
  }

  &.ghost {
    @include button-ghost;
  }

  &:hover {
    transform: translateY(-2px);
  }
}

.fun-facts {
  @include card;
  padding: 2rem;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  .facts-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }

  .fact-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;

    i {
      color: var(--accent-primary);
      font-size: 1.2rem;
      margin-top: 0.2rem;
      flex-shrink: 0;
    }

    p {
      color: var(--text-secondary);
      line-height: 1.5;
      text-align: left;
    }
  }

  .fact-btn {
    @include button-ghost;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-1px);
    }

    i {
      transition: transform 0.3s ease;
    }

    &:hover i {
      transform: rotate(180deg);
    }
  }
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.floating-element {
  position: absolute;
  animation: float 6s ease-in-out infinite;
  opacity: 0.1;

  i {
    font-size: 2rem;
    color: var(--accent-primary);
  }

  @include mobile {
    display: none;
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(120deg);
  }
  66% {
    transform: translateY(10px) rotate(240deg);
  }
}

// Responsive adjustments
@include mobile {
  .not-found-view {
    padding: 1rem;
  }

  .navigation-options {
    flex-direction: column;
    align-items: center;
  }

  .nav-btn {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }

  .fun-facts {
    padding: 1.5rem;
  }
}
</style>