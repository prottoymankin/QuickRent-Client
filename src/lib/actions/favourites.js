import { serverMutation } from "../core/server"

export const addToFavorites = async (data) => {
  return serverMutation('/api/favorites', {
    method: 'POST',
    body: JSON.stringify(data)
  });
}