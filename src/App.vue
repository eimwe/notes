<script setup lang="ts">
import { markRaw } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import FooterButton from './components/layout/FooterButton.vue'
import ModalContainer from './components/modal/ModalContainer.vue'
import AddNote from './components/modal/components/AddNote.vue'

const modalContent = markRaw(AddNote)
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterButton @addNote="modalContent = AddNote" />
  <ModalContainer>
    <component :is="modalContent" />
  </ModalContainer>
</template>
