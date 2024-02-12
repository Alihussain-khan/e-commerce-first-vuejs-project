<template>
  <div class="flex justify-center my-10">
    <div class="p-10 bg-slate-300 rounded">
      <h1 class="text-center mb-4 font-semibold text-xl">Add Product</h1>
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="text"
        placeholder="title"
        v-model="title"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="text"
        placeholder="discription"
        v-model="description"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="number"
        placeholder="price"
        v-model="price"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="text"
        placeholder="brand"
        v-model="brand"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="text"
        placeholder="category"
        v-model="category"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="number"
        placeholder="stock"
        v-model="stock"
        required
      /><br />
      <input
        class="mb-2 h-8 px-5 rounded-md"
        type="number"
        placeholder="rating"
        v-model="rating"
        required
      /><br />
      <button
        @click="apicall()"
        class="w-full border border-white text-white hover:bg-green-500 h-8 rounded-md"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      title: "",
      brand: "",
      category: "",
      description: "",
      price: "",
      rating: "",
      stock: "",
    };
  },
  methods: {
    apicall() {
      fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          discription: this.description,
          price: this.price,
          category: this.category,
          brand: this.brand,
          rating: this.rating,
          stock: this.stock,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.id) {
            alert("product added");
            this.title = "";
            this.brand = "";
            this.category = "";
            this.description = "";
            this.price = "";
            this.rating = "";
            this.stock = "";
          } else {
            alert("failed");
          }
        });
    },
  },
};
</script>

<style scoped></style>
