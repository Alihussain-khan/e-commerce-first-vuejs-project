<template>
  <div class="contain bg-black text-white px-10">
    <h1>welcome to the dark side of the moon</h1>
    <nav class="space-x-10">
      <RouterLink v-if="$store.state.auth === 'false'" to="/login"
        >Login</RouterLink
      >
      <RouterLink v-if="$store.state.auth === 'true'" to="/addproduct"
        >Add Product</RouterLink
      >
      <RouterLink v-if="$store.state.auth === 'true'" to="/login"
        >Delete Products</RouterLink
      >
      <button
        v-if="$store.state.auth === 'true'"
        @click="$store.state.auth = 'false'"
      >
        Log out
      </button>

      <RouterLink to="/cart"
        ><i class="fas fa-shopping-cart"></i>
        <span class="ms-1 text-red-400"> {{ $store.state.cart.length }}</span>
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import store from "@/stores/cart.js";
export default {
  name: "MiniNav",
  methods: {
    logout() {
      store.state.auth = "false";
      store.state.token = "";
    },
  },
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-between;
}
</style>
