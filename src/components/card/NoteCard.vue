<script setup lang="ts">
import ButtonSlot from '../button/ButtonSlot.vue'
import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'
import { useNoteStore } from '@/stores/notes'
import type { ID } from '@/types'
import useModal from '@/composables/useModal'

const { openModal } = useModal()

const props = defineProps<{
  id: ID
  memo: string
}>()

const emit = defineEmits(['edit-note'])

const store = useNoteStore()

const editNote = () => {
  emit('edit-note')
  store.findNote(props.id)
  openModal()
}
</script>

<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body gap-4">
      <p class="w-fit max-w-[15rem] break-words lg:max-w-[17rem]">
        {{ props.memo }}
      </p>
      <div class="card-actions justify-between">
        <ButtonSlot @click="editNote" class="btn-sm btn-secondary gap-2">
          <EditIcon />
          <span class="hidden sm:block">Edit</span>
        </ButtonSlot>
        <ButtonSlot @click="store.deleteNote(props.id)" class="btn-sm btn-ghost gap-2">
          <DeleteIcon />
          <span class="hidden sm:block">Delete</span>
        </ButtonSlot>
      </div>
    </div>
  </div>
</template>
