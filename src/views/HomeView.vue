<script setup lang="ts">
import Header from '../components/Header.vue'
import MainSection from '../components/MainSection.vue'
</script>

<template>
  <main class="bg-cover bg-center min-h-screen bg-black text-white">
    <Header />
    <MainSection />
  </main>
</template>

<style>
main {
  background-image: url('@/assets/images/backgroundLines.png');
}
</style>
