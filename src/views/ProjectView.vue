<template>
  <div>
    <pre>{{ project }}</pre>    
  </div>
</template>

<script setup>
import { useProjectsStore } from '@/stores/projects'
import { computed, onMounted } from 'vue'

const store = useProjectsStore()

const props = defineProps({
  id: String
})

const project = computed(() => store.project(props.id))

onMounted(() => {
  if(!store.loaded) {
    store.getOne(props.id)
  }
})
</script>

<style scoped lang="scss">
</style>
