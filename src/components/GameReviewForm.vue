<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAllGames } from '@/services/games'
import { postReview } from '@/services/reviews'
import { useToast } from 'vue-toastification'
import { formatDateNumeric } from '../helpers/formatDate.js'

const gamesData = ref([])
const router = useRouter()
const route = useRoute()
const toast = useToast()

const form = ref({
  name: '',
  review: '',
  gameId: ''
})

const submitForm = () => {
  const payload = {
    name: form.value.name,
    review: form.value.review,
    gameId: form.value.gameId,
    rating: 5,
    date: formatDateNumeric(new Date())
  }

  postReview(payload)
    .then(() => {
      toast.success('Review posted successfully!')
      router.back()
    })
    .catch((error) => {
      toast.error('Error posting review: ' + error.message)
    })
}

onMounted(() => {
  getAllGames().then((data) => {
    if (data.length) {
      gamesData.value = data
    }
  })

  const gameIdFromRoute = route.query.gameId
  if (gameIdFromRoute) {
    form.value.gameId = gameIdFromRoute
  }
})
</script>

<template>
  <div class="p-8 bg-gray-800 text-white rounded-lg shadow-md max-w-lg mx-auto">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="author" class="block text-sm font-medium mb-2">Your Name</label>
        <input
          v-model="form.name"
          type="text"
          id="author"
          class="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:border-gray-400"
          required
        />
      </div>
      <div class="mb-4">
        <label for="review" class="block text-sm font-medium mb-2">Review</label>
        <textarea
          v-model="form.review"
          id="review"
          rows="4"
          class="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:border-gray-400"
          required
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="game" class="block text-sm font-medium mb-2">Game</label>
        <select
          v-model="form.gameId"
          id="game"
          class="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:border-gray-400"
          required
        >
          <option disabled value="">Select a game</option>
          <option v-for="game in gamesData" :key="game._id" :value="game._id">
            {{ game.name }}
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="w-full py-2 bg-orange-light text-white rounded-md transition duration-300 ease-in-out hover:bg-orange-500"
      >
        Submit Review
      </button>
    </form>
  </div>
</template>
