// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/rtl/assets/css/style.css'
  ],
  app: {
    head: {
      script: [
        { src: '/rtl/assets/js/main.js', defer: true },
      ],
    }
  }
})
