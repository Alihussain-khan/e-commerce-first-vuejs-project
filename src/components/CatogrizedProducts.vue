<template>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 mx-10"
    :key="$store.state.params"
  >
    <div v-for="item in product" class="mb-10 bg-gray-100 rounded shadow">
      <div class="mx-5">
        <RouterLink :to="'/product/' + item.id">
          <a class="relative overflow-hidden rounded-xl"
            ><img class="mt-5 w-72 h-56" :src="item.thumbnail" />
            <span
              class="absolute top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white"
              >{{ item.discountPercentage }}% OFF</span
            ></a
          >

          <h1 class="font-semibold texthead">{{ item.title }}</h1>
          <div class="flexbetween">
            <span class="font-bold text-blue-900 me-4">{{ item.price }}$</span>
            <span class="font-bold text-yellow-600">☆ {{ item.rating }}</span>
          </div>
          <h1 class="text">{{ item.description }}</h1>
        </RouterLink>
        <!-- <button
          class="w-full text-center bg-blue-950 rounded-md text-white my-5 py-1"
        >
          <RouterLink :to="'/about/' + item.id">
            <i class="fas fa-shopping-cart"></i> Add to cart
          </RouterLink>
        </button> -->
        <button
          @click="$store.commit('increment', item)"
          class="w-full text-center bg-blue-950 rounded-md text-white my-5 py-1"
        >
          <i class="fas fa-shopping-cart"></i> Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "CatogrizedProducts",

  data() {
    return {
      product: "",
      category: "",
    };
  },
  mounted() {
    this.apicall();
  },
  methods: {
    apicall() {
      const route = useRoute();
      this.category = route.params.name;
      console.log(this.product);
      // Fetch data based on the route parameters
      fetch("https://dummyjson.com/products/category/" + this.category)
        .then((res) => res.json())
        .then((e) => {
          this.product = e.products;
        });
    },
  },
  watch: {},
  created() {},
  updated() {},
  setup() {},
};
</script>

<style scoped>
.text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.texthead {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>
