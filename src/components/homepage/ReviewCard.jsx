import { formatDate } from "@/utils/formatDate";
import { Avatar } from "@heroui/react";

const ReviewCard = ({ review }) => {
  return (
    <div className='border flex flex-col gap-4 p-6 rounded-lg'>
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

      <div className='text-sm'>
        <p><span className='font-bold'>Rating:</span> {review?.rating}</p>
        <p><span className='font-bold'>Date:</span> {formatDate(review?.createdAt)}</p>
      </div>

      <p>
        <q>{review?.review}</q>
      </p>
    </div>
  );
};

export default ReviewCard;