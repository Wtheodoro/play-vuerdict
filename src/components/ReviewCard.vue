<script setup lang="ts">
import { defineProps } from 'vue'
import formatDate from '../helpers/formatDate'
import getInitials from '../helpers/formatDate'

interface ReviewCardProps {
  name: string
  date: string
  review: string
}

const props = defineProps<ReviewCardProps>()
</script>

<template>
  <div class="bg-gray-900 p-10 rounded-md w-full">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-5">
        <div
          class="rounded-full w-20 h-20 bg-orange-light text-white text-2xl flex justify-center items-center"
        >
          {{ getInitials(props.name) }}
        </div>
        <p>{{ props.name }}</p>
      </div>

      <p>{{ formatDate('2024-06-01') }}</p>
    </div>

    <div class="mt-10">
      <p>
        {{ props.review }}
      </p>
    </div>
  </div>
</template>
