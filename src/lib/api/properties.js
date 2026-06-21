import { serverFetch } from "../core/server"

export const getOwenerProperties = async (ownerId) => {
  return serverFetch(`/api/my-properties?ownerId=${ownerId}`);
}