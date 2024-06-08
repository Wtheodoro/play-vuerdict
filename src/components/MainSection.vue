<script setup>
import Button from './Button.vue'
</script>

<template>
  <section
    class="flex flex-col md:flex-row items-center justify-center md:justify-between py-16 px-4 md:px-24 pb-52"
  >
    <div class="md:w-1/2 mb-8 md:mb-0 md:max-w-[527px]">
      <p class="font-bold text-orange-dark">
        Made with <v-icon name="bi-suit-heart-fill" class="text-red-500" /> by Walison
      </p>
      <h2 class="text-4xl md:text-5xl font-bold mb-4 leading-normal md:leading-relaxed mt-2">
        Explore the world of gaming with our community!
      </h2>
      <p class="text-lg text-gray-400">
        You'll find in-depth reviews, player ratings, and discussions on the latest games, all in
        one place. Join our community of gamers and start exploring today!
      </p>
      <Button class="mt-12" :rounded="true">Get more details</Button>
    </div>
    <div class="md:w-1/2">
      <img
        src="../assets/images/joystick.svg"
        alt="Joystick"
        class="w-full md:w-auto animate-bounce-slow"
      />
    </div>
  </section>

  <div class="w-full h-48 -mt-48 bg-gradient-to-t from-black to-transparent to-35%" />
</template>
