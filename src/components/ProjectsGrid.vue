<template>
  <div>
    <main class="h-full p-3">
      <div
        class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
      >
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th
                scope="col"
                class="px-2 py-3 text-left text-xs text-gray-500 uppercase"
              >
                Name
              </th>
              <th
                scope="col"
                class="px-2 py-3 text-left text-xs text-gray-500 uppercase"
              >
                Description
              </th>
              <th
                scope="col"
                class="px-2 py-3 text-left text-xs text-gray-500 uppercase"
              >
                Sensors
              </th>

              <th scope="col">
                <span
                  class="bg-gray-800 rounded inline-block text-white align-middle cursor-pointer"
                >
                  <PlusIcon class="w-5 h-5" @click="addProject()" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="project in projects" :key="project.id">
              <td class="px-2 py-1">
                <div class="text-sm text-left font-medium text-gray-900 cursor-pointer" @click="selectProject(project)">
                  {{ project.name }}
                </div>
                <div class="text-sm text-left text-gray-500">
                  {{ project.id }}
                </div>
              </td>
              <td class="px-2 py-1">
                <div class="text-sm text-left text-gray-900">
                  {{ project.description }}
                </div>
              </td>
              <td class="px-2 py-1">
                <div class="text-sm text-left text-gray-900">
                  {{ project.sensors }}
                </div>
              </td>
              <td class="px-2 py-1 whitespace-nowrap">
                <div class="text-sm text-gray-900">
                  <span
                    class="bg-gray-800 rounded inline-block text-white align-middle cursor-pointer"
                    ><PencilIcon
                      class="w-5 h-5"
                      @click="editProject(project)"
                    />
                  </span>
                  <span
                    class="bg-gray-800 rounded inline-block text-white align-middle cursor-pointer"
                    ><TrashIcon
                      class="w-5 h-5"
                      @click="deleteProject(project)"
                    />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";

const props = defineProps(['projects'])
const projects = computed(() => props.projects)

const emit = defineEmits(["addProject", "editProject", "selectProject"])

const addProject = () => emit('addProject')
const editProject = (project) => emit('editProject', project)
const deleteProject = (project) => emit('deleteProject', project)
const selectProject = (project) => emit('selectProject', project)
</script>

<style scoped lang="scss">
</style>
