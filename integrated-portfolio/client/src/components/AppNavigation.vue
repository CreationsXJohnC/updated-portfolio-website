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
          <span class="hint-text">Creations X John C</span>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <ul class="nav-menu desktop-menu">
        <li class="nav-item">
          <router-link to="/" class="nav-link hover-target" aria-label="Home">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link hover-target" aria-label="About">
            <svg class="about-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/>
            </svg>
          </router-link>
        </li>
        <li class="nav-item">
          <a 
            href="https://creationsxjohnc.pixels.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="nav-link hover-target"
            aria-label="Shop (opens in new tab)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.76-1.05l3.24-6.14c.23-.44.07-.98-.36-1.23-.14-.08-.3-.12-.46-.12H6.21L5.27 3H2v2h2l3.6 7.59-1.35 2.44C5.52 16.37 6.48 18 8 18h12v-2H8l1.1-2z"/>
            </svg>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link hover-target" aria-label="Projects">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
            </svg>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/CreationsXYouTube" class="nav-link hover-target" aria-label="YouTube">
            <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M19.6 7.2c-.2-1.4-1.4-2.4-2.8-2.6C15 4.4 12 4.4 12 4.4s-3 0-4.8.2c-1.4.2-2.6 1.2-2.8 2.6C4.2 9 4.2 12 4.2 12s0 3 .2 4.8c.2 1.4 1.4 2.4 2.8 2.6 1.8.2 4.8.2 4.8.2s3 0 4.8-.2c1.4-.2 2.6-1.2 2.8-2.6.2-1.8.2-4.8.2-4.8s0-3-.2-4.8zM10 15.5V8.5l6 3.5-6 3.5z"/>
            </svg>
          </router-link>
        </li>
        <li class="nav-item">
          <a 
            href="https://www.fiverr.com/johnccreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="nav-link hover-target"
            aria-label="Hire Me (opens in new tab)"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <!-- Contract/clipboard with check icon -->
              <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1h-2c0-.55.45-1 1-1zm-1 15-4-4 1.41-1.41L11 15.17l6.59-6.59L19 10l-8 8z"/>
            </svg>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link hover-target" aria-label="Contact">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </router-link>
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
          <router-link to="/" class="mobile-nav-link" @click="closeMobileMenu" aria-label="Home">
            <span class="mobile-link-text" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu" aria-label="About">
            <span class="mobile-link-text" aria-hidden="true">
              <svg class="about-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z"/>
              </svg>
            </span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <a 
            href="https://creationsxjohnc.pixels.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="mobile-nav-link" 
            @click="closeMobileMenu"
            aria-label="Shop (opens in new tab)"
          >
            <span class="mobile-link-text" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14h9.68c.75 0 1.41-.41 1.76-1.05l3.24-6.14c.23-.44.07-.98-.36-1.23-.14-.08-.3-.12-.46-.12H6.21L5.27 3H2v2h2l3.6 7.59-1.35 2.44C5.52 16.37 6.48 18 8 18h12v-2H8l1.1-2z"/>
              </svg>
            </span>
          </a>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/projects" class="mobile-nav-link" @click="closeMobileMenu" aria-label="Projects">
            <span class="mobile-link-text" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24" fill="currentColor">
                <path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07M8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
              </svg>
            </span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/CreationsXYouTube" class="mobile-nav-link" @click="closeMobileMenu" aria-label="YouTube">
            <span class="mobile-link-text" aria-hidden="true">
              <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19.6 7.2c-.2-1.4-1.4-2.4-2.8-2.6C15 4.4 12 4.4 12 4.4s-3 0-4.8.2c-1.4.2-2.6 1.2-2.8 2.6C4.2 9 4.2 12 4.2 12s0 3 .2 4.8c.2 1.4 1.4 2.4 2.8 2.6 1.8.2 4.8.2 4.8.2s3 0 4.8-.2c1.4-.2 2.6-1.2 2.8-2.6.2-1.8.2-4.8.2-4.8s0-3-.2-4.8zM10 15.5V8.5l6 3.5-6 3.5z"/>
              </svg>
            </span>
          </router-link>
        </li>
        <li class="mobile-nav-item">
          <a 
            href="https://www.fiverr.com/johnccreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="mobile-nav-link" 
            @click="closeMobileMenu"
            aria-label="Hire Me (opens in new tab)"
          >
            <span class="mobile-link-text" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <!-- Contract/clipboard with check icon -->
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1h-2c0-.55.45-1 1-1zm-1 15-4-4 1.41-1.41L11 15.17l6.59-6.59L19 10l-8 8z"/>
              </svg>
            </span>
          </a>
        </li>
        <li class="mobile-nav-item">
          <router-link to="/contact" class="mobile-nav-link" @click="closeMobileMenu" aria-label="Contact">
            <span class="mobile-link-text" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </span>
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

/* Increase icon sizes for improved legibility */
.app-navigation .nav-link svg,
.app-navigation .mobile-link-text svg {
  width: 28px;
  height: 28px;
}

/* Slightly larger About icon to visually match others */
.app-navigation svg.about-icon {
  width: 30px;
  height: 30px;
}

/* Slightly larger YouTube icon to visually match others */
.app-navigation svg.youtube-icon {
  width: 30px;
  height: 30px;
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
