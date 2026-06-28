'use client';

import { updateBookingStatus } from "@/lib/actions/bookings";
import { Button, toast } from "@heroui/react";
import { useRouter } from "next/navigation";

const BookingStatusUpdateBtn = ({ icon, status, id }) => {
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
      className={status === 'Approved' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-500'}
      isIconOnly
      onClick={handleChangeBookingStatus}
    >
      {icon}
    </Button>
  );
};

export default BookingStatusUpdateBtn;