<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BurgerIcon from './icons/BurgerIcon.vue'
import HomeIcon from './icons/HomeIcon.vue'
import StatsIcon from './icons/StatsIcon.vue'
import ThemeToggle from './components/ThemeToggle.vue'
</script>

<template>
  <header class="bg-neutral">
    <nav class="navbar mx-auto max-w-5xl px-4 sm:px-8 lg:px-0">
      <div class="navbar-start sm:hidden">
        <div class="dropdown">
          <label tabindex="0" class="btn-ghost btn-circle btn">
            <BurgerIcon class="text-neutral-content" />
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-neutral-content p-2 text-neutral shadow"
          >
            <li>
              <RouterLink to="/" active-class="active">
                <HomeIcon />
                Homepage
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/stats" active-class="active">
                <StatsIcon />
                Statistics
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <strong class="text-xl normal-case text-neutral-content">Notes</strong>
      </div>
      <div class="navbar-end relative gap-6 sm:static sm:flex-1">
        <ul class="menu menu-horizontal hidden gap-2 px-1 text-neutral-content sm:flex">
          <li>
            <RouterLink to="/" active-class="active" class="focus:ring focus:ring-current">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/stats" active-class="active" class="focus:ring focus:ring-current">
              Stats
            </RouterLink>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
