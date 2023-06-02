<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import FooterButton from './components/layout/FooterButton.vue'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterButton />
</template>
