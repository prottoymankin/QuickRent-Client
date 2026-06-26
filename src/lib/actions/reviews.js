import { serverMutation } from "../core/server"

export const createReview = async (reviewData) => {
  return serverMutation('/api/reviews', {
    method: 'POST',
    body: JSON.stringify(reviewData)
  });
}