// MVP: Mock database types for quick deployment

export interface Database {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          user_id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          credits: number
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          credits?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          credits?: number
          created_at?: string
          updated_at?: string
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          slug: string
          category: string
          level: string
          duration_hours: number
          price: number
          thumbnail_url: string | null
          language: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          slug: string
          category: string
          level: string
          duration_hours: number
          price: number
          thumbnail_url?: string | null
          language: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          slug?: string
          category?: string
          level?: string
          duration_hours?: number
          price?: number
          thumbnail_url?: string | null
          language?: string
          created_at?: string
          updated_at?: string
        }
      }
      course_enrollments: {
        Row: {
          id: string
          user_id: string
          course_id: string
          enrolled_at: string
          completed_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          enrolled_at?: string
          completed_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          enrolled_at?: string
          completed_at?: string | null
        }
      }
      credit_transactions: {
        Row: {
          id: string
          user_id: string
          type: string
          amount: number
          description: string
          status: string
          metadata: any
          created_at: string
          completed_at: string | null
          stripe_session_id: string | null
          stripe_payment_intent_id: string | null
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          amount: number
          description: string
          status?: string
          metadata?: any
          created_at?: string
          completed_at?: string | null
          stripe_session_id?: string | null
          stripe_payment_intent_id?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          amount?: number
          description?: string
          status?: string
          metadata?: any
          created_at?: string
          completed_at?: string | null
          stripe_session_id?: string | null
          stripe_payment_intent_id?: string | null
        }
      }
      user_subscriptions: {
        Row: {
          id: string
          user_id: string
          stripe_subscription_id: string
          stripe_customer_id: string
          status: string
          current_period_start: string
          current_period_end: string
          canceled_at: string | null
          metadata: any
        }
        Insert: {
          id?: string
          user_id: string
          stripe_subscription_id: string
          stripe_customer_id: string
          status: string
          current_period_start: string
          current_period_end: string
          canceled_at?: string | null
          metadata?: any
        }
        Update: {
          id?: string
          user_id?: string
          stripe_subscription_id?: string
          stripe_customer_id?: string
          status?: string
          current_period_start?: string
          current_period_end?: string
          canceled_at?: string | null
          metadata?: any
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          course_id: string
          progress: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          course_id: string
          progress?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          progress?: number
          updated_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}