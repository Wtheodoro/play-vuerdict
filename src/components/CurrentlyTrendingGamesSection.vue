<script setup lang="ts">
import LinkButton from './LinkButton.vue'
import TrendingGameCard from './TrendingGameCard.vue'
import type { Game } from '@/types/game'

interface TrendingGamesCard {
  trendingGames: Game[]
}

const props = defineProps<TrendingGamesCard>()
</script>

<template>
  <section class="p-16">
    <div class="w-full flex items-center justify-between">
      <h2 class="font-bold text-3xl">Currently Trending Games</h2>
      <LinkButton linkTo="/all-games">SEE ALL</LinkButton>
    </div>

    <div class="mt-20 flex flex-wrap justify-center items-center gap-10">
      <TrendingGameCard
        v-for="game in props.trendingGames"
        :key="game._id"
        :gameId="game._id"
        :name="game.name"
        :rating="game.rating"
        :cardImageUrl="game.cardImageUrl"
        :slug="game.slug"
      />
    </div>
  </section>
</template>
