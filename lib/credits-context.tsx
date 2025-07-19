'use client'

import { createContext, useContext, ReactNode } from 'react'

interface CreditsContextType {
  credits: number
  refreshCredits: () => void
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined)

export function CreditsProvider({ children }: { children: ReactNode }) {
  const credits = 0
  const refreshCredits = () => {}

  return (
    <CreditsContext.Provider value={{ credits, refreshCredits }}>
      {children}
    </CreditsContext.Provider>
  )
}

export function useCredits() {
  const context = useContext(CreditsContext)
  if (context === undefined) {
    throw new Error('useCredits must be used within a CreditsProvider')
  }
  return context
}