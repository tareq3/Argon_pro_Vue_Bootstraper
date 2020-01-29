<template>
  <div>
    <p>There is a slot below me!</p>
    <slot :text="defaultSlotText"> </slot>

    <slot name="the-best" :text="namedSlotText"> </slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Child extends Vue {
  defaultSlotText: String = "I am rendered in default slot";
  namedSlotText: String = "I will get rendered in named slot";
}
</script>

<style scoped></style>>
