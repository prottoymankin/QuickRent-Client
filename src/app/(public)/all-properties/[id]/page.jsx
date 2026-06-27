import AddFavoriteButton from "@/components/homepage/AddFavoriteButton";
import { BookingModal } from "@/components/homepage/BookingModal";
import ReviewCard from "@/components/homepage/ReviewCard";
import ReviewForm from "@/components/homepage/ReviewForm";
import { getPropertyById } from "@/lib/api/properties";
import { getReviewsById } from "@/lib/api/reviews";
import { getCurrentUser } from "@/lib/session";
import { Avatar, Chip } from "@heroui/react";
import Image from "next/image";
import { BiCheck } from "react-icons/bi";
import { FaBed, FaHome, FaMapMarkerAlt, FaRegCommentDots, FaRulerCombined, FaShower } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";

const PropertyDetailsPage = async ({ params }) => {
  const { id } = await params;
  const property = await getPropertyById(id);
  const user = await getCurrentUser();
  const reviews = await getReviewsById(property?._id);

  const bookingHighlights = [
    "Instant Booking Available",
    "Secure Payment",
    "No Hidden Charges",
  ];

  return (
    <div className='max-w-7xl mx-auto p-6 space-y-10 w-full'>
      <div className='h-110 overflow-hidden relative rounded-2xl'>
        <Image
          alt={property?.propertyTitle}
          className='object-cover'
          fill
          src={property?.image}
        />
      </div>

      <div className='flex flex-col lg:flex-row items-start gap-6 relative'>
        <div className='w-full lg:w-auto lg:flex-1 space-y-6'>
          <div 
            className="flex flex-col sm:flex-row lg:items-center justify-between gap-2"
          >
            <div className="space-y-2">
              <h2 className='font-medium text-2xl lg:text-3xl'>
                {property?.propertyTitle}
              </h2>

              <p className='flex font-medium items-end text-xl lg:text-2xl'>
                <span className="flex items-center">
                  <TbCurrencyTaka />  
                  {property?.rent}
                </span>
                /
                <span className="text-sm">{property?.rentType === 'Monthly' ? 'Month' : property?.rentType === 'Weekly' ? 'Week' : 'Daily'}</span>
              </p>
            </div>
            
            <p className='flex items-center text-sm'>
              <FaMapMarkerAlt />
              {property?.location}
            </p>
          </div>

          <div className='gap-6 grid sm:grid-cols-2 text-lg'>
            <div className='border p-6 rounded-xl  space-y-2'>
              <FaHome className="text-3xl" />
              {property?.propertyType}
            </div>

            <div className='border p-6 rounded-xl space-y-2'>
              <FaRulerCombined className="text-3xl" />
              {property?.propertySize} sqft
            </div>

            <div className='border p-6 rounded-xl space-y-2'>
              <FaBed className="text-3xl" />
              {property?.bedrooms} Bedrooms
            </div>

            <div className='border p-6 rounded-xl space-y-2'>
              <FaShower className="text-3xl" />
              {property?.bathrooms} Bathrooms
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-lg">Description:</h4>
            <p>{property?.description}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-lg">Extra Features:</h4>
            <p>{property?.extraFeatures}</p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-lg">Amenities:</h4>

            <div className='flex flex-wrap gap-2'>
              {
                property?.amenities.map((item, idx) => (
                  <Chip key={idx}>{item}</Chip>
                ))
              }
            </div>
          </div>
        </div>
        
        {
          user?.role === 'Tenant' && (
            <div 
              className='border p-6 rounded-2xl sticky top-20 space-y-6 w-full lg:w-auto'
            >
              <div>
                <h3 className="text-lg lg:text-xl">{property?.propertyTitle}</h3>

                <p className='flex items-center text-lg'>
                  <TbCurrencyTaka />
                  {property?.rent}/
                  <span className="text-xs">{property?.rentType === 'Monthly' ? 'Month' : property?.rentType === 'Weekly' ? 'Week' : 'Daily'}</span>
                </p>
              </div>

              <div className='space-y-2'>
                <BookingModal
                  property={property}
                  user={user}
                />
                
                <AddFavoriteButton
                  propertyId={id} 
                />
              </div>

              <div>
                {
                  bookingHighlights.map((item, idx) => (
                    <p 
                      className='flex gap-1 items-center'
                      key={idx}
                    >
                      <span className="text-green-400">
                        <BiCheck/>
                      </span> 

                      <span className='text-sm'>{item}</span>
                    </p>
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
      
      <div className='flex flex-col lg:items-start lg:flex-row gap-6'>
        {
          user?.role === 'Tenant' && (
            <ReviewForm
              property={property}
              user={user} 
            />
          )
        }

        {
          reviews.length === 0 ? (
            <div 
              className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-default-300 bg-content1 px-8 py-16 text-center w-full"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FaRegCommentDots size={28} />
              </div>

              <h3 className="text-2xl font-semibold">
                No Reviews Yet
              </h3>

              <p className="mt-3 max-w-md text-default-500">
                This property hasn't received any reviews yet. Be the first tenant to
                share your experience and help others make informed decisions.
              </p>
            </div>
          ) : (
            <div className='flex-1 space-y-4'>
              <h3 className='text-2xl font-bold'>Reviews</h3>

              <div className='flex flex-col gap-4 rounded-xl'>
                {
                  reviews.map(review => (
                    <ReviewCard
                      key={review?._id}
                      review={review}
                    />
                  ))
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default PropertyDetailsPage;