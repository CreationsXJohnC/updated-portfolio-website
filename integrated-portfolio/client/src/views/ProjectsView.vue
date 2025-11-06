<template>
  <div class="projects-view">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">
            I'm a Software Engineer and Creative Technologist specializing in modern JavaScript with HTML5/CSS3 across the full stack. I build performant, responsive interfaces with React 18 and Vue.js 3, and implement secure backends using Node.js, Express, and Apollo GraphQL (JWT/bcryptjs), backed by PostgreSQL or SQLite via Sequelize and, when useful, Firebase. I work comfortably with Vite, Webpack, Babel, and Git; uphold quality with Jest and ESLint; and ship polished, accessible UIs using Tailwind CSS, Sass/SCSS, and robust patterns like state management (Pinia/Vue Router), dynamic routing, skeleton loading states, and progressive web app features. You'll see clear examples of these skills and approaches in the projects showcased below.
          </p>
        </div>
      </div>
    </section>



    <!-- Projects Grid Section -->
    <section class="projects-section">
      <div class="section-container">
        <div class="projects-header">
          <h2 class="section-title">
          </h2>
        </div>

        <div v-if="loading" class="loading-state">
          <p>Loading projects...</p>
        </div>
        
        <div v-else-if="error" class="error-state">
          <p>Error loading projects: {{ error.message }}</p>
        </div>

        <!-- Projects Grid -->
     <div v-if="filteredProjects.length" class="projects-grid">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card hover-large"
            :style="{ backgroundImage: `url('${encodeURI(project.imageUrl)}')` }"
            @click="navigateToProject(project.id)"
          >
            <div class="project-content">
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
                  v-if="project.githubUrl && project.title !== 'Ori Company' && project.title !== 'Creations X Platform'" 
                  :href="project.githubUrl" 
                  target="_blank"
                  class="project-action hover-target"
                  @click.stop
                >
                  <i class="fab fa-github"></i>
                </a>
              </div>
              <h3 class="project-title">{{ project.title }}</h3>

              <p class="project-description">{{ project.shortDescription }}</p>
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

        <!-- Empty State -->
        <div v-else class="empty-state">
          <div class="empty-icon">
            <i class="fas fa-search"></i>
          </div>
          <h3 class="empty-title">No Projects Found</h3>
          <p class="empty-description">
            Try adjusting your filters to see more projects.
          </p>
          <button 
            class="btn btn-primary hover-target"
            @click="clearFilters"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <LoadingOverlay :is-loading="loading" loading-text="Loading projects..." />
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import LoadingOverlay from '@/components/LoadingOverlay.vue'

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      title
      description
      shortDescription
      imageUrl
      category
      technologies
      status
      liveUrl
      githubUrl
      createdAt
      order
    }
  }
`

export default {
  name: 'ProjectsView',
  components: {
    LoadingOverlay
  },
  setup() {
    const router = useRouter()
    const selectedCategory = ref('all')
    const selectedTechnology = ref('all')

    const { result, loading, error } = useQuery(GET_PROJECTS, undefined, { fetchPolicy: 'cache-and-network' })

    const projects = computed(() => {
      return result.value?.projects || []
    })

    const categories = computed(() => {
      if (!projects.value.length) return []
      const cats = [...new Set(projects.value.map(p => p.category).filter(Boolean))]
      return cats.sort()
    })

    const technologies = computed(() => {
      if (!projects.value.length) return []
      const techs = [...new Set(projects.value.flatMap(p => p.technologies || []))]
      return techs.sort()
    })

    const filteredProjects = computed(() => {
      let filtered = [...projects.value] // Create a copy to avoid read-only errors

      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory.value)
      }

      if (selectedTechnology.value !== 'all') {
        filtered = filtered.filter(p => 
          p.technologies && p.technologies.includes(selectedTechnology.value)
        )
      }

      // Sort by order field (ascending)
      return filtered.sort((a, b) => {
        // If both have order, sort by order
        if (a.order && b.order) {
          return a.order - b.order
        }
        // If only one has order, prioritize it
        if (a.order) return -1
        if (b.order) return 1
        // If neither has order, sort by creation date (newest first)
        return new Date(b.createdAt) - new Date(a.createdAt)
      })
    })

    const setCategory = (category) => {
      selectedCategory.value = category
    }

    const setTechnology = (technology) => {
      selectedTechnology.value = technology
    }

    const clearFilters = () => {
      selectedCategory.value = 'all'
      selectedTechnology.value = 'all'
    }

    const navigateToProject = (projectId) => {
      router.push(`/projects/${projectId}`)
    }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      })
    }



    return {
      projects,
      filteredProjects,
      categories,
      technologies,
      selectedCategory,
      selectedTechnology,
      loading,
      error,
      setCategory,
      setTechnology,
      clearFilters,
      navigateToProject,
      formatDate
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.projects-view {
  padding-top: 80px; // Account for fixed navigation
}

.projects-hero {
  background: #ffffff;
  padding: 4rem 0 1px 0;
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
  max-width: 1200px;
  margin: 0 auto;
}

.filters-section {
  padding: 3rem 0;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.filters-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @include tablet {
    gap: 1.5rem;
  }
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include tablet {
    gap: 0.75rem;
  }
}

.filter-label {
  font-weight: 600;
  color: #000000;
  font-size: 1rem;
}

.filter-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  background: transparent;
  border: 2px solid #cccccc;
  color: #666666;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    border-color: #666666;
    color: #000000;
  }

  &.active {
    background: #666666;
    border-color: #666666;
    color: #ffffff;
  }
}

.projects-section {
  padding: 2rem 0 4rem 0;
  background: #ffffff;
}

.projects-header {
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  @include card;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: var(--border-radius);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: 110%;
    background-position: center;
    background-image: inherit;
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-5px);
    
    &::before {
      background-size: 340%;
      background-position: top left;
    }
  }
}

.project-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: relative;
  z-index: 10;
  
  .project-card:hover & {
    opacity: 1;
  }
}

.project-action {
  @include flex-center;
  width: 50px;
  height: 50px;
  background: var(--accent-primary);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-secondary);
    transform: scale(1.1);
  }
  
  .fab.fa-github {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.project-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
  z-index: 2;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
}

.project-description {
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-more {
  color: #999999;
  font-size: 0.8rem;
  font-style: italic;
}

.project-meta {
  @include flex-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.project-date {
  color: #999999;
  font-size: 0.9rem;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;

  &.status-completed {
    background: rgba(34, 197, 94, 0.1);
    color: rgb(34, 197, 94);
  }

  &.status-in-progress {
    background: rgba(251, 191, 36, 0.1);
    color: rgb(251, 191, 36);
  }

  &.status-planned {
    background: rgba(156, 163, 175, 0.1);
    color: rgb(156, 163, 175);
  }
}

.empty-state {
  @include flex-column-center;
  gap: 1.5rem;
  padding: 4rem 2rem;
  text-align: center;
}

.empty-icon {
  font-size: 4rem;
  color: #cccccc;
  opacity: 0.5;
}

.empty-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
}

.empty-description {
  color: #666666;
  max-width: 400px;
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
}
</style>