<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import FooterButton from './components/layout/FooterButton.vue'
import ModalContainer from './components/modal/ModalContainer.vue'
import NoteForm from './components/modal/components/NoteForm.vue'
import type { ModalParams, ID } from '@/types'

const modalParams: ModalParams = reactive({
  title: 'Change note',
  id: undefined
})

const onAdd = () => {
  modalParams.title = 'Add note'
  modalParams.id = undefined
}

const onEdit = (noteId: ID) => {
  modalParams.title = 'Edit note'
  modalParams.id = noteId
}
</script>

<template>
  <NavBar />
  <main>
    <RouterView v-slot="{ Component }">
      <component :is="Component" @edit-note="onEdit" />
    </RouterView>
  </main>
  <FooterButton @add-note="onAdd" />
  <ModalContainer>
    <NoteForm :title="modalParams.title" :id="modalParams.id" />
  </ModalContainer>
</template>
