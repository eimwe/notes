<script setup lang="ts">
import AddNoteIcon from './icons/AddNoteIcon.vue'
import useModal from '../../composables/useModal'

const { openModal } = useModal()
</script>

<template>
  <footer class="sticky top-[100vh]">
    <div class="flex justify-end mx-auto max-w-5xl px-4 py-6 sm:px-8 lg:px-0">
      <button
        @click="openModal"
        class="btn btn-lg btn-circle btn-accent mx-2 focus:outline-neutral"
      >
        <AddNoteIcon class="h-8 w-8" />
        <span class="sr-only">Add new note</span>
      </button>
    </div>
  </footer>
</template>
