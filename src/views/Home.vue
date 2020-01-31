<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Hello></Hello>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Hello from "@/components/HelloWorld.vue";
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "home",
  components: {
    Hello
  }
})
export default class Home extends Vue {}
</script>
