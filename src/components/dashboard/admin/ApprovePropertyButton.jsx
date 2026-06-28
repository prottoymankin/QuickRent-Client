'use client';

import { updatePropertyStatus } from "@/lib/actions/properties";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoMdCheckmark } from "react-icons/io";

const ApprovePropertyButton = ({ property }) => {
  const router = useRouter();

  const onClick = async () => {
    const updateData = {
      propertyId: property._id,
      newStatus: 'Approved' 
    };

    const result = await updatePropertyStatus(updateData);
    
    if (result.acknowledged) {
      toast.success('Property has been approved.');
      router.push('/dashboard/admin/all-properties');
    }
  }

  return (
    <Button 
      className='bg-emerald-100 text-emerald-600'
      isIconOnly
      onClick={onClick}
      variant="secondary"
    >
      <IoMdCheckmark />
    </Button>
  );
};

export default ApprovePropertyButton;