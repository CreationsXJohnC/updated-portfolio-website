<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">
            Let's discuss your project ideas and bring them to life together
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content Section -->
    <section class="contact-section">
      <div class="section-container">
        <div class="contact-content">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2 class="info-title">Let's Connect</h2>
            <p class="info-description">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Email</h3>
                  <a href="mailto:johnccreations21@gmail.com" class="method-link hover-target">
                    johnccreations21@gmail.com
                  </a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Phone</h3>
                  <a href="tel:+1234567890" class="method-link hover-target">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Location</h3>
                  <span class="method-text">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3 class="social-title">Follow Me</h3>
              <div class="social-icons">
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
                  href="https://dribbble.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="social-link hover-target"
                  aria-label="Dribbble"
                >
                  <i class="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container">
            <form @submit.prevent="submitForm" class="contact-form">
              <h2 class="form-title">Send a Message</h2>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="firstName" class="form-label">First Name *</label>
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    class="form-input"
                    :class="{ 'error': errors.firstName }"
                    required
                  />
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>
                
                <div class="form-group">
                  <label for="lastName" class="form-label">Last Name *</label>
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    class="form-input"
                    :class="{ 'error': errors.lastName }"
                    required
                  />
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="form-input"
                  :class="{ 'error': errors.email }"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject *</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  class="form-input"
                  :class="{ 'error': errors.subject }"
                  required
                />
                <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  :class="{ 'error': errors.message }"
                  rows="6"
                  required
                ></textarea>
                <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
              </div>

              <button 
                type="submit" 
                class="submit-btn hover-target"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">
                  Send Message
                  <i class="fas fa-paper-plane"></i>
                </span>
                <span v-else>
                  <i class="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>

            <!-- Success/Error Messages -->
            <div v-if="submitStatus" class="submit-message" :class="submitStatus">
              <div v-if="submitStatus === 'success'" class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </div>
              <div v-else class="error-content">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Oops! Something went wrong</h3>
                <p>Please try again or contact me directly via email.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const SEND_CONTACT_MESSAGE = gql`
  mutation SendContactMessage($input: ContactMessageInput!) {
    sendContactMessage(input: $input) {
      success
      message
      contactMessage {
        id
        name
        email
        subject
        message
        createdAt
      }
    }
  }
`

export default {
  name: 'ContactView',
  setup() {
    const form = reactive({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const submitStatus = ref(null) // 'success', 'error', or null

    const { mutate: sendMessage } = useMutation(SEND_CONTACT_MESSAGE)

    const validateForm = () => {
      // Clear previous errors
      Object.keys(errors).forEach(key => delete errors[key])

      let isValid = true

      // First Name validation
      if (!form.firstName.trim()) {
        errors.firstName = 'First name is required'
        isValid = false
      }

      // Last Name validation
      if (!form.lastName.trim()) {
        errors.lastName = 'Last name is required'
        isValid = false
      }

      // Email validation
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }

      // Subject validation
      if (!form.subject.trim()) {
        errors.subject = 'Subject is required'
        isValid = false
      }

      // Message validation
      if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
      } else if (form.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters long'
        isValid = false
      }

      return isValid
    }

    const resetForm = () => {
      form.firstName = ''
      form.lastName = ''
      form.email = ''
      form.subject = ''
      form.message = ''
      Object.keys(errors).forEach(key => delete errors[key])
    }

    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true
      submitStatus.value = null

      try {
        await sendMessage({
          input: {
            name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
            email: form.email.trim(),
            subject: form.subject.trim(),
            message: form.message.trim()
          }
        })

        submitStatus.value = 'success'
        resetForm()
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          submitStatus.value = null
        }, 5000)

      } catch (error) {
        console.error('Error sending message:', error)
        submitStatus.value = 'error'
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          submitStatus.value = null
        }, 5000)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      submitStatus,
      submitForm
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.contact-view {
  padding-top: 80px; // Account for fixed navigation
}

.contact-hero {
  background: #ffffff;
  padding: 4rem 0;
  text-align: center;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000000;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666666;
  max-width: 600px;
  margin: 0 auto;
}

.contact-section {
  padding: 6rem 0;
  background: #ffffff;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.contact-info {
  .info-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #000000;
  }

  .info-description {
    color: #666666;
    line-height: 1.6;
    margin-bottom: 3rem;
    font-size: 1.1rem;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.method-icon {
  @include flex-center;
  width: 50px;
  height: 50px;
  background: #f0f0f0;
  border-radius: 50%;
  color: #666666;
  font-size: 1.2rem;
}

.method-content {
  .method-title {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #000000;
  }

  .method-link {
    color: #666666;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #000000;
    }
  }

  .method-text {
    color: #666666;
  }
}

.social-links {
  .social-title {
    font-weight: 600;
    margin-bottom: 1rem;
    color: #000000;
  }
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-link {
  @include flex-center;
  width: 44px;
  height: 44px;
  background: #f0f0f0;
  border-radius: 50%;
  color: #666666;
  transition: all 0.3s ease;

  &:hover {
    background: #666666;
    color: #ffffff;
    transform: translateY(-2px);
  }

  i {
    font-size: 1.2rem;
  }
}

.contact-form-container {
  position: relative;
}

.contact-form {
  @include card;
  padding: 2rem;
  background: #ffffff;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #000000;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #000000;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: var(--border-radius);
  background: #ffffff;
  color: #000000;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #666666;
    box-shadow: 0 0 0 3px rgba(102, 102, 102, 0.1);
  }

  &.error {
    border-color: #ef4444;
  }

  &::placeholder {
    color: #999999;
  }
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.submit-btn {
  background: #666666;
  color: #ffffff;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #333333;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 102, 102, 0.3);
  }
}

.submit-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include flex-center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  text-align: center;
  padding: 2rem;

  &.success {
    .success-content {
      color: #22c55e;

      i {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #000000;
      }

      p {
        color: #666666;
      }
    }
  }

  &.error {
    .error-content {
      color: #ef4444;

      i {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        color: #000000;
      }

      p {
        color: #666666;
      }
    }
  }
}
</style>