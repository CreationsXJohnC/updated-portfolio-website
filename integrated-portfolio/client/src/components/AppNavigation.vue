<template>
  <nav class="app-navigation" :class="{ 'is-scrolled': isScrolled, 'menu-open': isMenuOpen }">
    <div class="nav-container">
      <!-- Logo/Brand -->
      <div class="brand-group">
        <a href="https://johnccreations.com/creationsx" target="_blank" rel="noopener noreferrer" class="nav-brand">
          <img src="/src/assets/images/logos/Creation X Logo Updated.svg" alt="Creations X Portfolio" class="brand-logo" />
        </a>
        <div class="logo-hint" aria-hidden="false">
          <span class="hint-arrow" aria-hidden="true"></span>
          <span class="hint-text">Click Me</span>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <ul class="nav-menu desktop-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link hover-target">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link hover-target">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link hover-target">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/videos" class="nav-link hover-target">Videos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link hover-target">Contact</router-link>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button 
        class="mobile-menu-toggle hover-target"
        @click="toggleMobileMenu"
        aria-label="Toggle mobile menu"
      >
        <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
        <span class="hamburger-line" :class="{ 'active': isMenuOpen }"></span>
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div class="mobile-menu-overlay" :class="{ 'active': isMenuOpen }" @click="closeMobileMenu">
      <ul class="mobile-menu">
        <li class="mobile-nav-item">
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-link-text">Home</span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-link-text">About</span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/projects" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-link-text">Projects</span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/videos" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-link-text">Videos</span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu">
            <span class="mobile-link-text">Contact</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppNavigation',
  setup() {
    const isScrolled = ref(false)
    const isMenuOpen = ref(false)

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const handleResize = () => {
      // Close mobile menu when screen size is larger than mobile breakpoint
      if (window.innerWidth > 770 && isMenuOpen.value) {
        closeMobileMenu()
      }
    }

    const toggleMobileMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
    }

    const closeMobileMenu = () => {
      isMenuOpen.value = false
      document.body.style.overflow = ''
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = ''
    })

    return {
      isScrolled,
      isMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

// Override global focus styles specifically for navigation
.app-navigation {
  * {
    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none !important;
      box-shadow: none !important;
    }
  }
  
  a {
    &:focus,
    &:focus-visible,
    &:focus-within {
      outline: none !important;
      box-shadow: none !important;
      border: none !important;
    }
  }
}

.app-navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  &.is-scrolled {
    background: #ffffff;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
}

.nav-container {
  @include flex-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  @include mobile {
    padding: 1rem;
  }
}

.nav-brand {
  padding-top: 0;
  outline: none;
  
  &:focus {
    outline: none;
    box-shadow: none;
  }
  
  &:focus-visible {
    outline: none;
    box-shadow: none;
  }
  
  @media (max-width: 775px) {
    padding-left: 1rem;
  }
}

.brand-logo {
    height: 60px;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform-origin: center;

    &:hover {
      transform: scale(1.5);
    }
  }
  
  .brand-text {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-primary);
    @include text-gradient;
  }

.desktop-menu {
  @include flex-center;
  gap: 2rem;
  padding-top: 1rem;
  margin-top: 0.5rem;
  list-style: none; /* remove bullets */
  padding-left: 0; /* ensure no left indentation */

  @media (max-width: 770px) {
    display: none;
  }
}

.nav-item {
  outline: none !important;
  border: none;
  background: none;
  box-shadow: none !important;

  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    background: none !important;
  }
}

.nav-link {
  color: #333333;
  font-weight: 700;
  font-size: 1.1rem;
  position: relative;
  transition: all 300ms ease;
  outline: none !important;
  text-decoration: none !important;
  border: none !important;
  background: none !important;
  box-shadow: none !important;

  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active,
  &:hover:focus,
  &:visited {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    background: none !important;
    text-decoration: none !important;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    height: 3px;
    width: 0;
    right: 0;
    background-color: #000000;
    transition: all 300ms ease;
  }

  &:hover {
    color: #000000;

    &::after {
      left: 0;
      width: 100%;
    }
  }

  &.router-link-active {
    color: #000000;

    &::after {
      left: 0;
      width: 100%;
    }
  }
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 12px;
  cursor: pointer;
  z-index: 1001;
  position: relative;
  transition: all 0.3s ease;

  @media (max-width: 770px) {
    display: flex;
  }

  &:hover {
    transform: scale(1.05);
  }

  .hamburger-line {
    width: 24px;
    height: 2px;
    background: #000000;
    transition: all 0.3s ease;
    transform-origin: center;
    border-radius: 1px;

    &.active {
      background: #000000;
    }

    &:nth-child(1).active {
      transform: rotate(45deg);
      position: absolute;
      top: 50%;
      left: 0;
      transform-origin: center;
    }

    &:nth-child(2).active {
      opacity: 0;
      transform: scale(0);
    }

    &:nth-child(3).active {
      transform: rotate(-45deg);
      position: absolute;
      top: 50%;
      left: 0;
      transform-origin: center;
    }
  }
}

.mobile-menu-overlay {
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  background: #ffffff;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: none;
  border-top: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;

  // Hide completely on desktop screens
  @media (min-width: 771px) {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
  }

  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    
    // Still hide on desktop even when active
    @media (min-width: 771px) {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 0;
  padding: 0.5rem 0;
  list-style: none;
}

.mobile-nav-item {
  list-style: none;
}

.mobile-nav-link {
  color: #333333;
  font-weight: 700;
  font-size: 1.1rem;
  position: relative;
  transition: all 300ms ease;
  outline: none !important;
  text-decoration: none !important;
  border: none !important;
  background: none !important;
  box-shadow: none !important;
  padding: 0.75rem 1rem;
  display: block;
  margin: 0 0.5rem;
  text-align: center;

  &:focus,
  &:focus-within,
  &:focus-visible,
  &:active,
  &:hover:focus,
  &:visited {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    background: none !important;
    text-decoration: none !important;
  }

  .mobile-link-text {
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    position: relative;
    transition: all 300ms ease;
    text-decoration: none !important;

    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      height: 3px;
      width: 0;
      right: 0;
      background-color: #000000;
      transition: all 300ms ease;
    }
  }

  &:hover {
    color: #000000;
    
    .mobile-link-text {
      color: #000000;

      &::after {
        left: 0;
        width: 100%;
      }
    }
  }

  &.router-link-active {
    color: #000000;
    
    .mobile-link-text {
      color: #000000;

      &::after {
        left: 0;
        width: 100%;
      }
    }
  }
}
.brand-group {
  display: flex;
  align-items: center;
  gap: 10px; // a little bit more spacing between logo and hint
}

.logo-hint {
  display: flex;
  align-items: center;
  gap: 6px; // increase spacing between arrow and text only
  margin-left: 0; // flush next to the logo; spacing controlled by brand-group
  color: #000000;
  font-weight: 700;
  font-size: 0.9rem;
  user-select: none;
  pointer-events: none; // ensure clicks go to the logo
}

.hint-arrow {
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 10px solid #000000; // arrow pointing toward the logo on the left
  animation: nudge 1.8s ease-in-out infinite;
}

.hint-text {
  text-transform: none; // ensure exact casing "Click Me"
  letter-spacing: 0.5px;
}

@keyframes nudge {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(2px); }
}
</style>
