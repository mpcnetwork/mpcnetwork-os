<template>
  <div class="min-h-screen bg-black text-white relative">
    <Navbar />

    <!-- Sidebar trigger -->
    <button
      @click="sidebarOpen = true"
      class="fixed top-3/4 left-0 -translate-y-1/2
             bg-blue-600/40 hover:bg-blue-600/60
             border border-blue-400/40
             shadow-[0_0_15px_rgba(0,150,255,0.5)]
             text-white px-3 py-4 rounded-r-xl
             backdrop-blur-md transition z-40"
    >
      <span class="tracking-widest font-semibold">
       <span class="block">M</span>
       <span class="block">E</span>
       <span class="block">N</span>
       <span class="block">U</span>
      </span>
    </button>

    <Sidebar :open="sidebarOpen" />

    <!-- Close overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
    ></div>

    <main>
      <slot />
    </main>

    <Dock />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Dock from '~/components/Dock.vue'
import Navbar from '~/components/Navbar.vue'

const sidebarOpen = ref(false)
</script>
