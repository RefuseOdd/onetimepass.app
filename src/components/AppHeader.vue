<template>
  <header class="header">
    <h1 class="title">TOTP Token Generator</h1>
    <p class="subtitle">
      Generate time-based one-time passwords securely in your browser
    </p>
  </header>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  letter-spacing: -0.01em;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.25rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
}
</style>