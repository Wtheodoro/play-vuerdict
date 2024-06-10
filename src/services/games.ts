import { API_URL } from './api'

export const getTrendingGames = async () => {
  return fetch(`${API_URL}/api/games?limit=5`).then((response) => response.json())
}

export const getAllGames = async () => {
  return fetch(`${API_URL}/api/games?limit=50`).then((response) => response.json())
}

export const getCurrentGame = async (gameId: string) => {
  return fetch(`${API_URL}/api/games/${gameId}`).then((response) => response.json())
}
