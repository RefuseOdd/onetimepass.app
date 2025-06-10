import { ref } from 'vue'
import type { Ref } from 'vue'

export function useClipboard() {
  const copyMessage: Ref<string> = ref('')
  const copyMessageType: Ref<'success' | 'error'> = ref('success')

  let timeoutId: number | null = null

  const copyToClipboard = async (text: string): Promise<void> => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        // Use modern Clipboard API
        await navigator.clipboard.writeText(text)
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea')
        textArea.value = text
        textArea.style.position = 'fixed'
        textArea.style.left = '-999999px'
        textArea.style.top = '-999999px'
        document.body.appendChild(textArea)
        textArea.focus()
        textArea.select()
        
        const successful = document.execCommand('copy')
        document.body.removeChild(textArea)
        
        if (!successful) {
          throw new Error('Copy command failed')
        }
      }

      showMessage('Token copied to clipboard!', 'success')
    } catch (error) {
      console.error('Failed to copy to clipboard:', error)
      showMessage('Failed to copy token', 'error')
    }
  }

  const showMessage = (message: string, type: 'success' | 'error') => {
    copyMessage.value = message
    copyMessageType.value = type

    // Clear any existing timeout
    if (timeoutId !== null) {
      clearTimeout(timeoutId)
    }

    // Clear message after 3 seconds
    timeoutId = window.setTimeout(() => {
      copyMessage.value = ''
    }, 3000)
  }

  return {
    copyMessage,
    copyMessageType,
    copyToClipboard
  }
}