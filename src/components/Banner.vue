<template>
  <div class="contain my-10">
    <RouterLink class="contain" to="/about"
      ><img class="w-2/3" src="../../public/Main banner.jpg"
    /></RouterLink>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Banner",
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: center;
}
</style>
