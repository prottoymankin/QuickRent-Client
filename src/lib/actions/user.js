import { serverMutation } from "../core/server"

export const updateUserRole = async (updateData) => {
  return serverMutation('/api/users', {
    method: 'PATCH',
    body: JSON.stringify(updateData)
  });
}