import { serverFetch } from "../core/server"

export const getBookingsById = async (tenantId) => {
  return serverFetch(`/api/bookings/${tenantId}`);
}