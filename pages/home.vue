<script setup>
import { ref } from 'vue'
import CentralSystemPanel from '~/components/CentralSystemPanel.vue'

const panelOpen = ref(false)
</script>

<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500
           bg-[url('/img/desk.png')] dark:bg-[url('/img/deskdark2.png')]"
  >

    <!-- Bookmark Trigger -->
    <button
      @click="panelOpen = true"
      class="fixed top-3/4 right-0 -translate-y-1/2
             bg-blue-600/40 hover:bg-blue-600/60
             border border-blue-400/40
             shadow-[0_0_15px_rgba(0,150,255,0.5)]
             text-white px-3 py-4 rounded-l-xl
             backdrop-blur-md transition z-40"
    >
      <span class="rotate-90 block tracking-widest font-semibold">
        HOME
      </span>
    </button>

    <!-- Sliding Panel -->
    <CentralSystemPanel :open="panelOpen" />

    <!-- Close overlay -->
    <div
      v-if="panelOpen"
      @click="panelOpen = false"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
    ></div>

  </div>
</template>





<!--
<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-500
           flex flex-col items-center justify-center p-6
           bg-[url('/img/desk.png')] dark:bg-[url('/img/deskdark2.png')]"
  >

    < !-- Central System Panel -- >
    <div
      class="backdrop-blur-lg bg-black/30 dark:bg-black/40 border border-white/10
             rounded-2xl shadow-2xl shadow-blue-500/10
             p-10 w-full max-w-3xl text-center space-y-8"
    >
      < !-- Title -- >
      <h1 class="text-4xl font-bold tracking-wide">
        Welkom terug, <span class="text-blue-400">Operator</span>
      </h1>

      < !-- Subtitle -- >
      <p class="text-gray-300 dark:text-gray-400 text-lg max-w-xl mx-auto">
        Dit is jouw centrale hub.  
        Alles wat je nodig hebt, begint hier.
      </p>

      < !-- Quick Actions -- >
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
        <button
          class="p-6 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition backdrop-blur-md
                 flex flex-col items-center space-y-3"
        >
          <span class="text-3xl">📁</span>
          <span class="font-semibold">Bestanden</span>
        </button>

        <button
          class="p-6 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition backdrop-blur-md
                 flex flex-col items-center space-y-3"
        >
          <span class="text-3xl">⚙️</span>
          <span class="font-semibold">Instellingen</span>
        </button>

        <button
          class="p-6 rounded-xl bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition backdrop-blur-md
                 flex flex-col items-center space-y-3"
        >
          <span class="text-3xl">📊</span>
          <span class="font-semibold">Dashboard</span>
        </button>
      </div>

      < !-- System Status -- >
      <p class="text-sm text-gray-400 tracking-widest uppercase mt-8">
        System Online • All Nodes Stable
      </p>
    </div>

  </div>
</template>

< !--
<template>
  <div
    class="min-h-screen bg-cover bg-center bg-no-repeat text-white
           transition-all duration-500
           dark:text-gray-200"
    :class="{
      'bg-[url(/img/desk.png)]': !isDark,
      'bg-[url(/img/deskdark2.png)]': isDark
    }"
  >
    <div class="backdrop-blur-sm bg-black/30 dark:bg-black/40 p-6 rounded-xl max-w-xl">
      <h1 class="text-4xl font-bold mb-4">Dashboard</h1>
      <p class="text-lg text-gray-300 dark:text-gray-400">
        Welkom terug in het netwerk.  
        Dit is jouw centrale hub.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useColorMode } from '#imports'

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
 -->