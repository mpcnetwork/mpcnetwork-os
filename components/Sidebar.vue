<template>
  <transition name="sidebar-slide">
    <aside
      v-if="open"
      class="fixed top-0 left-0 h-full w-72 sm:w-80
             backdrop-blur-xl bg-black/40 dark:bg-black/50
             border-r border-white/10 shadow-2xl shadow-blue-500/10
             p-6 flex flex-col space-y-8 z-50"
    >
      <!-- Title -->
      <h2 class="text-2xl font-bold tracking-wide text-blue-400">
        Launcher
      </h2>

      <!-- Navigation -->
      <nav class="flex flex-col space-y-4">
        <NuxtLink
          to="/home"
          class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
                 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition"
        >
          🏠 Home
        </NuxtLink>

        <NuxtLink
          to="/projects"
          class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
                 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition"
        >
          📁 Projecten
        </NuxtLink>

        <NuxtLink
          to="/about"
          class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
                 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition"
        >
          ℹ️ Over
        </NuxtLink>

        <NuxtLink
          to="/contact"
          class="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20
                 dark:bg-white/5 dark:hover:bg-white/10
                 border border-white/10 transition"
        >
          ✉️ Contact
        </NuxtLink>
      </nav>

      <!-- System Status -->
      <div class="mt-auto text-sm text-gray-400 tracking-widest uppercase">
        System Ready
      </div>
    </aside>
  </transition>
</template>

<script setup>
defineProps({
  open: Boolean
})
</script>

<style>
.sidebar-slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.sidebar-slide-enter-active {
  transition: all 0.35s ease;
}
.sidebar-slide-leave-active {
  transition: all 0.25s ease;
}
.sidebar-slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
