import { ref } from 'vue'
import { defineStore } from 'pinia'

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
