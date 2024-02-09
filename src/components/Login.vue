<template>
  <div class="flex justify-center my-20">
    <div class="py-20 px-12 bg-slate-400 rounded-lg">
      <input
        class="border mb-2 h-10 px-3 rounded w-56"
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        v-model="email"
      /><br />
      <input
        class="border mb-2 h-10 px-3 rounded w-56"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        v-model="password"
      /><br />
      <button
        @click="submit()"
        class="mt-2 w-full bg-slate-400 border border-white py-1 px-3 text-white rounded-md hover:bg-green-500"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    submit() {
      console.log(this.email + " " + this.password);
    },
  },
};
</script>

<style scoped></style>
