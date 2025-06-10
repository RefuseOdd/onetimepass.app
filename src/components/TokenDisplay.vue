<template>
  <div class="token-display">
    <div 
      class="token-container"
      :class="{ 'invalid': !isValid }"
    >
      <div class="token-value mono" :class="{ 'placeholder': !isValid }">
        {{ displayToken }}
      </div>
      <button
        v-if="isValid"
        @click="$emit('copy')"
        class="copy-button"
        title="Copy token to clipboard"
        aria-label="Copy token to clipboard"
      >
        <CopyIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CopyIcon from '@/components/icons/CopyIcon.vue'

interface Props {
  token: string
  isValid: boolean
}

const props = defineProps<Props>()

defineEmits<{
  copy: []
}>()

const displayToken = computed(() => {
  if (!props.isValid) {
    return '------'
  }
  
  // Format token with spaces for better readability
  const token = props.token
  if (token.length === 6) {
    return `${token.slice(0, 3)} ${token.slice(3)}`
  } else if (token.length === 8) {
    return `${token.slice(0, 4)} ${token.slice(4)}`
  }
  return token
})
</script>

<style scoped>
.token-display {
  margin-bottom: 1rem;
}

.token-container {
  background: var(--surface);
  border: 2px solid var(--border);
  border-radius: 16px;
  padding: 2.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-medium);
  position: relative;
  overflow: hidden;
}

.token-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--primary-light));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.token-container:hover:not(.invalid) {
  border-color: var(--primary);
  box-shadow: var(--shadow-large);
  transform: translateY(-2px);
}

.token-container:hover:not(.invalid)::before {
  opacity: 1;
}

.token-container.invalid {
  border-color: var(--border);
  opacity: 0.6;
}

.token-value {
  font-family: var(--font-family-mono);
  font-size: 2.75rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.15em;
  user-select: all;
  flex: 1;
  text-align: center;
  font-feature-settings: 'tnum\' 1, 'zero\' 1;
}

.token-value.placeholder {
  color: var(--text-tertiary);
  font-weight: 400;
}

.copy-button {
  background: var(--primary);
  border: none;
  border-radius: 12px;
  padding: 0.875rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  flex-shrink: 0;
  font-weight: 500;
}

.copy-button:hover {
  background: var(--primary-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-medium);
}

.copy-button:active {
  transform: translateY(0);
}

@media (max-width: 768px) {
  .token-container {
    padding: 2rem 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .token-value {
    font-size: 2.25rem;
  }
  
  .copy-button {
    margin-left: 0;
    width: 100%;
    padding: 1rem;
  }
}
</style>