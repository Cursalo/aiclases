import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

// MVP: Mock admin activity data
const mockActivity = [
  {
    id: '1',
    type: 'user_registration',
    user: 'Demo User',
    description: 'Se registró un nuevo usuario',
    timestamp: new Date().toISOString(),
  },
  {
    id: '2', 
    type: 'course_enrollment',
    user: 'Demo User',
    description: 'Se inscribió en "Fundamentos de IA"',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
  {
    id: '3',
    type: 'payment',
    user: 'Demo User', 
    description: 'Compró paquete de créditos',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    amount: 50,
  },
  {
    id: '4',
    type: 'course_completion',
    user: 'Demo User',
    description: 'Completó "Productividad con IA"',
    timestamp: new Date(Date.now() - 86400000).toISOString(),
  }
]

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    // MVP: Skip admin check for demo
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '20')
    const type = searchParams.get('type') // Filter by activity type

    // Filter by type if specified
    let filteredActivities = type 
      ? mockActivity.filter(activity => activity.type === type)
      : mockActivity

    // Limit results
    filteredActivities = filteredActivities.slice(0, limit)

    return NextResponse.json(filteredActivities)
  } catch (error) {
    console.error('Admin activity API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}