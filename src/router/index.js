import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Landing from "../views/Landing.vue";
import Products from "../views/Products.vue";
// import CatogrizedProducts from "@/components/CatogrizedProducts.vue";
import Cart from "../components/Cart.vue";
import LoginView from "../views/LoginView.vue";
import store from "../stores/cart";
// import CatogrizedProducts from "../views/CatogrizedProducts";
import SingleProduct from "@/components/SingleProduct.vue";
import CatogaryView from "../views/CatogaryView.vue";
import AddProduct from "@/components/AddProduct.vue";
import DeleteProduct from "@/components/DeleteProduct.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { needsauth: "true" },
    },
    {
      path: "/product",
      name: "SingleProduct",
      component: SingleProduct,
    },
    {
      path: "/product/:id",
      name: "SingleProduct",
      component: SingleProduct,
    },
    {
      path: "/addproduct",
      name: "AddProduct",
      component: AddProduct,
      meta: { needsauth: "true" },
    },
    {
      path: "/deleteproduct",
      name: "DeleteProduct",
      component: DeleteProduct,
      meta: { needsauth: "true" },
    },

    // {
    //   path: "/about/:id",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/Landing",
      name: "Landing",
      component: Landing,
    },
    {
      path: "/categories",
      name: "CatogaryView",
      component: CatogaryView,
    },
    {
      path: "/categories/:name",
      name: "CategoryView",
      component: CatogaryView,
    },
    {
      path: "/products",
      name: "products",
      component: Products,
    },
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
    },
    {
      path: "/login",
      name: "LoginView",
      component: LoginView,
    },
    // {
    //   path: "/singleproduct",
    //   name: "SingleProductView",
    //   component: SingleProdcutView,
    // },
  ],
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth && $store.state.auth) {
//     next("./login");
//   } else if (!to.meta.auth && $store.state.auth) {
//     next("./");
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  store.state.token = window.localStorage.getItem("token");
  if (store.state.token) {
    store.state.auth = "true";
  } else {
    store.state.auth = "false";
  }
  if (to.meta.needsauth && store.state.auth === "false") {
    next("/login");
  } else {
    next();
  }
});
export default router;
