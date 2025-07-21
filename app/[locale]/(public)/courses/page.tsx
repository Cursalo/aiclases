import { Suspense } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { CourseGridSkeleton } from '@/components/loading/skeleton'
import SimpleCoursesBrowser from '@/components/courses/simple-course-browser'

interface CoursesPageProps {
  params: { locale: string }
}

export default function CoursesPage({ params: { locale } }: CoursesPageProps) {
  // Enable static rendering for next-intl
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-20">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cursos de IA
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cursos de inteligencia artificial diseñados para llevarte al siguiente nivel
          </p>
        </div>

        {/* Interactive Course Browser */}
        <Suspense fallback={<CourseGridSkeleton count={6} />}>
          <SimpleCoursesBrowser />
        </Suspense>
      </div>
    </div>
  )
}