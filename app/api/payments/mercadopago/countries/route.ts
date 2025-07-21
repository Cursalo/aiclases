import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { 
  MERCADOPAGO_COUNTRIES,
  MERCADOPAGO_CREDIT_PACKAGES,
  detectUserCountry,
  getPackagesForCountry,
  formatCurrencyForCountry,
  getSpecialOffers,
  getAvailablePaymentMethods,
  MercadoPagoCountry
} from '@/lib/payments/mercadopago-client'

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { searchParams } = new URL(request.url)
    const requestedCountryId = searchParams.get('country')
    const requestedCountry = requestedCountryId 
      ? MERCADOPAGO_COUNTRIES.find(c => c.id === requestedCountryId) 
      : null

    // Detect user's country
    const userAgent = request.headers.get('user-agent') || ''
    const acceptLanguage = request.headers.get('accept-language') || ''
    const detectedCountry = detectUserCountry(userAgent, acceptLanguage)
    
    const userCountry = requestedCountry || detectedCountry

    // Get packages for the country
    const packages = getPackagesForCountry(userCountry)

    // Format packages with localized pricing
    const formattedPackages = packages.map(pkg => ({
      ...pkg,
      formattedPrice: formatCurrencyForCountry(pkg.price, userCountry),
      totalCredits: pkg.credits + pkg.bonus,
      pricePerCredit: pkg.price / (pkg.credits + pkg.bonus),
      popular: pkg.id.includes('popular'),
      recommended: pkg.id.includes('pro'),
    }))

    // Add special offers based on country
    const specialOffers = getSpecialOffers(userCountry)

    return NextResponse.json({
      country: userCountry,
      countryInfo: userCountry,
      detectedCountry,
      packages: formattedPackages,
      availableCountries: MERCADOPAGO_COUNTRIES.map(country => ({
        code: country.id,
        name: country.name,
        currency: country.currency,
      })),
      specialOffers,
      paymentMethods: getAvailablePaymentMethods(userCountry),
    })
  } catch (error) {
    console.error('Countries API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}