import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Demo Login',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "demo@aiclases.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // MVP: Allow any login for demo purposes
        if (credentials?.email) {
          return {
            id: '1',
            email: credentials.email,
            name: 'Demo User',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.picture = user.image
        
        // MVP: Add mock user data
        token.user = {
          id: user.id,
          email: user.email!,
          full_name: user.name || 'Demo User',
          avatar_url: user.image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
          credits: 1000,
          level: 1,
          theme: 'auto',
          language: 'es',
          mentor_personality: 'friendly',
        }
      }
      return token
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...session.user,
          ...token.user,
        }
      }
      return session
    },
  },
  debug: process.env.NODE_ENV === 'development',
}