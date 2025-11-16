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
            <img 
              :src="jccWhiteLogo" 
              alt="John C Creations Logo" 
              class="footer-logo-img"
              draggable="false"
            />
          </div>
          <p class="copyright">
            Copyright © {{ currentYear }} John C Creations LLC
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import jccWhiteLogo from '@/assets/images/logos/JCC - White.png'

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear,
      jccWhiteLogo
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
  padding: 1rem 1.5rem 0.5rem;

  @include mobile {
    padding: 1rem 1rem 0.5rem;
  }
}

.footer-main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 1rem;
  text-align: center;
  padding-top: 3rem;
  gap: 16rem;

  @include tablet {
    gap: 4rem;
  }

  @include mobile {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    padding-top: 1rem;
  }
}

.footer-brand {
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
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
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  text-align: center;
  width: 100%;
}

.footer-social {
  text-align: center;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;

  @include mobile {
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
    width: 100% !important;
    text-align: center !important;
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
    justify-content: center !important;
    align-items: center !important;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 100% !important;
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
  padding-top: 0; /* remove extra top padding in footer bottom */
}

.footer-bottom-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0; /* no space between logo and copyright */

  @include mobile {
    gap: 0; /* no space on mobile */
    text-align: center;
    padding: 0 1rem;
  }
}

.footer-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 0; /* remove extra space below logo */
  line-height: 0; /* eliminate any line box space around the logo */

  @include mobile {
    margin-bottom: 0; /* remove extra space below logo on mobile */
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
  height: 64px !important;
  width: auto !important;
  max-height: 64px !important;
  min-height: 64px !important;
  max-width: none !important;
  min-width: auto !important;
  padding-bottom: 0; /* remove padding under logo image */
  display: block !important; /* eliminate inline image baseline whitespace */
  margin-bottom: 0 !important; /* ensure no extra spacing below the image */
  background: transparent !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
  outline: none !important;
  transition: none !important;
  transform: none !important;
  transform-origin: center !important;
  scale: none !important;
  zoom: 1 !important;


  @include mobile {
    height: 56px !important;
    width: auto !important;
    max-height: 56px !important;
    min-height: 56px !important;
    padding-bottom: 0; /* remove padding under logo image on mobile */
  }
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-align: center;
  margin-top: -3px; /* stronger upward nudge to minimize gap */
  line-height: 1.05; /* very tight line height to reduce vertical box */

  @include mobile {
    font-size: 0.85rem;
    line-height: 1.05; /* tighter on mobile as well */
    margin-top: -2px; /* slightly stronger upward nudge on mobile */
    max-width: 280px;
    margin: 0 auto;
  }
}

// Brand new logo container - completely isolated
/* Removed interactive logo container and hover effects to keep footer logo static */

// Desktop styles
@media (min-width: 769px) {
  .footer-bottom .footer-logo .footer-logo-link .footer-logo-img,
  .footer-logo-img {
    height: 100px !important;
    width: auto !important;
    transform: none !important;
    scale: none !important;
    zoom: 1 !important;
    transition: none !important;
    max-height: 100px !important;
    min-height: 100px !important;
  }
}


</style>