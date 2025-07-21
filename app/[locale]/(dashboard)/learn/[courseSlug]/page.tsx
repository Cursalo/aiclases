import { setRequestLocale } from 'next-intl/server'

interface LearnPageProps {
  params: { 
    locale: string
    courseSlug: string
  }
}

// Simple static page to stop 404 errors
export default function LearnPage({ params: { locale, courseSlug } }: LearnPageProps) {
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Curso: {courseSlug.replace('-', ' ')}
        </h1>
        
        <div className="bg-card p-6 rounded-lg">
          <p className="text-muted-foreground">
            Página de aprendizaje en construcción para el curso: {courseSlug}
          </p>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return [
    { courseSlug: 'fundamentos-ia' },
    { courseSlug: 'machine-learning-practico' },
    { courseSlug: 'productividad-ia' },
  ]
}