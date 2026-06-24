import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '../../../lib/stripe'
import { getPropertyById } from '@/lib/api/properties'
import { getCurrentUser } from '@/lib/session'

export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    const formData = await request.formData();
    const bookingData = Object.fromEntries(formData.entries());
    const user = await getCurrentUser();
    
    const property = await getPropertyById(bookingData?.propertyId);

    const session = await stripe.checkout.sessions.create({
      customer_email: bookingData?.email,
      line_items: [
        {
          price_data: {
            currency: 'bdt',
            unit_amount: property?.rent * 100,
            product_data: {
              name: property?.propertyTitle,
            }
          },
          quantity: 1,
        },
      ],
      metadata: {
        propertyId: property?._id.toString(),
        tenantId: user?.id,
        tenantName: bookingData?.name,
        moveInDate: bookingData?.moveInDate
      },
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}