import { serverFetch } from "../core/server"

export const getReviewsById = async (propertyId) => {
  return serverFetch(`/api/reviews/${propertyId}`);
}