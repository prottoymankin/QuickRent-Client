import { serverFetch } from "../core/server"

export const getBookingsById = async (tenantId) => {
  return serverFetch(`/api/bookings/${tenantId}`);
}

export const getBookingRequestById = async (ownerId) => {
  return serverFetch(`/api/bookings/owner/${ownerId}`);
}

export const getAllBookings = async () => {
  return serverFetch('/api/bookings');
}

export const getOwnerTotalIncome = async (ownerId) => {
  return serverFetch(`/api/bookings/${ownerId}/income`);
}