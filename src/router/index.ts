import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import HomePage from "../views/HomePage.vue";
import MemoriesPage from "../pages/MemoriesPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/memories",
    name: "Memories",
    component: MemoriesPage,
  },
  {
    path: "/memories/:id",
    name: "MemoriesDetail",
    component: () => import("../pages/MemoryDetails.vue"),
  },
  {
    path: "/add-memory",
    name: "AddMemory",
    component: () => import("../pages/AddMemory.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
