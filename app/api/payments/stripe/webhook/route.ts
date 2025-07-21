import { NextRequest, NextResponse } from 'next/server'

// MVP: Mock Stripe webhook for deployment
export async function POST(request: NextRequest) {
  try {
    // For MVP deployment, we'll just return success
    // In production, this would handle actual Stripe webhooks
    console.log('Mock Stripe webhook received')
    
    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook error' },
      { status: 400 }
    )
  }
}