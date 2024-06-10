export interface Game {
  _id: string
  name: string
  description: string
  bannerImageUrl: string
  cardImageUrl: string
  releaseDate: string
  developer: string
  publisher: string
  genre: string[]
  platforms: string[]
  rating: number
  slug: string
}
