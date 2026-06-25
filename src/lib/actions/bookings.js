import { serverMutation } from "../core/server"

export const createBooking = async (data) => {
  return serverMutation('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export const updateBookingStatus = async (updateData, id) => {
  return serverMutation(`/api/bookings/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(updateData)
  });
}