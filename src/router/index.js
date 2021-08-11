import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/team",
    name: "Team",
    component: () => import("../views/Team")
  },
  {
    path: "/about",
    name: "Education",
    component: () => import("../views/Error/InDevelop")
  },
  {
    path: "/education",
    name: "Education",
    component: () => import("../views/Error/InDevelop")
  },
  {
    path: "/teaching",
    name: "Teaching",
    component: () => import("../views/Error/InDevelop")
  },
  {
    path: "*",
    name: "PageNotFound",
    component: () => import("../views/Error/PageNotFound"),
    meta: {
      auth: true,
      title: "Страница не найдена"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
