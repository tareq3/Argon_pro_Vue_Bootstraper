<template>
  <card class="m-2">
    <h1>Trade or View your Portfolio</h1>
    <p>
      You may save & Load your data
      <br />Click on 'End Day' to begin a new Day!
    </p>
    <hr />

    <h2>Your Funds: ${{cash}}</h2>
  </card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class StockTraders extends Vue {
  cash!: number;

  created() {
    this.cash = this.$store.getters.getCash;
  }
}
</script>

<style scoped>
</style>