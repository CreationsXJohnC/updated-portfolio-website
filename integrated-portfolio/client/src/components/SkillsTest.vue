<template>
  <div class="skills-test">
    <h2>🧪 Skills Test Component</h2>
    
    <!-- Hardcoded Test Images -->
    <div style="border: 3px solid red; padding: 20px; margin: 20px; background: lightblue;">
      <h3>Hardcoded Test Images:</h3>
      
      <div style="margin: 10px;">
        <h4>Test 1: Direct path</h4>
        <img 
          src="/skills-icons/JavaScript.png" 
          alt="JavaScript"
          style="width: 50px; height: 50px; border: 2px solid blue;"
          @error="onImageError"
          @load="onImageLoad"
        />
        <span>JavaScript.png</span>
      </div>
      
      <div style="margin: 10px;">
        <h4>Test 2: React</h4>
        <img 
          src="/skills-icons/ReactJs.png" 
          alt="React"
          style="width: 50px; height: 50px; border: 2px solid green;"
          @error="onImageError"
          @load="onImageLoad"
        />
        <span>ReactJs.png</span>
      </div>
      
      <div style="margin: 10px;">
        <h4>Test 3: Vue</h4>
        <img 
          src="/skills-icons/VueJs.png" 
          alt="Vue"
          style="width: 50px; height: 50px; border: 2px solid purple;"
          @error="onImageError"
          @load="onImageLoad"
        />
        <span>VueJs.png</span>
      </div>
    </div>
    
    <!-- GraphQL Test -->
    <div style="border: 3px solid green; padding: 20px; margin: 20px; background: lightyellow;">
      <h3>GraphQL Test:</h3>
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error: {{ error.message }}</div>
      <div v-else>
        <p>Skills loaded: {{ skills.length }}</p>
        <p>Skills with iconUrl: {{ skillsWithIcons.length }}</p>
        
        <div class="test-grid">
          <div 
            v-for="skill in skills.slice(0, 3)" 
            :key="skill.id"
            class="test-skill"
            style="border: 2px solid orange; padding: 10px; margin: 5px; background: white;"
          >
            <img 
              :src="skill.iconUrl" 
              :alt="skill.name"
              style="width: 50px; height: 50px; border: 2px solid blue;"
              @error="onImageError"
              @load="onImageLoad"
            />
            <p>{{ skill.name }}</p>
            <p>{{ skill.iconUrl }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
      iconUrl
      category
    }
  }
`

export default {
  name: 'SkillsTest',
  setup() {
    const { result, loading, error } = useQuery(GET_SKILLS)
    
    const skills = computed(() => result.value?.skills || [])
    const skillsWithIcons = computed(() => skills.value.filter(s => s.iconUrl))
    
    const onImageError = (event) => {
      console.error('Image failed to load:', event.target.src)
    }
    
    const onImageLoad = (event) => {
      console.log('Image loaded successfully:', event.target.src)
    }
    
    onMounted(() => {
      console.log('SkillsTest component mounted')
    })
    
    return {
      skills,
      skillsWithIcons,
      loading,
      error,
      onImageError,
      onImageLoad
    }
  }
}
</script>

<style scoped>
.skills-test {
  padding: 20px;
}

.test-grid {
  display: flex;
  flex-wrap: wrap;
}

.test-skill {
  text-align: center;
}
</style>