<template>
  <div class="form-field">
    <label class="label">
      {{ label }}
      <span v-if="description" class="description">{{ description }}</span>
    </label>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  description?: string
}

defineProps<Props>()
</script>

<style scoped>
.form-field {
  margin-bottom: 1.5rem;
}

.label {
  display: block;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-family-base);
}

.description {
  display: block;
  font-weight: 400;
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-transform: none;
  letter-spacing: normal;
  margin-top: 0.25rem;
  line-height: 1.4;
}
</style>