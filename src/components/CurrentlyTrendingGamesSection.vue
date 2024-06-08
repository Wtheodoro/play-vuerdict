<script setup>
import LinkButton from './LinkButton.vue'
import TrendingGameCard from './TrendingGameCard.vue'
</script>

<template>
  <section class="p-16">
    <div class="w-full flex items-center justify-between">
      <h2 class="font-bold text-3xl">Currently Trending Games</h2>
      <LinkButton linkTo="/all-games">SEE ALL</LinkButton>
    </div>

    <div class="mt-20 flex flex-wrap justify-center items-center gap-10">
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
      <TrendingGameCard />
    </div>
  </section>
</template>
