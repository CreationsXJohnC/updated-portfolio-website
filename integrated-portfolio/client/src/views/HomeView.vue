<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-line">Hey</span>
              <span class="title-name">I'm Che.</span>
            </h1>
            <p class="hero-description">
              <strong>I'm a Frontend Software Engineer</strong> driven by the mantra <strong>"Think 2 Create & Create 2 Inspire."</strong> I design intuitive web applications and build businesses that deliver seamless user experiences, inspire audiences, and leave a lasting impact.
            </p>
            <p class="hero-description">
              Here's a bit more <router-link to="/about" class="inline-link">about me</router-link>.
            </p>
            <div class="hero-actions">
              <router-link to="/projects" class="btn btn-primary hover-target">
                View My Work
                <i class="fas fa-arrow-right"></i>
              </router-link>
              <router-link to="/contact" class="btn btn-secondary hover-target">
                Get In Touch
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image-container">
              <img 
                :src="profile?.avatarUrl || '/placeholder-avatar.jpg'" 
                :alt="profile?.name || 'Profile'"
                class="hero-image"
              />
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
          <span class="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="featured-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-description">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div class="projects-grid" v-if="featuredProjects.length">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id"
            class="project-card hover-large"
            @click="navigateToProject(project.id)"
          >
            <div class="project-image">
              <img :src="project.imageUrl" :alt="project.title" />
              <div class="project-overlay">
                <div class="project-actions">
                  <a 
                    v-if="project.liveUrl" 
                    :href="project.liveUrl" 
                    target="_blank"
                    class="project-action hover-target"
                    @click.stop
                  >
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a 
                    v-if="project.githubUrl" 
                    :href="project.githubUrl" 
                    target="_blank"
                    class="project-action hover-target"
                    @click.stop
                  >
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="section-footer">
          <router-link to="/projects" class="btn btn-outline hover-target">
            View All Projects
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const GET_HOME_DATA = gql`
  query GetHomeData {
    profile {
      id
      name
      title
      bio
      avatarUrl
    }
    projects(featured: true) {
      id
      title
      description
      imageUrl
      technologies
      liveUrl
      githubUrl
    }
  }
`

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter()
    const profile = ref(null)
    const featuredProjects = ref([])

    const { result, loading, error } = useQuery(GET_HOME_DATA)

    const navigateToProject = (projectId) => {
      router.push(`/projects/${projectId}`)
    }

    onMounted(() => {
      if (result.value) {
        profile.value = result.value.profile
        featuredProjects.value = result.value.projects || []
      }
    })

    // Watch for query result changes
    const updateData = () => {
      if (result.value) {
        profile.value = result.value.profile
        featuredProjects.value = result.value.projects || []
      }
    }

    return {
      profile,
      featuredProjects,
      loading,
      error,
      navigateToProject,
      updateData
    }
  },
  watch: {
    'result'() {
      this.updateData()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.home-view {
  min-height: 100vh;
}

.hero-section {
  min-height: 100vh;
  @include flex-center;
  position: relative;
  background: #ffffff;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    text-align: center;
  }

  .title-line {
    display: block;
    color: #666666;
    font-size: 0.6em;
  }

  .title-name {
    display: block;
    color: #000000;
    font-weight: 700;
  }
}

.hero-description {
  font-size: 1.2rem;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 500px;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .inline-link {
    color: #666666;
    text-decoration: underline;
    transition: var(--transition-fast);

    &:hover {
      color: #000000;
      text-decoration: none;
    }
  }
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }
}

.hero-visual {
  @include flex-center;
}

.hero-image-container {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;

  @include mobile {
    width: 250px;
    height: 250px;
  }
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  @include flex-column-center;
  gap: 0.5rem;
  color: var(--text-secondary);
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid var(--text-secondary);
  border-radius: 12px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: var(--text-secondary);
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll-wheel 2s infinite;
}

.scroll-text {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@keyframes scroll-wheel {
  0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
  50% { opacity: 0.5; transform: translateX(-50%) translateY(8px); }
}

.featured-section,
.skills-section {
  padding: 6rem 0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @include text-gradient;
}

.section-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  @include card;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  @include flex-center;
  opacity: 0;
  transition: opacity 0.3s ease;

  .project-card:hover & {
    opacity: 1;
  }
}

.project-actions {
  display: flex;
  gap: 1rem;
}

.project-action {
  @include flex-center;
  width: 40px;
  height: 40px;
  background: var(--accent-primary);
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-secondary);
    transform: scale(1.1);
  }
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(var(--accent-primary-rgb), 0.1);
  color: var(--accent-primary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}



.section-footer {
  text-align: center;
  margin-top: 3rem;
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
    @include button-primary;
  }

  &.btn-secondary {
    @include button-secondary;
  }

  &.btn-outline {
    background: transparent;
    color: var(--accent-primary);
    border: 2px solid var(--accent-primary);

    &:hover {
      background: var(--accent-primary);
      color: var(--bg-primary);
    }
  }
}
</style>