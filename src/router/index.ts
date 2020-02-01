import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TaskList from "@/components/pages/dashboard/TaskList.vue";
import ActivityFeed from "@/components/pages/dashboard/ActivityFeed.vue";
import Stocks from "@/views/stocks/Stocks.vue";
import StockTrader from "@/views/StockTraders.vue";
import Portfolio from "@/views/portfolio/Portfolio.vue";
Vue.use(VueRouter);

const routes: any = [
  {
    path: "/",
    redirect: "/stocktraders"
  },

  {
    path: "/dashboard",
    component: TaskList
  },

  {
    path: "/alternative",
    component: ActivityFeed
  },
  {
    path: "/stocks",
    component: Stocks
  },
  {
    path: "/stocktraders",
    component: StockTrader
  },
  {
    path: "/portfolio",
    component: Portfolio
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
