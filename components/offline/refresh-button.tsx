'use client'

import { RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button-mvp'

export function RefreshButton() {
  return (
    <Button 
      className="w-full"
      onClick={() => window.location.reload()}
    >
      <RefreshCw className="h-4 w-4 mr-2" />
      Reintentar
    </Button>
  )
}