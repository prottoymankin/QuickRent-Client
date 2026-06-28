'use client';

import { addToFavorites } from "@/lib/actions/favourites";
import { authClient } from "@/lib/auth-client";
import { Button, toast } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";

const AddFavoriteButton = ({ propertyId }) => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const handleAddToFavorites = async () => {
    const data = {
      userId: user?.id,
      propertyId
    };

    const result = await addToFavorites(data);
    
    if (result.acknowledged) {
      toast.success("Added to favorites.");
    } else {
      toast.danger(result.message);
    }
  }

  return (
    <Button
      className="border-emerald-600 rounded-lg text-emerald-600 hover:bg-emerald-50 w-full"
      onClick={handleAddToFavorites}
      variant="outline"
    >
      <FaRegHeart />
      Add to favorites
    </Button>
  );
};

export default AddFavoriteButton;