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

const PropertyInfoCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:border-emerald-200 hover:shadow-sm">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
        <Icon className="text-2xl" />
      </div>

      <div>
        <p className="text-sm text-zinc-500">
          {label}
        </p>

        <h4 className="text-lg font-semibold text-zinc-950">
          {value}
        </h4>
      </div>
    </div>
  );
};


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
            className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-950 lg:text-4xl">
                {property?.propertyTitle}
              </h1>

              <div className="mt-3 flex items-end gap-1">
                <span className="flex items-center text-3xl font-bold text-emerald-600 lg:text-4xl">
                  <TbCurrencyTaka className="text-3xl" />
                  {property?.rent}
                </span>

                <span className="pb-1 text-base text-zinc-500">
                  /
                  {property?.rentType === "Monthly"
                    ? "Month"
                    : property?.rentType === "Weekly"
                    ? "Week"
                    : "Day"}
                </span>
              </div>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-600">
              <FaMapMarkerAlt className="text-emerald-600" />
              <span>{property?.location}</span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <PropertyInfoCard
              icon={FaHome}
              label="Property Type"
              value={property?.propertyType}
            />

            <PropertyInfoCard
              icon={FaRulerCombined}
              label="Property Size"
              value={`${property?.propertySize} sqft`}
            />

            <PropertyInfoCard
              icon={FaBed}
              label="Bedrooms"
              value={property?.bedrooms}
            />

            <PropertyInfoCard
              icon={FaShower}
              label="Bathrooms"
              value={property?.bathrooms}
            />
          </div>

          <div className="space-y-6">
            {/* Description */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-zinc-950">
                Description
              </h3>

              <p className="leading-7 text-zinc-600">
                {property?.description}
              </p>
            </div>

            {/* Extra Features */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold text-zinc-950">
                Extra Features
              </h3>

              <p className="leading-7 text-zinc-600">
                {property?.extraFeatures}
              </p>
            </div>

            {/* Amenities */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="mb-4 text-xl font-semibold text-zinc-950">
                Amenities
              </h3>

              <div className="flex flex-wrap gap-3">
                {property?.amenities.map((item, idx) => (
                  <Chip
                    key={idx}
                    color="success"
                    variant="flat"
                    className="rounded-lg px-2"
                  >
                    {item}
                  </Chip>
                ))}
              </div>
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
              className={`flex flex-col items-center justify-center rounded-2xl border border-zinc-200 bg-white px-8 py-16 text-center shadow-sm ${
                user?.role !== "Tenant" && "w-full"
              }`}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <FaRegCommentDots className="text-4xl" />
              </div>

              <h3 className="text-2xl font-bold text-zinc-950">
                No Reviews Yet
              </h3>

              <p className="mt-3 max-w-md leading-7 text-zinc-500">
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