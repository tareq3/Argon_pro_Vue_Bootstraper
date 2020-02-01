import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  cash: 0
};

const mutations = {
  SET_CASH: (state, cash) => (state.cash = cash),
  ADD_CASH: (state, cash) => (state.cash += cash),
  REDUCE_CASH: (state, cash) => (state.cash -= cash)
};

const getters = {
  getCash: state => state.cash
};

const actions = {
  initCash: ({ commit }, price) => {
    commit("SET_CASH", price);
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
