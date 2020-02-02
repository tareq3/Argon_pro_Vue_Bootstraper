import axios from "axios";
import { TodoRes } from "../models/TodoRes";
const state = {
  TodoList: Array<TodoRes>()
};

const mutations = {
  fetchData: (state, dataList: Array<TodoRes>) => {
    console.log("data List: " + dataList[0].title);
    state.TodoList = dataList;
  },

  addData(state, item: TodoRes) {
    state.TodoList.unshift(item);
  }
};

const actions = {
  fetchData: async ({ commit }, obj) => {
    let res = await axios.get(
      "todos?_limit=" + obj.limit + "&_start=" + obj.start
    );

    let dataList: Array<TodoRes> = res.data;
    // console.log(dataList);
    commit("fetchData", dataList);
  },

  addData: async ({ commit }, item: TodoRes) => {
    console.log(item);
    let res = await axios.post("todos", item);
    console.log(res.data);
    let resData: TodoRes = res.data;
    commit("addData", resData);
  }
};

const getters = {
  getTodos: state => {
    return state.TodoList;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
