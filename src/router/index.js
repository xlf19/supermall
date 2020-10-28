import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import cart from "../views/cart/Cart.vue";
import category from "../views/category/Category.vue";
import profile from "../views/profile/Profile.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/cart",
    name: "cart",
    component: cart
  },
  {
    path: "/category",
    name: "category",
    component: category
  },
  {
    path: "/profile",
    name: "profile",
    component: profile
  }
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
