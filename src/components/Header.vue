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
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Us</router-link>
        <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
        <router-link to="/news" class="nav-link">News</router-link>
      </nav>
      <Button class="md:ml-9">Contact us</Button>
    </div>
  </header>
</template>
