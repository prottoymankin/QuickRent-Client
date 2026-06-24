import { serverFetch } from "../core/server"

export const getFavouritesByUserId = async (userId) => {
  return serverFetch(`/api/favorites/${userId}`);
}