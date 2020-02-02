import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TaskList from "@/components/pages/dashboard/TaskList.vue";
import ActivityFeed from "@/components/pages/dashboard/ActivityFeed.vue";

Vue.use(VueRouter);

const routes: any = [
  {
    path: "/",
    redirect: "/home"
  },

  {
    path: "/home",
    component: Home
  },

  {
    path: "/dashboard",
    component: TaskList
  },

  {
    path: "/alternative",
    component: ActivityFeed
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
