import { serverFetch } from "../core/server";

export const getProperties = async () => {
  return serverFetch('/api/properties');
}

export const getOwenerProperties = async (ownerId) => {
  return serverFetch(`/api/my-properties?ownerId=${ownerId}`);
}