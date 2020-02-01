import Vue from "vue";
import Vuex from "vuex";
import cash from "./modules/cash";
import stocks from "./modules/stocks";
import portfolio from "./modules/portfolio";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cash,
    stocks,
    portfolio
  }
});
