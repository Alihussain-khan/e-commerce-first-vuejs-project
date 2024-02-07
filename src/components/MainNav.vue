<template>
  <div class="contain">
    <nav class="space-x-5 flex">
      <RouterLink class="hover:font-semibold" to="/">Home</RouterLink>
      <RouterLink class="hover:font-semibold" to="/about">About</RouterLink>
      <RouterLink class="hover:font-semibold" to="/landing">Landing</RouterLink>
      <div class="relative">
        <RouterLink class="hover:font-semibold" to="/categories"
          >Categories
        </RouterLink>
        <div
          class="absolute bg-gray-700 text-white py-3 shadow-sm"
          id="difgd"
          @mouseover="
            {
              {
                hover = true;
              }
            }
          "
          @mouseleave="
            {
              {
                hover = false;
              }
            }
          "
        >
          <div v-if="hover">
            <div
              class="hover:bg-slate-100 hover:text-black px-5 cursor-pointer w-56"
              v-for="item in categories"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <RouterLink class="hover:font-semibold" to="/products"
        >Products</RouterLink
      >
    </nav>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "MainNav",
  data() {
    return {
      categories: "",
      hover: "",
    };
  },
  mounted() {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((e) => {
        this.categories = e;
        console.log(this.categories);
      });
  },
  methods: {
    mouseover() {
      let a = document.getElementById("#difgd");
      a.classList.add("hidden");
      console.log("mouse in");
    },
    mouseout() {
      let a = document.querySelector("#di");
      a.classList.add("hidden");
      console.log("mouse out");
    },
  },
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: center;
}
</style>
