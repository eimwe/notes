<script setup lang="ts">
import { useNoteStore } from '../../../stores/notes'
import useModal from '../../../composables/useModal'
import ButtonSlot from '../../button/ButtonSlot.vue'
import WarningIcon from './icons/WarningIcon.vue'
import type { ID } from '@/types'

const store = useNoteStore()
const { closeModal } = useModal()
const maxlength = 140

const props = defineProps<{
  title: string
  id?: ID
}>()

const submitForm = () => {
  if (!store.note) return

  store.changeNotes(props.id)
  closeModal()
}
</script>

<template>
  <form method="dialog" @submit="store.changeNotes(id)" @keydown.enter.prevent="submitForm">
    <div class="grid gap-4">
      <label for="text-note" class="font-bold text-lg">{{ props.title }}</label>
      <textarea
        v-model.trim="store.note"
        id="text-note"
        name="text-note"
        placeholder="What's on your mind?"
        class="textarea textarea-bordered textarea-ghost focus:textarea-ghost textarea-primary textarea-lg w-full placeholder:text-slate-500"
        :maxlength="maxlength"
        autofocus
        required
      ></textarea>
      <div
        v-show="store.note.length === maxlength"
        class="alert alert-warning flex-row justify-normal p-[0.5rem] my-0"
      >
        <WarningIcon />
        <span class="!m-0">Your note is too lengthy</span>
      </div>
      <ButtonSlot class="btn-primary sm:btn-sm sm:justify-self-end" :disabled="!store.note">
        Save
      </ButtonSlot>
    </div>
  </form>
</template>
