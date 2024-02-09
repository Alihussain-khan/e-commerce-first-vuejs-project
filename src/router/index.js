import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Landing from "../views/Landing.vue";
import Products from "../views/Products.vue";
import Cart from "../components/Cart.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about/:id",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/Landing",
      name: "Landing",
      component: Landing,
    },
    // {
    //   path: "/categories",
    //   name: "categories",
    //   component: categories,
    // },
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

export default router;
