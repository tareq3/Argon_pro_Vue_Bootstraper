import Stock from "@/store/models/Stock";

const state = {
  cus_stocks: Array<Stock>()
};

const mutations = {
  BUY_STOCK: (state, stock: Stock) => {
    let item: Stock = state.cus_stocks.find(el => el.id == stock.id);
    if (item) {
      item.qty += stock.qty;
    } else {
      state.cus_stocks.push(stock);
    }
  },

  CHANGE_STOCK_PRICE: (state, stocks: Array<Stock>) => {
    state.cus_stocks.forEach((el: Stock) => {
      el.price = stocks.find((itm: Stock) => itm.id == el.id).price;
    });
  },

  SELL_STOCK: (state, stock: Stock) => {
    let soldItem: Stock = state.cus_stocks.find(
      (el: Stock) => el.id == stock.id
    );

    if (stock.qty < soldItem.qty) {
      soldItem.qty -= stock.qty;
    } else {
      state.cus_stocks.splice(state.cus_stocks.indexOf(soldItem), 1);
    }
  }
};

const actions = {};

const getters = {
  getStocksPortfolio: state => {
    return state.cus_stocks;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
