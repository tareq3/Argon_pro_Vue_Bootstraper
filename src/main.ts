import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import SidebarPlugin from "./components/argon-core/SidebarPlugin";
import NotificationsPlugin from "./components/argon-core/NotificationPlugin";

import "./plugins/dashboard/globalComponents";
import "./plugins/dashboard/globalDirectives";
import "../polyfills";

import {} from "vee-validate";
require("./assets/css/nucleo/css/nucleo.css");
require("./assets/sass/argon.scss");
require("element-ui/lib/theme-chalk/index.css");

Vue.config.productionTip = false;

Vue.use(SidebarPlugin);
Vue.use(NotificationsPlugin);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

window.localStorage.setItem("token", "asjfdij22342345jaspdj3prj");

let varToken = window.localStorage.getItem("token");

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
// axios.defaults.timeout = 1000;
axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + varToken
};

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount("#app");
