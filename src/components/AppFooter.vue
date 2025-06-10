<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">
          Built by 
          <a 
            href="https://github.com/refuseodd" 
            target="_blank" 
            rel="noopener noreferrer"
            class="footer-link"
          >
            RefuseOdd
          </a>
          • Source on 
          <a 
            href="https://github.com/refuseodd/totp-generator" 
            target="_blank" 
            rel="noopener noreferrer"
            class="footer-link"
          >
            GitHub
          </a>
        </p>
        <p class="footer-disclaimer">
          All computations are performed locally in your browser. No data is transmitted to external servers.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding: 2.5rem 0;
  margin-top: auto;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  text-align: center;
}

.footer-text {
  color: var(--text-secondary);
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
  font-weight: 400;
  font-family: var(--font-family-base);
}

.footer-disclaimer {
  color: var(--text-tertiary);
  margin: 0;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: var(--font-family-base);
  line-height: 1.5;
}

.footer-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-dark);
  text-decoration: underline;
}
</style>