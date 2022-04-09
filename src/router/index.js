
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
const routerMode = "hash";
const routes = [
    {
      path: "/",
      name: "demo0",
      component: () => import("@/views/demo.vue"),
    },
];
const router = createRouter({
	// hash模式：createWebHashHistory，history模式：createWebHistory
  history: routerMode == "history" ? createWebHistory() : createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  isAddDynamicMenuRoutes: false,
  routes:routes,
});

export default router;