import { serverMutation } from "../core/server"

export const createProperty = async (propertyData) => {
  return serverMutation('/api/properties', {
    method: 'POST',
    body: JSON.stringify(propertyData)
  });
}

export const updatePropertyStatus = async (updateData) => {
  return serverMutation('/api/properties', {
    method: 'PATCH',
    body: JSON.stringify(updateData)
  })
}