import { DefaultSession, DefaultUser } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      full_name?: string
      avatar_url?: string
      credits?: number
      level?: number
      theme?: string
      language?: string
      mentor_personality?: string
    } & DefaultSession['user']
    accessToken?: string
  }

  interface User extends DefaultUser {
    id: string
    full_name?: string
    avatar_url?: string
    credits?: number
    level?: number
    theme?: string
    language?: string
    mentor_personality?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id?: string
    accessToken?: string
    refreshToken?: string
    provider?: string
    user?: {
      id: string
      email: string
      full_name?: string
      avatar_url?: string
      credits?: number
      level?: number
      theme?: string
      language?: string
      mentor_personality?: string
    }
  }
}