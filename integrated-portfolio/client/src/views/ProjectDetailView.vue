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
        <div class="hero-container single">
          <div class="hero-content">
            <!-- Move heading here for alignment and readability -->
            <div class="section-title top">
              <h2>Project Overview</h2>
            </div>

            <div class="project-meta">
              <router-link to="/projects" class="back-link hover-target">
                <i class="fas fa-arrow-left"></i>
                Back to Projects
              </router-link>
            </div>
            
            <h1 class="project-title">{{ project.title }}</h1>
            <p class="project-description">{{ heroDescription }}</p>
            
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

            <!-- Exact Project Card as on Projects page -->
            <div 
              class="project-card hover-large"
              :style="{ backgroundImage: `url('${encodeURI(project.imageUrl)}')` }"
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
        </div>

        <!-- Hero Image / Preview Column removed per request -->
      </section>

      <!-- Project Information Section (commented out per earlier request) -->
      <!--
      <section class="project-details">
        <div class="details-container">
          <div class="section-title">
            <h2>Project Overview</h2>
          </div>
        </div>
      </section>
      -->

      <!-- Project Preview Section removed per request -->

      <!-- Related Projects Section removed per request -->

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
      imageUrl
      liveUrl
      githubUrl
      category
      year
      status
      type
      features
      featured
      createdAt
      updatedAt
      technologies
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

    const heroDescription = computed(() => {
      const id = project.value?.id
      const title = project.value?.title

      const overridesByTitle = {
        'Skinstric AI': 'I worked on a React interface that made complex AI skin analysis feel simple and approachable. JavaScript, HTML, and CSS carried the UI, while Webpack and Babel kept builds quick and the codebase modern. I wrote maintainable tests in Jest and enforced clean standards with ESLint for long-term reliability. My focus was translating real-time signals into clear visuals so users could understand results at a glance. I collaborated closely with designers to balance accuracy with a calm, focused layout. Performance tuning helped the app stay responsive even during heavy processing. The end result was a confident, friendly experience for a health-tech audience.',
        'Netflix Clone': 'I created a streaming experience that feels familiar and cinematic without sacrificing speed. React drives the UI, with JavaScript/HTML/CSS crafting a clean, responsive layout on any device. Vite and hot module replacement made iteration fast, so features shipped quickly and safely. Firebase powers authentication and data services, keeping the experience real-time and reliable. I paid special attention to navigation and loading states to keep users immersed. ESLint enforced consistent, readable code as the project grew. The project demonstrates how modern tooling and cloud services can deliver a smooth, app-like media experience on the web.',
        'Ultraverse NFT World': 'I helped build a marketplace where creators and collectors meet through a clear, lively interface. React and JavaScript formed the core, while dynamic routing created a smooth path through collections and item detail views. I integrated external APIs to surface listings and metadata in real time. Carousels and subtle animations added delight without slowing the page. Jest tests kept key flows safe, and Git workflows (branching, merging, pull requests) made collaboration smooth. Webpack and Babel ensured the bundle stayed modern and efficient. The outcome was a usable, visually engaging marketplace that respected both speed and storytelling.',
        'Summarist Audio Library': 'I developed an audio-first web app that lets users explore and purchase book summaries with confidence. Next.js and TypeScript power a responsive, maintainable frontend, styled with Tailwind CSS/PostCSS for speed and consistency. On the backend, Node.js API routes run on Vercel, while Firebase supports client-side data needs. Stripe handles secure payments so the checkout feels seamless and trustworthy. I focused on clear information design so users can scan, sample, and decide quickly. React components keep the experience cohesive and easy to extend. Together, these choices deliver a fast, modern product that feels polished from homepage to receipt.',
        'Movie Entertainment': 'I built a searchable movie library that turns curiosity into quick discovery. React with JavaScript/HTML/CSS powers a responsive interface that feels natural across desktop and mobile. The OMDB API supplies rich data, while my frontend-backend connections keep results flowing effortlessly. Webpack and Babel support an efficient dev cycle and a lean production build. Jest tests gave me confidence to refactor and add features without regressions. I designed the UI to minimize friction—clear inputs, thoughtful empty states, and readable detail pages. It’s a practical showcase of API integration, performance, and user-first design.',
        'E-Commerce Book Library': 'I created an online bookstore experience that emphasizes speed, clarity, and trust. Built with React and JavaScript/HTML/CSS, the app uses dynamic routing to keep navigation fluid and predictable. API integration pulls fresh catalog data while caching and request patterns keep things responsive. Skeleton loading states reduce perceived wait time and set expectations during fetches. Jest testing helps ensure carts, filters, and checkout flows remain stable as features grow. Webpack and Babel provide a modern toolchain for fast builds and clean code. The result is a friendly, high-performing shopping journey from browse to buy.',
        'Ori Company': 'Ori Company was founded in Washington, DC as a licensed medical cannabis cultivation and retail operation. Leadership focused on building digital platforms and ecommerce integrations that made discovery and purchasing simple. Compliance systems and customer engagement tools were implemented, increasing operational efficiency by thirty percent while maintaining regulatory alignment. A corporate website and online store were built and maintained to expand patient access. Improvements to navigation, content, and promotions drove a twenty percent lift in online sales. Investor pitch decks and presentations were developed to support an ongoing raise of five to ten million dollars. Stakeholder relationships were cultivated to advance growth and protect brand integrity. The company was positioned to serve more than seven million annual visitors and seven hundred thousand residents in the District. A clear vision for a vertically integrated model targets more than eighty million dollars in annual revenue. The mission centers on quality, community impact, and sustainable growth.',
        'Creations X Platform': 'Creations X was launched to deliver creative media for clients across the United States and the Caribbean. The studio produces photography, videography, drone footage, live streaming, and digital campaigns. More than one hundred projects have been completed for brands and influencers throughout the DMV region. Client visibility on web and social channels grew through clear strategy and consistent execution. Data informed content plans improved reach and engagement by forty percent. End to end planning, production, and delivery kept creative work aligned with goals, budgets, and timelines. Adobe Creative Suite and Figma supported strong storytelling and polished visual design. Modern web experiences were built by integrating React, Tailwind, Node.js, and Firebase. Collaboration translated ideas into compelling assets that convert and endure. The approach balances empathy, craft, and accountability to build lasting partnerships.'
      }

      const overridesById = {
        '8': 'I created a streaming experience that feels familiar and cinematic without sacrificing speed. React drives the UI, with JavaScript/HTML/CSS crafting a clean, responsive layout on any device. Vite and hot module replacement made iteration fast, so features shipped quickly and safely. Firebase powers authentication and data services, keeping the experience real-time and reliable. I paid special attention to navigation and loading states to keep users immersed. ESLint enforced consistent, readable code as the project grew. The project demonstrates how modern tooling and cloud services can deliver a smooth, app-like media experience on the web.'
      }

      return overridesByTitle[title] ?? overridesById[id] ?? project.value?.description ?? ''
    })

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
      loading,
      error,
      formatDate,
      heroDescription
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

.section-title.top {
  margin-bottom: 1rem;
}

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
  background: #000000;
  padding: 4rem 0 8rem;
}

/* Increase hero title size and add spacing from Back to Projects */
.project-hero .project-title {
  font-size: 2rem;
  margin-top: 1rem;
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

/* Hero image uses the same effect as project cards */
.hero-image {
  .hero-card {
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

      .image-actions {
        opacity: 1;
      }
    }
  }

  .image-actions {
    display: flex;
    gap: 1rem;
    margin: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    position: relative;
    z-index: 10;
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

  .image-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    z-index: 2;
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
  background: #000000;
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

/* Single-column hero layout when no screenshot column */
.hero-container.single {
  grid-template-columns: 1fr;
}

.project-preview {
  padding: 0 0 4rem;
  background: #000000;
}

.preview-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.project-card {
  @include card;
  position: relative;
  height: 600px; /* Match ProjectsView card height */
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

.project-card .project-content {
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   padding: 2rem;
   background: linear-gradient(transparent, rgba(0, 0, 0, 1));
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

/* Back to Projects link hover behavior in hero */
.project-meta .back-link {
  color: #999999; /* default gray */
  text-decoration: none;
  transition: color 0.2s ease;
}

.project-meta .back-link:hover {
  color: #ffffff; /* white on hover */
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
</style>