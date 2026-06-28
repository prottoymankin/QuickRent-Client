import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

const PropertyCard = ({ property }) => {
  return (
    <div className='border rounded-2xl overflow-hidden'>
      <div className='h-60 relative w-full'>
        <Image 
          alt={property?.propertyTitle}
          className='object-cover'
          fill
          src={property?.image}
        />
      </div>

      <div className="flex flex-col p-6 space-y-4">
        <div>
          <h3 className='line-clamp-1 text-xl lg:text-2xl font-medium'>
            {property?.propertyTitle}
          </h3>

          <p className='flex items-center text-lg lg:text-xl font-medium'>
            <TbCurrencyTaka />
            {property?.rent}/
            <span className="text-sm">{property?.rentType === 'Monthly' ? 'Month' : property?.rentType === 'Weekly' ? 'Week' : 'Daily'}</span>
          </p>
        </div>

        <div>
          <p className='flex gap-1 items-center line-clamp-1 text-sm'>
            <FaMapMarkerAlt />
            {property?.location}
          </p>

          <p className='flex gap-1 items-center text-sm'>
            <MdOutlineSquareFoot />
            {property?.propertySize} sq ft
          </p>

          <p className='flex gap-1 items-center text-sm'>
            <FaHome />
            {property?.propertyType}
          </p>
        </div>

        <Link href={`/all-properties/${property?._id}`}>
          <Button
            className="rounded-lg bg-emerald-600 font-medium text-white transition hover:bg-emerald-700 w-full"
          >
            View Property Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;