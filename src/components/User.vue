<template>
  <div>
    <h1>{{ greet }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import UserModel from "../models/User";
@Component
export default class User extends Vue {
  @Prop() greet!: UserModel;
}
</script>

<style scoped></style>
