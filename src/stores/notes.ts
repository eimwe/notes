import { ref } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

interface Note {
  id: number
  memo: string
}

export const useNoteStore = defineStore('notes', () => {
  const note = ref('')
  const notes = ref<Note[]>([])

  const addNote = () => {
    const newNote = {
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
