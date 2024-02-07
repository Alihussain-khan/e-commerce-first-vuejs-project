<template>
  <div class="px-10 bg-gray-50 py-10">
    <div class="contain">
      <div>
        <h2 class="font-bold my-3 text-xl">Need Help?</h2>
        <h4 class="text-gray-600">
          +92 21 111 112 111 (9am - 10pm , Mon - Sat)
        </h4>
        <h4 class="text-gray-600">example@gmail.com</h4>
      </div>
      <div>
        <h2 class="font-bold my-3 text-xl">CUSTOMER SERVICE</h2>
        <a href="#" class="text-gray-600"> Contact Us </a><br />
        <a href="#" class="text-gray-600"> Delivery & Orders </a><br />
        <a href="#" class="text-gray-600"> Returns & Exchanges </a><br />
        <a href="#" class="text-gray-600"> Terms & Conditions </a><br />
        <a href="#" class="text-gray-600"> Privacy Policy </a><br />
        <a href="#" class="text-gray-600"> Track My Order </a><br />
        <a href="#" class="text-gray-600"> Payment Guide </a><br />
      </div>
      <div>
        <h2 class="font-bold my-3 text-xl">Company</h2>
        <a href="#" class="text-gray-600"> About us</a><br />
        <a href="#" class="text-gray-600"> Careers </a><br />
        <a href="#" class="text-gray-600"> Store Adresses </a><br />
      </div>
      <div class="column">
        <h2 class="font-bold my-3 text-xl">Follow us</h2>
        <div class="row">
          <img class="w-7" src="../../public/instagram.svg" />
        </div>
        <div>
          <img class="w-7" src="../../public/facebook.svg" />
          <img class="w-7" src="../../public/twitter.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.contain {
  display: flex;
  justify-content: space-around;
}
</style>
