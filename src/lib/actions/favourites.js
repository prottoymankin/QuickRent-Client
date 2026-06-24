import { serverMutation } from "../core/server"

export const addToFavorites = async (data) => {
  return serverMutation('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}

export const removeFavoriteProperty = async (userId, propertyId) => {
  return serverMutation (`/api/favorites?userId=${userId}&propertyId=${propertyId}`, {
    method: 'DELETE'
  });
}