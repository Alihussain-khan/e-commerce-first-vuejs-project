<template>
  <div>
    <MiniNav />
    <Logo />
    <MainNav />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import MiniNav from "./MiniNav.vue";
import MainNav from "./MainNav.vue";
import Logo from "./Logo.vue";
export default {
  name: "NavBar",
  components: { MiniNav, MainNav, Logo },
};
</script>

<style scoped></style>
