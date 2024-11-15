<template>
  <div>
    <ProjectsGrid
      :projects="projects"
      @add-project="addProject"
      @delete-project="deleteProject"
      @select-project="openProject"
    />
    <NewProjectModal
      :open="showAddProjectModal"
      @confirm="createProject"
      @close="showAddProjectModal = false"
    />
  </div>
</template>

<script setup>
import { useProjectsStore } from '@/stores/projects'
import { computed, onMounted, ref } from 'vue'
import NewProjectModal from "@/components/NewProjectModal.vue";
import ProjectsGrid from "@/components/ProjectsGrid.vue";
import { useRouter } from "vue-router";

const store = useProjectsStore()
const router = useRouter()

const projects = computed(() => store.all )

const showAddProjectModal = ref(false)

onMounted(() => store.getAll())

const addProject = () => showAddProjectModal.value = !showAddProjectModal.value
const deleteProject = (project) => store.deleteOne(project)
const createProject = (project) => store.createOne(project)

const openProject = (project) => router.push({ name: `project-view`, params: { id: project.id } }) 
</script>

<style scoped lang="scss">
</style>
