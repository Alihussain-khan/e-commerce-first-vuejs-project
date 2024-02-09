<template>
  <div class="contain">
    <nav class="space-x-5 flex">
      <RouterLink class="hover:font-semibold" to="/">Home</RouterLink>
      <!-- <RouterLink class="hover:font-semibold" to="/about">About</RouterLink>
      <RouterLink class="hover:font-semibold" to="/landing">Landing</RouterLink> -->
      <div class="relative">
        <RouterLink
          class="hover:font-semibold"
          to=""
          @mouseover="mouseover()"
          @mouseleave="mouseoutlink()"
          >Categories
        </RouterLink>
        <div
          class="absolute bg-gray-700 text-white py-3 shadow-sm"
          id="difgd"
          @mouseover="mouseover()"
          @mouseleave="mouseout()"
        >
          <div
            class="z-20 absolute bg-blue-950 text-white"
            v-if="hover === 'true'"
          >
            <div
              class="hover:bg-slate-100 hover:text-black px-5 cursor-pointer w-56"
              v-for="item in categories"
            >
              <RouterLink
                class="hover:font-semibold"
                :to="'/categories/' + item"
                >{{ item }}
              </RouterLink>
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
      });
  },
  methods: {
    mouseover() {
      let dropdownTimeout = setTimeout(() => {
        this.hover = "true";
      }, 200);
      // this.hover = "true";
      // console.log("mouse in");
    },
    mouseout() {
      let dropdownTimeout = setTimeout(() => {
        this.hover = "false";
      }, 200);
      // this.hover = "false";
      // console.log("mouse out");
    },
    mouseoutlink() {
      let dropdownTimeout = setTimeout(() => {
        this.hover = "false";
      }, 200);
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
