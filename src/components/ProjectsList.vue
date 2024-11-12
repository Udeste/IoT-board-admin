<template>
  <div>
    <ProjectsGrid
      :projects="projects"
      @add-project="addProject"
      @delete-project="deleteProject"
    />
    <NewProjectModal
      v-if="showAddProjectModal"
      @close="showAddProjectModal = false"
    />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted, ref } from 'vue'
import ProjectActionsTypes from "../store/modules/projects/projects.types";
import NewProjectModal from "./NewProjectModal.vue";
import ProjectsGrid from "./ProjectsGrid.vue";

const store = useStore()

const projects = computed(() => store.getters['projects/all'] )

const showAddProjectModal = ref(false)

onMounted(() => store.dispatch(`projects/${ProjectActionsTypes.GET_ALL_PROJECTS}`))

const addProject = () => showAddProjectModal.value = !showAddProjectModal.value
const deleteProject = (project) => store.dispatch(`projects/${ProjectActionsTypes.DELETE_PROJECT}`, project)
</script>

<style scoped lang="scss">
</style>
