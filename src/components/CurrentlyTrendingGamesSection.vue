<script setup>
import Button from './Button.vue'
import TrendingGameCard from './TrendingGameCard.vue'
</script>

<template>
  <section class="p-16">
    <div class="w-full flex items-center justify-between">
      <h2 class="font-bold text-3xl">Currently Trending Games</h2>
      <Button class="md:ml-9">SEE ALL</Button>
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
