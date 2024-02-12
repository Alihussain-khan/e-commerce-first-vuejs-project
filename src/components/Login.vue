<template>
  <div class="flex justify-center my-20">
    <div class="py-20 px-12 bg-slate-300 rounded-lg">
      <input
        class="border mb-2 h-10 px-3 rounded w-56"
        type="text"
        name="text"
        id="username"
        placeholder="username"
        v-model="username"
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
import store from "@/stores/cart.js";
import router from "@/router";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "atuny0",
          password: "9uQFF1Lh",
          // username: this.username,
          // password: this.password,
          // expiresInMins: 60, // optional
        }),
      })
        .then((res) => res.json())
        .then((e) => {
          console.log(e);
          if (e.id) {
            window.localStorage.setItem("token", e.token);
            store.state.auth = "true";
            store.state.token = e.token;
            alert("logged in");
            console.log(window.localStorage.getItem("token"));
            router.push("/");
          } else {
            store.state.auth = "false";
            window.localStorage.removeItem("token");
            // localStorage.removeItem("token");
          }
        });
    },
  },
};
</script>

<style scoped></style>
