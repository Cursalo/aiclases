// MVP: Mock MercadoPago client for quick deployment

export const MERCADOPAGO_COUNTRIES = [
  { id: 'AR', name: 'Argentina', currency: 'ARS' },
  { id: 'BR', name: 'Brasil', currency: 'BRL' },
  { id: 'MX', name: 'México', currency: 'MXN' },
  { id: 'CO', name: 'Colombia', currency: 'COP' },
  { id: 'CL', name: 'Chile', currency: 'CLP' },
  { id: 'PE', name: 'Perú', currency: 'PEN' }
]

export type MercadoPagoCountry = typeof MERCADOPAGO_COUNTRIES[0]

export const MERCADOPAGO_CREDIT_PACKAGES = [
  {
    id: 'starter',
    name: 'Paquete Starter',
    credits: 500,
    bonus: 0,
    price: 29,
    currency: 'USD',
    popular: false
  },
  {
    id: 'popular',
    name: 'Paquete Popular',
    credits: 1200,
    bonus: 200,
    price: 59,
    currency: 'USD',
    popular: true
  }
]

export const mercadopago = {
  preferences: {
    create: async (preferenceData: any) => ({
      body: {
        id: 'mock_preference_id',
        init_point: 'https://mercadopago.com/mock',
        sandbox_init_point: 'https://sandbox.mercadopago.com/mock'
      }
    })
  },
  payment: {
    findById: async (paymentId: string) => ({
      body: {
        id: paymentId,
        status: 'approved',
        external_reference: 'demo-user',
        metadata: {
          user_id: 'demo-user',
          package_id: 'starter'
        }
      }
    })
  },
  merchant_orders: {
    findById: async (orderId: string) => ({
      body: {
        id: orderId,
        external_reference: 'demo-user',
        order_status: 'paid'
      }
    })
  }
}

export const getSupportedCountries = () => [
  { id: 'AR', name: 'Argentina' },
  { id: 'BR', name: 'Brasil' },
  { id: 'MX', name: 'México' },
  { id: 'CO', name: 'Colombia' },
  { id: 'CL', name: 'Chile' },
  { id: 'PE', name: 'Perú' }
]

// MVP: Mock additional functions that API routes expect
export const createPaymentPreference = async (packageData: any, userInfo: any, urls: any) => {
  return {
    id: 'mock_preference_id',
    init_point: 'https://mercadopago.com/mock',
    sandbox_init_point: 'https://sandbox.mercadopago.com/mock'
  }
}

export const detectUserCountry = (userAgent?: string, acceptLanguage?: string): MercadoPagoCountry => {
  return MERCADOPAGO_COUNTRIES.find(c => c.id === 'MX') || MERCADOPAGO_COUNTRIES[0] // Default to Mexico for MVP
}

export const getPackagesForCountry = (country: MercadoPagoCountry | string) => {
  const countryId = typeof country === 'string' ? country : country.id
  return [
    {
      id: 'starter',
      name: 'Paquete Starter',
      credits: 500,
      bonus: 0,
      price: 29,
      currency: typeof country === 'string' ? 'USD' : country.currency,
      popular: false
    }
  ]
}

export const formatCurrencyForCountry = (amount: number, country: MercadoPagoCountry | string) => {
  const currency = typeof country === 'string' ? 'USD' : country.currency
  return `$${amount} ${currency}`
}

export const validateWebhookSignature = (body: string, signature: string) => {
  return true // MVP: Always validate
}

export const getPaymentInfo = async (paymentId: string) => {
  return {
    id: paymentId,
    status: 'approved',
    status_detail: 'accredited',
    external_reference: 'demo-user',
    preference_id: 'mock_preference_id',
    metadata: {
      user_id: 'demo-user',
      package_id: 'starter'
    }
  }
}

// MVP: Additional helper functions
export const getSpecialOffers = (country: MercadoPagoCountry) => []

export const getAvailablePaymentMethods = (country: MercadoPagoCountry) => [
  { id: 'credit_card', name: 'Tarjeta de Crédito' },
  { id: 'debit_card', name: 'Tarjeta de Débito' },
  { id: 'bank_transfer', name: 'Transferencia Bancaria' }
]

export default mercadopago