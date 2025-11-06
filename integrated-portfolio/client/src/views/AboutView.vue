<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="page-title">About Me</h1>
          <p class="page-subtitle">
            Get to know more about my journey, skills, and passion for development
          </p>
        </div>
      </div>
    </section>

    <!-- Personal Info Section -->
    <section class="personal-section">
      <div class="section-container">
        <div class="personal-content">
          <div class="personal-image">
            <img 
              :src="profile?.avatarUrl || profileImage" 
              :alt="profile?.name || 'John Che Larracuente'"
              class="profile-image"
            />
          </div>
          <div class="personal-text">
            <h2 class="section-title">{{ profile?.name || 'John Che Larracuente' }}</h2>
            <h3 class="role-title">{{ profile?.title || 'Full Stack Developer' }}</h3>
            <div class="bio-content" v-html="profile?.bio || 'I am a Full Stack Developer and Creative Technologist with expertise in JavaScript, React, Vue.js, and responsive design. Founder of Creations X (media agency) and Ori Company (consulting business), bringing 10+ years of experience in digital content, project management, and entrepreneurship. I am very passionate about building user-friendly web applications and leveraging creativity, as well as critical thinking skills to drive innovation in Technology.'"></div>
            
            <div class="personal-stats">
              <div class="stat-item">
                <span class="stat-number">6+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Technologies</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">2+</span>
                <span class="stat-label">Years Experience</span>
              </div>
            </div>

            <div class="personal-actions">
              <router-link to="/contact" class="btn btn-primary hover-target">
                Get In Touch
                <i class="fas fa-arrow-right"></i>
              </router-link>
              <a
                  href="/John_Che_Larracuente-TechResume3.pdf"
                  @click.prevent="downloadResume"
                  download
                  class="btn btn-outline hover-target"
              >
                  Download Resume
                  <i class="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-description">
            A comprehensive overview of my technical expertise
          </p>
        </div>

        <div class="skills-grid">
          <img src="/skills-icons/ReactJs.png" alt="React" class="skill-icon float-delay-1 float-pattern-1" />
          <img src="/skills-icons/Figma.png" alt="Figma" class="skill-icon float-delay-2 float-pattern-2" />
          <img src="/skills-icons/MacOS.png" alt="macOS" class="skill-icon float-delay-3 float-pattern-3" />
          <img src="/skills-icons/CSS.png" alt="CSS" class="skill-icon float-delay-4 float-pattern-4" />
          <img src="/skills-icons/WordPress.png" alt="WordPress" class="skill-icon float-delay-5 float-pattern-5" />
          <img src="/skills-icons/TypeScript.png" alt="TypeScript" class="skill-icon float-delay-6 float-pattern-6" />
          <img src="/skills-icons/AdobeIllustrator.png" alt="Adobe Illustrator" class="skill-icon float-delay-7 float-pattern-7" />
          <img src="/skills-icons/JavaScript.png" alt="JavaScript" class="skill-icon float-delay-8 float-pattern-8" />
          <img src="/skills-icons/VueJs.png" alt="Vue.js" class="skill-icon float-delay-9 float-pattern-9" />
          <img src="/skills-icons/PremierePro.png" alt="Premiere Pro" class="skill-icon float-delay-10 float-pattern-10" />
          <img src="/skills-icons/ExpressJs.png" alt="Express.js" class="skill-icon float-delay-11 float-pattern-11" />
          <img src="/skills-icons/Canva.png" alt="Canva" class="skill-icon float-delay-12 float-pattern-12" />
          <img src="/skills-icons/Firebase.png" alt="Firebase" class="skill-icon float-delay-13 float-pattern-13" />
          <img src="/skills-icons/VSCode.png" alt="VS Code" class="skill-icon float-delay-14 float-pattern-14" />
          <img src="/skills-icons/HTML5.png" alt="HTML5" class="skill-icon float-delay-15 float-pattern-15" />
          <img src="/skills-icons/Redux.png" alt="Redux" class="skill-icon float-delay-16 float-pattern-16" />
          <img src="/skills-icons/ApolloServer.png" alt="Apollo Server" class="skill-icon float-delay-17 float-pattern-17" />
          <img src="/skills-icons/PostgreSQL.png" alt="PostgreSQL" class="skill-icon float-delay-18 float-pattern-18" />
          <img src="/skills-icons/NodeJs.png" alt="Node.js" class="skill-icon float-delay-19 float-pattern-19" />
          <img src="/skills-icons/Wix.png" alt="Wix" class="skill-icon float-delay-20 float-pattern-20" />
          <img src="/skills-icons/TailwindCSS.png" alt="Tailwind CSS" class="skill-icon float-delay-21 float-pattern-21" />
          <img src="/skills-icons/AfterEffects.png" alt="After Effects" class="skill-icon float-delay-22 float-pattern-22" />
          <img src="/skills-icons/GraphQL.png" alt="GraphQL" class="skill-icon float-delay-23 float-pattern-23" />
          <img src="/skills-icons/fastapi.svg" alt="FastAPI" class="skill-icon float-delay-24 float-pattern-24" />
          <img src="/skills-icons/Java.png" alt="Java" class="skill-icon float-delay-25 float-pattern-25" />
          <img src="/skills-icons/NextJs.png" alt="Next.js" class="skill-icon float-delay-26 float-pattern-26" />
          <img src="/skills-icons/ES6.svg" alt="ES6" class="skill-icon float-delay-27 float-pattern-27" />
          <img src="/skills-icons/Photoshop.png" alt="Photoshop" class="skill-icon float-delay-28 float-pattern-28" />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Professional Experience</h2>
          <p class="section-description">
            My journey through various roles and companies
          </p>
        </div>

        <!-- Company Logos -->
        <div class="logos-grid">
          <div class="logo-item">
            <img 
              src="/src/assets/images/logos/Ori-Badge01.png" 
              alt="Ori Company Logo" 
              class="company-logo"
            />
          </div>
          <div class="logo-item">
            <img 
              src="/src/assets/images/logos/SkinstricAI logo.png" 
              alt="SkinstricAI Logo" 
              class="company-logo"
            />
          </div>
          <div class="logo-item">
            <img 
              src="/src/assets/images/logos/Watermark with Slogan GREY.png" 
              alt="Watermark with Slogan" 
              class="company-logo"
            />
          </div>
        </div>


      </div>
    </section>

    <!-- Interests Section -->
    <section class="interests-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Beyond Code</h2>
          <p class="section-description">
            What I enjoy doing when I'm not coding
          </p>
        </div>

        <div class="interests-grid">
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h3 class="interest-title">Photography</h3>
            <p class="interest-description">
              Capturing moments and exploring creative perspectives through the lens.
            </p>
          </div>
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-hiking"></i>
            </div>
            <h3 class="interest-title">Hiking</h3>
            <p class="interest-description">
              Finding inspiration in nature and staying active through outdoor adventures.
            </p>
          </div>
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-book"></i>
            </div>
            <h3 class="interest-title">Learning</h3>
            <p class="interest-description">
              Continuously expanding knowledge through books, courses, and new technologies.
            </p>
          </div>
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-music"></i>
            </div>
            <h3 class="interest-title">Music</h3>
            <p class="interest-description">
              Playing instruments and discovering new genres for creative inspiration.
            </p>
          </div>
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-plane"></i>
            </div>
            <h3 class="interest-title">Droneography</h3>
            <p class="interest-description">
              Capturing aerial perspectives and exploring landscapes from above through drone photography.
            </p>
          </div>
          <div class="interest-item hover-target">
            <div class="interest-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h3 class="interest-title">Cooking</h3>
            <p class="interest-description">
              Experimenting with flavors and creating delicious meals as a form of creative expression.
            </p>
          </div>
          <div class="interest-item hover-target large-screen-only">
            <div class="interest-icon">
              <i class="fas fa-swimmer"></i>
            </div>
            <h3 class="interest-title">Swimming</h3>
            <p class="interest-description">
              Staying fit and finding peace through swimming and water-based activities.
            </p>
          </div>
          <div class="interest-item hover-target large-screen-only">
            <div class="interest-icon">
              <i class="fas fa-leaf"></i>
            </div>
            <h3 class="interest-title">Botany</h3>
            <p class="interest-description">
              Studying and cultivating plants while exploring the fascinating world of flora.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import profileImage from '@/assets/images/profile/DSCF8979.jpg'

const GET_ABOUT_DATA = gql`
  query GetAboutData {
    profile {
      id
      name
      title
      bio
      avatarUrl
    }
    experiences {
      id
      position
      company
      description
      startDate
      endDate
      technologies
    }
    projects {
      id
    }
  }
`

export default {
  name: 'AboutView',
  setup() {
    const profile = ref(null)
    const experiences = ref([])
    const projects = ref([])

    const { result, loading, error } = useQuery(GET_ABOUT_DATA)

    const NEW_RESUME_URL = '/John_Che_Larracuente-TechResume3.pdf'
    const OLD_RESUME_URL = '/John_Che_Larracuente-TechResume.pdf'

    const downloadResume = async () => {
      try {
        const res = await fetch(NEW_RESUME_URL, { method: 'HEAD' })
        const url = res && res.ok ? NEW_RESUME_URL : OLD_RESUME_URL
        const a = document.createElement('a')
        a.href = url
        a.download = url.split('/').pop()
        document.body.appendChild(a)
        a.click()
        a.remove()
      } catch (e) {
        // Fallback to old resume if network fails
        window.location.href = OLD_RESUME_URL
      }
    }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      })
    }

    // Watch for result changes and update data
    watch(result, (newResult) => {
      if (newResult) {
        profile.value = newResult.profile
        experiences.value = newResult.experiences || []
        projects.value = newResult.projects || []
      }
    }, { immediate: true })

    return {
      profile,
      experiences,
      projects,
      loading,
      error,
      formatDate,
      profileImage,
      downloadResume
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.about-view {
  padding-top: 80px; // Account for fixed navigation
}

.about-hero {
  background: #ffffff;
  padding: 4rem 0 1rem 0;
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

.personal-section {
  padding: 3rem 0 3rem 0;
  background: #ffffff;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.personal-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  @include mobile {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.personal-image {
  @include flex-center;
}

.profile-image {
  width: 325px;
  height: 325px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 35%;
  transform: translateX(15px);
  border: 4px solid #ffffff;
  box-shadow: 
    0 0 0 8px #000000,
    0 10px 30px rgba(var(--accent-primary-rgb), 0.3);

  @include tablet {
    transform: none;
  }

  @include mobile {
    width: 260px;
    height: 260px;
    transform: none;
  }
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #000000;
}

.role-title {
  font-size: 1.3rem;
  color: #666666;
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.bio-content {
  color: #333333;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1rem;
}

.personal-stats {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  @include tablet {
    justify-content: center;
    flex-wrap: wrap;
  }

  @include mobile {
    justify-content: center;
    flex-wrap: wrap;
  }
}

.stat-item {
  @include flex-column-center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #000000;
  text-align: center;
}

.stat-label {
  font-size: 0.9rem;
  color: #666666;
  text-align: center;
}

.personal-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @include tablet {
    justify-content: center;
  }

  @include mobile {
    justify-content: center;
  }
}

.skills-section {
  padding: 4rem 0 4rem 0;
  background: #ffffff;
}

.interests-section {
  padding: 0.5rem 0 6rem 0;
  background: #ffffff;
}

.experience-section {
  padding: 3rem 0 2rem 0;
  background: #ffffff;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-description {
  font-size: 1.1rem;
  color: #666666;
  max-width: 600px;
  margin: 1rem auto 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;
  max-width: 100%;
  justify-items: center;
  align-items: center;
  
  @include tablet {
    column-gap: 1.5rem;
    row-gap: 3.5rem;
  }
  
  @include mobile {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, 1fr);
    column-gap: 1rem;
    row-gap: 2.5rem;
  }
}

.skill-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  transition: all 0.3s ease;
  border-radius: 8px;
  animation: float1 8s linear infinite;
  
  &:hover {
    animation-play-state: paused;
    transform: scale(1.1);
    filter: brightness(1.1);
  }
  
  @include tablet {
    width: 70px;
    height: 70px;
  }
  
  @include mobile {
    width: 60px;
    height: 60px;
  }
}

@keyframes float1 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  25% { transform: translate(8px, -6px) rotate(2deg); }
  50% { transform: translate(0px, -12px) rotate(0deg); }
  75% { transform: translate(-8px, -6px) rotate(-2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float2 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  25% { transform: translate(-6px, -8px) rotate(-1.5deg); }
  50% { transform: translate(0px, -10px) rotate(0deg); }
  75% { transform: translate(6px, -8px) rotate(1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float3 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(4px, -3px) rotate(1deg); }
  25% { transform: translate(7px, -7px) rotate(2deg); }
  37.5% { transform: translate(4px, -11px) rotate(1deg); }
  50% { transform: translate(0px, -14px) rotate(0deg); }
  62.5% { transform: translate(-4px, -11px) rotate(-1deg); }
  75% { transform: translate(-7px, -7px) rotate(-2deg); }
  87.5% { transform: translate(-4px, -3px) rotate(-1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float4 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(10px, -10px) rotate(3deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float5 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  16.67% { transform: translate(-3px, -5px) rotate(-1deg); }
  33.33% { transform: translate(-6px, -9px) rotate(-2deg); }
  50% { transform: translate(-3px, -12px) rotate(-1deg); }
  66.67% { transform: translate(3px, -9px) rotate(1deg); }
  83.33% { transform: translate(6px, -5px) rotate(2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float6 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  20% { transform: translate(5px, -4px) rotate(1.5deg); }
  40% { transform: translate(8px, -8px) rotate(3deg); }
  60% { transform: translate(3px, -13px) rotate(1.5deg); }
  80% { transform: translate(-4px, -9px) rotate(-1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float7 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  14.29% { transform: translate(3px, -4px) rotate(1deg); }
  28.57% { transform: translate(6px, -7px) rotate(2deg); }
  42.86% { transform: translate(4px, -11px) rotate(1.5deg); }
  57.14% { transform: translate(-1px, -12px) rotate(-0.5deg); }
  71.43% { transform: translate(-5px, -8px) rotate(-2deg); }
  85.71% { transform: translate(-4px, -4px) rotate(-1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float8 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  33.33% { transform: translate(-7px, -8px) rotate(-2.5deg); }
  66.67% { transform: translate(4px, -11px) rotate(1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float9 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  11.11% { transform: translate(4px, -3px) rotate(1deg); }
  22.22% { transform: translate(7px, -6px) rotate(2deg); }
  33.33% { transform: translate(5px, -10px) rotate(1.5deg); }
  44.44% { transform: translate(1px, -12px) rotate(0.5deg); }
  55.56% { transform: translate(-3px, -11px) rotate(-1deg); }
  66.67% { transform: translate(-6px, -8px) rotate(-2deg); }
  77.78% { transform: translate(-5px, -5px) rotate(-1.5deg); }
  88.89% { transform: translate(-1px, -2px) rotate(-0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float10 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  25% { transform: translate(-4px, -7px) rotate(-1.5deg); }
  50% { transform: translate(5px, -11px) rotate(2deg); }
  75% { transform: translate(-3px, -6px) rotate(-1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float11 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  16.67% { transform: translate(4px, -5px) rotate(1.5deg); }
  33.33% { transform: translate(7px, -9px) rotate(2.5deg); }
  50% { transform: translate(3px, -13px) rotate(1deg); }
  66.67% { transform: translate(-4px, -11px) rotate(-1.5deg); }
  83.33% { transform: translate(-5px, -6px) rotate(-2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float12 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(-3px, -4px) rotate(-1deg); }
  25% { transform: translate(-6px, -7px) rotate(-2deg); }
  37.5% { transform: translate(-4px, -11px) rotate(-1.5deg); }
  50% { transform: translate(1px, -12px) rotate(0.5deg); }
  62.5% { transform: translate(5px, -9px) rotate(1.5deg); }
  75% { transform: translate(7px, -6px) rotate(2deg); }
  87.5% { transform: translate(4px, -3px) rotate(1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float13 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  33.33% { transform: translate(6px, -7px) rotate(2deg); }
  66.67% { transform: translate(-3px, -12px) rotate(-1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float14 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(-1px, -3px) rotate(-0.5deg); }
  20% { transform: translate(-4px, -6px) rotate(-1.5deg); }
  30% { transform: translate(-3px, -9px) rotate(-1deg); }
  40% { transform: translate(1px, -12px) rotate(0.5deg); }
  50% { transform: translate(5px, -11px) rotate(1.5deg); }
  60% { transform: translate(6px, -8px) rotate(2deg); }
  70% { transform: translate(4px, -5px) rotate(1deg); }
  80% { transform: translate(1px, -3px) rotate(0.5deg); }
  90% { transform: translate(-1px, -1px) rotate(-0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float15 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(5px, -10px) rotate(2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float16 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(-4px, -3px) rotate(-1.5deg); }
  25% { transform: translate(-5px, -6px) rotate(-2deg); }
  37.5% { transform: translate(-3px, -9px) rotate(-1deg); }
  50% { transform: translate(2px, -11px) rotate(1deg); }
  62.5% { transform: translate(6px, -8px) rotate(2deg); }
  75% { transform: translate(5px, -5px) rotate(1.5deg); }
  87.5% { transform: translate(1px, -3px) rotate(0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float17 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  16.67% { transform: translate(4px, -4px) rotate(1.5deg); }
  33.33% { transform: translate(5px, -8px) rotate(2deg); }
  50% { transform: translate(1px, -11px) rotate(0.5deg); }
  66.67% { transform: translate(-4px, -9px) rotate(-1.5deg); }
  83.33% { transform: translate(-4px, -5px) rotate(-1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float18 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  33.33% { transform: translate(-5px, -7px) rotate(-2deg); }
  66.67% { transform: translate(4px, -12px) rotate(1.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float19 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(3px, -3px) rotate(1deg); }
  20% { transform: translate(4px, -5px) rotate(1.5deg); }
  30% { transform: translate(3px, -8px) rotate(1deg); }
  40% { transform: translate(-1px, -11px) rotate(-0.5deg); }
  50% { transform: translate(-4px, -12px) rotate(-1.5deg); }
  60% { transform: translate(-5px, -9px) rotate(-2deg); }
  70% { transform: translate(-3px, -6px) rotate(-1deg); }
  80% { transform: translate(1px, -4px) rotate(0.5deg); }
  90% { transform: translate(2px, -2px) rotate(1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float20 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  50% { transform: translate(-5px, -10px) rotate(-2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float21 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(4px, -4px) rotate(1.5deg); }
  25% { transform: translate(6px, -7px) rotate(2deg); }
  37.5% { transform: translate(4px, -11px) rotate(1.5deg); }
  50% { transform: translate(-1px, -10px) rotate(-0.5deg); }
  62.5% { transform: translate(-5px, -7px) rotate(-2deg); }
  75% { transform: translate(-4px, -4px) rotate(-1.5deg); }
  87.5% { transform: translate(1px, -2px) rotate(0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float22 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  14.29% { transform: translate(3px, -5px) rotate(1deg); }
  28.57% { transform: translate(4px, -8px) rotate(1.5deg); }
  42.86% { transform: translate(1px, -11px) rotate(0.5deg); }
  57.14% { transform: translate(-3px, -9px) rotate(-1deg); }
  71.43% { transform: translate(-5px, -6px) rotate(-2deg); }
  85.71% { transform: translate(-3px, -3px) rotate(-1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float23 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  10% { transform: translate(-3px, -4px) rotate(-1deg); }
  20% { transform: translate(-5px, -7px) rotate(-2deg); }
  30% { transform: translate(-4px, -9px) rotate(-1.5deg); }
  40% { transform: translate(0px, -11px) rotate(0deg); }
  50% { transform: translate(4px, -9px) rotate(1.5deg); }
  60% { transform: translate(5px, -7px) rotate(2deg); }
  70% { transform: translate(3px, -5px) rotate(1deg); }
  80% { transform: translate(-1px, -3px) rotate(-0.5deg); }
  90% { transform: translate(-1px, -1px) rotate(-0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float24 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  20% { transform: translate(5px, -4px) rotate(1.5deg); }
  40% { transform: translate(7px, -7px) rotate(2.5deg); }
  60% { transform: translate(4px, -11px) rotate(1.5deg); }
  80% { transform: translate(-3px, -8px) rotate(-1deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float25 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(-4px, -4px) rotate(-1.5deg); }
  25% { transform: translate(-5px, -7px) rotate(-2deg); }
  37.5% { transform: translate(-3px, -11px) rotate(-1deg); }
  50% { transform: translate(2px, -12px) rotate(1deg); }
  62.5% { transform: translate(6px, -9px) rotate(2deg); }
  75% { transform: translate(5px, -5px) rotate(1.5deg); }
  87.5% { transform: translate(1px, -2px) rotate(0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float26 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  11.11% { transform: translate(3px, -3px) rotate(1deg); }
  22.22% { transform: translate(4px, -6px) rotate(1.5deg); }
  33.33% { transform: translate(3px, -9px) rotate(1deg); }
  44.44% { transform: translate(-1px, -12px) rotate(-0.5deg); }
  55.56% { transform: translate(-5px, -11px) rotate(-2deg); }
  66.67% { transform: translate(-5px, -7px) rotate(-2deg); }
  77.78% { transform: translate(-3px, -4px) rotate(-1deg); }
  88.89% { transform: translate(1px, -2px) rotate(0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float27 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  16.67% { transform: translate(-4px, -5px) rotate(-1.5deg); }
  33.33% { transform: translate(-6px, -8px) rotate(-2deg); }
  50% { transform: translate(-3px, -11px) rotate(-1deg); }
  66.67% { transform: translate(3px, -9px) rotate(1deg); }
  83.33% { transform: translate(5px, -6px) rotate(2deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

@keyframes float28 {
  0% { transform: translate(0px, 0px) rotate(0deg); }
  12.5% { transform: translate(4px, -4px) rotate(1.5deg); }
  25% { transform: translate(5px, -7px) rotate(2deg); }
  37.5% { transform: translate(3px, -9px) rotate(1deg); }
  50% { transform: translate(-2px, -11px) rotate(-1deg); }
  62.5% { transform: translate(-6px, -8px) rotate(-2deg); }
  75% { transform: translate(-5px, -5px) rotate(-1.5deg); }
  87.5% { transform: translate(-1px, -3px) rotate(-0.5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
}

.float-pattern-1 { animation-name: float1; }
.float-pattern-2 { animation-name: float2; }
.float-pattern-3 { animation-name: float3; }
.float-pattern-4 { animation-name: float4; }
.float-pattern-5 { animation-name: float5; }
.float-pattern-6 { animation-name: float6; }
.float-pattern-7 { animation-name: float7; }
.float-pattern-8 { animation-name: float8; }
.float-pattern-9 { animation-name: float9; }
.float-pattern-10 { animation-name: float10; }
.float-pattern-11 { animation-name: float11; }
.float-pattern-12 { animation-name: float12; }
.float-pattern-13 { animation-name: float13; }
.float-pattern-14 { animation-name: float14; }
.float-pattern-15 { animation-name: float15; }
.float-pattern-16 { animation-name: float16; }
.float-pattern-17 { animation-name: float17; }
.float-pattern-18 { animation-name: float18; }
.float-pattern-19 { animation-name: float19; }
.float-pattern-20 { animation-name: float20; }
.float-pattern-21 { animation-name: float21; }
.float-pattern-22 { animation-name: float22; }
.float-pattern-23 { animation-name: float23; }
.float-pattern-24 { animation-name: float24; }
.float-pattern-25 { animation-name: float25; }
.float-pattern-26 { animation-name: float26; }
.float-pattern-27 { animation-name: float27; }
.float-pattern-28 { animation-name: float28; }

.float-delay-1 { animation-delay: 0s; }
.float-delay-2 { animation-delay: 0.15s; }
.float-delay-3 { animation-delay: 0.3s; }
.float-delay-4 { animation-delay: 0.45s; }
.float-delay-5 { animation-delay: 0.6s; }
.float-delay-6 { animation-delay: 0.75s; }
.float-delay-7 { animation-delay: 0.9s; }
.float-delay-8 { animation-delay: 1.05s; }
.float-delay-9 { animation-delay: 1.2s; }
.float-delay-10 { animation-delay: 1.35s; }
.float-delay-11 { animation-delay: 1.5s; }
.float-delay-12 { animation-delay: 1.65s; }
.float-delay-13 { animation-delay: 1.8s; }
.float-delay-14 { animation-delay: 1.95s; }
.float-delay-15 { animation-delay: 2.1s; }
.float-delay-16 { animation-delay: 2.25s; }
.float-delay-17 { animation-delay: 2.4s; }
.float-delay-18 { animation-delay: 2.55s; }
.float-delay-19 { animation-delay: 2.7s; }
.float-delay-20 { animation-delay: 2.85s; }
.float-delay-21 { animation-delay: 0.1s; }
.float-delay-22 { animation-delay: 0.25s; }
.float-delay-23 { animation-delay: 0.4s; }
.float-delay-24 { animation-delay: 0.55s; }
.float-delay-25 { animation-delay: 0.7s; }
.float-delay-26 { animation-delay: 0.85s; }
.float-delay-27 { animation-delay: 1.0s; }
.float-delay-28 { animation-delay: 1.15s; }

.skill-svg-icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.skill-info {
  text-align: center;
  width: 100%;
}

.skill-name {
  font-weight: 500;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
  display: block;
  line-height: 1.2;
}

.skill-level {
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  border-radius: 2px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: #666666;
  border-radius: 2px;
  transition: width 1s ease;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #cccccc;
    transform: translateX(-50%);

    @include mobile {
      left: 20px;
    }
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }

  @include mobile {
    margin-left: 40px;
  }
}

.timeline-marker {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 16px;
  height: 16px;
  background: #666666;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @include mobile {
    left: -28px;
  }
}

.timeline-content {
  width: calc(50% - 30px);

  .timeline-item--alternate & {
    margin-left: calc(50% + 30px);

    @include mobile {
      margin-left: 0;
    }
  }

  @include mobile {
    width: 100%;
  }
}

.experience-card {
  @include card;
  padding: 2rem;
}

.experience-header {
  margin-bottom: 1rem;
}

.experience-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.experience-company {
  color: #666666;
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

.experience-period {
  color: #999999;
  font-size: 0.9rem;
}

.experience-description {
  color: #333333;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.experience-technologies {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: #f0f0f0;
  color: #666666;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}

.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.interest-item {
  @include card;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.interest-icon {
  font-size: 3rem;
  color: #ffffff;
  margin-bottom: 1rem;
}

.interest-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

.interest-description {
  color: #ffffff;
  line-height: 1.6;
}

.btn {
  @include button-base;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;

  &.btn-primary {
    @include button-base;
    background: #000000;
    color: #ffffff;

    &:hover:not(:disabled) {
      background: #ffffff;
      color: #000000;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
      border: 2px solid #000000;
    }
  }

  &.btn-outline {
    background: #ffffff;
    color: #000000;
    border: 2px solid #000000;

    &:hover {
      background: #000000;
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
}

// Company Logos within Experience Section
.experience-section .logos-grid {
  display: grid;
  gap: 2rem;
  margin: 3rem auto 4rem;
  align-items: center;
  justify-items: center;
  
  // Desktop: Responsive grid that fits viewport
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 95vw;
    width: 100%;
    padding: 0 2rem;
  }
  
  // Tablet and mobile: Single column layout
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 0 2rem;
    max-width: 100%;
  }
}

.experience-section .logo-item {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  
  // Desktop: Responsive dimensions that fit viewport
  @media (min-width: 769px) {
    width: 100%;
    max-width: 30vw;
    min-height: 250px;
    padding: 2rem 1rem;
  }
  
  // Tablet and mobile: Responsive layout
  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: 180px;
    width: 100%;
  }

  // Left logo: Consistent padding and size locking
  &:nth-child(1) {
    @media (min-width: 769px) {
      padding: 2rem 1rem;
    }
    
    @media (max-width: 768px) {
      padding: 2rem 1rem;
    }

    .company-logo {
      @media (min-width: 769px) {
        max-height: min(180px, 12vw) !important;
        max-width: min(180px, 12vw) !important;
        min-height: min(120px, 8vw) !important;
        min-width: min(120px, 8vw) !important;
        transform: none !important;
        flex-shrink: 0 !important;
        flex-grow: 0 !important;
      }
      
      @media (max-width: 768px) {
        max-height: 180px;
        max-width: 100%;
        transform: none;
      }
    }
  }

  // Make only the middle logo larger
  &:nth-child(2) {
    @media (min-width: 769px) {
      padding: 3rem 1rem 3rem 3rem;
      min-height: 220px;
    }
    
    @media (max-width: 768px) {
      padding: 2rem 1rem;
    }

    .company-logo {
      @media (min-width: 769px) {
        max-height: min(250px, 16vw) !important;
        max-width: min(250px, 16vw) !important;
        min-height: min(200px, 13vw) !important;
        min-width: min(200px, 13vw) !important;
        transform: scale(1.2) !important;
        flex-shrink: 0 !important;
        flex-grow: 0 !important;
      }
      
      @media (max-width: 768px) {
        max-height: 180px;
        max-width: 100%;
        transform: none;
      }
    }
  }

  // Make the right logo larger too
  &:nth-child(3) {
    @media (min-width: 769px) {
      padding: 3.5rem 1rem 3.5rem 3.5rem;
      min-height: 220px;
    }
    
    @media (max-width: 768px) {
      padding: 2rem 1rem;
    }

    .company-logo {
      @media (min-width: 769px) {
        max-height: min(280px, 18vw) !important;
        max-width: min(280px, 18vw) !important;
        min-height: min(220px, 14vw) !important;
        min-width: min(220px, 14vw) !important;
        transform: scale(1.3) !important;
        flex-shrink: 0 !important;
        flex-grow: 0 !important;
      }
      
      @media (max-width: 768px) {
        max-height: 180px;
        max-width: 100%;
        transform: none;
      }
    }
  }
}

.experience-section .company-logo {
  width: auto;
  height: auto;
  object-fit: contain;
  
  // Only apply base mobile sizing below tablet breakpoint
  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 180px;
  }
}

// Responsive adjustments for logos in experience section
@media (max-width: 768px) {
  .experience-section .logos-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin: 3rem auto 4rem;
    max-width: 400px;
    padding: 0 2rem;
  }
  
  .experience-section .logo-item {
    padding: 2rem 1rem;
    min-height: 220px;
    justify-content: center;
    align-items: center;

    // Reset all logo items to same styling - no special cases
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      padding: 2rem 1rem;
      min-height: 220px;

      .company-logo {
        max-height: 180px !important;
        max-width: 100% !important;
        transform: none !important;
      }
    }
  }
  
  .experience-section .company-logo {
    max-width: 100%;
    max-height: 180px;
    width: auto;
    height: auto;
    object-fit: contain;
  }
}

@media (max-width: 480px) {
  .experience-section .logos-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin: 2rem auto 3rem;
    padding: 0 1rem;
    max-width: 300px;
  }
  
  .experience-section .logo-item {
    padding: 1.5rem 1rem;
    min-height: 180px;
    justify-content: center;
    align-items: center;

    // Reset all logo items to consistent styling for vertical layout
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      padding: 1.5rem 1rem;
      min-height: 180px;

      .company-logo {
        max-height: 150px !important;
        max-width: 100% !important;
        transform: none !important;
      }
    }
  }
  
  .experience-section .company-logo {
    max-height: 150px;
    max-width: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
}

// Hide large-screen-only items on smaller screens
.large-screen-only {
  @media (max-width: 1159px) {
    display: none;
  }
}
</style>