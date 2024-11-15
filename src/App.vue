<template>
  <div>
    <div>
      <Toolbar />
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Toolbar from "./components/Toolbar.vue";

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
