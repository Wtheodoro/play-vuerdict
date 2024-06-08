<script setup>
import Header from '../../components/Header.vue'
import Button from '../../components/Button.vue'
import SectionTitle from '../../components/SectionTitle.vue'
import ReviewCard from '../../components/ReviewCard.vue'
</script>

<template>
  <div class="background-image w-full h-screen bg-cover bg-no-repeat bg-center text-white pb-20">
    <div class="w-full h-full bg-gradient-to-t from-black from-20% to-transparent">
      <Header />

      <div
        class="flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-4 md:px-24 h-full"
      >
        <div class="mb-8 md:mb-0 md:max-w-[527px] mt-20">
          <h2 class="text-4xl md:text-5xl font-bold mb-4 leading-normal md:leading-relaxed mt-2">
            Prince of Persia The Lost Crown
          </h2>
          <Button class="mt-12" :rounded="true">Add my rating</Button>
        </div>

        <div class="md:w-1/2 flex justify-end mt-20">
          <img
            src="../../assets/images/princeOfPersia.avif"
            alt="prince of persia"
            class="w-64 h-72 rounded-lg hover:scale-105 transition duration-200 ease-in-out cursor-pointer"
          />
        </div>
      </div>
      <!-- {{ $route.params.id }} -->
    </div>
  </div>

  <main class="min-h-screen bg-black text-white pb-20 px-10">
    <div class="flex flex-col justify-center items-center">
      <SectionTitle>Description</SectionTitle>
      <p class="text-xl text-center max-w-[1040px]">
        Dash into a stylish and thrilling action-adventure platformer game set in a mythological
        Persian world where the boundaries of time and space are yours to manipulate. Use your Time
        Powers, combat and platforming skills to perform deadly combos and defeat time-corrupted
        enemies and mythological creatures. Acquire and equip new Amulets at shopkeepers to play as
        you see fit. Discover a cursed Persian-inspired world filled with bigger-than-life
        landmarks. Explore a variety of highly detailed biomes, each with its own identity, wonders
        and dangers. Use your wits to solve puzzles, find hidden treasures and complete quests to
        learn more about this corupted place. Immerse yourself into a Persian mythological fantasy
        through an intriguing and original story. Cross paths with colorful characters to better
        unravel the mysteries of Mount Qaf. Enjoy high quality graphics, immersive cinematics and
        fresh Artistic Direction, along with a unique gameplay fluidity thanks to 60 fps rate on all
        platforms. [Ubisoft]
      </p>
    </div>

    <div class="mt-20">
      <SectionTitle>User Reviews</SectionTitle>

      <div class="max-w-[1024px] flex flex-col justify-center items-center gap-10 mx-auto">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  </main>
</template>

<style scoped>
.background-image {
  background-image: url('@/assets/images/princeOfPersiaBanner.png');
}
</style>
