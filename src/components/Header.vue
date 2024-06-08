<script setup>
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import Logo from './Logo.vue'
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
          to="/"
          class="nav-link"
          :class="{ 'active-nav-link': $route.path === '/' }"
          exact
          >Home</router-link
        >
        <router-link
          to="/about"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/about' }"
          exact
          >About Us</router-link
        >
        <router-link
          to="/portfolio"
          class="nav-link"
          :class="{ 'active-nav-link': $route.path === '/portfolio' }"
          exact
          >Portfolio</router-link
        >
        <router-link
          to="/news"
          class="nav-link"
          :class="{ 'active-nav-link': $route.path === '/news' }"
          exact
          >News</router-link
        >
      </nav>
      <Button class="md:ml-9">Contact us</Button>
    </div>
  </header>
</template>
