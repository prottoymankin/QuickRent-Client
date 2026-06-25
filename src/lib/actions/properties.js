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

export const deleteProperty = async (propertyId) => {
  return serverMutation(`/api/properties/${propertyId}`, {
    method: 'DELETE'
  });
}

export const updateProperty = async (propertyId, updateData) => {
  return serverMutation(`/api/properties/${propertyId}`, {
    method: 'PATCH',
    body: JSON.stringify(updateData)
  });
}