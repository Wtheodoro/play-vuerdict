<script setup>
import { ref, onMounted } from 'vue'
import Header from '../components/Header.vue'
import SectionTitle from '../components/SectionTitle.vue'
import TrendingGameCard from '../components/TrendingGameCard.vue'
import AboutSection from '../components/AboutSection.vue'

const allGamesData = ref({})

const getAllGames = async () => {
  return fetch('http://localhost:8000/api/games?limit=50').then((response) => response.json())
}

onMounted(() => {
  getAllGames().then((data) => {
    if (data.length) {
      allGamesData.value = data
    }
  })
})
</script>

<template>
  <main class="min-h-screen bg-black text-white pb-20">
    <Header />

    <SectionTitle>All trending games</SectionTitle>
    <div class="mt-20 flex flex-wrap justify-center items-center gap-10 pb-10">
      <TrendingGameCard
        v-for="game in allGamesData"
        :key="game._id"
        :gameId="game._id"
        :name="game.name"
        :rating="game.rating"
        :cardImageUrl="game.cardImageUrl"
        :slug="game.slug"
      />
    </div>

    <AboutSection />
  </main>
</template>
