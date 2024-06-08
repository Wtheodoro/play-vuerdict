<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps } from 'vue'

defineProps(['linkTo'])
</script>

<template>
  <router-link
    :to="linkTo"
    class="px-4 py-2 bg-orange-light text-white rounded-md transition duration-300 ease-in-out hover:bg-orange-300"
    exact
  >
    <slot />
  </router-link>
</template>
