import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/privacy",
    name: "PrivacyPolicy",
    component: PrivacyPolicy,
  },
];

const router = createRouter({
  mode: history,
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
  routes,
});

export default router;
