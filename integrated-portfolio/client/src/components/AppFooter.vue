<template>
  <footer class="app-footer">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-main">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h3 class="brand-title">Let's Connect</h3>
          <p class="brand-description">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
          <a 
            href="mailto:johnccreations21@gmail.com" 
            class="email-link-below hover-target"
            aria-label="Email"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>



        <!-- Social Links -->
        <div class="footer-social">
          <h4 class="footer-section-title">Follow Me</h4>
          <div class="social-links">
            <a 
              href="https://github.com/CreationsXJohnC" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/johnccreations/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://www.youtube.com/@Creations_X" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="YouTube"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a 
              href="https://www.facebook.com/JohnCcreationsLLC" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="footer-logo">
            <div class="brand-new-logo-container" @click="scrollToTop">
              <div 
                class="brand-new-logo-element"
                :style="{ 
                  '--logo-scale': logoScale,
                  '--logo-opacity': logoOpacity 
                }"
                @mouseenter="handleLogoHover(true)"
                @mouseleave="handleLogoHover(false)"
              >
                <img 
                  :src="creationsXLogo" 
                  alt="CreationsX Logo" 
                  draggable="false"
                />
              </div>
            </div>
          </div>
          <p class="copyright">
            Copyright © 2025 John C Creations LLC
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import creationsXLogo from '@/assets/images/logos/CreationsX Emoji Sticker logo(no background).png'

export default {
  name: 'AppFooter',
  data() {
    return {
      logoScale: '1',
      logoOpacity: '1'
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    handleLogoHover(isHovering) {
      if (isHovering) {
        this.logoScale = '1.2';
        this.logoOpacity = '0.85';
      } else {
        this.logoScale = '1';
        this.logoOpacity = '1';
      }
    }
  },
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear,
      creationsXLogo
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.app-footer {
  background: var(--bg-secondary);
  color: var(--text-primary);
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem 2rem;

  @include mobile {
    padding: 3rem 1rem 2rem;
  }
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 3rem;
  text-align: center;

  @include tablet {
    gap: 2rem;
  }

  @include mobile {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
}

.footer-brand {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .brand-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    text-align: center;
    width: 100%;
  }

  .brand-description {
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 320px;
    margin: 0 auto 1rem auto;
    text-align: center;
    width: 100%;
    font-size: 0.9rem;

    @include mobile {
      max-width: none;
      padding: 0 1rem;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
  }

  .email-link-below {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: rgba(var(--accent-primary-rgb), 0.1);
    border-radius: 50%;
    color: var(--text-secondary);
    transition: all 0.3s ease;
    margin: 0 auto;
    font-size: 1.4rem;

    &:hover {
      background: rgba(var(--accent-primary-rgb), 0.2);
      color: var(--accent-primary);
      transform: translateY(-2px);
    }

    &:focus {
      outline: 2px solid var(--accent-primary);
      outline-offset: 2px;
    }

    &:active {
      transform: translateY(0px);
    }

    @include mobile {
      width: 48px;
      height: 48px;
      font-size: 1.5rem;
    }
  }
}

.footer-section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-top: -15px;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-align: center;
  width: 100%;
}

.footer-social {
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  @include mobile {
    margin-left: 0;
    padding-right: 0;
  }

  @include tablet {
    margin-left: 0;
    padding-right: 0;
  }

  @include desktop {
    margin-left: 0;
    padding-right: 0;
  }
}

.social-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;

  @include mobile {
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}

.social-link {
  @include flex-center;
  width: 58px;
  height: 58px;
  background: rgba(var(--accent-primary-rgb), 0.1);
  border-radius: 50%;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-primary);
    color: var(--bg-primary);
    transform: translateY(-2px);
  }

  i {
    font-size: 1.7rem;
  }

  @include mobile {
    width: 62px;
    height: 62px;
    
    i {
      font-size: 1.9rem;
    }
  }
}

.footer-bottom {
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @include mobile {
    gap: 1.5rem;
    text-align: center;
    padding: 0 1rem;
  }
}

.footer-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;

  @include mobile {
    margin-bottom: 0.5rem;
  }
}

.footer-logo-link {
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  background: none !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  padding: 0;
  margin: 0;
}

// Extremely specific selectors to override any external CSS
.footer-bottom .footer-logo .footer-logo-link .footer-logo-img,
.footer-logo-img {
  height: 100px !important;
  width: auto !important;
  max-height: 100px !important;
  min-height: 100px !important;
  max-width: none !important;
  min-width: auto !important;
  padding-bottom: 0.5rem;
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  transition: opacity 0.2s ease !important;
  transform: none !important;
  transform-origin: center !important;
  scale: none !important;
  zoom: 1 !important;

  &:hover,
  &:focus,
  &:active {
    opacity: 0.8 !important;
    transform: none !important;
    scale: none !important;
    zoom: 1 !important;
    height: 100px !important;
    width: auto !important;
    max-height: 100px !important;
    min-height: 100px !important;
  }

  @include mobile {
    height: 80px !important;
    width: auto !important;
    max-height: 80px !important;
    min-height: 80px !important;
    padding-bottom: 0.375rem;

    &:hover,
    &:focus,
    &:active {
      opacity: 0.8 !important;
      transform: none !important;
      scale: none !important;
      zoom: 1 !important;
      height: 80px !important;
      width: auto !important;
      max-height: 80px !important;
      min-height: 80px !important;
    }
  }
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: center;

  @include mobile {
    font-size: 0.85rem;
    line-height: 1.4;
    max-width: 280px;
    margin: 0 auto;
  }
}

// Brand new logo container - completely isolated
.brand-new-logo-container {
  cursor: pointer;
  display: inline-block;
  padding: 0;
}

.brand-new-logo-element {
  display: block;
  width: 100px;
  height: 100px;
  transform: scale(var(--logo-scale, 1));
  opacity: var(--logo-opacity, 1);
  transition: transform 0.2s ease, opacity 0.2s ease;
  transform-origin: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    pointer-events: none;
  }
}

// Desktop styles
@media (min-width: 769px) {
  .footer-bottom .footer-logo .footer-logo-link .footer-logo-img,
  .footer-logo-img {
    height: 100px !important;
    width: auto !important;
    transform: none !important;
    scale: none !important;
    zoom: 1 !important;
    transition: opacity 0.2s ease !important;
    max-height: 100px !important;
    min-height: 100px !important;
    
    &:hover,
    &:focus,
    &:active {
      transform: none !important;
      scale: none !important;
      zoom: 1 !important;
      opacity: 0.8 !important;
      height: 100px !important;
      width: auto !important;
      max-height: 100px !important;
      min-height: 100px !important;
    }
  }
}


</style>