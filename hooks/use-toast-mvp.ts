// MVP: Simple toast implementation without sonner dependency

export interface ToastProps {
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

export function useToast() {
  return {
    toast: ({ title, description, variant = 'default' }: ToastProps) => {
      // Simple console log for MVP - in production this could be a native browser notification
      const message = `${title || (variant === 'destructive' ? 'Error' : 'Success')}${description ? `: ${description}` : ''}`
      
      if (variant === 'destructive') {
        console.error('Toast Error:', message)
      } else {
        console.log('Toast Success:', message)
      }
      
      // Simple browser notification for better UX
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title || (variant === 'destructive' ? 'Error' : 'Success'), {
          body: description,
          icon: variant === 'destructive' ? '/favicon-error.ico' : '/favicon.ico',
        })
      }
    },
  }
}