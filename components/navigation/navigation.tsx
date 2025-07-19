'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'

export function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center px-4 text-xl font-bold">
              AIClases
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/courses" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('courses')}
            </Link>
            <Link 
              href="/dashboard" 
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              {t('dashboard')}
            </Link>
            <Link 
              href="/login" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              {t('login')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}