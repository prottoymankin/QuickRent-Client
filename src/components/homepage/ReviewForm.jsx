'use client';

import { createReview } from "@/lib/actions/reviews";
import { TextArea, Select, ListBox, Label, Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const ReviewForm = ({ property, user }) => {
  const router = useRouter();

  const ratings = [
    { id: "1", label: "1 - Poor" },
    { id: "2", label: "2 - Fair" },
    { id: "3", label: "3 - Good" },
    { id: "4", label: "4 - Very Good" },
    { id: "5", label: "5 - Excellent" },
  ];

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    const reviewData = {
      ...Object.fromEntries(formData.entries()),
      rating: Number(formData.get('rating')),
      propertyId: property?._id,
      userId: user?.id,
      userName: user?.name,
      userImage: user?.image,
      userEmail: user?.email,
      createdAt: new Date()
    }

    const response = await createReview(reviewData);

    if (response.acknowledged) {
      form.reset();
      router.push(`/all-properties/${property?._id}`);
    }
  }

  return (
    <div className='flex-1 space-y-4 lg:sticky lg:top-20'>
      <h3 className="font-medium text-2xl">Review & Rating</h3>

      <form 
        className='space-y-2'
        onSubmit={onSubmit}
      >
        <Select
          name="rating"
          className="max-w-3xs"
          placeholder="Select Rating"
        >
          <Label>Rating</Label>

          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
            <ListBox>
              {ratings.map((rating) => (
                <ListBox.Item
                  key={rating.id}
                  id={rating.id}
                  textValue={rating.label}
                >
                  {rating.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
        
        <div className='flex gap-4 items-end'>
          <div className="space-y-2 flex-1">
            <Label>Review</Label>

            <TextArea
              aria-label="Short Review"
              fullWidth
              name="review"
              placeholder="Write your review"
              rows={3}
            />
          </div>

          <Button
            className='bg-emerald-600 hover:bg-emerald-700 rounded-lg'
            type='submit'
          >
            Submit
          </Button>
        </div>

      </form>
    </div>
  );
};

export default ReviewForm;