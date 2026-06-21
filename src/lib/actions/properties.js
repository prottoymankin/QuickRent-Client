import { serverMutation } from "../core/server"

export const createProperty = async (propertyData) => {
  return serverMutation('/api/properties', propertyData);
}