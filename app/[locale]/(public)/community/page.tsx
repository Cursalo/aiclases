import { setRequestLocale } from 'next-intl/server'
import { MainLayout } from '@/components/layout/main-layout'

interface CommunityPageProps {
  params: { locale: string }
}

export default function CommunityPage({ params: { locale } }: CommunityPageProps) {
  setRequestLocale(locale)

  return (
    <MainLayout>
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Comunidad
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conecta con otros estudiantes de IA y comparte tu aprendizaje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-morphism p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Próximamente</h3>
            <p className="text-muted-foreground">
              La sección de comunidad estará disponible próximamente.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}