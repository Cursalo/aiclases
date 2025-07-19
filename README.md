# AIClases 4.0

Modern AI-powered educational platform built with Next.js 14, TypeScript, and Supabase.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **Payments**: Stripe + MercadoPago
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Testing**: Jest + Playwright
- **Deployment**: Vercel

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- 🤖 AI-powered course generation
- 🌍 Multi-language support (English, Spanish, Portuguese)
- 💳 Integrated payment systems
- 📱 PWA support
- 🎓 Interactive learning experience
- 👨‍💼 Admin dashboard
- 🔐 Secure authentication
- 📊 Analytics and progress tracking

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Cursalo/aiclases)

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Deployment Guide](./DEPLOYMENT.md)
- [Supabase Setup](./SUPABASE-SETUP.md)