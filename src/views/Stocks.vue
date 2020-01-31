<template >
  <card class="bg-gradient-success m-2">
    <div class="row">
      <StockCard header="BMW" :price.sync="price_1" @buy-callback="onGetPrice"></StockCard>
      <StockCard header="Marcedeze" :price.sync="price_1" @buy-callback="onGetPrice"></StockCard>
      <StockCard header="Ford" :price.sync="price_1" @buy-callback="onGetPrice"></StockCard>
      <StockCard header="Toyota" :price.sync="price_1" @buy-callback="onGetPrice"></StockCard>
    </div>
  </card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BaseInput from "@/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "@/components/argon-core/BaseButton.vue";
import StockCard from "./StockCard.vue";
@Component({
  components: {
    BaseButton,
    BaseInput,
    StockCard
  }
})
export default class Stocks extends Vue {
  price_1: number = 10;

  onGetPrice(value: any) {
    console.log(value);
  }
}
</script>

<style scoped>
</style>