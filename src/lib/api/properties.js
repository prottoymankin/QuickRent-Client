import { serverFetch } from "../core/server";

export const getApprovedProperties = async (page) => {
  if (!page) page = 1;

  return serverFetch(`/api/properties/approved?page=${page}`);
}

export const getProperties = async (page) => {
  if (!page) page = 1;

  return serverFetch(`/api/properties?page=${page}`);
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

export const searchProperties = async (search, page) => {
  return serverFetch(`/api/properties/search?q=${encodeURIComponent(search)}&page=${page}`);
}

export const filterByPropertyType = async (propertyType, page) => {
  return serverFetch(
    `/api/properties/filter/type?propertyType=${propertyType}&page=${page}`
  );
};

export const sortProperties = async (sort) => {
  return serverFetch(
    `/api/properties/sort?sort=${sort}`
  );
};