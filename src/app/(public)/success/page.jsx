import { createBooking } from '@/lib/actions/bookings'
import { getPropertyById } from '@/lib/api/properties'
import { stripe } from '@/lib/stripe'
import { formatDate } from '@/utils/formatDate'
import { Button } from '@heroui/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { FaCheck } from 'react-icons/fa'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    metadata,
    status,
    payment_intent,
    payment_status,
    customer_details: { email: customerEmail }
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const property = await getPropertyById(metadata.propertyId);

    const bookingData = {
      ...metadata,
      
      ownerId: property?.ownerId,
      ownerName: property?.ownerName,

      propertyId: property?._id,
      propertyTitle: property?.propertyTitle,
      propertyAmount: property?.rent,

      transactionId: payment_intent.id,

      bookingDate: new Date(),
      bookingStatus: 'Pending',
      paymentStatus: payment_status
    }

    const result = await createBooking(bookingData);
    console.log(result);

    return (
      <section id='success'>
        <div className='max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20'>
          <div className='border rounded-2xl p-6 sm:p-10 text-center'>

            <div className='flex justify-center mb-6'>
              <div className='bg-green-500 w-16 sm:w-20 h-16 sm:h-20 rounded-full flex items-center justify-center text-white'>
                <FaCheck className='text-xl sm:text-2xl' />
              </div>
            </div>

            <h1 className='text-2xl sm:text-3xl font-bold mb-3'>
              Payment Successful
            </h1>

            <p className='max-w-lg mx-auto mb-8 text-sm sm:text-base'>
              Your payment has been completed successfully and your booking has been confirmed.
            </p>

            <div className='border rounded-xl p-4 sm:p-6 text-left mb-8'>
              <div className='flex justify-between py-2 text-sm sm:text-base'>
                <span>Property</span>
                <span>{property?.propertyTitle}</span>
              </div>

              <div className='flex justify-between py-2 text-sm sm:text-base'>
                <span>Amount Paid</span>
                <span>৳{property?.rent}</span>
              </div>

              <div className='flex justify-between py-2 text-sm sm:text-base'>
                <span>Transaction ID</span>
                <span>{payment_intent.id}</span>
              </div>

              <div className='flex justify-between py-2 text-sm sm:text-base'>
                <span>Payment Date</span>
                <span>{formatDate(new Date())}</span>
              </div>
            </div>

            <div className='flex items-center sm:flex-row justify-center gap-4'>
              <Link href={'/dashboard/tenant/my-bookings'}>
                <Button className='rounded-lg'>
                  View Booking
                </Button>
              </Link>

              <Link href='/all-properties'>
                <Button
                  className='rounded-lg'
                  variant='tertiary'
                >
                  Back to Properties
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    )
  }
}