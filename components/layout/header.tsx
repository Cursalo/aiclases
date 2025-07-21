'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Brain, 
  BookOpen, 
  User, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  CreditCard,
  Trophy,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button-mvp'
import { Badge } from '@/components/ui/badge'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Brain },
  { name: 'Cursos', href: '/courses', icon: BookOpen },
  { name: 'Mentor AI', href: '/mentor', icon: MessageSquare },
  { name: 'Créditos', href: '/credits', icon: CreditCard },
]

const userMenuItems = [
  { name: 'Perfil', href: '/profile', icon: User },
  { name: 'Logros', href: '/achievements', icon: Trophy },
  { name: 'Configuración', href: '/settings', icon: Settings },
]

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname.startsWith('/es') && pathname.split('/').length <= 2
    }
    return pathname.includes(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary">
            <Brain className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">AIClases</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = isActivePath(item.href)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive 
                    ? 'bg-accent text-accent-foreground' 
                    : 'text-muted-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Credits Badge */}
          <Badge variant="secondary" className="hidden sm:inline-flex">
            <CreditCard className="h-3 w-3 mr-1" />
            2,050
          </Badge>

          {/* User Menu */}
          <div className="relative">
            <Button
              variant="ghost"
              className="relative h-8 w-8 rounded-full"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <span className="text-sm font-medium text-white">DU</span>
              </div>
            </Button>

            {/* User Dropdown */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover p-1 shadow-md animate-in slide-in-from-top-2">
                <div className="px-2 py-1.5 text-sm text-muted-foreground">
                  Demo User
                  <div className="text-xs">demo@aiclases.com</div>
                </div>
                <div className="h-px bg-border my-1" />
                {userMenuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  )
                })}
                <div className="h-px bg-border my-1" />
                <button className="flex w-full items-center px-2 py-1.5 text-sm rounded-sm hover:bg-accent hover:text-accent-foreground text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t bg-background/95 backdrop-blur">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = isActivePath(item.href)
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
            <div className="px-3 py-2">
              <Badge variant="secondary" className="inline-flex">
                <CreditCard className="h-3 w-3 mr-1" />
                2,050 Créditos
              </Badge>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}