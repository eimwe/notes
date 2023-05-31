<script setup lang="ts">
import SunIcon from './icons/SunIcon.vue'
import MoonIcon from './icons/MoonIcon.vue'
import { useDark } from '@vueuse/core'
import themeModes from '../../../theme/config'

const { lightMode, darkMode } = themeModes

const isDark = useDark({
  selector: 'html',
  attribute: 'data-theme',
  valueDark: darkMode,
  valueLight: lightMode
})
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer sm:hidden">
      <input
        v-model="isDark"
        name="toggle-theme"
        type="checkbox"
        :checked="isDark"
        class="absolute -top-2 right-2 h-8 w-8 cursor-pointer appearance-none border-transparent bg-transparent text-transparent checked:bg-none focus:text-transparent focus:ring-transparent focus:ring-offset-transparent"
      />
      <MoonIcon
        v-if="isDark"
        class="pointer-events-none absolute inset-y-0 -top-2 right-2 flex h-8 w-8 items-center stroke-current text-neutral-content"
      />
      <SunIcon
        v-else
        class="pointer-events-none absolute inset-y-0 -top-2 right-2 flex h-8 w-8 items-center stroke-current text-neutral-content"
      />
      <span class="sr-only">Toggle the light/dark mode</span>
    </label>
    <label class="relative hidden sm:flex">
      <MoonIcon
        :class="isDark ? 'text-transparent' : 'text-current'"
        class="pointer-events-none absolute inset-y-0 top-0.75 right-1 h-4 w-4"
      />
      <input
        v-model="isDark"
        name="toggle-theme"
        type="checkbox"
        :checked="isDark"
        class="toggle"
      />
      <SunIcon
        :class="isDark ? 'text-current' : 'text-transparent'"
        class="pointer-events-none absolute inset-y-0 top-0.75 left-1 h-4 w-4"
      />
      <span class="sr-only">Toggle the light/dark mode</span>
    </label>
  </div>
</template>
