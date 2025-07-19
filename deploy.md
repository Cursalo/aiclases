# AIClases Deployment Guide

## Current Repository Structure
This repository contains the AIClases 4.0 application as a clean Next.js project with the following layout:

```
├── app/              # Next.js App Router
├── components/       # React components
├── lib/              # Utilities and business logic
├── docs/             # Documentation
├── e2e/              # Playwright tests
├── public/           # Static assets
├── vercel.json       # Vercel deployment configuration
└── package.json      # Project dependencies
```

## Vercel Deployment Instructions

### Standard Next.js Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this as a Next.js project
3. **No root directory selection needed** - deploy from repository root
4. Vercel will automatically use:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
   - Install command: `npm install`

## Environment Variables Required
Make sure to set these in Vercel:
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `MERCADOPAGO_ACCESS_TOKEN`
- `MERCADOPAGO_WEBHOOK_SECRET`

## Troubleshooting
If deployment fails:
1. Check that all environment variables are set
2. Verify the build process in Vercel logs
3. Ensure the function paths in `vercel.json` match your API routes
4. Make sure Node.js version is compatible (recommended: 18.x or 20.x)