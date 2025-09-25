<template>
  <div class="projects-view">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">
            A collection of my work showcasing various technologies and creative solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="filters-section">
      <div class="section-container">
        <div class="filters-container">
          <div class="filter-group">
            <label class="filter-label">Filter by Category:</label>
            <div class="filter-buttons">
              <button 
                class="filter-btn hover-target"
                :class="{ 'active': selectedCategory === 'all' }"
                @click="setCategory('all')"
              >
                All Projects
              </button>
              <button 
                v-for="category in categories" 
                :key="category"
                class="filter-btn hover-target"
                :class="{ 'active': selectedCategory === category }"
                @click="setCategory(category)"
              >
                {{ category }}
              </button>
            </div>
          </div>
          
          <div class="filter-group">
            <label class="filter-label">Filter by Technology:</label>
            <div class="filter-buttons">
              <button 
                class="filter-btn hover-target"
                :class="{ 'active': selectedTechnology === 'all' }"
                @click="setTechnology('all')"
              >
                All Technologies
              </button>
              <button 
                v-for="tech in technologies" 
                :key="tech"
                class="filter-btn hover-target"
                :class="{ 'active': selectedTechnology === tech }"
                @click="setTechnology(tech)"
              >
                {{ tech }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-section">
      <div class="section-container">
        <div class="projects-header">
          <h2 class="section-title">
            {{ filteredProjects.length }} Project{{ filteredProjects.length !== 1 ? 's' : '' }} Found
          </h2>
        </div>

        <div class="projects-grid" v-if="filteredProjects.length">
          <div 
            v-for="project in filteredProjects" 
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
                    aria-label="View Live Demo"
                  >
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a 
                    v-if="project.githubUrl" 
                    :href="project.githubUrl" 
                    target="_blank"
                    class="project-action hover-target"
                    @click.stop
                    aria-label="View Source Code"
                  >
                    <i class="fab fa-github"></i>
                  </a>
                  <button 
                    class="project-action hover-target"
                    @click.stop="navigateToProject(project.id)"
                    aria-label="View Details"
                  >
                    <i class="fas fa-info-circle"></i>
                  </button>
                </div>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
              </div>
              
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tech">
                <span 
                  v-for="tech in project.technologies.slice(0, 4)" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.technologies.length > 4"
                  class="tech-more"
                >
                  +{{ project.technologies.length - 4 }} more
                </span>
              </div>
              
              <div class="project-meta">
                <span class="project-date">{{ formatDate(project.createdAt) }}</span>
                <div class="project-status">
                  <span 
                    class="status-badge"
                    :class="`status-${project.status?.toLowerCase() || 'completed'}`"
                  >
                    {{ project.status || 'Completed' }}
                  </span>
                </div>
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
import { ref, computed, onMounted } from 'vue'
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
      imageUrl
      category
      technologies
      status
      liveUrl
      githubUrl
      createdAt
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
    const projects = ref([])
    const selectedCategory = ref('all')
    const selectedTechnology = ref('all')

    const { result, loading, error } = useQuery(GET_PROJECTS)

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
      let filtered = projects.value

      if (selectedCategory.value !== 'all') {
        filtered = filtered.filter(p => p.category === selectedCategory.value)
      }

      if (selectedTechnology.value !== 'all') {
        filtered = filtered.filter(p => 
          p.technologies && p.technologies.includes(selectedTechnology.value)
        )
      }

      return filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
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

    const updateData = () => {
      if (result.value) {
        projects.value = result.value.projects || []
      }
    }

    onMounted(() => {
      updateData()
    })

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
      formatDate,
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

.projects-view {
  padding-top: 80px; // Account for fixed navigation
}

.projects-hero {
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
  padding: 4rem 0;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @include mobile {
    grid-template-columns: 1fr;
  }
}

.project-card {
  @include card;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;

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
  background: rgba(0, 0, 0, 0.8);
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
  width: 44px;
  height: 44px;
  background: #666666;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #333333;
    transform: scale(1.1);
  }

  i {
    font-size: 1.1rem;
  }
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  @include flex-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #000000;
  flex: 1;
}

.project-category {
  background: #f0f0f0;
  color: #666666;
  padding: 0.25rem 0.75rem;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
}

.project-description {
  color: #666666;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tech {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #f0f0f0;
  color: #666666;
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