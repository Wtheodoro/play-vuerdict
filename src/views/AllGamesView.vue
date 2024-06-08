<script setup>
import Header from '../components/Header.vue'
import SectionTitle from '../components/SectionTitle.vue'
import TrendingGameCard from '../components/TrendingGameCard.vue'
import AboutSection from '../components/AboutSection.vue'
</script>

<template>
  <main class="min-h-screen bg-black text-white pb-20">
    <Header />

    <SectionTitle>All trending games</SectionTitle>
    <div class="mt-20 flex flex-wrap justify-center items-center gap-10 pb-10">
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
    </div>

    <AboutSection />
  </main>
</template>
