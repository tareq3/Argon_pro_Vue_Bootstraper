import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  cash: 0
};

const mutations = {
  setCash: (state, cash) => (state.cash = cash)
};

const getters = {
  getCash: state => state.cash
};

const actions = {};

export default {
  state,
  mutations,
  actions,
  getters
};
