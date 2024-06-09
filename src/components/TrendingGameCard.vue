<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const MOCK_GAME_NAME = 'Prince of Persia The Lost Crown'

const handleClick = () => {
  const gameSlug = MOCK_GAME_NAME.toLowerCase().replace(/\s+/g, '_')
  router.push(`/games/${gameSlug}/123`)
}
</script>

<template>
  <div class="w-64 flex flex-col items-center" @click="handleClick">
    <img
      src="../assets/images/princeOfPersia.avif"
      alt="prince of persia"
      class="w-64 h-72 rounded-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
    />

    <p class="mt-4">Prince of Persia The Lost Crown</p>

    <div class="w-full flex items-center mt-3 gap-1">
      <v-icon name="md-localfiredepartment" class="text-red-500" />
      <p class="text-2xl text-orange-dark">40 Reviews</p>
    </div>

    <div class="w-full flex items-center mt-2 gap-1">
      <v-icon name="bi-star-fill" class="text-yellow-400" />
      <p class="text-2xl text-green-grade/90">9.8</p>
    </div>
  </div>
</template>

BiStarFill
