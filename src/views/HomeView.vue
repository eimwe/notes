<script setup lang="ts">
import { useNoteStore } from '../stores/notes'
import NoteCard from '../components/card/NoteCard.vue'

const store = useNoteStore()

const emit = defineEmits(['edit-note'])

const editNote = (noteId: number) => {
  emit('edit-note', noteId)
}
</script>

<template>
  <section
    v-if="!store.notes.length"
    class="grid min-h-[70vh] items-center text-center mx-auto max-w-5xl px-8 xl:px-0"
  >
    <h2 class="text-xl sm:text-2xl">There are no notes to display.<br />Add some notes</h2>
  </section>
  <section
    v-else
    class="grid gap-2 grid-flow-row sm:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl px-8 py-6 xl:px-0"
  >
    <h2 class="sr-only">Here are all your notes</h2>
    <NoteCard
      v-for="note in store.notes"
      :key="note.id"
      :id="note.id"
      @edit-note="editNote(note.id)"
    >
      {{ note.memo }}
    </NoteCard>
  </section>
</template>
