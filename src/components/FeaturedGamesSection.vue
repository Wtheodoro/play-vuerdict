<script setup>
import SectionTitle from './SectionTitle.vue'
import FeaturedGameCard from './FeaturedGameCard.vue'
</script>

<template>
  <section class="-mt-36 px-16">
    <SectionTitle>Featured Games</SectionTitle>

    <div class="mt-20 flex items-center gap-6 z-10 relative">
      <FeaturedGameCard />
      <FeaturedGameCard />
      <FeaturedGameCard />
    </div>

    <div class="bg-black py-20 z-20 relative">
      <p class="text-4xl text-gray-400 text-center">
        Dive into the captivating worlds of the games we love and cherish.
      </p>
    </div>
  </section>
</template>
