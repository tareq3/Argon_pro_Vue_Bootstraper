<template>
  <div class="col-xl-6 col-md-6 col-sm-12 shadow--hover">
    <card
      class="m-2 col-sm-12 card-fly--hover p-0"
      header-classes="m-0 px-3 py-2 bg-secondary align-items-center"
    >
      <div slot="header">
        <h4 class="m-1">
          {{stock.name}}
          <small>(Price: {{stock.price}} | Qty: {{stock.qty}})</small>
        </h4>
      </div>

      <div class="row">
        <BaseInput placeholder="Quantity" class="col-8">
          <input
            type="number"
            class="form-control"
            :class="{'is-invalid': !isValid }"
            v-model="qty"
            placeholder="Quantity"
          />
          <div class="invalid-feedback">Must be greater than 0</div>
          <div class="valid-feedback">Success!</div>
        </BaseInput>
        <div class="col-4">
          <base-button
            type="primary"
            @click="sell"
            :class="{'disabled' :  qty<=0 || qty> stock.qty || Number.isInteger(qty)  }"
          >Sell</base-button>
        </div>
      </div>
    </card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from "vue-property-decorator";
import BaseInput from "@/components/argon-core/Inputs/BaseInput.vue";
import BaseButton from "@/components/argon-core/BaseButton.vue";
import Stock from "@/store/models/Stock";
@Component({
  name: "StockCard",
  components: {
    BaseButton,
    BaseInput
  }
})
export default class StockCard extends Vue {
  @PropSync("stock") syncedStock!: Stock;
  qty: number = null;

  isValid: boolean = true;

  sell() {
    if (this.qty > 0) {
      this.isValid = true;
      this.$emit("sell-callback", {
        id: this.syncedStock.id,
        name: this.syncedStock.name,
        price: this.syncedStock.price,
        qty: parseInt("" + this.qty)
      });

      this.qty = null;
    } else {
      this.isValid = false;
    }
  }
}
</script>

<style scoped>
</style>