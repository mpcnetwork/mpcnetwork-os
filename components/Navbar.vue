<template>
  <header
    class="relative w-full h-16 backdrop-blur-md bg-black/40 border-b border-blue-500/20
           flex items-center justify-between px-6 text-white shadow-lg shadow-blue-500/5"
  >
    <!-- Logo + Naam -->
    <div class="flex items-center space-x-3">
      <div class="w-10 h-10 rounded-full bg-blue-600/40 border border-blue-500/40
                  shadow-[0_0_15px_rgba(0,150,255,0.5)]">
         <img src="/public/img/mpcnetworklogo.png" 
              alt="Major Printing Company Logo" 
              class="w-full h-full object-cover rounded" />
      </div>

      <span class="font-semibold text-xl tracking-wide">
        MPC<span class="text-blue-400">Network</span>
      </span>
    </div>

    <div class="flex items-center space-x-6">
      <!-- Dark Mode Toggle -->
      <button
        @click="toggleDark"
        class="w-6 h-6 flex items-center justify-center rounded-full
               bg-blue-600/20 border border-blue-500/30
               hover:bg-blue-600/30 transition shadow-blue-500/20 shadow-md"
      >
        <span v-if="isDark">🌙</span>
        <span v-else>☀️</span>
      </button>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="group flex flex-col space-y-1.5">
        <span class="w-7 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-all"></span>
        <span class="w-7 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-all"></span>
        <span class="w-7 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-all"></span>
      </button>
    </div>
  </header>

  <!-- Dropdown menu -->
  <transition name="fade">
    <nav
      v-if="menuOpen"
      class="absolute right-6 top-16 w-56 bg-gray-900/90 backdrop-blur-md border border-blue-500/20
             rounded-lg shadow-lg shadow-blue-500/10 text-white z-50"
    >
      <ul class="flex flex-col py-2">
        <li class="px-4 py-3 hover:bg-blue-600/20 cursor-pointer transition">Dashboard</li>
        <li class="px-4 py-3 hover:bg-blue-600/20 cursor-pointer transition">Profile</li>
        <li class="px-4 py-3 hover:bg-blue-600/20 cursor-pointer transition">Settings</li>
        <li class="px-4 py-3 hover:bg-blue-600/20 cursor-pointer transition">Logout</li>
      </ul>
    </nav>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useColorMode } from '#imports'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const toggleDark = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


