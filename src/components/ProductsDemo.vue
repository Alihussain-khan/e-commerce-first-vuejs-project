<template>
  <div v-if="pro && total">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 mx-10">
      <div v-for="item in pro" class="mb-10 bg-gray-100 rounded shadow">
        <div class="mx-5">
          <RouterLink :to="'/product/' + item.id">
            <a class="relative z-10 overflow-hidden rounded-xl"
              ><img class="mt-5 w-72 h-56" :src="item.thumbnail" />
              <span
                class="absolute z-10 top-0 left-0 m-2 rounded-full bg-red-700 px-2 text-center text-sm font-medium text-white"
                >{{ item.discountPercentage }}% OFF</span
              ></a
            >

            <h1 class="font-semibold texthead">{{ item.title }}</h1>
            <div class="flexbetween">
              <span class="font-bold text-blue-900">{{ item.price }}$</span>
              <span class="font-bold text-yellow-600">☆ {{ item.rating }}</span>
            </div>
            <h1 class="text">{{ item.description }}</h1>
          </RouterLink>
          <!-- <button
            class="w-full text-center bg-blue-950 rounded-md text-white my-5 py-1"
          >
            <RouterLink :to="'/product/' + item.id">
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
    <div class="flex justify-center my-5">
      <pagination
        v-model="page"
        :records="total"
        :per-page="limit"
        @paginate="myCallback"
      />
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import Pagination from "v-pagination-3";
export default {
  name: "ProductsDemo",
  mounted() {
    this.apicall();
  },
  data() {
    return {
      pro: "",
      page: 1,
      limit: 12,
      skip: 0,
      total: "",
    };
  },
  methods: {
    apicall() {
      fetch(
        "https://dummyjson.com/products?skip=" +
          this.skip +
          "&limit=" +
          this.limit
      )
        .then((res) => res.json())
        .then((e) => {
          this.pro = e.products;
          this.total = e.total;
          console.log(this.total);
        });
    },
    myCallback() {
      this.skip = this.page * this.limit - this.limit;
      console.log(this.skip);
      this.apicall();
    },
  },
  components: { Pagination },
};
</script>

<style scoped>
.flexbetween {
  display: flex;
  justify-content: space-between;
}
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
