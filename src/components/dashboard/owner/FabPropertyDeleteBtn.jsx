'use client';

import { removeFavoriteProperty } from "@/lib/actions/favourites";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";

const FabPropertyDeleteBtn = ({userId, propertyId}) => {
  const router = useRouter();

  const handleDeleteFavoriteProperty = async () => {
    const result = await removeFavoriteProperty(userId, propertyId);
    console.log(userId, propertyId)

    console.log(result)

    if (result.acknowledged) {
      toast.success('Property removed from your list successfully.');
      router.push('/dashboard/tenant/favorites');
    } 
  }
  
  return (
    <Button 
      isIconOnly
      onClick={handleDeleteFavoriteProperty} 
      variant="danger"
    >
      <FaTrashAlt />
    </Button>
  );
};

export default FabPropertyDeleteBtn;