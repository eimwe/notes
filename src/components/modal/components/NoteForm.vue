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
    <div class="grid gap-4">
      <label for="text-note" class="font-bold text-lg">{{ props.title }}</label>
      <textarea
        v-model.trim="store.note"
        id="text-note"
        name="text-note"
        placeholder="What's on your mind?"
        class="textarea textarea-bordered textarea-ghost focus:textarea-ghost textarea-primary textarea-lg w-full placeholder:text-slate-500"
        autofocus
        required
      ></textarea>
      <ButtonSlot class="btn-primary sm:btn-sm sm:justify-self-end" :disabled="!store.note">
        Save
      </ButtonSlot>
    </div>
  </form>
</template>
