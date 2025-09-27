<template>
  <div class="project-detail-view">
    <LoadingOverlay v-if="loading" />
    
    <div v-else-if="error" class="error-state">
      <div class="error-container">
        <i class="fas fa-exclamation-triangle"></i>
        <h2>Project Not Found</h2>
        <p>The project you're looking for doesn't exist or has been removed.</p>
        <router-link to="/projects" class="back-btn hover-target">
          <i class="fas fa-arrow-left"></i>
          Back to Projects
        </router-link>
      </div>
    </div>

    <div v-else-if="project" class="project-content">
      <!-- Hero Section -->
      <section class="project-hero">
        <div class="hero-container">
          <div class="hero-content">
            <div class="project-meta">
              <router-link to="/projects" class="back-link hover-target">
                <i class="fas fa-arrow-left"></i>
                Back to Projects
              </router-link>
              <div class="project-category">
                <span class="category-tag">{{ project.category }}</span>
              </div>
            </div>
            
            <h1 class="project-title">{{ project.title }}</h1>
            <p class="project-description">{{ project.description }}</p>
            
            <div class="project-actions">
              <a 
                v-if="project.liveUrl" 
                :href="project.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="action-btn primary hover-target"
              >
                <i class="fas fa-external-link-alt"></i>
                Live Demo
              </a>
              <a 
                v-if="project.githubUrl && project.title !== 'Ori Company' && project.title !== 'Creations X Platform'" 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="action-btn secondary hover-target"
              >
                <i class="fab fa-github"></i>
                View Code
              </a>
            </div>
          </div>
          
          <div class="hero-image">
            <div class="image-container">
              <img 
                :src="project.imageUrl" 
                :alt="project.title"
                class="project-image"
              />
              <div class="image-overlay">
                <div class="overlay-content">
                  <i class="fas fa-search-plus"></i>
                  <span>View Full Size</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Details Section -->
      <section class="project-details">
        <div class="details-container">
          <div class="details-grid">
            <!-- Project Information -->
            <div class="project-info">
              <h2 class="section-title">Project Overview</h2>
              <div class="info-content">
                <p class="project-long-description">
                  {{ project.longDescription || project.description }}
                </p>
                
                <div class="project-stats">
                  <div class="stat-item">
                    <i class="fas fa-calendar-alt"></i>
                    <div class="stat-content">
                      <span class="stat-label">Completed</span>
                      <span class="stat-value">{{ formatDate(project.completedAt) }}</span>
                    </div>
                  </div>
                  
                  <div class="stat-item">
                    <i class="fas fa-clock"></i>
                    <div class="stat-content">
                      <span class="stat-label">Duration</span>
                      <span class="stat-value">{{ project.duration || 'N/A' }}</span>
                    </div>
                  </div>
                  
                  <div class="stat-item">
                    <i class="fas fa-user"></i>
                    <div class="stat-content">
                      <span class="stat-label">Role</span>
                      <span class="stat-value">{{ project.role || 'Full Stack Developer' }}</span>
                    </div>
                  </div>
                </div>

                <div v-if="project.challenges" class="project-section">
                  <h3 class="subsection-title">Challenges & Solutions</h3>
                  <p class="section-text">{{ project.challenges }}</p>
                </div>

                <div v-if="project.learnings" class="project-section">
                  <h3 class="subsection-title">Key Learnings</h3>
                  <p class="section-text">{{ project.learnings }}</p>
                </div>
              </div>
            </div>

            <!-- Technical Details -->
            <div class="technical-details">
              <h2 class="section-title">Technical Details</h2>
              
              <div class="tech-section">
                <h3 class="tech-title">Technologies Used</h3>
                <div class="tech-tags">
                  <span 
                    v-for="tech in project.technologies" 
                    :key="tech"
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div v-if="project.features" class="tech-section">
                <h3 class="tech-title">Key Features</h3>
                <ul class="features-list">
                  <li 
                    v-for="feature in project.features" 
                    :key="feature"
                    class="feature-item"
                  >
                    <i class="fas fa-check"></i>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div class="tech-section">
                <h3 class="tech-title">Project Links</h3>
                <div class="project-links">
                  <a 
                    v-if="project.liveUrl" 
                    :href="project.liveUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link hover-target"
                  >
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a 
                    v-if="project.githubUrl && project.title !== 'Ori Company' && project.title !== 'Creations X Platform'" 
                    :href="project.githubUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link hover-target"
                  >
                    <i class="fab fa-github"></i>
                    <span>Source Code</span>
                  </a>
                  <a 
                    v-if="project.designUrl" 
                    :href="project.designUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="project-link hover-target"
                  >
                    <i class="fas fa-paint-brush"></i>
                    <span>Design Files</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Projects Section -->
      <section v-if="relatedProjects.length > 0" class="related-projects">
        <div class="related-container">
          <h2 class="section-title">Related Projects</h2>
          <div class="related-grid">
            <div 
              v-for="relatedProject in relatedProjects" 
              :key="relatedProject.id"
              class="related-card hover-target"
              @click="$router.push(`/projects/${relatedProject.id}`)"
            >
              <div class="related-image">
                <img 
                  :src="relatedProject.imageUrl" 
                  :alt="relatedProject.title"
                />
              </div>
              <div class="related-content">
                <h3 class="related-title">{{ relatedProject.title }}</h3>
                <p class="related-description">{{ relatedProject.description }}</p>
                <div class="related-tech">
                  <span 
                    v-for="tech in relatedProject.technologies.slice(0, 3)" 
                    :key="tech"
                    class="tech-tag small"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import LoadingOverlay from '@/components/LoadingOverlay.vue'

const GET_PROJECT_DETAIL = gql`
  query GetProjectDetail($id: ID!) {
    project(id: $id) {
      id
      title
      description
      longDescription
      imageUrl
      liveUrl
      githubUrl
      designUrl
      category
      technologies
      features
      challenges
      learnings
      role
      duration
      completedAt
      featured
      createdAt
      updatedAt
    }
  }
`

const GET_RELATED_PROJECTS = gql`
  query GetRelatedProjects($category: String!, $excludeId: ID!) {
    projects(filter: { category: $category, excludeId: $excludeId, limit: 3 }) {
      id
      title
      description
      imageUrl
      technologies
      category
    }
  }
`

export default {
  name: 'ProjectDetailView',
  components: {
    LoadingOverlay
  },
  setup() {
    const route = useRoute()
    const projectId = computed(() => route.params.id)

    // Get project details
    const { result: projectResult, loading, error } = useQuery(
      GET_PROJECT_DETAIL,
      () => ({ id: projectId.value }),
      () => ({ enabled: !!projectId.value })
    )

    const project = computed(() => projectResult.value?.project)

    // Get related projects
    const { result: relatedResult } = useQuery(
      GET_RELATED_PROJECTS,
      () => ({
        category: project.value?.category,
        excludeId: projectId.value
      }),
      () => ({ 
        enabled: !!project.value?.category && !!projectId.value 
      })
    )

    const relatedProjects = computed(() => relatedResult.value?.projects || [])

    const formatDate = (dateString) => {
      if (!dateString) return 'N/A'
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    return {
      project,
      relatedProjects,
      loading,
      error,
      formatDate
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.project-detail-view {
  padding-top: 80px; // Account for fixed navigation
}

.error-state {
  @include flex-center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
}

.error-container {
  max-width: 500px;

  i {
    font-size: 4rem;
    color: var(--accent-primary);
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.back-btn {
  @include button-primary;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: var(--border-radius);
}

.project-hero {
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: 4rem 0;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.back-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--accent-primary);
  }
}

.category-tag {
  background: rgba(var(--accent-primary-rgb), 0.1);
  color: var(--accent-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.project-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  @include text-gradient;

  @include mobile {
    font-size: 2rem;
  }
}

.project-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.project-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;

  &.primary {
    @include button-primary;
  }

  &.secondary {
    @include button-secondary;
  }

  &:hover {
    transform: translateY(-2px);
  }
}

.hero-image {
  .image-container {
    position: relative;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    cursor: pointer;

    &:hover .image-overlay {
      opacity: 1;
    }
  }

  .project-image {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    @include flex-center;
    flex-direction: column;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: white;

    .overlay-content {
      text-align: center;

      i {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      span {
        font-weight: 500;
      }
    }
  }
}

.project-details {
  padding: 6rem 0;
}

.details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.details-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  @include text-gradient;
}

.project-info {
  .info-content {
    .project-long-description {
      font-size: 1.1rem;
      line-height: 1.7;
      color: var(--text-secondary);
      margin-bottom: 3rem;
    }
  }
}

.project-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 1rem;

  i {
    @include flex-center;
    width: 40px;
    height: 40px;
    background: rgba(var(--accent-primary-rgb), 0.1);
    border-radius: 50%;
    color: var(--accent-primary);
  }
}

.stat-content {
  .stat-label {
    display: block;
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin-bottom: 0.25rem;
  }

  .stat-value {
    font-weight: 600;
    color: var(--text-primary);
  }
}

.project-section {
  margin-bottom: 2rem;

  .subsection-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .section-text {
    line-height: 1.6;
    color: var(--text-secondary);
  }
}

.technical-details {
  @include card;
  padding: 2rem;
  height: fit-content;
}

.tech-section {
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.tech-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(var(--accent-primary-rgb), 0.1);
  color: var(--accent-primary);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;

  &.small {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
  }
}

.features-list {
  list-style: none;
  padding: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  color: var(--text-secondary);

  i {
    color: var(--accent-primary);
    font-size: 0.875rem;
  }
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(var(--accent-primary-rgb), 0.05);
  border-radius: var(--border-radius);
  color: var(--text-primary);
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-primary-rgb), 0.1);
    transform: translateX(4px);
  }

  i {
    color: var(--accent-primary);
  }
}

.related-projects {
  background: var(--bg-secondary);
  padding: 6rem 0;
}

.related-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.related-card {
  @include card;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
}

.related-image {
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
}

.related-card:hover .related-image img {
  transform: scale(1.05);
}

.related-content {
  padding: 1.5rem;
}

.related-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.related-description {
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.related-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
</style>