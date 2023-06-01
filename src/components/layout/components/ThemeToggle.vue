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
  <div class="form-control p-2">
    <span class="sr-only">Toggle the light/dark mode</span>
    <label class="swap sm:hidden">
      <input
        v-model="isDark"
        name="toggle-theme"
        type="checkbox"
        :checked="isDark"
        class="h-8 w-8 cursor-pointer appearance-none border-transparent bg-transparent text-transparent checked:bg-none focus:text-transparent focus:ring-transparent focus:ring-offset-transparent"
      />
      <MoonIcon class="swap-on h-8 w-8 stroke-current text-neutral-content" />
      <SunIcon class="swap-off h-8 w-8 stroke-current text-neutral-content" />
    </label>
    <label class="relative hidden sm:flex">
      <MoonIcon
        class="pointer-events-none absolute inset-y-0 top-1 right-1 h-4 w-4 stroke-current"
      />
      <input
        v-model="isDark"
        name="toggle-theme"
        type="checkbox"
        :checked="isDark"
        class="toggle toggle-lg"
      />
      <SunIcon class="pointer-events-none absolute inset-y-0 top-1 left-1 h-4 w-4 stroke-current" />
    </label>
  </div>
</template>
