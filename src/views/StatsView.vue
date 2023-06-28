<script setup lang="ts">
import { useNoteStore } from '@/stores/notes'

const store = useNoteStore()
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 py-6 text-center sm:text-left sm:px-8 xl:px-0">
    <div class="stats stats-vertical sm:stats-horizontal shadow">
      <div class="stat">
        <div class="stat-title capitalize">Total notes</div>
        <div class="stat-value">{{ store.countNotes }}</div>
      </div>

      <div class="stat">
        <div class="stat-title capitalize">Character counter</div>
        <div class="stat-value">{{ store.countCharacters }}</div>
        <div class="stat-desc">across all notes</div>
      </div>

      <div class="stat">
        <div class="stat-title capitalize">Character limit</div>
        <div class="stat-value">{{ store.characterLimit }}</div>
        <div class="stat-desc">per 1 note</div>
      </div>
    </div>
  </div>
</template>
