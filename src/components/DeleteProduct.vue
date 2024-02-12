<template>
  <div class="flex justify-center my-10">
    <input
      class="border ps-4"
      type="text"
      v-model="search"
      placeholder="search"
    />
  </div>
  <div
    class="flex space-x-3 justify-center my-3 pb-4 border-b-2"
    v-for="item in result"
  >
    <!-- <div class="flex bg-slate-300"> -->
    <!-- <img class="w-80 h:58 p-5" :src="item.thumbnail" /> -->
    <h1>{{ item.title }}</h1>
    <button
      class="border border-red-500 text-red-500 rounded px-2 hover:bg-red-500 hover:text-white cursor-pointer"
      @click="removeproduct(item.id)"
    >
      X
    </button>

    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "DeleteProduct",
  data() {
    return {
      search: "",
      result: "",
    };
  },

  methods: {
    removeproduct(e) {
      fetch("https://dummyjson.com/products/" + e, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((e) => {
          alert(e.title + " removed");
        });
    },
  },
  watch: {
    search(e) {
      fetch("https://dummyjson.com/products/search?q=" + e)
        .then((res) => res.json())
        .then((res) => {
          this.result = res.products;
          console.log(this.result);
        });
    },
  },
};
</script>

<style scoped></style>
