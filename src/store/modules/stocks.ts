import stocks from "../data";
import Stock from "@/store/models/Stock";

const state = {
  stocks: Array<Stock>()
};

const mutations = {
  SET_STOCKS: (state, stocks: Array<Stock>) => {
    state.stocks = stocks;
  },
  RND_STOCKS: state => {
    state.stocks.forEach((stock: Stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
  }
};

const actions = {
  initStock: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },

  randomizeStock: ({ commit }) => {
    commit("RND_STOCKS");
    commit("CHANGE_STOCK_PRICE", state.stocks);
  },

  buyStock: ({ commit }, stock: Stock) => {
    commit("BUY_STOCK", stock);

    commit("REDUCE_CASH", stock.price * stock.qty);
  },

  sellStock: ({ commit }, stock: Stock) => {
    commit("SELL_STOCK", stock);

    commit("ADD_CASH", stock.price * stock.qty);
  }
};

const getters = {
  getStocks: state => {
    return state.stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
