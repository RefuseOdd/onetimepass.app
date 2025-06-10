import { ref, watch, provide } from 'vue'
import type { Ref } from 'vue'

export type Theme = 'light' | 'dark'

export function useTheme() {
  const theme: Ref<Theme> = ref('light')

  // Initialize theme from localStorage or system preference
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    theme.value = savedTheme || (prefersDark ? 'dark' : 'light')
    applyTheme(theme.value)
  }

  // Apply theme to document
  const applyTheme = (newTheme: Theme) => {
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // Toggle between light and dark themes
  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  // Watch for theme changes and persist to localStorage
  watch(theme, (newTheme) => {
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  })

  // Listen for system theme changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      theme.value = e.matches ? 'dark' : 'light'
    }
  })

  // Provide theme state to child components
  provide('isDark', theme.value === 'dark')

  // Initialize on first load
  initializeTheme()

  return {
    theme,
    toggleTheme
  }
}