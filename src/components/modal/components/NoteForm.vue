<script setup lang="ts">
import { useNoteStore } from '../../../stores/notes'
import ButtonSlot from '../../button/ButtonSlot.vue'
import type { ID } from '@/types'

const store = useNoteStore()

const props = defineProps<{
  title: string
  id?: ID
}>()
</script>

<template>
  <form method="dialog" @submit="store.changeNotes(id)">
    <h3 class="font-bold text-lg mb-6">
      {{ props.title }}
    </h3>
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
