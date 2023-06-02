<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import useModal from '../../composables/useModal'

const { modalRef, closeModal } = useModal()
</script>

<template>
  <dialog ref="modalRef" class="modal-box bg-neutral-content text-neutral">
    <button
      @click="closeModal"
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 focus:outline-neutral"
    >
      <CloseIcon />
    </button>
    <slot>Press Esc or 'close' button to close modal</slot>
  </dialog>
</template>
