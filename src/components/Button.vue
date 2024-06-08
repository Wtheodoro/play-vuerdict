<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  rounded?: boolean
}

const props = defineProps<Props>()
</script>

<template>
  <button
    :class="
      props.rounded
        ? 'px-4 py-2 bg-orange-light text-white rounded-full transition duration-300 ease-in-out hover:bg-orange-300'
        : 'px-4 py-2 bg-gradient-to-r from-gradient-orange-from to-gradient-orange-to text-white rounded-md transition duration-300 ease-in-out hover:bg-orange-300'
    "
  >
    <slot />
  </button>
</template>
