<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import FooterButton from './components/layout/FooterButton.vue'
import ModalContainer from './components/modal/ModalContainer.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <FooterButton />
  <ModalContainer />
</template>
