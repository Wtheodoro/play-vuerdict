<script setup>
import GameReviewForm from '../components/GameReviewForm.vue'
import Header from '../components/Header.vue'
import SectionTitle from '../components/SectionTitle.vue'
</script>

<template>
  <main class="min-h-screen bg-black text-white pb-20">
    <Header />

    <SectionTitle>Create a Game Review</SectionTitle>
    <GameReviewForm />
  </main>
</template>
