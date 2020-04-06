declare module "*.vue" {
  // @ts-ignore
  import Vue from "vue";
  // @ts-ignore
 // export default Vue;
}
import Vue from "vue";
// @ts-ignore
import Sidebar from "./components/argon-core/SidebarPlugin/SideBar";
// @ts-ignore
import Notification from './components/argon-core/NotificationPlugin/Notifications';
declare module "vue/types/vue" {
  interface Vue {
    $sidebar: Sidebar;
    $notify: Notification;
  }
}
