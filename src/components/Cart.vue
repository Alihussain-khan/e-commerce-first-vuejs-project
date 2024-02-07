<template>
  <div v-if="$store.state.cart">
    <div v-for="item in $store.state.cart" class="m-5 bg-gray-200 flex">
      <div class="flex">
        <img class="w-80 h:58 p-5" :src="item.thumbnail" />
        <div class="ms-10">
          <h1 class="font-semibold text-2xl mt-2">{{ item.title }}</h1>
          <h1>{{ item.description }}</h1>
          <h1 class="font-semibold text-blue-900 text-xl">
            {{ item.price }} $
          </h1>
          <h1 class="font-semibold text-yellow-600">☆{{ item.rating }}</h1>
          <button
            @click="$store.commit('pop', item.id)"
            class="border text-red-500 border-red-500 py-0 px-2 mt-3 rounded-lg hover:bg-red-500 hover:text-white"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="text-center bg-blue-950 text-white w-1/3 rounded py-1 my-5 hover:bg-blue-900"
      >
        Checkout
      </button>
    </div>
  </div>
  <div v-else><h1>empty cart</h1></div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      proli: "",
    };
  },
};
</script>

<style scoped></style>
