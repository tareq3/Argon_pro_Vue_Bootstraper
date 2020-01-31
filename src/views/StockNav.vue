<template>
  <base-nav
    container-classes="container-fluid"
    class="navbar navbar-dark navbar-expand navbar-top bg-default"
  >
    <a
      href="stocktraders#"
      class="btn text-secondary p-0"
      style="font-size: large"
      @click="$router.push('/')"
    >Stock Traders</a>

    <ul class="navbar-nav align-items-center ml-auto">
      <li class="nav-item ni ni-ui-04 pr-3 text-secondary d-lg-none" @click="toggleSidebar"></li>

      <li class="nav-item text-secondary mr-0 btn p-0" @click="onEndDay">End Day</li>
      <BaseDropDown
        tag="li"
        title-classes="nav-link p-0 px-3  font-weight-bold   "
        title-tag="a"
        title="Save & Load"
        class="nav-item align-content-center"
        style="font-size:14px"
      >
        <li class="dropdown-item">
          <i class="fas fa-save text-primary"></i>
          <span>Save</span>
        </li>
        <li class="dropdown-item">
          <i class="fas fa-magnet text-success"></i>
          <span>Upload</span>
        </li>
      </BaseDropDown>

      <li class="na-item text-secondary btn p-0" @click="onFunds">
        Funds:
        <strong class="text-success">{{totalCash}}</strong>
      </li>
    </ul>
  </base-nav>
</template>


<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import BaseNav from "@/components/argon-core/Navbar/BaseNav.vue";
import { mapGetters } from "vuex";

import BaseDropDown from "@/components/argon-core/BaseDropdown.vue";
@Component({
  components: {
    BaseNav,
    BaseDropDown
  }
})
export default class StockNav extends Vue {
  totalCash: number = 0;
  onEndDay() {
    console.log("end day");
  }
  onFunds() {
    console.log("Funds");
    this.totalCash = this.$store.getters.getCash;
  }

  toggleSidebar() {
    this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
  }

  onCreate() {
    this.totalCash = this.$store.getters.getCash;
  }

  @Watch("this.$store.state.cash", { immediate: true, deep: true })
  onBalanceChange() {
    console.log("change");
    this.totalCash = this.$store.getters.getCash;
  }
}
</script>

<style scoped>
</style>