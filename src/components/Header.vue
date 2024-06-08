<script setup>
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import Logo from './Logo.vue'

const navItems = [
  { path: '/', text: 'Home' },
  { path: '/all-games', text: 'All games' },
  { path: '/portfolio', text: 'Portfolio' },
  { path: '/news', text: 'News' }
]
</script>

<template>
  <header
    class="w-screen p-10 md:px-28 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0"
  >
    <div>
      <Logo />
    </div>
    <div class="flex items-center">
      <nav class="hidden md:flex md:gap-20">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ 'active-nav-link': $route.path === item.path }"
          exact
        >
          {{ item.text }}
        </router-link>
      </nav>
      <Button class="md:ml-9">Contact us</Button>
    </div>
  </header>
</template>
