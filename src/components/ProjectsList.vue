<template>
  <div>
    <ProjectsGrid
      :projects="projects"
      @addProject="showAddProjectModal = true"
    />
    <NewProjectModal
      v-if="showAddProjectModal"
      @close="showAddProjectModal = false"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProjectActionsTypes from "../store/modules/projects/projects.types";
import NewProjectModal from "./NewProjectModal.vue";
import ProjectsGrid from "./ProjectsGrid.vue";

export default {
  name: "ProjectsList",
  computed: mapState("projects", ["projects"]),
  components: {
    ProjectsGrid,
    NewProjectModal,
  },
  data() {
    return {
      showAddProjectModal: false,
    };
  },
  mounted() {
    this.$store.dispatch(`projects/${ProjectActionsTypes.GET_ALL_PROJECTS}`);
  },
  methods: {
    addProject: function () {
      this.$data.showAddProjectModal = true;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
