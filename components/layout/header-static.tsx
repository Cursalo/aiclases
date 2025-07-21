import Link from 'next/link'
import { 
  Brain, 
  BookOpen, 
  User, 
  CreditCard,
  MessageSquare
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: Brain },
  { name: 'Cursos', href: '/courses', icon: BookOpen },
  { name: 'Mentor AI', href: '/mentor', icon: MessageSquare },
  { name: 'Créditos', href: '/credits', icon: CreditCard },
]

// Static header without useState to prevent hydration errors
export function HeaderStatic() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
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
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
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
          <div className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full border border-border bg-secondary text-secondary-foreground text-xs font-semibold">
            <CreditCard className="h-3 w-3 mr-1" />
            2,050
          </div>

          {/* User Avatar */}
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <span className="text-sm font-medium text-white">DU</span>
          </div>
        </div>
      </div>
    </header>
  )
}