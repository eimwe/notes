<script setup lang="ts">
import ButtonSlot from '../button/ButtonSlot.vue'
import EditIcon from './icons/EditIcon.vue'
import DeleteIcon from './icons/DeleteIcon.vue'
</script>

<template>
  <div class="card bg-neutral text-neutral-content">
    <div class="card-body gap-4">
      <slot>
        <p>Edit or delete the default contents of this card</p>
      </slot>
      <div class="card-actions justify-between">
        <ButtonSlot class="btn-sm btn-secondary gap-2">
          <EditIcon />
          <span class="hidden sm:block">Edit</span>
        </ButtonSlot>
        <ButtonSlot class="btn-sm btn-ghost gap-2">
          <DeleteIcon />
          <span class="hidden sm:block">Delete</span>
        </ButtonSlot>
      </div>
    </div>
  </div>
</template>
