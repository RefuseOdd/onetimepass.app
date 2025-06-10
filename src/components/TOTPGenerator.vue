<template>
  <div class="totp-generator">
    <form @submit.prevent class="form">
      <FormField
        label="Secret Key"
        description="The secret key in base-32 format"
      >
        <input
          v-model="secretKey"
          type="text"
          class="input"
          placeholder="Enter your secret key (base-32 format)"
          autocomplete="off"
          spellcheck="false"
        />
      </FormField>

      <div class="form-row">
        <FormField label="Digits" description="Number of digits in the token">
          <input
            v-model.number="digits"
            type="number"
            class="input"
            min="6"
            max="8"
            placeholder="6"
          />
        </FormField>

        <FormField label="Period (seconds)" description="Token refresh interval">
          <input
            v-model.number="period"
            type="number"
            class="input"
            min="15"
            max="300"
            placeholder="30"
          />
        </FormField>
      </div>

      <FormField label="Algorithm" description="Hash algorithm">
        <select v-model="algorithm" class="input">
          <option value="SHA1">SHA-1</option>
          <option value="SHA256">SHA-256</option>
          <option value="SHA512">SHA-512</option>
        </select>
      </FormField>
    </form>

    <div class="progress-section">
      <div class="progress-info">
        <span class="progress-text">
          Updating in {{ timeRemaining }} seconds
        </span>
        <ProgressBar :value="timeRemaining" :max="period" />
      </div>
    </div>

    <TokenDisplay
      :token="currentToken"
      :is-valid="isValidConfiguration"
      @copy="handleCopy"
    />

    <div v-if="copyMessage" class="copy-message" :class="copyMessageType">
      {{ copyMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FormField from '@/components/FormField.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import TokenDisplay from '@/components/TokenDisplay.vue'
import { useTOTP } from '@/composables/useTOTP'
import { useClipboard } from '@/composables/useClipboard'
import { useURLParams } from '@/composables/useURLParams'

// Initialize URL parameters
useURLParams()

// TOTP functionality
const {
  secretKey,
  digits,
  period,
  algorithm,
  currentToken,
  timeRemaining,
  isValidConfiguration
} = useTOTP()

// Clipboard functionality
const { copyMessage, copyMessageType, copyToClipboard } = useClipboard()

const handleCopy = async () => {
  if (currentToken.value && isValidConfiguration.value) {
    await copyToClipboard(currentToken.value)
  }
}
</script>

<style scoped>
.totp-generator {
  max-width: 600px;
  margin: 0 auto;
}

.form {
  background: var(--surface);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-medium);
  margin-bottom: 2rem;
  border: 1px solid var(--border);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.input {
  width: 100%;
  padding: 0.875rem 1.25rem;
  border: 2px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: var(--font-family-base);
  font-weight: 400;
  transition: all 0.2s ease;
  line-height: 1.5;
}

.input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-alpha);
}

.input::placeholder {
  color: var(--text-tertiary);
  font-weight: 400;
}

.input[type="number"] {
  font-family: var(--font-family-mono);
  font-feature-settings: 'tnum' 1;
}

.progress-section {
  margin-bottom: 2rem;
}

.progress-info {
  text-align: center;
}

.progress-text {
  display: block;
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  font-family: var(--font-family-base);
}

.copy-message {
  text-align: center;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  font-weight: 500;
  font-family: var(--font-family-base);
  animation: fadeIn 0.3s ease;
}

.copy-message.success {
  background: var(--success-bg);
  color: var(--success-text);
  border: 1px solid var(--success-border);
}

.copy-message.error {
  background: var(--error-bg);
  color: var(--error-text);
  border: 1px solid var(--error-border);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .form {
    padding: 2rem;
  }
  
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>