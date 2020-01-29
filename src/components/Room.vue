<template>
  <div>
    <h1>Room {{ syncedyear }}</h1>

    <!--  <button @click="hello">Hello 1</button> -->
    <button @click="increase">inc</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop, PropSync } from "vue-property-decorator";

@Component
export default class Room extends Vue {
  @PropSync("syncedyear") year!: number;

  @Emit("greeting")
  hello() {
    this.year = 2020;
    return "Hello from room 1";
  }

  increase() {
    this.year++;

    console.log(this.year);
  }
}
</script>

<style></style>
