'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { AlertCircle, Home, LogIn } from 'lucide-react'

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  const getErrorMessage = (error: string | null) => {
    switch (error) {
      case 'Configuration':
        return 'Hay un problema con la configuración del servidor.'
      case 'AccessDenied':
        return 'No tienes permisos para acceder a este recurso.'
      case 'Verification':
        return 'El token de verificación ha expirado o es inválido.'
      default:
        return 'Ha ocurrido un error durante la autenticación.'
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full mx-4">
        <div className="bg-card rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-card-foreground mb-4">
            Error de Autenticación
          </h1>
          
          <p className="text-muted-foreground mb-6">
            {getErrorMessage(error)}
          </p>
          
          <div className="space-y-3">
            <Link 
              href="/login"
              className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              Intentar de nuevo
            </Link>
            
            <Link 
              href="/"
              className="w-full bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Ir al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}