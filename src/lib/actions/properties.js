import { serverMutation } from "../core/server"

export const createProperty = async (propertyData) => {
  return serverMutation('/api/properties', {
    method: 'POST',
    body: JSON.stringify(propertyData)
  });
}