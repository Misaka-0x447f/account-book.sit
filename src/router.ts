import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const routerName = {
  setup: "setup",
  dashboard: "dashboard"
};

// noinspection JSUnusedGlobalSymbols
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/setup"
    },
    {
      path: "/setup",
      name: routerName.setup,
      component: () => import("@/pages/setup/index.vue")
    },
    {
      path: "/dashboard",
      name: routerName.dashboard,
      component: () => import("@/pages/dashboard/index.vue")
    }
  ],
});
