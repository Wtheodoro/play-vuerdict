<script setup lang="ts">
import { useRouter } from 'vue-router'

interface TrendingGamesCard {
  name: string
  rating: number
  cardImageUrl: string
  gameId: string
  slug: string
}

const props = defineProps<TrendingGamesCard>()
const router = useRouter()

const handleClick = () => {
  router.push(`/games/${props.slug}/${props.gameId}`)
}
</script>

<template>
  <div class="w-64 flex flex-col items-center" @click="handleClick">
    <img
      :src="props.cardImageUrl"
      alt="prince of persia"
      class="w-64 h-72 rounded-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
    />

    <p class="mt-4">{{ props.name }}</p>

    <div class="w-full flex items-center mt-3 gap-1">
      <v-icon name="md-localfiredepartment" class="text-red-500" />
      <p class="text-2xl text-orange-dark">40 Reviews</p>
    </div>

    <div class="w-full flex items-center mt-2 gap-1">
      <v-icon name="bi-star-fill" class="text-yellow-400" />
      <p class="text-2xl text-green-grade/90">{{ props.rating }}</p>
    </div>
  </div>
</template>

BiStarFill
