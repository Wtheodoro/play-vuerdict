<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const gamesData = ref([])
const router = useRouter()
const toast = useToast()

const form = ref({
  name: '',
  review: '',
  gameId: ''
})

const getGames = async () => {
  return fetch('http://localhost:8000/api/games').then((response) => response.json())
}

const postReview = async (payload) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  return fetch('http://localhost:8000/api/reviews', options)
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

const submitForm = () => {
  const payload = {
    name: form.value.name,
    review: form.value.review,
    gameId: form.value.gameId,
    rating: 5,
    date: '2024-06-01'
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
  getGames().then((data) => {
    if (data.length) {
      console.log(data)
      gamesData.value = data
    }
  })
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
          <option v-for="game in gamesData" :key="game.id" :value="game.id">{{ game.name }}</option>
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
