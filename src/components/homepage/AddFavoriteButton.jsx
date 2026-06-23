import { Button } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";

const AddFavoriteButton = () => {
  return (
    <Button
      className='rounded-lg w-full'
      variant="tertiary"
    >
      <FaRegHeart />
      Add to favorites
    </Button>
  );
};

export default AddFavoriteButton;