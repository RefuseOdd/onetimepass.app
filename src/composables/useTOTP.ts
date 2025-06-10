import { ref, computed, onMounted, onUnmounted } from 'vue'
import { TOTP } from 'otpauth'
import type { Ref } from 'vue'

export interface TOTPConfig {
  secretKey: string
  digits: number
  period: number
  algorithm: 'SHA1' | 'SHA256' | 'SHA512'
}

export function useTOTP() {
  // Reactive state
  const secretKey: Ref<string> = ref('JBSWY3DPEHPK3PXP')
  const digits: Ref<number> = ref(6)
  const period: Ref<number> = ref(30)
  const algorithm: Ref<'SHA1' | 'SHA256' | 'SHA512'> = ref('SHA1')
  const timeRemaining: Ref<number> = ref(30)
  const currentToken: Ref<string> = ref('')

  let intervalId: number | null = null

  // Computed properties
  const isValidConfiguration = computed(() => {
    return secretKey.value.trim().length > 0 && 
           digits.value >= 6 && 
           digits.value <= 8 &&
           period.value >= 15 &&
           period.value <= 300
  })

  const totpInstance = computed(() => {
    if (!isValidConfiguration.value) return null
    
    try {
      return new TOTP({
        secret: secretKey.value.replace(/\s/g, ''),
        digits: digits.value,
        period: period.value,
        algorithm: algorithm.value
      })
    } catch (error) {
      console.error('Error creating TOTP instance:', error)
      return null
    }
  })

  // Methods
  const updateToken = () => {
    if (!totpInstance.value) {
      currentToken.value = ''
      timeRemaining.value = period.value
      return
    }

    try {
      const now = Date.now()
      const token = totpInstance.value.generate({ timestamp: now })
      currentToken.value = token
      
      // Calculate time remaining until next token
      const currentPeriod = Math.floor(now / 1000 / period.value)
      const nextPeriodStart = (currentPeriod + 1) * period.value * 1000
      timeRemaining.value = Math.ceil((nextPeriodStart - now) / 1000)
    } catch (error) {
      console.error('Error generating token:', error)
      currentToken.value = ''
      timeRemaining.value = period.value
    }
  }

  const startTimer = () => {
    stopTimer()
    updateToken()
    intervalId = window.setInterval(updateToken, 1000)
  }

  const stopTimer = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  // Lifecycle
  onMounted(() => {
    startTimer()
  })

  onUnmounted(() => {
    stopTimer()
  })

  return {
    secretKey,
    digits,
    period,
    algorithm,
    currentToken,
    timeRemaining,
    isValidConfiguration,
    updateToken,
    startTimer,
    stopTimer
  }
}