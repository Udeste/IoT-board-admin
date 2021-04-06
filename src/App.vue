<template>
  <div>
    <div>
      <Toolbar />
    </div>
    <div>
      <ProjectsList />
    </div>
  </div>
</template>

<script>
import ProjectsList from "./components/ProjectsList.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
    ProjectsList,
  },
};
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
