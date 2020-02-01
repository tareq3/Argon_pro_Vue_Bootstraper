<template>
  <div class="row">
    <StockCard
      class="col-6"
      v-for="stock in cStocks"
      :key="stock.id"
      :stock.sync="stock"
      @sell-callback="onSell"
    ></StockCard>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import StockCard from "./StockCard.vue";
import Stock from "@/store/models/Stock";
@Component({
  name: "portfolio",

  components: {
    StockCard
  }
})
export default class Portfolio extends Vue {
  stocks: Array<Stock>;

  get cStocks() {
    return (this.stocks = this.$store.getters.getStocksPortfolio);
  }

  onSell(value: Stock) {
    console.log(value);
    this.$store.dispatch("sellStock", value);
  }
}
</script>

<style scoped>
</style>