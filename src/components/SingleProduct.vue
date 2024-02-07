<template>
  <div class="contain">
    <div class="grid lg:grid-cols-2 gap-2 mt-10">
      <div class="flex">
        <div v-for="items in product.images" class="contain">
          <img class="overflow-hidden" :src="items" />
        </div>
      </div>

      <div class="ms-10">
        <h1>title</h1>
        <h1>description</h1>
        <h1>price</h1>
        <button>button</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "sngleproduct",
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
        console.log(e);
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
