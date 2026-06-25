'use client';

import { updateBookingStatus } from "@/lib/actions/bookings";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const BookingStatusUpdateBtn = ({ icon, status, variant, id }) => {
  const router = useRouter();

  const handleChangeBookingStatus = async () => {
    const result = await updateBookingStatus({
      bookingStatus: status
    }, id);

    if (result.acknowledged) {
      toast.success(`Booking request ${status.toLowerCase()}`);
      router.push('/dashboard/owner/booking-requests');
    }
  }

  return (
    <Button
      isIconOnly
      onClick={handleChangeBookingStatus}
      variant={variant}
    >
      {icon}
    </Button>
  );
};

export default BookingStatusUpdateBtn;