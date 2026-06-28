import { getTopReviews } from "@/lib/api/reviews";
import { Avatar } from "@heroui/react";
import { FaStar } from "react-icons/fa";

const ReviewSection = async () => {
  const topReviews = await getTopReviews();

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
            What Tenants Say
          </h2>

          <p className="mt-5 text-lg leading-7 text-zinc-500">
            Discover real experiences and honest feedback from previous
            tenants.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {topReviews.map((review) => (
            <div
              key={review?._id}
              className="flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-4">
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

              <div className="mb-4 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className="text-sm" />
                ))}
              </div>

              <p className="flex-1 leading-7 text-zinc-600 italic">
                "{review?.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;