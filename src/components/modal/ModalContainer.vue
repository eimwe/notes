<script setup lang="ts">
import ButtonSlot from '../button/ButtonSlot.vue'
import CloseIcon from './icons/CloseIcon.vue'
import useModal from '../../composables/useModal'

const { modalRef, closeModal } = useModal()
</script>

<template>
  <dialog ref="modalRef" class="modal-box bg-neutral-content text-neutral">
    <ButtonSlot
      @click="closeModal"
      class="btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-neutral"
    >
      <CloseIcon />
    </ButtonSlot>
    <slot>Press Esc or 'close' button to close modal</slot>
  </dialog>
</template>
