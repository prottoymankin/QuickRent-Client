import { serverFetch } from "../core/server";

export const getApprovedProperties = async ({
  page = 1,
  search = "",
  propertyType = "",
  sort = "default",
  minPrice = "",
  maxPrice = "",
}) => {
  const params = new URLSearchParams();

  params.append("page", page);

  if (search.trim()) {
    params.append("search", search);
  }

  if (propertyType) {
    params.append("propertyType", propertyType);
  }

  if (sort !== "default") {
    params.append("sort", sort);
  }

  if (minPrice) {
    params.append("minPrice", minPrice);
  }

  if (maxPrice) {
    params.append("maxPrice", maxPrice);
  }

  return serverFetch(`/api/properties/approved?${params.toString()}`);
};

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