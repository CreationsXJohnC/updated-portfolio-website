<template>
  <div class="projects-view">
    <!-- Transferred Home Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="title-line">Hey</span>
              <span class="title-name">I'm Che.</span>
            </h1>
            <p class="hero-description">
              <strong>I'm a Full Stack Software Engineer</strong> driven by the mantra <strong>"Think 2 Create & Create 2 Inspire."</strong> I design intuitive web applications and build businesses that deliver seamless user experiences, inspire audiences, and leave a lasting impact.
            </p>
            <p class="hero-description">
              Here's a bit more <router-link to="/about" class="inline-link">about me</router-link>.
            </p>
            <div class="hero-actions">
              <router-link to="/projects#my-projects" class="btn btn-primary hover-target">
                View My Work
                <i class="fas fa-arrow-down"></i>
              </router-link>
              <router-link to="/contact" class="btn btn-secondary hover-target">
                Get In Touch
              </router-link>
            </div>
          </div>
          <div class="hero-visual">
            <div class="computer-animation">
              <!-- Laptop Base -->
              <div class="laptop">
                <div class="laptop-screen">
                  <div class="screen-content">
                    <div class="code-line">
                      <span class="code-keyword">const</span>
                      <span class="code-variable"> developer</span>
                      <span class="code-operator"> = </span>
                      <span class="code-string">"Che"</span>
                    </div>
                    <div class="code-line">
                      <span class="code-keyword">function</span>
                      <span class="code-function"> createAmazingApps</span>
                      <span class="code-bracket">()</span>
                    </div>
                    <div class="code-line">
                      <span class="code-bracket">{ </span>
                      <span class="code-comment">// Magic happens here</span>
                    </div>
                    <div class="code-line">
                      <span class="code-bracket">}</span>
                    </div>
                    <div id="dynamic-code"></div>
                  </div>
                </div>
                <div class="laptop-keyboard">
                  <!-- Left Speaker Grille -->
                  <div class="speaker-grille left-speaker">
                    <div class="speaker-holes">
                      <!-- 60 holes total (12 columns × 5 rows) -->
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                    </div>
                  </div>
                  
                  <!-- Keyboard Keys Container -->
                  <div class="keyboard-keys">
                  <!-- Function Keys Row -->
                  <div class="keyboard-row function-row">
                    <div class="key function-key">esc</div>
                    <div class="key function-key">f1</div>
                    <div class="key function-key">f2</div>
                    <div class="key function-key">f3</div>
                    <div class="key function-key">f4</div>
                    <div class="key function-key">f5</div>
                    <div class="key function-key">f6</div>
                    <div class="key function-key">f7</div>
                    <div class="key function-key">f8</div>
                    <div class="key function-key">f9</div>
                    <div class="key function-key">f10</div>
                    <div class="key function-key">f11</div>
                    <div class="key function-key">f12</div>
                    <div class="key function-key">del</div>
                  </div>
                  
                  <!-- Number Row -->
                  <div class="keyboard-row number-row">
                    <div class="key">`</div>
                    <div class="key">1</div>
                    <div class="key">2</div>
                    <div class="key">3</div>
                    <div class="key">4</div>
                    <div class="key">5</div>
                    <div class="key">6</div>
                    <div class="key">7</div>
                    <div class="key">8</div>
                    <div class="key">9</div>
                    <div class="key">0</div>
                    <div class="key">-</div>
                    <div class="key">=</div>
                    <div class="key backspace">⌫</div>
                  </div>
                  
                  <!-- QWERTY Row -->
                  <div class="keyboard-row qwerty-row">
                    <div class="key tab">tab</div>
                    <div class="key">q</div>
                    <div class="key">w</div>
                    <div class="key">e</div>
                    <div class="key">r</div>
                    <div class="key">t</div>
                    <div class="key">y</div>
                    <div class="key">u</div>
                    <div class="key">i</div>
                    <div class="key">o</div>
                    <div class="key">p</div>
                    <div class="key">[</div>
                    <div class="key">]</div>
                    <div class="key backslash">\</div>
                  </div>
                  
                  <!-- ASDF Row -->
                  <div class="keyboard-row asdf-row">
                    <div class="key caps">caps</div>
                    <div class="key">a</div>
                    <div class="key">s</div>
                    <div class="key">d</div>
                    <div class="key">f</div>
                    <div class="key">g</div>
                    <div class="key">h</div>
                    <div class="key">j</div>
                    <div class="key">k</div>
                    <div class="key">l</div>
                    <div class="key">;</div>
                    <div class="key">'</div>
                    <div class="key enter">⏎</div>
                  </div>
                  
                  <!-- ZXCV Row -->
                  <div class="keyboard-row zxcv-row">
                    <div class="key shift-left">shift</div>
                    <div class="key">z</div>
                    <div class="key">x</div>
                    <div class="key">c</div>
                    <div class="key">v</div>
                    <div class="key">b</div>
                    <div class="key">n</div>
                    <div class="key">m</div>
                    <div class="key">,</div>
                    <div class="key">.</div>
                    <div class="key">/</div>
                    <div class="key shift-right">shift</div>
                  </div>
                  
                  <!-- Bottom Row -->
                  <div class="keyboard-row bottom-row">
                    <div class="key fn">fn</div>
                    <div class="key ctrl">ctrl</div>
                    <div class="key alt">alt</div>
                    <div class="key cmd">⌘</div>
                    <div class="key spacebar"> </div>
                    <div class="key cmd">⌘</div>
                    <div class="key alt">alt</div>
                    <div class="key arrow">←</div>
                    <div class="key arrow">↑</div>
                    <div class="key arrow">↓</div>
                    <div class="key arrow">→</div>
                  </div>
                  </div>
                  
                  <!-- Right Speaker Grille -->
                  <div class="speaker-grille right-speaker">
                    <div class="speaker-holes">
                      <!-- 60 holes total (12 columns × 5 rows) -->
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                      <div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div><div class="speaker-hole"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Code Elements -->
              <div class="floating-elements">
                <div class="floating-code code-1">{ }</div>
                <div class="floating-code code-2">&lt;/&gt;</div>
                <div class="floating-code code-3">( )</div>
                <div class="floating-code code-4">[ ]</div>
                <div class="floating-code code-5">===</div>
                <div class="floating-code code-6">=&gt;</div>
                <div class="floating-code code-7">$</div>
                <div class="floating-code code-8">@</div>
                <div class="floating-code code-9">#</div>
                <div class="floating-code code-10">*</div>
                <div class="floating-code code-11">+</div>
                <div class="floating-code code-12">~</div>
                <div class="floating-code code-13">&amp;</div>
                <div class="floating-code code-14">%</div>
                <div class="floating-code code-15">!</div>
                <div class="floating-code code-16">?</div>
                <div class="floating-code code-17">|</div>
                <div class="floating-code code-18">^</div>
                <div class="floating-code code-19">::</div>
                <div class="floating-code code-20">!=</div>
                <div class="floating-code code-21">++</div>
                <div class="floating-code code-22">--</div>
                <div class="floating-code code-23">&&</div>
                <div class="floating-code code-24">||</div>
                <div class="floating-code code-25">...</div>
                <div class="floating-code code-26">&lt;=</div>
                <div class="floating-code code-27">&gt;=</div>
                <div class="floating-code code-28">/*</div>
                <div class="floating-code code-29">*/</div>
                <div class="floating-code code-30">//</div>
                <!-- Additional Floating Symbols (31–60) to double quantity -->
                <div class="floating-code code-31">!==</div>
                <div class="floating-code code-32">&lt;&gt;</div>
                <div class="floating-code code-33">??</div>
                <div class="floating-code code-34">::</div>
                <div class="floating-code code-35">-&gt;</div>
                <div class="floating-code code-36">&lt;-</div>
                <div class="floating-code code-37">:=</div>
                <div class="floating-code code-38">/**/</div>
                <div class="floating-code code-39">++</div>
                <div class="floating-code code-40">--</div>
                <div class="floating-code code-41">&&</div>
                <div class="floating-code code-42">||</div>
                <div class="floating-code code-43">/**</div>
                <div class="floating-code code-44">**/</div>
                <div class="floating-code code-45">#!</div>
                <div class="floating-code code-46">&amp;&amp;</div>
                <div class="floating-code code-47">||</div>
                <div class="floating-code code-48">::</div>
                <div class="floating-code code-49">===</div>
                <div class="floating-code code-50">&lt;=</div>
                <div class="floating-code code-51">&gt;=</div>
                <div class="floating-code code-52">[ ]</div>
                <div class="floating-code code-53">( )</div>
                <div class="floating-code code-54">{ }</div>
                <div class="floating-code code-55">@</div>
                <div class="floating-code code-56">$</div>
                <div class="floating-code code-57">%</div>
                <div class="floating-code code-58">!</div>
                <div class="floating-code code-59">?</div>
                <div class="floating-code code-60">~</div>
                <!-- Additional Floating Symbols (61–90) to further reduce whitespace -->
                <div class="floating-code code-61">&lt;&gt;</div>
                <div class="floating-code code-62">!==</div>
                <div class="floating-code code-63">==</div>
                <div class="floating-code code-64">!=</div>
                <div class="floating-code code-65">?:</div>
                <div class="floating-code code-66">+=</div>
                <div class="floating-code code-67">-=</div>
                <div class="floating-code code-68">*&=</div>
                <div class="floating-code code-69">/=</div>
                <div class="floating-code code-70">&lt;&lt;</div>
                <div class="floating-code code-71">&gt;&gt;</div>
                <div class="floating-code code-72">::</div>
                <div class="floating-code code-73">/**/</div>
                <div class="floating-code code-74">//</div>
                <div class="floating-code code-75">=&gt;</div>
                <div class="floating-code code-76">&lt;-</div>
                <div class="floating-code code-77">@@</div>
                <div class="floating-code code-78">##</div>
                <div class="floating-code code-79">$$</div>
                <div class="floating-code code-80">@@@</div>
                <div class="floating-code code-81">---</div>
                <div class="floating-code code-82">+++</div>
                <div class="floating-code code-83">&&</div>
                <div class="floating-code code-84">||</div>
                <div class="floating-code code-85">[]</div>
                <div class="floating-code code-86">()</div>
                <div class="floating-code code-87">{}</div>
                <div class="floating-code code-88">!</div>
                <div class="floating-code code-89">?</div>
                <div class="floating-code code-90">~</div>
                <!-- Targeted ring near the animation to fill nearby blank space -->
                <div class="floating-code code-91">{ }</div>
                <div class="floating-code code-92">&lt;/&gt;</div>
                <div class="floating-code code-93">( )</div>
                <div class="floating-code code-94">[ ]</div>
                <div class="floating-code code-95">+=</div>
                <div class="floating-code code-96">!==</div>
                <div class="floating-code code-97">??</div>
                <div class="floating-code code-98">::</div>
                <div class="floating-code code-99">!=</div>
                <div class="floating-code code-100">==</div>
                <div class="floating-code code-101">&amp;</div>
                <div class="floating-code code-102">*</div>
                <!-- Additional tight ring to further fill space near animation -->
                <div class="floating-code code-103">&lt;/&gt;</div>
                <div class="floating-code code-104">{ }</div>
                <div class="floating-code code-105">( )</div>
                <div class="floating-code code-106">[ ]</div>
                <div class="floating-code code-107">!==</div>
                <div class="floating-code code-108">??</div>
                <div class="floating-code code-109">::</div>
                <div class="floating-code code-110">+=</div>
                <div class="floating-code code-111">-=</div>
                <div class="floating-code code-112">==</div>
                <div class="floating-code code-113">!=</div>
                <div class="floating-code code-114">&amp;</div>
                <!-- Micro ring to further densify area around animation -->
                <div class="floating-code code-115">;</div>
                <div class="floating-code code-116">::</div>
                <div class="floating-code code-117">,</div>
                <div class="floating-code code-118">.</div>
                <div class="floating-code code-119">"</div>
                <div class="floating-code code-120">'</div>
                <div class="floating-code code-121">...</div>
                <div class="floating-code code-122">&lt;/&gt;</div>
                <div class="floating-code code-123">{ }</div>
                <div class="floating-code code-124">( )</div>
                <div class="floating-code code-125">[ ]</div>
                <div class="floating-code code-126">+=</div>
                <div class="floating-code code-127">-=</div>
                <div class="floating-code code-128">==</div>
                <!-- Lower-right quadrant micro fill -->
                <div class="floating-code code-129">;</div>
                <div class="floating-code code-130">:</div>
                <div class="floating-code code-131">,</div>
                <div class="floating-code code-132">.</div>
                <div class="floating-code code-133">"</div>
                <div class="floating-code code-134">'</div>
                <div class="floating-code code-135">+</div>
                <div class="floating-code code-136">-</div>
                <div class="floating-code code-137">*</div>
                <div class="floating-code code-138">/</div>
                <!-- Upper-right quadrant micro fill -->
                <div class="floating-code code-139">;</div>
                <div class="floating-code code-140">:</div>
                <div class="floating-code code-141">,</div>
                <div class="floating-code code-142">.</div>
                <div class="floating-code code-143">"</div>
                <div class="floating-code code-144">'</div>
                <div class="floating-code code-145">+</div>
                <div class="floating-code code-146">-</div>
                <div class="floating-code code-147">*</div>
                <div class="floating-code code-148">/</div>
                <!-- Above-right of laptop micro fill -->
                <div class="floating-code code-149">;</div>
                <div class="floating-code code-150">:</div>
                <div class="floating-code code-151">.</div>
                <div class="floating-code code-152">,</div>
                <div class="floating-code code-153">"</div>
                <div class="floating-code code-154">'</div>
                <div class="floating-code code-155">+</div>
                <div class="floating-code code-156">-</div>
                <div class="floating-code code-157">*</div>
                <div class="floating-code code-158">/</div>
                <!-- Above-center of laptop micro fill -->
                <div class="floating-code code-159">;</div>
                <div class="floating-code code-160">:</div>
                <div class="floating-code code-161">.</div>
                <div class="floating-code code-162">,</div>
                <div class="floating-code code-163">"</div>
                <div class="floating-code code-164">'</div>
                <div class="floating-code code-165">+</div>
                <div class="floating-code code-166">-</div>
                <div class="floating-code code-167">*</div>
                <div class="floating-code code-168">/</div>
                <!-- Above-top of laptop micro fill (higher and wider) -->
                <div class="floating-code code-189">;</div>
                <div class="floating-code code-190">:</div>
                <div class="floating-code code-191">.</div>
                <div class="floating-code code-192">,</div>
                <div class="floating-code code-193">"</div>
                <div class="floating-code code-194">'</div>
                <div class="floating-code code-195">+</div>
                <div class="floating-code code-196">-</div>
                <div class="floating-code code-197">*</div>
                <div class="floating-code code-198">/</div>
                <!-- Left of laptop micro fill -->
                <div class="floating-code code-169">;</div>
                <div class="floating-code code-170">:</div>
                <div class="floating-code code-171">.</div>
                <div class="floating-code code-172">,</div>
                <div class="floating-code code-173">"</div>
                <div class="floating-code code-174">'</div>
                <div class="floating-code code-175">+</div>
                <div class="floating-code code-176">-</div>
                <div class="floating-code code-177">*</div>
                <div class="floating-code code-178">/</div>
                <!-- Extra left of laptop micro fill -->
                <div class="floating-code code-179">;</div>
                <div class="floating-code code-180">:</div>
                <div class="floating-code code-181">.</div>
                <div class="floating-code code-182">,</div>
                <div class="floating-code code-183">"</div>
                <div class="floating-code code-184">'</div>
                <div class="floating-code code-185">+</div>
                <div class="floating-code code-186">-</div>
                <div class="floating-code code-187">*</div>
                <div class="floating-code code-188">/</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator" @click="scrollToBottom">
          <div class="scroll-mouse">
            <div class="scroll-wheel"></div>
          </div>
          <span class="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>

    <!-- Hero Section -->
    <section class="projects-hero" id="my-projects">
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
                  v-if="project.githubUrl && project.title !== 'Ori Company' && project.title !== 'Creations X John C'" 
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

    // Display overrides for specific projects (by id)
    const titleOverrideById = {
      '7': 'Creations X John C'
    }
    const shortOverrideById = {
      '7': "A comprehensive content portfolio showcasing John C's digital art through various mediums."
    }

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
      const sorted = filtered.sort((a, b) => {
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

      // Apply display overrides without mutating original objects
      return sorted.map(p => ({
        ...p,
        title: titleOverrideById[p.id] ?? p.title,
        shortDescription: shortOverrideById[p.id] ?? p.shortDescription
      }))
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

    const scrollToBottom = () => {
      const targetPosition = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo(0, targetPosition)
    }

    const formatDate = (dateString) => {
      if (!dateString) return ''
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short' 
      })
    }

    // No fallback loading; rely on GraphQL result

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
      scrollToBottom
    }
  },
  mounted() {
    this.startKeyboardTyping();
    this.startScreenTyping();
  },
  methods: {
    startKeyboardTyping() {
      const keys = document.querySelectorAll('.key')
      const sentences = [
        'const portfolio = new Portfolio()',
        'function createAwesomeWebsite()',
        'import React from react',
        'let skills = [javascript, vue, css]',
        'const developer = {name: john}',
        'export default MyComponent',
        'npm install vue-router',
        'git commit -m initial setup',
        'const api = await fetch(data)',
        'return response.json()',
        'console.log(hello world)',
        'if (user.isActive) return true',
        'const styles = {color: blue}',
        'async function getData()',
        'this.state = {loading: false}'
      ]
      let currentSentenceIndex = 0
      let currentCharIndex = 0
      let isTypingSentence = false
      let typingBurst = 0
      
      const pressKey = (keyChar) => {
        let keyElement
        
        if (keyChar === ' ') {
          keyElement = document.querySelector('.spacebar')
        } else if (keyChar === 'enter') {
          keyElement = document.querySelector('.enter')
        } else if (keyChar === 'backspace') {
          keyElement = document.querySelector('.backspace')
        } else if (keyChar === 'shift') {
          keyElement = document.querySelector('.shift-left')
        } else {
          keyElement = Array.from(keys).find(key => key.textContent.toLowerCase() === keyChar)
        }
        
        if (keyElement) {
          keyElement.classList.add('typing')
          setTimeout(() => {
            keyElement.classList.remove('typing')
          }, 150)
        }
      }
      
      const simulateTyping = () => {
        const randomAction = Math.random()
        
        if (randomAction < 0.7 && !isTypingSentence) {
          isTypingSentence = true
          currentSentenceIndex = Math.floor(Math.random() * sentences.length)
          currentCharIndex = 0
          typingBurst = sentences[currentSentenceIndex].length
        }
        
        if (isTypingSentence) {
          const currentSentence = sentences[currentSentenceIndex]
          if (currentCharIndex < currentSentence.length) {
            pressKey(currentSentence[currentCharIndex])
            currentCharIndex++
            typingBurst--
            
            if (currentCharIndex >= currentSentence.length) {
              setTimeout(() => pressKey(' '), 100 + Math.random() * 200)
              isTypingSentence = false
            }
          }
        } else {
          if (randomAction < 0.1) {
            pressKey('backspace')
          } else if (randomAction < 0.15) {
            pressKey('enter')
          } else if (randomAction < 0.2) {
            pressKey('shift')
          } else {
            const letters = 'abcdefghijklmnopqrstuvwxyz'
            pressKey(letters[Math.floor(Math.random() * letters.length)])
          }
        }
        
        let nextDelay
        if (isTypingSentence && typingBurst > 0) {
          nextDelay = 80 + Math.random() * 120
        } else if (isTypingSentence) {
          nextDelay = 150 + Math.random() * 200
        } else {
          nextDelay = 500 + Math.random() * 1500
        }
        
        setTimeout(simulateTyping, nextDelay)
      }
      
      setTimeout(simulateTyping, 1500)
    },

    startScreenTyping() {
      const codeLines = [
        '// Portfolio Project - Vue Router Configuration',
        'import { createRouter, createWebHistory } from "vue-router"',
        'import HomeView from "@/views/HomeView.vue"',
        '',
        'const routes = [',
        '  {',
        '    path: "/",',
        '    name: "Home",',
        '    component: HomeView,',
        '    meta: {',
        '      title: "John Creations - Portfolio"',
        '    }',
        '  },',
        '  {',
        '    path: "/about",',
        '    name: "About",',
        '    component: () => import("@/views/AboutView.vue"),',
        '    meta: {',
        '      title: "About - John Creations"',
        '    }',
        '  },',
        '  {',
        '    path: "/projects",',
        '    name: "Projects",',
        '    component: () => import("@/views/ProjectsView.vue")',
        '  }',
        ']',
        '',
        '// Vue 3 Composition API Setup',
        'export default {',
        '  name: "HomeView",',
        '  setup() {',
        '    const router = useRouter()',
        '    ',
        '    const featuredProjects = ref([',
        '      {',
        '        id: "skinstric-ai",',
        '        title: "Skinstric AI",',
        '        description: "A.I. personalized skincare routine",',
        '        technologies: ["ES6+", "Next.js", "TailwindCSS"],',
        '        liveUrl: "https://skinstric-ai-internship-gold.vercel.app/"',
        '      },',
        '      {',
        '        id: "netflix-clone",',
        '        title: "Netflix Clone",',
        '        description: "Cloned Netflix with React & Firebase",',
        '        technologies: ["React", "Vite", "Firebase"]',
        '      }',
        '    ])',
        '    ',
        '    const navigateToProject = (projectId) => {',
        '      router.push(`/projects/${projectId}`)',
        '    }',
        '    ',
        '    return {',
        '      featuredProjects,',
        '      navigateToProject',
        '    }',
        '  }',
        '}',
        '',
        '// Package.json Dependencies',
        '{',
        '  "name": "portfolio-client",',
        '  "version": "1.0.0",',
        '  "dependencies": {',
        '    "@apollo/client": "^3.8.8",',
        '    "@vue/apollo-composable": "^4.0.0-beta.11",',
        '    "vue": "^3.3.11",',
        '    "vue-router": "^4.2.5",',
        '    "pinia": "^2.1.7",',
        '    "locomotive-scroll": "^5.0.0-beta.11"',
        '  },',
        '  "devDependencies": {',
        '    "@vitejs/plugin-vue": "^4.5.2",',
        '    "vite": "^5.0.10",',
        '    "sass": "^1.69.7"',
        '  }',
        '}',
        '',
        '// SCSS Styling with Mixins',
        '.projects-grid {',
        '  display: grid;',
        '  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));',
        '  gap: 2rem;',
        '  margin-top: 2rem;',
        '}',
        '',
        '.project-card {',
        '  @include card;',
        '  overflow: hidden;',
        '  cursor: pointer;',
        '  transition: all 0.3s ease;',
        '  ',
        '  &:hover {',
        '    transform: translateY(-4px);',
        '    box-shadow: var(--shadow-lg);',
        '  }',
        '}',
        '',
        '// Apollo GraphQL Integration',
        'const GET_PROJECTS = gql`',
        '  query GetProjects {',
        '    projects {',
        '      id',
        '      title',
        '      description',
        '      technologies',
        '      imageUrl',
        '      liveUrl',
        '      githubUrl',
        '    }',
        '  }',
        '`',
        '',
        '// Modern ES6+ Features',
        'const fetchProjects = async () => {',
        '  try {',
        '    const { data } = await apolloClient.query({',
        '      query: GET_PROJECTS',
        '    })',
        '    return data.projects',
        '  } catch (error) {',
        '    console.error("Failed to fetch projects:", error)',
        '    throw error',
        '  }',
        '}',
        '',
        '// Thank you for exploring my portfolio! 🚀✨'
      ];

      let currentLineIndex = 0;
      let currentCharIndex = 0;
      let typedContent = '';
      
      const baseTypingSpeed = 250;
      const speedVariation = 150;
      const lineDelay = 1500;
      
      const typeCharacter = () => {
        if (currentLineIndex >= codeLines.length) {
          setTimeout(() => {
            currentLineIndex = 0;
            currentCharIndex = 0;
            typedContent = '';
            document.getElementById('dynamic-code').innerHTML = '';
            const screenContent = document.querySelector('.screen-content');
            if (screenContent) {
              screenContent.scrollTop = 0;
            }
            typeCharacter();
          }, 3000);
          return;
        }

        const currentLine = codeLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          const char = currentLine[currentCharIndex];
          typedContent += char === ' ' ? '&nbsp;' : char;
          currentCharIndex++;
          
          const dynamicContainer = document.getElementById('dynamic-code');
          let currentLineElement = dynamicContainer.lastElementChild;
          
          if (!currentLineElement || currentLineElement.dataset.lineIndex != currentLineIndex) {
            const newLineDiv = document.createElement('div');
            newLineDiv.className = 'code-line';
            newLineDiv.dataset.lineIndex = currentLineIndex;
            dynamicContainer.appendChild(newLineDiv);
            currentLineElement = newLineDiv;
          }
          
          currentLineElement.innerHTML = this.formatCodeWithSyntaxHighlighting(typedContent) + '<span class="typing-cursor">|</span>';
          
          if (currentCharIndex % 8 === 0 || currentCharIndex === currentLine.length - 1) {
            const screenContent = document.querySelector('.screen-content');
            const cursor = document.querySelector('.typing-cursor');
            if (screenContent && cursor) {
              requestAnimationFrame(() => {
                const cursorRect = cursor.getBoundingClientRect();
                const screenRect = screenContent.getBoundingClientRect();
                const cursorBottomOffset = cursorRect.bottom - screenRect.bottom;
                if (cursorBottomOffset > -80) {
                  const scrollTarget = screenContent.scrollTop + cursorBottomOffset + 20;
                  const maxScroll = screenContent.scrollHeight - screenContent.clientHeight - 80;
                  screenContent.scrollTo({
                    top: Math.min(scrollTarget, maxScroll),
                    behavior: 'smooth'
                  });
                }
              });
            }
          }
          
          let typingSpeed = baseTypingSpeed + (Math.random() * speedVariation - speedVariation/2);
          
          if (/[{}[\]();,.:'"=<>!@#$%^&*]/.test(char)) {
            typingSpeed *= 1.8;
          }
          if (char === ' ') {
            typingSpeed *= 0.6;
          }
          if (/[0-9]/.test(char)) {
            typingSpeed *= 1.3;
          }
          if (Math.random() < 0.08) {
            typingSpeed *= 2.5;
          }
          if (Math.random() < 0.05) {
            typingSpeed *= 0.4;
          }
          if (char === ' ' && Math.random() < 0.15) {
            typingSpeed *= 2.0;
          }
          
          setTimeout(typeCharacter, Math.max(30, typingSpeed));
        } else {
          const dynamicContainer = document.getElementById('dynamic-code');
          let completedLineElement = dynamicContainer.lastElementChild;
          if (completedLineElement) {
            completedLineElement.innerHTML = this.formatCodeWithSyntaxHighlighting(typedContent);
          }
          currentLineIndex++;
          currentCharIndex = 0;
          typedContent = '';
          setTimeout(typeCharacter, lineDelay);
        }
      };

      setTimeout(typeCharacter, 1000);
    },

    formatCodeWithSyntaxHighlighting(code) {
      return code
        .replace(/\b(const|let|var|function|import|export|from|async|await|try|catch|finally|if|else|return|new|class|extends|super|this|typeof|instanceof)\b/g, '<span class="code-keyword">$1</span>')
        .replace(/\b(true|false|null|undefined)\b/g, '<span class="code-keyword">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>')
        .replace(/'([^']*)'/g, '<span class="code-string">\'$1\'</span>')
        .replace(/`([^`]*)`/g, '<span class="code-string">`$1`</span>')
        .replace(/\/\/(.*)$/gm, '<span class="code-comment">//$1</span>')
        .replace(/\/\*[\s\S]*?\*\//g, '<span class="code-comment">$&</span>')
        .replace(/\b(\w+)(?=\s*\()/g, '<span class="code-function">$1</span>')
        .replace(/([{}[\]();,])/g, '<span class="code-bracket">$1</span>')
        .replace(/(=|===|!==|<=|>=|<|>|\+|\-|\*|\/|%)/g, '<span class="code-operator">$1</span>');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";

/* Home Hero Styles transferred for exact appearance */
.home-view {
  min-height: 100vh;
}

.hero-section {
  min-height: 100vh;
  @include flex-center;
  position: relative;
  background: #ffffff;
  padding-top: 100px;
  padding-bottom: 6rem;
  
  @media (max-width: 1024px) {
    padding-top: 120px;
  }
  
  @media (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 8rem;
  }
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
  margin-bottom: 0.8rem;
  
  @include tablet {
    margin-bottom: 1rem;
  }

  @include mobile {
    margin-bottom: 1rem;
  }
}

.hero-title .title-line { display: block; color: #666666; font-size: 0.6em; }
.hero-title .title-name { display: block; color: #000000; font-weight: 700; }

.hero-description {
  font-size: 1.2rem;
  color: #333333;
  line-height: 1.6;
  margin-bottom: 0.8rem;
  max-width: 500px;

  @media (max-width: 1024px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
}

.hero-description .inline-link {
  color: #666666;
  text-decoration: underline;
  transition: var(--transition-fast);
}

.hero-description .inline-link:hover { color: #000000; text-decoration: none; }

.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.hero-actions {
  @media (max-width: 1024px) {
    justify-content: center;
  }
}
.hero-visual { @include flex-center; }

.computer-animation { position: relative; width: 550px; height: 550px; @include flex-center; }
.computer-animation {
  @include mobile {
    width: 400px;
    height: 600px;
  }
}
.laptop { position: relative; width: 320px; height: 230px; perspective: 800px; transform-style: preserve-3d; transform: rotateX(8deg) rotateY(-2deg); transition: transform 0.3s ease; }
.laptop:hover { transform: rotateX(6deg) rotateY(-1deg) scale(1.01); }
.laptop-screen { width: 100%; height: 160px; background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%); border-radius: 12px 12px 0 0; border: 4px solid #2a2a2a; position: relative; overflow: hidden; transform: translateZ(2px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.05); }
.laptop-screen {
  @media (max-width: 480px) {
    height: 130px;
    border-radius: 10px 10px 0 0;
    border: 3px solid #2a2a2a;
    transform: translateZ(1px);
    box-shadow: 
      0 3px 8px rgba(0, 0, 0, 0.3),
      inset 0 0 8px rgba(255, 255, 255, 0.05);
  }
}
.screen-content { padding: 14px 14px 60px 14px; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-size: 12px; line-height: 1.4; color: #fff; height: 100%; overflow-y: auto; overflow-x: hidden; scroll-behavior: smooth; }
.screen-content {
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
}
.code-line { margin-bottom: 3px; }
#dynamic-code { margin-bottom: 80px; }
.code-keyword { color: #ff6b6b; }
.code-variable { color: #4ecdc4; }
.code-operator { color: #ffe66d; }
.code-string { color: #95e1d3; }
.code-function { color: #a8e6cf; }
.code-bracket { color: #ffd93d; }
.code-comment { color: #888; }
.typing-cursor { display: inline-block !important; animation: blink 1s infinite; color: #4ecdc4; font-weight: bold; opacity: 1 !important; visibility: visible !important; }
.typing-cursor {
  @include mobile {
    display: inline-block !important;
    animation: blink 1s infinite;
    color: #4ecdc4;
    font-weight: bold;
    opacity: 1 !important;
    visibility: visible !important;
    font-size: 12px;
  }
  
  @include tablet {
    display: inline-block !important;
    animation: blink 1s infinite;
    opacity: 1 !important;
    visibility: visible !important;
  }
}

.laptop-keyboard { width: 100%; background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%); border-radius: 0 0 12px 12px; border: 4px solid #2a2a2a; border-top: none; padding: 8px; display: flex; flex-direction: row; align-items: stretch; gap: 8px; transform: translateZ(0px) rotateX(-2deg); box-shadow: inset 0 1px 2px rgba(0,0,0,0.1), inset 0 -1px 3px rgba(255,255,255,0.6), 0 6px 12px rgba(0,0,0,0.2); }
.laptop-keyboard {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 4px;
    background: radial-gradient(ellipse, rgba(0,0,0,0.2) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
  
  @media (max-width: 480px) {
    border-radius: 0 0 8px 8px;
    border: 3px solid #2a2a2a;
    border-top: none;
    padding: 3px;
    gap: 3px;
    transform: translateZ(0px) rotateX(-1deg);
    box-shadow: 
      inset 0 1px 1px rgba(0,0,0,0.1),
      inset 0 -1px 2px rgba(255,255,255,0.6),
      0 4px 8px rgba(0,0,0,0.2);
  }
}
.keyboard-keys { flex: 1; display: flex; flex-direction: column; gap: 2px; min-height: 60px; }
.keyboard-keys {
  @media (max-width: 480px) {
    gap: 0.5px;
    min-height: 38px;
  }
}
.speaker-grille { width: 45px; height: 28px; background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%); border-radius: 3px; display: flex; align-items: center; justify-content: center; align-self: flex-start; }
.speaker-grille {
  @media (max-width: 480px) {
    width: 27px;
    height: 18px;
    border-radius: 2px;
  }
}
.speaker-holes { display: grid; grid-template-columns: repeat(12, 1fr); grid-template-rows: repeat(5, 1fr); gap: 0.8px; width: 37px; height: 20px; }
.speaker-holes {
  @media (max-width: 480px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.6px;
    width: 23px;
    height: 12px;
  }
}
.speaker-hole { width: 1px; height: 1px; background: #333; border-radius: 50%; box-shadow: inset 0 0.2px 0.5px rgba(0,0,0,0.4); }
.speaker-hole {
  @media (max-width: 480px) {
    &:nth-child(n+41) { display: none; }
  }
}
.keyboard-row { display: flex; gap: 2px; justify-content: center; align-items: center; }
.keyboard-row {
  @media (max-width: 480px) { gap: 0.5px; }
}
.key { height: 8px; background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%); border-radius: 2px; border: 1px solid #bbb; box-shadow: 0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 0 rgba(0,0,0,0.1); font-size: 4px; color: #333; display: flex; align-items: center; justify-content: center; font-weight: 500; text-transform: lowercase; transition: all 0.1s ease; transform: translateZ(1px); }
.key {
  @media (max-width: 480px) {
    height: 6px;
    border-radius: 1px;
    font-size: 3px;
    box-shadow: 
      0 0.5px 1px rgba(0,0,0,0.15), 
      inset 0 0.5px 0 rgba(255,255,255,0.9),
      inset 0 -0.5px 0 rgba(0,0,0,0.1);
  }
}
.key:hover { background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #e0e0e0 100%); transform: translateZ(1px) translateY(0.5px); box-shadow: 0 0.5px 1px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.15); }

.function-row .key { width: 12px; }
.function-key { font-size: 3px !important; text-transform: uppercase; }
.number-row .key { width: 12px; }
.backspace { width: 20px !important; font-size: 6px !important; }
.qwerty-row .key { width: 12px; }
.tab { width: 18px !important; font-size: 3px !important; text-transform: uppercase; }
.backslash { width: 16px !important; }
.asdf-row .key { width: 12px; }
.caps { width: 22px !important; font-size: 3px !important; text-transform: uppercase; }
.enter { width: 24px !important; font-size: 6px !important; }
.zxcv-row .key { width: 12px; }
.shift-left { width: 26px !important; font-size: 3px !important; text-transform: uppercase; }
.shift-right { width: 30px !important; font-size: 3px !important; text-transform: uppercase; }
.bottom-row .key { width: 12px; }
.fn, .ctrl, .alt { width: 14px !important; font-size: 3px !important; text-transform: uppercase; }
.cmd { width: 16px !important; font-size: 6px !important; }
.spacebar { width: 60px !important; background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%); }
.arrow { width: 10px !important; font-size: 5px !important; }

.floating-elements { position: absolute; width: 100%; height: 100%; pointer-events: none; }
.floating-code { position: absolute; font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; font-weight: bold; color: #666; font-size: 18px; animation: float 4s ease-in-out infinite; opacity: 0.6; }

.code-1 { top: 10%; left: 10%; animation-delay: 0s; color: #ff6b6b; }
.code-2 { top: 20%; right: 15%; animation-delay: 0.5s; color: #4ecdc4; }
.code-3 { bottom: 30%; left: 5%; animation-delay: 1s; color: #ffe66d; }
.code-4 { bottom: 20%; right: 10%; animation-delay: 1.5s; color: #95e1d3; }
.code-5 { top: 50%; left: 0%; animation-delay: 2s; color: #a8e6cf; }
.code-6 { top: 60%; right: 0%; animation-delay: 2.5s; color: #ffd93d; }
.code-7 { top: 5%; left: 25%; animation-delay: 3s; color: #ff9ff3; }
.code-8 { top: 35%; right: 5%; animation-delay: 3.5s; color: #54a0ff; }
.code-9 { bottom: 10%; left: 20%; animation-delay: 4s; color: #5f27cd; }
.code-10 { top: 75%; left: 15%; animation-delay: 0.2s; color: #00d2d3; }
.code-11 { top: 15%; left: 50%; animation-delay: 1.2s; color: #ff6348; }
.code-12 { bottom: 40%; right: 25%; animation-delay: 1.8s; color: #2ed573; }
.code-13 { top: 40%; left: 8%; animation-delay: 2.2s; color: #ffa502; }
.code-14 { bottom: 5%; right: 30%; animation-delay: 2.8s; color: #3742fa; }
.code-15 { top: 80%; right: 8%; animation-delay: 3.2s; color: #f368e0; }
.code-16 { top: 25%; left: 35%; animation-delay: 3.8s; color: #ff3838; }
.code-17 { bottom: 15%; left: 40%; animation-delay: 4.2s; color: #7bed9f; }
.code-18 { bottom: 8%; right: 40%; animation-delay: 4.5s; color: #70a1ff; }
.code-19 { top: 30%; left: 30%; animation-delay: 0.8s; color: #ff7675; }
.code-20 { top: 65%; left: 25%; animation-delay: 1.3s; color: #6c5ce7; }
.code-21 { top: 45%; right: 20%; animation-delay: 1.7s; color: #fd79a8; }
.code-22 { bottom: 25%; left: 30%; animation-delay: 2.3s; color: #00b894; }
.code-23 { top: 85%; left: 35%; animation-delay: 2.7s; color: #e17055; }
.code-24 { top: 55%; right: 35%; animation-delay: 3.1s; color: #0984e3; }
.code-25 { bottom: 35%; right: 5%; animation-delay: 3.6s; color: #00cec9; }
.code-26 { top: 70%; left: 5%; animation-delay: 4.1s; color: #fdcb6e; }
.code-27 { top: 12%; right: 30%; animation-delay: 0.3s; color: #e84393; }
.code-28 { bottom: 50%; left: 12%; animation-delay: 1.6s; color: #74b9ff; }
.code-29 { top: 90%; right: 20%; animation-delay: 2.1s; color: #55a3ff; }
.code-30 { bottom: 45%; right: 15%; }
/* Added positions for additional symbols (31–60) */
.code-31 { top: 8%; left: 60%; animation-delay: 0.4s; color: #ff6b6b; }
.code-32 { top: 28%; right: 50%; animation-delay: 0.9s; color: #4ecdc4; }
.code-33 { bottom: 22%; left: 55%; animation-delay: 1.4s; color: #ffe66d; }
.code-34 { top: 42%; right: 45%; animation-delay: 1.9s; color: #95e1d3; }
.code-35 { top: 52%; left: 65%; animation-delay: 2.4s; color: #a8e6cf; }
.code-36 { bottom: 32%; right: 55%; animation-delay: 2.9s; color: #ffd93d; }
.code-37 { top: 18%; left: 70%; animation-delay: 3.4s; color: #ff9ff3; }
.code-38 { top: 66%; right: 60%; animation-delay: 3.9s; color: #54a0ff; }
.code-39 { bottom: 12%; left: 75%; animation-delay: 0.6s; color: #5f27cd; }
.code-40 { top: 82%; left: 70%; animation-delay: 1.1s; color: #00d2d3; }
.code-41 { top: 26%; left: 80%; animation-delay: 1.6s; color: #ff6348; }
.code-42 { bottom: 46%; right: 65%; animation-delay: 2.1s; color: #2ed573; }
.code-43 { top: 36%; left: 85%; animation-delay: 2.6s; color: #ffa502; }
.code-44 { bottom: 18%; right: 75%; animation-delay: 3.1s; color: #3742fa; }
.code-45 { top: 88%; right: 68%; animation-delay: 3.6s; color: #f368e0; }
.code-46 { top: 32%; left: 15%; animation-delay: 0.7s; color: #ff3838; }
.code-47 { bottom: 28%; left: 85%; animation-delay: 1.3s; color: #7bed9f; }
.code-48 { bottom: 14%; right: 85%; animation-delay: 1.8s; color: #70a1ff; }
.code-49 { top: 24%; left: 25%; animation-delay: 2.3s; color: #ff7675; }
.code-50 { top: 58%; left: 10%; animation-delay: 2.8s; color: #6c5ce7; }
.code-51 { top: 48%; right: 10%; animation-delay: 3.3s; color: #fd79a8; }
.code-52 { bottom: 36%; left: 8%; animation-delay: 3.8s; color: #00b894; }
.code-53 { top: 78%; left: 5%; animation-delay: 0.2s; color: #e17055; }
.code-54 { top: 56%; right: 8%; animation-delay: 0.8s; color: #0984e3; }
.code-55 { bottom: 26%; right: 12%; animation-delay: 1.5s; color: #00cec9; }
.code-56 { top: 68%; left: 88%; animation-delay: 2.2s; color: #fdcb6e; }
.code-57 { top: 14%; right: 12%; animation-delay: 2.9s; color: #e84393; }
.code-58 { bottom: 52%; left: 92%; animation-delay: 3.5s; color: #74b9ff; }
.code-59 { top: 92%; right: 8%; animation-delay: 0.5s; color: #55a3ff; }
.code-60 { bottom: 42%; right: 6%; animation-delay: 1.25s; color: #a29bfe; }
/* Added positions for additional symbols (61–90) */
.code-61 { top: 6%; left: 72%; animation-delay: 0.35s; color: #00a8ff; }
.code-62 { top: 16%; right: 58%; animation-delay: 0.85s; color: #ff6b6b; }
.code-63 { bottom: 18%; left: 68%; animation-delay: 1.15s; color: #2ed573; }
.code-64 { top: 38%; right: 62%; animation-delay: 1.65s; color: #ff7675; }
.code-65 { top: 48%; left: 78%; animation-delay: 2.05s; color: #a29bfe; }
.code-66 { bottom: 26%; right: 68%; animation-delay: 2.45s; color: #fdcb6e; }
.code-67 { top: 22%; left: 82%; animation-delay: 2.85s; color: #6c5ce7; }
.code-68 { top: 62%; right: 72%; animation-delay: 3.25s; color: #54a0ff; }
.code-69 { bottom: 8%; left: 84%; animation-delay: 3.65s; color: #5f27cd; }
.code-70 { top: 86%; left: 78%; animation-delay: 0.55s; color: #00d2d3; }
.code-71 { top: 28%; left: 88%; animation-delay: 1.05s; color: #ff6348; }
.code-72 { bottom: 44%; right: 70%; animation-delay: 1.55s; color: #2ed573; }
.code-73 { top: 34%; left: 92%; animation-delay: 2.05s; color: #ffa502; }
.code-74 { bottom: 16%; right: 80%; animation-delay: 2.55s; color: #3742fa; }
.code-75 { top: 90%; right: 72%; animation-delay: 3.05s; color: #f368e0; }
.code-76 { top: 30%; left: 12%; animation-delay: 0.75s; color: #ff3838; }
.code-77 { bottom: 24%; left: 92%; animation-delay: 1.25s; color: #7bed9f; }
.code-78 { bottom: 12%; right: 90%; animation-delay: 1.75s; color: #70a1ff; }
.code-79 { top: 20%; left: 22%; animation-delay: 2.25s; color: #ff7675; }
.code-80 { top: 60%; left: 8%; animation-delay: 2.75s; color: #6c5ce7; }
.code-81 { top: 46%; right: 8%; animation-delay: 3.25s; color: #fd79a8; }
.code-82 { bottom: 34%; left: 6%; animation-delay: 3.75s; color: #00b894; }
.code-83 { top: 76%; left: 3%; animation-delay: 0.15s; color: #e17055; }
.code-84 { top: 54%; right: 4%; animation-delay: 0.95s; color: #0984e3; }
.code-85 { bottom: 24%; right: 6%; animation-delay: 1.35s; color: #00cec9; }
.code-86 { top: 66%; left: 92%; animation-delay: 2.15s; color: #fdcb6e; }
.code-87 { top: 12%; right: 6%; animation-delay: 2.95s; color: #e84393; }
.code-88 { bottom: 50%; left: 94%; animation-delay: 3.45s; color: #74b9ff; }
.code-89 { top: 94%; right: 2%; animation-delay: 0.45s; color: #55a3ff; }
.code-90 { bottom: 40%; right: 3%; animation-delay: 1.15s; color: #a29bfe; }
/* Ring around the animation to fill nearby whitespace */
.code-91 { top: 35%; left: 50%; animation-delay: 0.35s; color: #6c5ce7; font-size: 14px; opacity: 0.5; }
.code-92 { top: 42%; left: 62%; animation-delay: 0.65s; color: #ff6b6b; font-size: 14px; opacity: 0.5; }
.code-93 { top: 50%; left: 70%; animation-delay: 0.95s; color: #2ed573; font-size: 14px; opacity: 0.5; }
.code-94 { top: 58%; left: 62%; animation-delay: 1.25s; color: #ffa502; font-size: 14px; opacity: 0.5; }
.code-95 { top: 65%; left: 50%; animation-delay: 1.55s; color: #3742fa; font-size: 14px; opacity: 0.5; }
.code-96 { top: 58%; left: 38%; animation-delay: 1.85s; color: #f368e0; font-size: 14px; opacity: 0.5; }
.code-97 { top: 50%; left: 30%; animation-delay: 2.15s; color: #ff3838; font-size: 14px; opacity: 0.5; }
.code-98 { top: 42%; left: 38%; animation-delay: 2.45s; color: #7bed9f; font-size: 14px; opacity: 0.5; }
.code-99 { top: 46%; left: 50%; animation-delay: 2.75s; color: #00cec9; font-size: 14px; opacity: 0.5; }
.code-100 { top: 54%; left: 50%; animation-delay: 3.05s; color: #fdcb6e; font-size: 14px; opacity: 0.5; }
.code-101 { top: 46%; left: 60%; animation-delay: 3.35s; color: #0984e3; font-size: 14px; opacity: 0.5; }
.code-102 { top: 54%; left: 40%; animation-delay: 3.65s; color: #a29bfe; font-size: 14px; opacity: 0.5; }
/* Second tight ring positions near animation */
.code-103 { top: 37%; left: 54%; animation-delay: 0.25s; color: #00a8ff; font-size: 13px; opacity: 0.5; }
.code-104 { top: 44%; left: 58%; animation-delay: 0.55s; color: #ff6b6b; font-size: 13px; opacity: 0.5; }
.code-105 { top: 52%; left: 64%; animation-delay: 0.85s; color: #2ed573; font-size: 13px; opacity: 0.5; }
.code-106 { top: 60%; left: 58%; animation-delay: 1.15s; color: #ffa502; font-size: 13px; opacity: 0.5; }
.code-107 { top: 66%; left: 54%; animation-delay: 1.45s; color: #3742fa; font-size: 13px; opacity: 0.5; }
.code-108 { top: 60%; left: 46%; animation-delay: 1.75s; color: #f368e0; font-size: 13px; opacity: 0.5; }
.code-109 { top: 52%; left: 42%; animation-delay: 2.05s; color: #ff3838; font-size: 13px; opacity: 0.5; }
.code-110 { top: 44%; left: 46%; animation-delay: 2.35s; color: #7bed9f; font-size: 13px; opacity: 0.5; }
.code-111 { top: 48%; left: 54%; animation-delay: 2.65s; color: #00cec9; font-size: 13px; opacity: 0.5; }
.code-112 { top: 56%; left: 54%; animation-delay: 2.95s; color: #fdcb6e; font-size: 13px; opacity: 0.5; }
.code-113 { top: 48%; left: 60%; animation-delay: 3.25s; color: #0984e3; font-size: 13px; opacity: 0.5; }
.code-114 { top: 56%; left: 48%; animation-delay: 3.55s; color: #a29bfe; font-size: 13px; opacity: 0.5; }
/* Micro ring positions (subtle, small, low-opacity) */
.code-115 { top: 43%; left: 52%; animation-delay: 0.20s; color: #8395a7; font-size: 12px; opacity: 0.45; }
.code-116 { top: 47%; left: 56%; animation-delay: 0.40s; color: #57606f; font-size: 12px; opacity: 0.45; }
.code-117 { top: 51%; left: 60%; animation-delay: 0.60s; color: #7f8fa6; font-size: 12px; opacity: 0.45; }
.code-118 { top: 55%; left: 56%; animation-delay: 0.80s; color: #a4b0be; font-size: 12px; opacity: 0.45; }
.code-119 { top: 58%; left: 52%; animation-delay: 1.00s; color: #ced6e0; font-size: 12px; opacity: 0.45; }
.code-120 { top: 55%; left: 48%; animation-delay: 1.20s; color: #57606f; font-size: 12px; opacity: 0.45; }
.code-121 { top: 51%; left: 46%; animation-delay: 1.40s; color: #8395a7; font-size: 12px; opacity: 0.45; }
.code-122 { top: 47%; left: 48%; animation-delay: 1.60s; color: #7f8fa6; font-size: 12px; opacity: 0.45; }
.code-123 { top: 49%; left: 52%; animation-delay: 1.80s; color: #a4b0be; font-size: 12px; opacity: 0.45; }
.code-124 { top: 53%; left: 52%; animation-delay: 2.00s; color: #ced6e0; font-size: 12px; opacity: 0.45; }
.code-125 { top: 53%; left: 58%; animation-delay: 2.20s; color: #57606f; font-size: 12px; opacity: 0.45; }
.code-126 { top: 49%; left: 58%; animation-delay: 2.40s; color: #8395a7; font-size: 12px; opacity: 0.45; }
.code-127 { top: 49%; left: 50%; animation-delay: 2.60s; color: #7f8fa6; font-size: 12px; opacity: 0.45; }
.code-128 { top: 51%; left: 50%; animation-delay: 2.80s; color: #a4b0be; font-size: 12px; opacity: 0.45; }
/* Lower-right quadrant micro fill (kept subtle for readability) */
.code-129 { top: 62%; left: 66%; animation-delay: 0.15s; color: #7f8fa6; font-size: 11px; opacity: 0.42; }
.code-130 { top: 64%; left: 68%; animation-delay: 0.35s; color: #8395a7; font-size: 11px; opacity: 0.42; }
.code-131 { top: 66%; left: 70%; animation-delay: 0.55s; color: #a4b0be; font-size: 11px; opacity: 0.42; }
.code-132 { top: 68%; left: 72%; animation-delay: 0.75s; color: #ced6e0; font-size: 11px; opacity: 0.42; }
.code-133 { top: 70%; left: 74%; animation-delay: 0.95s; color: #57606f; font-size: 11px; opacity: 0.42; }
.code-134 { top: 72%; left: 76%; animation-delay: 1.15s; color: #7f8fa6; font-size: 11px; opacity: 0.42; }
.code-135 { top: 65%; left: 74%; animation-delay: 1.35s; color: #8395a7; font-size: 11px; opacity: 0.42; }
.code-136 { top: 67%; left: 76%; animation-delay: 1.55s; color: #a4b0be; font-size: 11px; opacity: 0.42; }
.code-137 { top: 69%; left: 78%; animation-delay: 1.75s; color: #ced6e0; font-size: 11px; opacity: 0.42; }
.code-138 { top: 71%; left: 76%; animation-delay: 1.95s; color: #57606f; font-size: 11px; opacity: 0.42; }
/* Upper-right quadrant micro fill (subtle for readability) */
.code-139 { top: 42%; left: 72%; animation-delay: 0.20s; color: #7f8fa6; font-size: 11px; opacity: 0.40; }
.code-140 { top: 44%; left: 74%; animation-delay: 0.40s; color: #8395a7; font-size: 11px; opacity: 0.40; }
.code-141 { top: 46%; left: 76%; animation-delay: 0.60s; color: #a4b0be; font-size: 11px; opacity: 0.40; }
.code-142 { top: 48%; left: 78%; animation-delay: 0.80s; color: #ced6e0; font-size: 11px; opacity: 0.40; }
.code-143 { top: 50%; left: 80%; animation-delay: 1.00s; color: #57606f; font-size: 11px; opacity: 0.40; }
.code-144 { top: 45%; left: 82%; animation-delay: 1.20s; color: #7f8fa6; font-size: 11px; opacity: 0.40; }
.code-145 { top: 47%; left: 84%; animation-delay: 1.40s; color: #8395a7; font-size: 11px; opacity: 0.40; }
.code-146 { top: 49%; left: 82%; animation-delay: 1.60s; color: #a4b0be; font-size: 11px; opacity: 0.40; }
.code-147 { top: 43%; left: 78%; animation-delay: 1.80s; color: #ced6e0; font-size: 11px; opacity: 0.40; }
.code-148 { top: 41%; left: 76%; animation-delay: 2.00s; color: #57606f; font-size: 11px; opacity: 0.40; }
/* Above-right of laptop micro fill (kept very subtle) */
.code-149 { top: 30%; left: 76%; animation-delay: 0.20s; color: #7f8fa6; font-size: 10px; opacity: 0.38; }
.code-150 { top: 32%; left: 78%; animation-delay: 0.40s; color: #8395a7; font-size: 10px; opacity: 0.38; }
.code-151 { top: 34%; left: 80%; animation-delay: 0.60s; color: #a4b0be; font-size: 10px; opacity: 0.38; }
.code-152 { top: 36%; left: 82%; animation-delay: 0.80s; color: #ced6e0; font-size: 10px; opacity: 0.38; }
.code-153 { top: 29%; left: 86%; animation-delay: 1.00s; color: #57606f; font-size: 10px; opacity: 0.38; }
.code-154 { top: 31%; left: 88%; animation-delay: 1.20s; color: #7f8fa6; font-size: 10px; opacity: 0.38; }
.code-155 { top: 33%; left: 90%; animation-delay: 1.40s; color: #8395a7; font-size: 10px; opacity: 0.38; }
.code-156 { top: 35%; left: 88%; animation-delay: 1.60s; color: #a4b0be; font-size: 10px; opacity: 0.38; }
.code-157 { top: 31%; left: 82%; animation-delay: 1.80s; color: #ced6e0; font-size: 10px; opacity: 0.38; }
.code-158 { top: 29%; left: 80%; animation-delay: 2.00s; color: #57606f; font-size: 10px; opacity: 0.38; }
/* Above-center of laptop micro fill (very subtle to preserve focus) */
.code-159 { top: 28%; left: 56%; animation-delay: 0.20s; color: #7f8fa6; font-size: 10px; opacity: 0.38; }
.code-160 { top: 26%; left: 60%; animation-delay: 0.40s; color: #8395a7; font-size: 10px; opacity: 0.38; }
.code-161 { top: 24%; left: 64%; animation-delay: 0.60s; color: #a4b0be; font-size: 10px; opacity: 0.38; }
.code-162 { top: 26%; left: 68%; animation-delay: 0.80s; color: #ced6e0; font-size: 10px; opacity: 0.38; }
.code-163 { top: 28%; left: 72%; animation-delay: 1.00s; color: #57606f; font-size: 10px; opacity: 0.38; }
.code-164 { top: 30%; left: 68%; animation-delay: 1.20s; color: #7f8fa6; font-size: 10px; opacity: 0.38; }
.code-165 { top: 30%; left: 60%; animation-delay: 1.40s; color: #8395a7; font-size: 10px; opacity: 0.38; }
.code-166 { top: 28%; left: 64%; animation-delay: 1.60s; color: #a4b0be; font-size: 10px; opacity: 0.38; }
.code-167 { top: 26%; left: 72%; animation-delay: 1.80s; color: #ced6e0; font-size: 10px; opacity: 0.38; }
.code-168 { top: 24%; left: 58%; animation-delay: 2.00s; color: #57606f; font-size: 10px; opacity: 0.38; }
/* Above-top of laptop micro fill (pushed further left and down; subtle) */
.code-189 { top: 26%; left: 36%; animation-delay: 0.25s; color: #7f8fa6; font-size: 10px; opacity: 0.36; }
.code-190 { top: 24%; left: 40%; animation-delay: 0.45s; color: #8395a7; font-size: 10px; opacity: 0.36; }
.code-191 { top: 22%; left: 44%; animation-delay: 0.65s; color: #a4b0be; font-size: 10px; opacity: 0.36; }
.code-192 { top: 24%; left: 48%; animation-delay: 0.85s; color: #ced6e0; font-size: 10px; opacity: 0.36; }
.code-193 { top: 26%; left: 52%; animation-delay: 1.05s; color: #57606f; font-size: 10px; opacity: 0.36; }
.code-194 { top: 28%; left: 56%; animation-delay: 1.25s; color: #7f8fa6; font-size: 10px; opacity: 0.36; }
.code-195 { top: 24%; left: 52%; animation-delay: 1.45s; color: #8395a7; font-size: 10px; opacity: 0.36; }
.code-196 { top: 26%; left: 44%; animation-delay: 1.65s; color: #a4b0be; font-size: 10px; opacity: 0.36; }
.code-197 { top: 28%; left: 40%; animation-delay: 1.85s; color: #ced6e0; font-size: 10px; opacity: 0.36; }
.code-198 { top: 22%; left: 38%; animation-delay: 2.05s; color: #57606f; font-size: 10px; opacity: 0.36; }
/* Left of laptop micro fill (subtle for readability) */
.code-169 { top: 37%; left: 26%; animation-delay: 0.25s; color: #7f8fa6; font-size: 11px; opacity: 0.42; }
.code-170 { top: 35%; left: 24%; animation-delay: 0.45s; color: #8395a7; font-size: 11px; opacity: 0.42; }
.code-171 { top: 39%; left: 28%; animation-delay: 0.65s; color: #a4b0be; font-size: 11px; opacity: 0.42; }
.code-172 { top: 41%; left: 30%; animation-delay: 0.85s; color: #ced6e0; font-size: 11px; opacity: 0.42; }
.code-173 { top: 43%; left: 32%; animation-delay: 1.05s; color: #57606f; font-size: 11px; opacity: 0.42; }
.code-174 { top: 39%; left: 34%; animation-delay: 1.25s; color: #7f8fa6; font-size: 11px; opacity: 0.42; }
.code-175 { top: 41%; left: 32%; animation-delay: 1.45s; color: #8395a7; font-size: 11px; opacity: 0.42; }
.code-176 { top: 37%; left: 30%; animation-delay: 1.65s; color: #a4b0be; font-size: 11px; opacity: 0.42; }
.code-177 { top: 35%; left: 28%; animation-delay: 1.85s; color: #ced6e0; font-size: 11px; opacity: 0.42; }
.code-178 { top: 43%; left: 24%; animation-delay: 2.05s; color: #57606f; font-size: 11px; opacity: 0.42; }
/* Extra left of laptop micro fill (subtle, pushed outward) */
.code-179 { top: 37%; left: 23%; animation-delay: 0.25s; color: #7f8fa6; font-size: 11px; opacity: 0.40; }
.code-180 { top: 35%; left: 21%; animation-delay: 0.45s; color: #8395a7; font-size: 11px; opacity: 0.40; }
.code-181 { top: 39%; left: 19%; animation-delay: 0.65s; color: #a4b0be; font-size: 11px; opacity: 0.40; }
.code-182 { top: 41%; left: 21%; animation-delay: 0.85s; color: #ced6e0; font-size: 11px; opacity: 0.40; }
.code-183 { top: 43%; left: 23%; animation-delay: 1.05s; color: #57606f; font-size: 11px; opacity: 0.40; }
.code-184 { top: 45%; left: 21%; animation-delay: 1.25s; color: #7f8fa6; font-size: 11px; opacity: 0.40; }
.code-185 { top: 47%; left: 19%; animation-delay: 1.45s; color: #8395a7; font-size: 11px; opacity: 0.40; }
.code-186 { top: 49%; left: 21%; animation-delay: 1.65s; color: #a4b0be; font-size: 11px; opacity: 0.40; }
.code-187 { top: 51%; left: 23%; animation-delay: 1.85s; color: #ced6e0; font-size: 11px; opacity: 0.40; }
.code-188 { top: 49%; left: 19%; animation-delay: 2.05s; color: #57606f; font-size: 11px; opacity: 0.40; }

@keyframes screenGlow { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
@keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
@keyframes keyPress { 0% { transform: translateY(0); box-shadow: 0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8); } 50% { transform: translateY(1px); box-shadow: 0 0.5px 1px rgba(0,0,0,0.2), inset 0 0.5px 0 rgba(255,255,255,0.9); background: linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%); } 100% { transform: translateY(0); box-shadow: 0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8); } }
@keyframes typeGlow { 0%, 100% { background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%); } 50% { background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%); } }
.key.typing { animation: keyPress 0.15s ease-out; }
.key.active-typing { animation: typeGlow 0.3s ease-in-out; }
@keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; } 25% { transform: translateY(-10px) rotate(5deg); opacity: 0.9; } 50% { transform: translateY(-5px) rotate(-3deg); opacity: 0.8; } 75% { transform: translateY(-15px) rotate(3deg); opacity: 0.9; } }

.scroll-indicator { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); @include flex-column-center; gap: 0.5rem; color: #000000; opacity: 0.65; cursor: pointer; transition: opacity 0.3s ease; }
.scroll-indicator:hover { opacity: 1; }
.scroll-mouse { width: 24px; height: 40px; border: 2px solid #000000; border-radius: 12px; position: relative; }
.scroll-wheel { width: 4px; height: 8px; background: #000000; border-radius: 2px; position: absolute; top: 8px; left: 50%; transform: translateX(-50%); animation: scroll-wheel 2s infinite; }
.scroll-text { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; font-weight: 550; }
@keyframes scroll-wheel { 0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); } 50% { opacity: 0.5; transform: translateX(-50%) translateY(8px); } }

.projects-view {
  padding-top: 0; // Avoid double offset; hero-section already accounts for nav
}

.projects-hero {
  background: #ffffff;
  padding: 8rem 0 1px 0; // Increase top spacing above "My Projects"
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

/* Ensure Projects hero text is centered like Home across breakpoints */
.projects-hero .hero-content {
  display: block;
  text-align: center;
  margin: 0 auto;
}

.projects-hero .page-title,
.projects-hero .page-subtitle {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
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

  &.btn-secondary {
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

/* Overrides to mirror Home hero exactly */
.computer-animation {
  @media (max-width: 480px) {
    width: 320px;
    height: 320px;
  }
}

.laptop {
  z-index: 2;

  &:hover {
    transform: rotateX(6deg) rotateY(-1deg) scale(1.01);
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 190px;
    transform: rotateX(6deg) rotateY(-1deg);
    
    &:hover {
      transform: rotateX(4deg) rotateY(0deg) scale(1.005);
    }
  }
}

.laptop-screen {
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.05) 50%, transparent 70%);
    animation: screenGlow 3s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    border-radius: 8px 8px 0 0;
    pointer-events: none;
  }
}

.screen-content {
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
}

.floating-elements {
  z-index: 0; /* Ensure floating symbols sit behind the laptop and text */
  /* Expand coverage area so symbols fill more of the hero */
  width: 150%;
  height: 150%;
  left: -25%;
  top: -25%;
  
  @media (max-width: 480px) {
    width: 140%;
    height: 140%;
    left: -20%;
    top: -20%;
  }
  
  @media (min-width: 1200px) {
    width: 180%;
    height: 180%;
    left: -40%;
    top: -40%;
  }
}

/* Ensure hero text sits above background symbols for readability */
.hero-text {
  position: relative;
  z-index: 3;
}

.arrow {
  &.wide { width: 28px; }
  &:nth-child(odd) { animation-delay: 0.5s; }
}
</style>
