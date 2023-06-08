import { ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { Note } from '@/types'

export const useNoteStore = defineStore('notes', () => {
  const note = ref('')
  const notes = ref<Note[]>([])

  const addNote = () => {
    const newNote: Note = {
      id: Math.ceil(Math.random() * 1000000),
      memo: note.value
    }

    notes.value.push(newNote)
    note.value = ''
  }

  return { note, notes, addNote }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNoteStore, import.meta.hot))
}
