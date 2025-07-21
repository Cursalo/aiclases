import { NextRequest, NextResponse } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './i18n'

// Simplified intl middleware for MVP
const intlMiddleware = createIntlMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
})

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/auth') ||
    pathname.includes('.') || // files with extensions
    pathname === '/manifest.json' ||
    pathname === '/sw.js' ||
    pathname.startsWith('/workbox-')
  ) {
    return NextResponse.next()
  }

  // Add basic security headers
  const response = intlMiddleware(request)
  
  if (response) {
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all routes except API routes and static files
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}