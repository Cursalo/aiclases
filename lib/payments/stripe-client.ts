// MVP: Mock Stripe client for quick deployment

export const stripe = {
  webhooks: {
    constructEvent: (body: string, signature: string, secret: string): any => {
      return {
        id: 'evt_mock',
        object: 'event',
        api_version: '2023-10-16',
        created: Math.floor(Date.now() / 1000),
        type: 'checkout.session.completed',
        livemode: false,
        pending_webhooks: 1,
        request: {
          id: 'req_mock',
          idempotency_key: null
        },
        data: {
          object: {
            id: 'mock_session_id',
            metadata: {
              userId: 'demo-user',
              packageId: 'starter',
              credits: '500',
              bonus: '0'
            }
          }
        }
      }
    }
  },
  customers: {
    retrieve: async (customerId: string) => ({
      id: customerId,
      object: 'customer',
      balance: 0,
      created: Math.floor(Date.now() / 1000),
      currency: 'usd',
      default_source: null,
      delinquent: false,
      description: null,
      discount: null,
      email: 'demo@aiclases.com',
      invoice_prefix: null,
      livemode: false,
      metadata: { userId: 'demo-user' },
      name: 'Demo User',
      phone: null,
      preferred_locales: [],
      shipping: null,
      tax_exempt: 'none',
      invoice_settings: {
        custom_fields: null,
        default_payment_method: null,
        footer: null,
        rendering_options: null
      }
    }),
    list: async (params: any) => ({
      data: [],
      has_more: false
    }),
    create: async (params: any) => ({
      id: 'mock_customer_id',
      email: params.email,
      metadata: params.metadata || {}
    })
  },
  subscriptions: {
    retrieve: async (subscriptionId: string) => ({
      id: subscriptionId,
      object: 'subscription',
      customer: 'mock_customer_id',
      items: {
        object: 'list',
        data: [{
          id: 'si_mock',
          object: 'subscription_item',
          price: {
            id: 'mock_price_id',
            product: 'mock_product_id'
          },
          quantity: 1
        }],
        has_more: false,
        total_count: 1,
        url: '/v1/subscription_items'
      },
      status: 'active',
      current_period_start: Math.floor(Date.now() / 1000),
      current_period_end: Math.floor(Date.now() / 1000) + 2592000,
      created: Math.floor(Date.now() / 1000),
      metadata: {},
      cancel_at_period_end: false,
      canceled_at: null,
      ended_at: null,
      trial_start: null,
      trial_end: null
    })
  },
  checkout: {
    sessions: {
      create: async (params: any) => ({
        id: 'mock_session_id',
        url: 'https://checkout.stripe.com/mock',
        payment_status: 'unpaid'
      }),
      retrieve: async (sessionId: string, options?: any) => ({
        id: sessionId,
        status: 'complete',
        payment_status: 'paid',
        amount_total: 2900,
        currency: 'usd',
        customer_email: 'demo@aiclases.com',
        customer_details: {
          email: 'demo@aiclases.com',
          name: 'Demo User'
        },
        created: Math.floor(Date.now() / 1000),
        line_items: {
          data: [{
            price: {
              id: 'price_mock',
              unit_amount: 2900,
              currency: 'usd'
            },
            quantity: 1
          }]
        },
        payment_intent: {
          id: 'pi_mock',
          status: 'succeeded'
        },
        metadata: {
          userId: 'demo-user',
          packageId: 'starter'
        }
      })
    }
  }
}

// Mock credit packages for MVP
export const CREDIT_PACKAGES = [
  {
    id: 'starter',
    name: 'Paquete Starter',
    credits: 500,
    bonus: 0,
    price: 29,
    popular: false
  },
  {
    id: 'popular', 
    name: 'Paquete Popular',
    credits: 1200,
    bonus: 200,
    price: 59,
    popular: true
  }
]

export default stripe