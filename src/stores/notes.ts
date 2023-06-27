import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import type { Note, ID } from '@/types'

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

  const findNote = computed(() => {
    return (noteId: ID) => {
      const noteToEdit = notes.value.find((note) => note.id === noteId)

      if (noteToEdit) {
        return (note.value = noteToEdit?.memo)
      }
    }
  })

  const editNote = (noteId: ID) => {
    const foundIndex = notes.value.findIndex((note) => note.id === noteId)

    notes.value[foundIndex] = {
      id: noteId,
      memo: note.value
    }
  }

  const changeNotes = (noteId?: ID) => {
    if (noteId) {
      editNote(noteId)
    } else {
      addNote()
    }
  }

  const deleteNote = (noteId: ID) => {
    notes.value = notes.value.filter((note) => note.id !== noteId)
  }

  return { note, notes, deleteNote, findNote, changeNotes }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNoteStore, import.meta.hot))
}
