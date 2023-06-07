<script setup lang="ts">
import { useNoteStore } from '../../../stores/notes'
import ButtonSlot from '../../button/ButtonSlot.vue'

const store = useNoteStore()
</script>

<template>
  <form method="dialog" @submit="store.addNote">
    <h3 class="font-bold text-lg mb-6">Add new note</h3>
    <div class="grid gap-4">
      <textarea
        v-model.trim="store.note"
        placeholder="What's on your mind?"
        class="textarea textarea-bordered textarea-ghost focus:textarea-ghost textarea-primary textarea-lg w-full placeholder:text-slate-500"
      ></textarea>
      <ButtonSlot class="btn-primary sm:btn-sm sm:justify-self-end"> Save </ButtonSlot>
    </div>
  </form>
</template>
