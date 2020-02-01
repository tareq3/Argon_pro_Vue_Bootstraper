import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

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
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
