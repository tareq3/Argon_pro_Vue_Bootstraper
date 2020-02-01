<template >
  <card class="bg-gradient-success m-2">
    <div class="row">
      <StockCard
        v-for="stock in cStocks"
        :key="stock.id"
        :stock.sync="stock"
        @buy-callback="onGetPrice"
      ></StockCard>
    </div>
  </card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseInput from "@/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "@/components/argon-core/BaseButton.vue";
import StockCard from "./StockCard.vue";
import Stock from "@/store/models/Stock";
@Component({
  components: {
    BaseButton,
    BaseInput,
    StockCard
  }
})
export default class Stocks extends Vue {
  stocks: Array<Stock>;
  get cStocks() {
    return (this.stocks = this.$store.getters.getStocks);
  }

  onGetPrice(value: Stock) {
    this.$store.dispatch("buyStock", value);
  }
}
</script>

<style scoped>
</style>