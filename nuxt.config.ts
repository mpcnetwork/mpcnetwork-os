// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss',
            '@nuxtjs/color-mode'
  ],
  colorMode: { classSuffix: '' },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
