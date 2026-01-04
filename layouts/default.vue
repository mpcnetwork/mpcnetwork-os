<template>
  <div class="min-h-screen bg-black text-white">
    <Navbar />

    <main class="">
      <slot />
    </main>
    <Dock />
  </div>
</template>

<script setup>
import Dock from '~/components/Dock.vue'
import Navbar from '~/components/Navbar.vue'
</script>
