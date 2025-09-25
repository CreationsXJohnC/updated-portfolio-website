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
        </div>



        <!-- Social Links -->
        <div class="footer-social">
          <h4 class="footer-section-title">Follow Me</h4>
          <div class="social-links">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="GitHub"
            >
              <i class="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="social-link hover-target"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a 
              href="mailto:contact@example.com" 
              class="social-link hover-target"
              aria-label="Email"
            >
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
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

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = computed(() => new Date().getFullYear())

    return {
      currentYear
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
  
  .brand-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    @include text-gradient;
    text-shadow: 
      -0.5px -0.5px 0 #ffffff,
      0.5px -0.5px 0 #ffffff,
      -0.5px 0.5px 0 #ffffff,
      0.5px 0.5px 0 #ffffff;
  }

  .brand-description {
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 400px;
    margin: 0 auto;

    @include mobile {
      max-width: none;
    }
  }
}

.footer-section-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.footer-social {
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  @include flex-center;
  width: 44px;
  height: 44px;
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
    font-size: 1.2rem;
  }
}

.footer-bottom {
  border-top: 1px solid rgba(var(--text-primary-rgb), 0.1);
  padding-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: center;
  align-items: center;

  @include mobile {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

.copyright {
  color: var(--text-secondary);
  font-size: 0.9rem;
}


</style>