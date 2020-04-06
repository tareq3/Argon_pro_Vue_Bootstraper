<template>
  <div class="wrapper">
    <notifications></notifications>
    <!-- <side-bar
      title="Drawer"
      logo="https://cdn.vox-cdn.com/thumbor/0n6dqQfk9MuOBSiM39Pog2Bw39Y=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19341372/microsoftedgenewlogo.jpg"
      backgroundColor="orange"
    >
      <template slot="links">
        <sidebar-item
          :link="{name: 'StockTraders', icon: 'fas fa-home text-primary', path:'/stocktraders'}"
        ></sidebar-item>
        <sidebar-item :link="{name: 'Stocks', icon: 'ni ni-app text-red', path:'/stocks'}"></sidebar-item>
        <sidebar-item
          :link="{name: 'Portfolio', icon: 'ni ni-air-baloon text-success', path:'/portfolio'}"
        ></sidebar-item>
      </template>
    </side-bar> -->

    <div class="main-content">
      <!-- <DashboardNavbar :type="$route.name === 'alternative' ? 'light': 'default'"></DashboardNavbar> -->

      <!--  <MyNavBar></MyNavBar> -->

     

      <router-view></router-view>

      <!--   <ContentFooter></ContentFooter> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DashboardNavbar from "@/components/layouts/argon/DashboardNavbar.vue";
import ContentFooter from "@/components/layouts/argon/ContentFooter.vue";
import MyNavBar from "@/views/MyNavBar.vue";

@Component({
  components: {
    DashboardNavbar,
    ContentFooter,
    MyNavBar,
  
  }
})
export default class App extends Vue {
  created() {
    this.$store.dispatch("initCash", 1000);
    this.$store.dispatch("initStock");

    this.$notify({
      title: 'Some Title',
      message: "Welcome Back!"
    });
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
