<template>
  <div class="contain">
    <div class="grid lg:grid-cols-2 gap-2 mt-10">
      <div class="flex">
        <!-- <div v-for="items in product.images" class="contain"> -->
        <img class="overflow-hidden" :src="product.thumbnail" />
        <!-- </div> -->
      </div>

      <div class="">
        <h1 class="text-3xl font-bold">{{ product.title }}</h1>
        <h1 class="text-md font-semibold mt-2">{{ product.description }}</h1>
        <span class="font-bold text-blue-900 me-4">{{ product.price }}$</span>
        <span class="font-bold text-yellow-600">☆ {{ product.rating }}</span>
        <span class="font-bold text-blue-900 ms-4"
          >{{ product.stock }} in stock</span
        >

        <button
          @click="$store.commit('increment', product)"
          class="w-full text-center bg-blue-950 rounded-md text-white my-5 py-1 hover:text-yellow-400"
        >
          <i class="fas fa-shopping-cart"></i> Add to cart
        </button>
        <RouterLink to="/cart">
          <button
            class="w-full border border-blue-950 text-center rounded-md text-blue-950 py-1 hover:bg-blue-950 hover:text-white"
          >
            Go to cart
          </button></RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "SingleProduct",
  data() {
    return {
      product: "",
    };
  },
  mounted() {
    const route = useRoute();
    console.log(route.params);
    fetch("https://dummyjson.com/products/" + route.params.id)
      .then((res) => res.json())
      .then((e) => {
        this.product = e;
        console.log(this.product);
      });
  },
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: center;
}
</style>
