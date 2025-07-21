'use client'

// MVP: Minimal admin dashboard without any complex components to avoid createContext errors

export interface AdminDashboardProps {
  userId: string
}

export function AdminDashboard({ userId }: AdminDashboardProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Panel de Administración</h1>
          <p className="text-muted-foreground">Sistema de gestión AIClases 4.0</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Usuarios Totales</p>
                <p className="text-2xl font-bold">2,340</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cursos Activos</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Inscripciones</p>
                <p className="text-2xl font-bold">1,847</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ingresos</p>
                <p className="text-2xl font-bold">$48,392</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-card rounded-lg border">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Nuevo usuario registrado</p>
                    <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Curso completado</p>
                    <p className="text-xs text-muted-foreground">Hace 15 minutos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Pago procesado</p>
                    <p className="text-xs text-muted-foreground">Hace 32 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg border">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Estado del Sistema</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">API</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">Operativo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Base de Datos</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">Operativo</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pagos</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600">Operativo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Panel de Control MVP</h3>
            <p className="text-sm text-muted-foreground">
              Este es un panel de administración simplificado para el despliegue MVP. 
              Las funciones avanzadas se habilitarán en versiones futuras.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}