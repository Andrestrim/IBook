<template>
  <h1 class="page-title">
    {{ title }} <b>{{ strong }}</b>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      required: true,
      type: String,
    },
    strong: {
      required: true,
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  b {
    color: #292929;
  }
}
</style>
