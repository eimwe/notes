<script setup lang="ts">
import ButtonSlot from '../button/ButtonSlot.vue'
import AddNoteIcon from './icons/AddNoteIcon.vue'
import useModal from '../../composables/useModal'
import { useNoteStore } from '@/stores/notes'

const { openModal } = useModal()

const emit = defineEmits(['add-note'])

const store = useNoteStore()

const addNote = () => {
  emit('add-note')
  store.note = ''
  openModal()
}
</script>

<template>
  <footer class="fixed bottom-px right-0 xl:w-full">
    <div class="mx-auto max-w-5xl px-4 py-6 sm:px-8 xl:px-0 xl:flex xl:justify-end">
      <ButtonSlot @click="addNote" class="btn-lg btn-circle btn-accent mx-2 focus:outline-neutral">
        <AddNoteIcon class="h-8 w-8" />
        <span class="sr-only">Add new note</span>
      </ButtonSlot>
    </div>
  </footer>
</template>
