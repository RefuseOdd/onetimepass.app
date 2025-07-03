import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import './styles/main.css'

// Initialize Vercel Analytics
inject()

const app = createApp(App)
app.mount('#app')