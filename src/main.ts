import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'
import App from './App.vue'
import './styles/main.css'

// Initialize Vercel Analytics
inject()

// Initialize Vercel Speed Insights
injectSpeedInsights()

const app = createApp(App)
app.mount('#app')