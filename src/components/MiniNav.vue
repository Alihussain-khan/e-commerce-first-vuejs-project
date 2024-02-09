<template>
  <div class="contain bg-black text-white px-10">
    <h1>welcome to the dark side of the moon</h1>
    <nav class="space-x-10">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/cart"
        ><i class="fas fa-shopping-cart"></i>
        <span class="ms-1 text-red-400"> {{ $store.state.cart.length }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "MiniNav",
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
}
</style>
