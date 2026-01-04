<template>
  <div class="p-10 text-center space-y-6">
    <h1 class="text-4xl font-bold">Welkom bij MPCNetwork</h1>
    <p class="text-gray-300 text-lg">
      Een platform in opbouw — stap voor stap, maar met visie.
    </p>

    <NuxtLink
      to="/home"
      class="inline-block px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700"
    >
      Start
    </NuxtLink>
  </div>

  <div class="min-h-screen flex flex-col items-center justify-center text-center px-6
              bg-gradient-to-b from-black via-gray-900 to-black text-white">

    <!-- Glow Orb -->
    <div class="w-40 h-40 rounded-full bg-blue-600/20 blur-3xl absolute top-20"></div>

    <!-- Title -->
    <h1 class="text-5xl font-extrabold tracking-wide drop-shadow-lg">
      MPC<span class="text-blue-500">Network</span>
    </h1>

    <!-- Subtitle -->
    <p class="mt-4 text-gray-300 text-lg max-w-xl">
      Een nieuw digitaal ecosysteem in opbouw — modulair, schaalbaar en klaar voor de toekomst.
    </p>

    <!-- CTA Button -->
    <NuxtLink
      to="/home"
      class="mt-10 px-10 py-3 rounded-full bg-blue-600 hover:bg-blue-700 
             transition-all duration-300 shadow-lg shadow-blue-600/30
             font-semibold text-lg tracking-wide"
    >
      Enter the Network
    </NuxtLink>

    <!-- Futuristic bottom hint -->
    <p class="mt-10 text-gray-500 text-sm tracking-widest uppercase">
      System Ready • Awaiting User Input
    </p>
  </div>

</template>
