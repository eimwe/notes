<script setup lang="ts">
import ButtonSlot from '../button/ButtonSlot.vue'
import AddNoteIcon from './icons/AddNoteIcon.vue'
import useModal from '../../composables/useModal'

const { openModal } = useModal()

const emit = defineEmits(['addNote'])

const addNote = () => {
  emit('addNote')
  openModal()
}
</script>

<template>
  <footer class="sticky top-[100vh]">
    <div class="flex justify-end mx-auto max-w-5xl px-4 py-6 sm:px-8 xl:px-0">
      <ButtonSlot @click="addNote" class="btn-lg btn-circle btn-accent mx-2 focus:outline-neutral">
        <AddNoteIcon class="h-8 w-8" />
        <span class="sr-only">Add new note</span>
      </ButtonSlot>
    </div>
  </footer>
</template>
