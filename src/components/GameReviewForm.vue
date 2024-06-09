<script setup>
import { ref } from 'vue'

const games = ref([
  { id: 1, name: 'Game 1' },
  { id: 2, name: 'Game 2' },
  { id: 3, name: 'Game 3' }
])

const form = ref({
  author: '',
  review: '',
  game: ''
})

const submitForm = () => {
  console.log('Form Submitted:', form.value)
}
</script>

<template>
  <div class="p-8 bg-gray-800 text-white rounded-lg shadow-md max-w-lg mx-auto">
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="author" class="block text-sm font-medium mb-2">Your Name</label>
        <input
          v-model="form.author"
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
          v-model="form.game"
          id="game"
          class="w-full p-2 border border-gray-600 rounded bg-gray-700 focus:outline-none focus:border-gray-400"
          required
        >
          <option disabled value="">Select a game</option>
          <option v-for="game in games" :key="game.id" :value="game.name">{{ game.name }}</option>
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
