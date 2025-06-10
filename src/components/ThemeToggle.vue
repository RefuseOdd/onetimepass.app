<template>
  <button
    @click="$emit('toggle')"
    class="theme-toggle"
    title="Toggle dark mode"
    aria-label="Toggle dark mode"
  >
    <SunIcon v-if="isDark" />
    <MoonIcon v-else />
  </button>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import SunIcon from '@/components/icons/SunIcon.vue'
import MoonIcon from '@/components/icons/MoonIcon.vue'

defineEmits<{
  toggle: []
}>()

const isDark = inject<boolean>('isDark', false)
</script>

<style scoped>
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-medium);
}

.theme-toggle:hover {
  background: var(--surface-hover);
  transform: scale(1.05);
  box-shadow: var(--shadow-large);
}

.theme-toggle:active {
  transform: scale(0.95);
}
</style>