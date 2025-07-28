import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Item from "./pages/Item.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/item", component: Item },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
