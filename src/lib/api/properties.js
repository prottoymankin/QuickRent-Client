import { serverFetch } from "../core/server";

export const getApprovedProperties = async () => {
  return serverFetch('/api/properties/approved');
}

export const getProperties = async () => {
  return serverFetch('/api/properties');
}

export const getOwenerProperties = async (ownerId) => {
  return serverFetch(`/api/my-properties?ownerId=${ownerId}`);
}

export const getFeaturedProperties = async () => {
  return serverFetch('/api/properties/featured');
}