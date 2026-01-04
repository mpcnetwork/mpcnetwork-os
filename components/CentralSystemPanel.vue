<template>
  <transition name="slide">
    <div
      v-if="open"
      class="fixed top-0 right-0 h-full w-full sm:w-[480px]
             backdrop-blur-xl bg-black/40 dark:bg-black/50
             border-l border-white/10 shadow-2xl shadow-blue-500/10
             p-10 overflow-y-auto z-50"
    >
      <!-- Title -->
      <h1 class="text-4xl font-bold tracking-wide text-center">
        Welkom terug, <span class="text-blue-400">Operator</span>
      </h1>

      <!-- Subtitle -->
      <p class="text-gray-300 dark:text-gray-400 text-lg text-center mt-4">
        Dit is jouw centrale hub. Alles wat je nodig hebt, begint hier.
      </p>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
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

      <!-- System Status -->
      <p class="text-sm text-gray-400 tracking-widest uppercase mt-10 text-center">
        System Online • All Nodes Stable
      </p>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  open: Boolean
})
</script>

<style>
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-active {
  transition: all 0.4s ease;
}
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
