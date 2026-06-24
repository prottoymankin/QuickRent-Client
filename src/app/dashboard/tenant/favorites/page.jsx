import PageHeader from "@/components/dashboard/shared/PageHeader";
import { getFavouritesByUserId } from "@/lib/api/favorites";
import { getCurrentUser } from "@/lib/session";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

const FavoritesPage = async () => {
  const user = await getCurrentUser();
  const favorites = await getFavouritesByUserId(user?.id);

  return (
    <div className='space-y-10'>
      <PageHeader
        title={'Saved Properties'}
        subtitle={'Keep track of your favorite listings and revisit them anytime.'}
      />

      <div className='gap-6 grid lg:grid-cols-2 xl:grid-cols-3'>
        {
          favorites.map(favorite => (
            <div 
              className="border rounded-xl overflow-hidden"
              key={favorite?._id}
            >
              <div className='h-50 relative'>
                <Image
                  alt={favorite?.propertyTitle}
                  className='object-cover'
                  fill
                  src={favorite?.image}
                />
              </div>

              <div className='p-6'>
                <div>
                  <h3 className="line-clamp-1 text-xl font-semibold">
                    {favorite?.propertyTitle}
                  </h3>

                  <p className="text-lg">
                    ৳ {favorite?.rent}
                  </p>
                </div>

                <p className="flex items-center gap-1 text-sm">
                  <FaMapMarkerAlt />
                  {favorite.location}
                </p>

                <div className="flex gap-3 mt-4">
                  <Link
                    className='w-full'
                    href={`/all-properties/${favorite._id}`}
                  >
                    <Button className='rounded-lg w-full'>
                      View Details
                    </Button>
                  </Link>

                  <Button
                    className='rounded-lg w-full'
                    variant="danger"
                  >
                    Remove
                  </Button>
                </div>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default FavoritesPage;