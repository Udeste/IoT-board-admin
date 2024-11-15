<template>
  <Dialog :open="isOpen" @close="close" class="relative z-50">
    <div class="fixed inset-0 bg-black/30" aria-hidden="true" />

    <div class="fixed inset-0 flex w-screen items-center justify-center p-4">
      <DialogPanel class="w-full max-w-sm rounded bg-white p-3">
        <DialogTitle>Add project</DialogTitle>

        <div class="grid grid-col-1 gap-2 p-5">
          <div>
            <label for="name" class="block text-sm/6 font-medium text-gray-900">Name</label>
            <input type="text" name="name" id="name"
              v-model="name"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
          </div>
          <div>
            <label for="description" class="block text-sm/6 font-medium text-gray-900">Description</label>
            <input type="text" description="description" id="description"
              v-model="description"
              class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div class="flex justify-end">
          <button @click="confirm()"
            class="bg-blue-500 inline-block justify-center px-3 py-1 rounded-md text-white">Create</button>
          <button @click="close()"
            class="bg-gray-500 inline-block justify-center px-3 py-1 rounded-md text-white">Cancel</button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import { computed, ref } from "vue";

const props = defineProps(['projects'])
const isOpen = computed(() => props.open)

const name = ref('')
const description = ref('')

const emit = defineEmits('close')
const close = () => emit('close')
const confirm = () => emit('confirm', { name: name.value, description: description.value })
</script>

<style scoped lang="scss"></style>
