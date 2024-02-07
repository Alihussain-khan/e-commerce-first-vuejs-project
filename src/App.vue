<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/Landing">Landing</RouterLink>
    </nav>
  </header> -->
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
