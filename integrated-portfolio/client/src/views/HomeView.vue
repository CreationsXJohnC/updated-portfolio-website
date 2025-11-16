<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-logo">
        <img :src="jccWhiteLogo" alt="JCC White Logo" class="hero-logo-img" />
      </div>
      <div class="hero-tagline" aria-live="polite">
        <span class="typewriter">{{ typedText }}</span>
      </div>
      <div class="hero-container" v-if="false">
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
              </div>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="scroll-indicator" v-if="false" @click="scrollToBottom">
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
        
        <div v-if="loading" class="loading-state">
          <p>Loading featured projects...</p>
        </div>
        
        <div v-else-if="error" class="error-state">
          <p>Error loading projects: {{ error.message }}</p>
        </div>
        
        <div class="projects-grid" v-else-if="featuredProjects.length">
          <div 
            v-for="project in featuredProjects" 
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import jccWhiteLogo from '@/assets/images/logos/JCC - White.png'

const GET_FEATURED_PROJECTS = gql`
  query GetFeaturedProjects {
    projects(featured: true) {
      id
      title
      description
      shortDescription
      imageUrl
      technologies
      liveUrl
      githubUrl
      featured
      order
    }
  }
`

export default {
  name: 'HomeView',
  setup() {
    const router = useRouter()
    const typedText = ref('')
    const fullTagline = 'Think 2 Create & Create 2 Inspire.'
    
    // Fetch featured projects from API
    const { result, loading, error } = useQuery(GET_FEATURED_PROJECTS, undefined, { fetchPolicy: 'cache-and-network' })

    onMounted(() => {
      let i = 0
      const speed = 180
      const timer = setInterval(() => {
        typedText.value = fullTagline.slice(0, i + 1)
        i++
        if (i >= fullTagline.length) {
          clearInterval(timer)
        }
      }, speed)
    })
    
    const featuredProjects = computed(() => {
      const list = result.value?.projects || []
      // Extra safety: filter by featured flag, sort by order, cap to 3
      return list
        .filter(p => p && p.featured === true)
        .sort((a, b) => (a?.order ?? 999) - (b?.order ?? 999))
        .slice(0, 3)
    })

    const navigateToProject = (projectId) => {
      router.push(`/projects/${projectId}`)
    }

    const scrollToBottom = () => {
      const targetPosition = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo(0, targetPosition)
    }

    return {
       featuredProjects,
       loading,
       error,
       navigateToProject,
       scrollToBottom,
       jccWhiteLogo,
       typedText,
     }
   },
   
   mounted() {
      const hasTypingUI = document.querySelector('.keyboard-keys') || document.getElementById('dynamic-code');
      if (hasTypingUI) {
        this.startKeyboardTyping();
        this.startScreenTyping();
      }
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
          // Decide what to type next
          const randomAction = Math.random()
          
          if (randomAction < 0.7 && !isTypingSentence) {
            // Start typing a sentence
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
                // Finished sentence, add space
                setTimeout(() => pressKey(' '), 100 + Math.random() * 200)
                isTypingSentence = false
              }
            }
          } else {
            // Random key press or special action
            if (randomAction < 0.1) {
              pressKey('backspace')
            } else if (randomAction < 0.15) {
              pressKey('enter')
            } else if (randomAction < 0.2) {
              pressKey('shift')
            } else {
              // Random letter
              const letters = 'abcdefghijklmnopqrstuvwxyz'
              pressKey(letters[Math.floor(Math.random() * letters.length)])
            }
          }
          
          // Determine next typing delay
          let nextDelay
          if (isTypingSentence && typingBurst > 0) {
            // Fast typing within a sentence
            nextDelay = 80 + Math.random() * 120
          } else if (isTypingSentence) {
            // Slight pause between characters
            nextDelay = 150 + Math.random() * 200
          } else {
            // Longer pause between actions
            nextDelay = 500 + Math.random() * 1500
          }
          
          setTimeout(simulateTyping, nextDelay)
        }
        
        // Start typing simulation after a short delay
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
         
         // Realistic human typing speed (60-80 WPM average)
         const baseTypingSpeed = 250; // milliseconds per character (truly human speed)
        const speedVariation = 150; // larger random variation for more natural feel
        const lineDelay = 1500; // longer pause between lines (realistic thinking time)
        
        const typeCharacter = () => {
           if (currentLineIndex >= codeLines.length) {
             // Restart after a pause (like someone finished coding and starts again)
             setTimeout(() => {
               currentLineIndex = 0;
               currentCharIndex = 0;
               typedContent = '';
               document.getElementById('dynamic-code').innerHTML = '';
               // Reset scroll position
               const screenContent = document.querySelector('.screen-content');
               if (screenContent) {
                 screenContent.scrollTop = 0;
               }
               typeCharacter();
             }, 3000); // 3 second pause before restart
             return;
           }

           const currentLine = codeLines[currentLineIndex];
           
           if (currentCharIndex < currentLine.length) {
             // Type character with realistic speed variation
             const char = currentLine[currentCharIndex];
             typedContent += char === ' ' ? '&nbsp;' : char;
             currentCharIndex++;
             
             // Update current line being typed
             const dynamicContainer = document.getElementById('dynamic-code');
             let currentLineElement = dynamicContainer.lastElementChild;
             
             // Create new line element if needed
             if (!currentLineElement || currentLineElement.dataset.lineIndex != currentLineIndex) {
               const newLineDiv = document.createElement('div');
               newLineDiv.className = 'code-line';
               newLineDiv.dataset.lineIndex = currentLineIndex;
               dynamicContainer.appendChild(newLineDiv);
               currentLineElement = newLineDiv;
             }
             
             // Update the content with syntax highlighting and add cursor
             currentLineElement.innerHTML = this.formatCodeWithSyntaxHighlighting(typedContent) + '<span class="typing-cursor">|</span>';
             
             // Smooth scroll to keep the cursor visible (only every 8 characters to reduce glitching)
             if (currentCharIndex % 8 === 0 || currentCharIndex === currentLine.length - 1) {
               const screenContent = document.querySelector('.screen-content');
               const cursor = document.querySelector('.typing-cursor');
               if (screenContent && cursor) {
                 // Use requestAnimationFrame for smoother scrolling
                 requestAnimationFrame(() => {
                   // Calculate cursor position relative to screen content
                   const cursorRect = cursor.getBoundingClientRect();
                   const screenRect = screenContent.getBoundingClientRect();
                   
                   // Check if cursor is near the bottom of the visible area
                   const cursorBottomOffset = cursorRect.bottom - screenRect.bottom;
                   
                   if (cursorBottomOffset > -80) { // 80px buffer from bottom
                     // Scroll to keep cursor visible with padding, but don't scroll to the very bottom
                     const scrollTarget = screenContent.scrollTop + cursorBottomOffset + 20;
                     const maxScroll = screenContent.scrollHeight - screenContent.clientHeight - 80; // Leave 80px at bottom
                     screenContent.scrollTo({
                       top: Math.min(scrollTarget, maxScroll),
                       behavior: 'smooth'
                     });
                   }
                 });
               }
             }
             
             // Calculate realistic typing speed with variation
             let typingSpeed = baseTypingSpeed + (Math.random() * speedVariation - speedVariation/2);
             
             // Natural human typing patterns
             
             // Slower for special characters and punctuation (thinking time)
             if (/[{}[\]();,.:'"=<>!@#$%^&*]/.test(char)) {
               typingSpeed *= 1.8;
             }
             
             // Faster for spaces and common letters
             if (char === ' ') {
               typingSpeed *= 0.6;
             }
             
             // Slower for numbers (require more thought)
             if (/[0-9]/.test(char)) {
               typingSpeed *= 1.3;
             }
             
             // Random hesitations (like thinking or correcting)
             if (Math.random() < 0.08) { // 8% chance of hesitation
               typingSpeed *= 2.5;
             }
             
             // Occasional burst typing (when in flow)
             if (Math.random() < 0.05) { // 5% chance of burst
               typingSpeed *= 0.4;
             }
             
             // Longer pauses at word boundaries (natural reading rhythm)
             if (char === ' ' && Math.random() < 0.15) { // 15% chance at spaces
               typingSpeed *= 2.0;
             }
             
             // Continue typing next character
             setTimeout(typeCharacter, Math.max(30, typingSpeed));
           } else {
             // End of line - remove cursor from completed line and move to next line
             const dynamicContainer = document.getElementById('dynamic-code');
             let completedLineElement = dynamicContainer.lastElementChild;
             if (completedLineElement) {
               // Remove cursor from completed line
               completedLineElement.innerHTML = this.formatCodeWithSyntaxHighlighting(typedContent);
             }
             
             currentLineIndex++;
             currentCharIndex = 0;
             typedContent = '';
             
             // Pause between lines (like thinking/reading time)
             setTimeout(typeCharacter, lineDelay);
           }
         };

        // Start typing after a short delay
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

.home-view {
  min-height: 100vh;
}

.hero-section {
  min-height: 100vh;
  @include flex-center;
  flex-direction: column;
  position: relative;
  background: #000000;
  padding-top: 100px; // Account for fixed navigation bar
  padding-bottom: 6rem; // Ensure space for scroll indicator
  
  @media (max-width: 1024px) {
    padding-top: 120px; // Extra padding at 1024px breakpoint to ensure text stays below nav
  }
  
  @media (max-width: 480px) {
    padding-top: 100px;
    padding-bottom: 8rem; // Extra bottom padding for smallest screens
  }
}

.hero-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.hero-logo-img {
  display: block;
  width: clamp(560px, 54vw, 1120px);
  height: auto;
}

.hero-tagline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4.5rem;
  color: #ffffff;
  font-size: clamp(1.1rem, 2.6vw, 2rem);
  font-weight: 600;
  text-align: center;
  line-height: 1.0;
  transform: translateX(0.75rem);
}

// Responsive tweaks to maintain consistent visual spacing
@media (max-width: 640px) {
  .hero-tagline {
    margin-top: -3rem;
    transform: translateX(0.3rem);
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .hero-tagline {
    margin-top: -4rem;
    transform: translateX(0.5rem);
  }
}

.typewriter {
  display: inline-block;
  position: relative;
}

.typewriter::after {
  content: '';
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #ffffff;
  margin-left: 4px;
  animation: caret-blink 1.2s step-end infinite;
  vertical-align: -0.15em;
}

@keyframes caret-blink {
  50% { opacity: 0; }
}

// Responsive caret blink pacing
@media (max-width: 640px) {
  .typewriter::after {
    animation-duration: 1.0s;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .typewriter::after {
    animation-duration: 1.15s;
  }
}

@media (min-width: 1025px) {
  .typewriter::after {
    animation-duration: 1.3s;
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
  margin-bottom: 0.8rem;
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

// Computer Animation Styles
.computer-animation {
  position: relative;
  width: 550px;
  height: 550px;
  @include flex-center;

  @include mobile {
    width: 400px;
    height: 600px;
  }
  
  @media (max-width: 480px) {
    width: 320px;
    height: 320px;
  }
}

.laptop {
  position: relative;
  width: 320px;
  height: 230px;
  z-index: 2;
  perspective: 800px;
  transform-style: preserve-3d;
  transform: rotateX(8deg) rotateY(-2deg);
  transition: transform 0.3s ease;
  
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
  width: 100%;
  height: 160px;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  border-radius: 12px 12px 0 0;
  border: 4px solid #2a2a2a;
  position: relative;
  overflow: hidden;
  transform: translateZ(2px);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.3),
    inset 0 0 10px rgba(255, 255, 255, 0.05);
  
  @media (max-width: 480px) {
    height: 130px;
    border-radius: 10px 10px 0 0;
    border: 3px solid #2a2a2a;
    transform: translateZ(1px);
    box-shadow: 
      0 3px 8px rgba(0, 0, 0, 0.3),
      inset 0 0 8px rgba(255, 255, 255, 0.05);
  }

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
  padding: 14px 14px 60px 14px;
  font-family: var(--font-primary);
  font-size: 12px;
  line-height: 1.4;
  color: #fff;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
}

.code-line {
  margin-bottom: 3px;
}

#dynamic-code {
  margin-bottom: 80px;
}

.code-keyword { color: #ff6b6b; }
.code-variable { color: #4ecdc4; }
.code-operator { color: #ffe66d; }
.code-string { color: #95e1d3; }
.code-function { color: #a8e6cf; }
.code-bracket { color: #ffd93d; }
.code-comment { color: #888; }

.typing-cursor {
  display: inline-block !important;
  animation: blink 1s infinite;
  color: #4ecdc4;
  font-weight: bold;
  opacity: 1 !important;
  visibility: visible !important;

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

.laptop-keyboard {
  width: 100%;
  height: auto;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%);
  border-radius: 0 0 12px 12px;
  border: 4px solid #2a2a2a;
  border-top: none;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 8px;
  transform: translateZ(0px) rotateX(-2deg);
  box-shadow: 
    inset 0 1px 2px rgba(0,0,0,0.1),
    inset 0 -1px 3px rgba(255,255,255,0.6),
    0 6px 12px rgba(0,0,0,0.2);
  
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

.keyboard-keys {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-height: 60px;
  
  @media (max-width: 480px) {
    gap: 0.5px;
    min-height: 38px;
  }
}

.speaker-grille {
  width: 45px;
  height: 28px;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 50%, #d0d0d0 100%);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  
  @media (max-width: 480px) {
    width: 27px;
    height: 18px;
    border-radius: 2px;
  }
}

.speaker-holes {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.8px;
  width: 37px;
  height: 20px;
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 0.6px;
    width: 23px;
    height: 12px;
  }
}

.speaker-hole {
  width: 1px;
  height: 1px;
  background: #333;
  border-radius: 50%;
  box-shadow: inset 0 0.2px 0.5px rgba(0,0,0,0.4);
  
  @media (max-width: 480px) {
    &:nth-child(n+41) {
      display: none;
    }
  }
}

.left-speaker {
  margin: 0 2px 0 0;
}

.right-speaker {
  margin: 0 2px 0 0;
}

.keyboard-row {
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) {
    gap: 0.5px;
  }
}

.key {
  height: 8px;
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 50%, #e8e8e8 100%);
  border-radius: 2px;
  border: 1px solid #bbb;
  box-shadow: 
    0 1px 2px rgba(0,0,0,0.15), 
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(0,0,0,0.1);
  font-size: 4px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-transform: lowercase;
  animation: none;
  transition: all 0.1s ease;
  transform: translateZ(1px);
  
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

.key:hover {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 50%, #e0e0e0 100%);
  transform: translateZ(1px) translateY(0.5px);
  box-shadow: 
    0 0.5px 1px rgba(0,0,0,0.2), 
    inset 0 1px 0 rgba(255,255,255,0.95),
    inset 0 -1px 0 rgba(0,0,0,0.15);
}

/* Function Keys Row */
.function-row .key {
  width: 12px;
}

.function-key {
  font-size: 3px !important;
  text-transform: uppercase;
}

/* Number Row */
.number-row .key {
  width: 12px;
}

.backspace {
  width: 20px !important;
  font-size: 6px !important;
}

/* QWERTY Row */
.qwerty-row .key {
  width: 12px;
}

.tab {
  width: 18px !important;
  font-size: 3px !important;
  text-transform: uppercase;
}

.backslash {
  width: 16px !important;
}

/* ASDF Row */
.asdf-row .key {
  width: 12px;
}

.caps {
  width: 22px !important;
  font-size: 3px !important;
  text-transform: uppercase;
}

.enter {
  width: 24px !important;
  font-size: 6px !important;
}

/* ZXCV Row */
.zxcv-row .key {
  width: 12px;
}

.shift-left {
  width: 26px !important;
  font-size: 3px !important;
  text-transform: uppercase;
}

.shift-right {
  width: 30px !important;
  font-size: 3px !important;
  text-transform: uppercase;
}

/* Bottom Row */
.bottom-row .key {
  width: 12px;
}

.fn, .ctrl, .alt {
  width: 14px !important;
  font-size: 3px !important;
  text-transform: uppercase;
}

.cmd {
  width: 16px !important;
  font-size: 6px !important;
}

.spacebar {
  width: 60px !important;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
}

.arrow {
  width: 10px !important;
  font-size: 5px !important;
  
  &.wide {
    width: 28px;
  }
  
  &:nth-child(odd) {
    animation-delay: 0.5s;
  }
}



.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.floating-code {
  position: absolute;
  font-family: var(--font-primary);
  font-weight: bold;
  color: #666;
  font-size: 18px;
  animation: float 4s ease-in-out infinite;
  opacity: 0.7;
}

.code-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  color: #ff6b6b;
}

.code-2 {
  top: 20%;
  right: 15%;
  animation-delay: 0.5s;
  color: #4ecdc4;
}

.code-3 {
  bottom: 30%;
  left: 5%;
  animation-delay: 1s;
  color: #ffe66d;
}

.code-4 {
  bottom: 20%;
  right: 10%;
  animation-delay: 1.5s;
  color: #95e1d3;
}

.code-5 {
  top: 50%;
  left: 0%;
  animation-delay: 2s;
  color: #a8e6cf;
}

.code-6 {
  top: 60%;
  right: 0%;
  animation-delay: 2.5s;
  color: #ffd93d;
}

.code-7 {
  top: 5%;
  left: 25%;
  animation-delay: 3s;
  color: #ff9ff3;
}

.code-8 {
  top: 35%;
  right: 5%;
  animation-delay: 3.5s;
  color: #54a0ff;
}

.code-9 {
  bottom: 10%;
  left: 20%;
  animation-delay: 4s;
  color: #5f27cd;
}

.code-10 {
  top: 75%;
  left: 15%;
  animation-delay: 0.2s;
  color: #00d2d3;
}

.code-11 {
  top: 15%;
  left: 50%;
  animation-delay: 1.2s;
  color: #ff6348;
}

.code-12 {
  bottom: 40%;
  right: 25%;
  animation-delay: 1.8s;
  color: #2ed573;
}

.code-13 {
  top: 40%;
  left: 8%;
  animation-delay: 2.2s;
  color: #ffa502;
}

.code-14 {
  bottom: 5%;
  right: 30%;
  animation-delay: 2.8s;
  color: #3742fa;
}

.code-15 {
  top: 80%;
  right: 8%;
  animation-delay: 3.2s;
  color: #f368e0;
}

.code-16 {
  top: 25%;
  left: 35%;
  animation-delay: 3.8s;
  color: #ff3838;
}

.code-17 {
  bottom: 15%;
  left: 40%;
  animation-delay: 4.2s;
  color: #7bed9f;
}

.code-18 {
  bottom: 8%;
  right: 40%;
  animation-delay: 4.5s;
  color: #70a1ff;
}

.code-19 {
  top: 30%;
  left: 30%;
  animation-delay: 0.8s;
  color: #ff7675;
}

.code-20 {
  top: 65%;
  left: 25%;
  animation-delay: 1.3s;
  color: #6c5ce7;
}

.code-21 {
  top: 45%;
  right: 20%;
  animation-delay: 1.7s;
  color: #fd79a8;
}

.code-22 {
  bottom: 25%;
  left: 30%;
  animation-delay: 2.3s;
  color: #00b894;
}

.code-23 {
  top: 85%;
  left: 35%;
  animation-delay: 2.7s;
  color: #e17055;
}

.code-24 {
  top: 55%;
  right: 35%;
  animation-delay: 3.1s;
  color: #0984e3;
}

.code-25 {
  bottom: 35%;
  right: 5%;
  animation-delay: 3.6s;
  color: #00cec9;
}

.code-26 {
  top: 70%;
  left: 5%;
  animation-delay: 4.1s;
  color: #fdcb6e;
}

.code-27 {
  top: 12%;
  right: 30%;
  animation-delay: 0.3s;
  color: #e84393;
}

.code-28 {
  bottom: 50%;
  left: 12%;
  animation-delay: 1.6s;
  color: #74b9ff;
}

.code-29 {
  top: 90%;
  right: 20%;
  animation-delay: 2.1s;
  color: #55a3ff;
}

.code-30 {
  bottom: 45%;
  right: 15%;
  animation-delay: 3.9s;
  color: #81ecec;
}

// Animations
@keyframes screenGlow {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

@keyframes typeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes keyPress {
  0% {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8);
  }
  50% {
    transform: translateY(1px);
    box-shadow: 0 0.5px 1px rgba(0,0,0,0.2), inset 0 0.5px 0 rgba(255,255,255,0.9);
    background: linear-gradient(135deg, #e8e8e8 0%, #d8d8d8 100%);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8);
  }
}

@keyframes typeGlow {
  0%, 100% {
    background: linear-gradient(135deg, #f8f8f8 0%, #e8e8e8 100%);
  }
  50% {
    background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  }
}

.key.typing {
  animation: keyPress 0.15s ease-out;
}

.key.active-typing {
  animation: typeGlow 0.3s ease-in-out;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
    opacity: 0.9;
  }
  50% {
    transform: translateY(-5px) rotate(-3deg);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-15px) rotate(3deg);
    opacity: 0.9;
  }
}



.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  @include flex-column-center;
  gap: 0.5rem;
  color: #000000;
  opacity: 0.65;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
}

.scroll-mouse {
  width: 24px;
  height: 40px;
  border: 2px solid #000000;
  border-radius: 12px;
  position: relative;
}

.scroll-wheel {
  width: 4px;
  height: 8px;
  background: #000000;
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
  font-weight: 550;
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

  &:hover {
    transform: translateY(-5px);
  }
}



.project-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
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
</style>
