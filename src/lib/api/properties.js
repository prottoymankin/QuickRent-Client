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

export const getPropertyById = async (id) => {
  return serverFetch(`/api/properties/${id}`);
}

export const searchProperties = async (search) => {
  return serverFetch(`/api/properties/search?q=${encodeURIComponent(search)}`);
}

export const filterByPropertyType = async (propertyType) => {
  return serverFetch(
    `/api/properties/filter/type?propertyType=${propertyType}`
  );
};