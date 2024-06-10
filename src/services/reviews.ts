import { API_URL } from './api'

export const getCurrentGameReviews = async (gameId: string) => {
  return fetch(`${API_URL}/api/reviews/${gameId}`).then((response) => response.json())
}

export const postReview = async (payload) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  return fetch(`${API_URL}/api/reviews`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch((error) => {
      console.error('Error posting review:', error)
      throw error
    })
}
