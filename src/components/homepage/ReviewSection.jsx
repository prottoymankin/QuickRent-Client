import { getTopReviews } from "@/lib/api/reviews";
import { Avatar } from "@heroui/react";

const ReviewSection = async () => {
  const topReviews = await getTopReviews();

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Tenants Say
          </h2>

          <p className="mt-4 text-default-500">
            Discover real experiences and honest feedback from previous tenants.
          </p>
        </div>

        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {
            topReviews.map(review => (
              <div 
                key={review?._id}
                className='border flex flex-col gap-4 p-6 rounded-lg'
              >
                <div className='flex gap-6 items-center'>
                  <Avatar>
                    <Avatar.Image 
                      alt="John Doe" 
                      className='object-cover'
                      src={review?.userImage}
                    />
                    <Avatar.Fallback>{review?.userName[0]}</Avatar.Fallback>
                  </Avatar>
          
                  <div>
                    <h3 className='font-medium text-lg'>{review?.userName}</h3>
                    <p className='text-xs'>{review?.userEmail}</p>
                  </div>
                </div>

                <p>
                  <q className='text-sm'>{review?.review}</q>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;