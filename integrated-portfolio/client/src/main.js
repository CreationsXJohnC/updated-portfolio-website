import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import router from './router'
import { apolloClient } from './apollo'
import App from './App.vue'

// Styles
import './styles/main.scss'

// Create Vue app
const app = createApp(App)

// Use plugins
app.use(createPinia())
app.use(router)

// Provide Apollo Client for Vue Apollo Composable
app.provide(DefaultApolloClient, apolloClient)

// Mount app
app.mount('#app')