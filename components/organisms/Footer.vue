<template>
  <footer class="footer">
    <BosonsContainer>
      <AtomsLogo />
      <p>Copyright &copy; {{ currentYear }} iBook</p>
    </BosonsContainer>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 110px;
  background: #292929;
  .container {
    display: grid;
    height: 100%;
    grid-auto-flow: column;
    justify-content: space-between;
    align-items: center;
    p {
      color: #f0f0f0;
    }
  }
}
</style>
