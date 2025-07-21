'use client'

import { Clock, Star, Users, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button-mvp'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// Static course data for server-side rendering
const staticCourses = [
  {
    id: '1',
    title: 'Fundamentos de Inteligencia Artificial',
    description: 'Aprende los conceptos básicos de IA desde cero. Un curso completo para principiantes que cubre desde qué es la IA hasta sus aplicaciones prácticas.',
    slug: 'fundamentos-ia',
    category: 'fundamentos-ia',
    level: 'beginner',
    duration: 8,
    price: 600,
    rating: 4.9,
    students: 2340,
    lessons: 12,
    published: true,
    instructor: 'Dr. María Elena Vázquez',
    thumbnail: '/images/courses/fundamentos-ia.jpg'
  },
  {
    id: '2',
    title: 'Machine Learning Práctico',
    description: 'Domina los algoritmos de aprendizaje automático con ejemplos reales. Incluye Python, scikit-learn y proyectos hands-on.',
    slug: 'machine-learning-practico',
    category: 'machine-learning',
    level: 'intermediate',
    duration: 12,
    price: 900,
    rating: 4.8,
    students: 1890,
    lessons: 18,
    published: true,
    instructor: 'Ing. Carlos Mendoza',
    thumbnail: '/images/courses/ml-practico.jpg'
  },
  {
    id: '3',
    title: 'Productividad con IA',
    description: 'Descubre herramientas de IA para aumentar tu productividad personal y profesional. ChatGPT, Midjourney, Notion AI y más.',
    slug: 'productividad-ia',
    category: 'productividad',
    level: 'beginner',
    duration: 6,
    price: 450,
    rating: 4.7,
    students: 3210,
    lessons: 10,
    published: true,
    instructor: 'Ana López',
    thumbnail: '/images/courses/productividad-ia.jpg'
  }
]

interface Course {
  id: string
  title: string
  description: string
  slug: string
  category: string
  level: string
  duration: number
  price: number
  rating: number
  students: number
  lessons: number
  published: boolean
  instructor: string
  thumbnail: string
}

function CourseCard({ course }: { course: Course }) {
  const getLevelColor = (levelId: string) => {
    const colors: { [key: string]: string } = {
      beginner: 'bg-green-500',
      intermediate: 'bg-yellow-500', 
      advanced: 'bg-red-500'
    }
    return colors[levelId] || 'bg-gray-500'
  }

  return (
    <Card className="group overflow-hidden glass-morphism border-0 hover:scale-105 transition-all duration-300">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <BookOpen className="h-16 w-16 text-primary/50" />
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className={`${getLevelColor(course.level)} text-white`}>
            {course.level}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            {course.price} créditos
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {course.description}
        </p>
        
        <div className="text-xs text-muted-foreground mb-4">
          Instructor: {course.instructor}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}h
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {course.lessons} lecciones
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.students.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          
          <Button size="sm" className="glass-morphism">
            Ver Curso
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function SimpleCoursesBrowser() {
  return (
    <div className="space-y-8">
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {staticCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center py-8">
        <p className="text-muted-foreground mb-4">
          ¿No encuentras lo que buscas?
        </p>
        <Button variant="outline" className="glass-morphism">
          Solicitar Curso Personalizado
        </Button>
      </div>
    </div>
  )
}