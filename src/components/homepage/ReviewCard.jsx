import { formatDate } from "@/utils/formatDate";
import { Avatar } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <Avatar.Image
              alt={review?.userName}
              className="object-cover"
              src={review?.userImage}
            />

            <Avatar.Fallback>
              {review?.userName?.[0]?.toUpperCase()}
            </Avatar.Fallback>
          </Avatar>

          <div>
            <h3 className="font-semibold text-zinc-950">
              {review?.userName}
            </h3>

            <p className="text-sm text-zinc-500">
              {review?.userEmail}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-lg bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-600">
          <FaStar className="text-xs" />
          {review?.rating}
        </div>
      </div>

      <p className="mt-5 text-sm text-zinc-500">
        {formatDate(review?.createdAt)}
      </p>

      <p className="mt-4 leading-7 italic text-zinc-700">
        "{review?.review}"
      </p>
    </div>
  );
};

export default ReviewCard;