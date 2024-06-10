<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Header from '../components/Header.vue'
import MainSection from '../components/MainSection.vue'
import FeaturedGamesSection from '../components/FeaturedGamesSection.vue'
import CurrentlyTrendingGamesSection from '../components/CurrentlyTrendingGamesSection.vue'
import AboutSection from '../components/AboutSection.vue'

const trendingGamesData = ref([])

const getTrendingGames = async () => {
  return fetch('http://localhost:8000/api/games?limit=5').then((response) => response.json())
}

onMounted(() => {
  getTrendingGames().then((data) => {
    if (data.length) {
      trendingGamesData.value = data
    }
  })
})
</script>

<template>
  <main class="bg-cover bg-center min-h-screen bg-black text-white">
    <div class="background-image">
      <Header />
      <MainSection />
    </div>

    <FeaturedGamesSection />
    <CurrentlyTrendingGamesSection :trendingGames="trendingGamesData" />

    <AboutSection />
  </main>
</template>

<style scoped>
.background-image {
  background-image: url('@/assets/images/backgroundLines.png');
}
</style>
