<template>
  <div class="app" :data-theme="theme">
    <ThemeToggle @toggle="toggleTheme" />
    
    <main class="main-content">
      <div class="container">
        <AppHeader />
        <TOTPGenerator />
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import TOTPGenerator from '@/components/TOTPGenerator.vue'
import AppFooter from '@/components/AppFooter.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
</script>