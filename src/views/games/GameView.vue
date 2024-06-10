<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '../../components/Header.vue'
import Button from '../../components/Button.vue'
import SectionTitle from '../../components/SectionTitle.vue'
import ReviewCard from '../../components/ReviewCard.vue'

const route = useRoute()
const router = useRouter()
const reviewsData = ref([])
const gameData = ref({})

const getCurrentGameReviews = async () => {
  return fetch(`http://localhost:8000/api/reviews/${route.params.id}`).then((response) =>
    response.json()
  )
}

const getCurrentGame = async () => {
  return fetch(`http://localhost:8000/api/games/${route.params.id}`).then((response) =>
    response.json()
  )
}

const handleClick = () => {
  router.push(`/add-review?gameId=${route.params.id}`)
}

onMounted(() => {
  getCurrentGameReviews().then((data) => {
    if (data.length) {
      reviewsData.value = data
    }
  })

  getCurrentGame().then((data) => {
    console.log(data)
    if (data._id) {
      gameData.value = data
    }
  })
})

const bannerImageUrl = computed(() => {
  return gameData.value.bannerImageUrl ? `url(${gameData.value.bannerImageUrl})` : ''
})
</script>

<template>
  <div
    :style="{ backgroundImage: bannerImageUrl }"
    class="w-full h-[calc(100vh_-_120px)] bg-cover bg-no-repeat bg-center text-white pb-20"
  >
    <div class="w-full h-[calc(100vh_-_120px)] bg-gradient-to-t from-black from-20% to-transparent">
      <Header />

      <div
        class="flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-4 md:px-24 h-full"
      >
        <div class="mb-8 md:mb-0 md:max-w-[527px] mt-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 leading-normal md:leading-relaxed mt-2">
            {{ gameData.name }}
          </h2>
          <Button class="mt-12" :rounded="true" @click="handleClick" v-if="gameData._id"
            >Add my review</Button
          >
        </div>

        <div class="md:w-1/2 flex justify-end mt-20">
          <img
            :src="gameData.cardImageUrl"
            alt="prince of persia"
            class="w-64 h-72 rounded-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>

  <main class="min-h-screen bg-black text-white pb-20 px-10">
    <div class="flex flex-col justify-center items-center">
      <SectionTitle>Description</SectionTitle>
      <p class="text-xl text-center max-w-[1040px]">
        {{ gameData.description }}
      </p>
    </div>

    <div class="mt-20">
      <SectionTitle>User Reviews</SectionTitle>

      <div class="max-w-[1024px] flex flex-col justify-center items-center gap-10 mx-auto">
        <ReviewCard
          v-for="review in reviewsData"
          :key="review._id"
          :review="review.review"
          :date="review.date"
          :name="review.name"
        />

        <div
          v-if="reviewsData.length === 0 && gameData._id"
          class="bg-gray-800 text-white text-center p-6 rounded-lg shadow-md"
        >
          <p class="text-2xl">
            There are no reviews for this game yet, but you can be the first to add one!
          </p>
          <Button class="mt-12" :rounded="true" @click="handleClick">Add my review</Button>
        </div>
      </div>
    </div>
  </main>
</template>
