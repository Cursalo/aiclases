import { Suspense } from 'react'
import { setRequestLocale } from 'next-intl/server'
import { CourseGridSkeleton } from '@/components/loading/skeleton'
import SimpleCoursesBrowser from '@/components/courses/simple-course-browser'
import { MainLayout } from '@/components/layout/main-layout'

interface CoursesPageProps {
  params: { locale: string }
}

export default function CoursesPage({ params: { locale } }: CoursesPageProps) {
  // Enable static rendering for next-intl
  setRequestLocale(locale)

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
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
    </MainLayout>
  )
}