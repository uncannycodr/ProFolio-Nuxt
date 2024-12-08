// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/google-fonts'],

  googleFonts:{
    families:{
"inter": [100, 200, 300, 400, 500, 600, 700, 800, 900,],
"raleway": [100, 200, 300, 400, 500, 600, 700, 800, 900,],
"Jockey One": [100, 200, 300, 400, 500, 600, 700, 800, 900,],
    },
    display: 'swap',
  },
 
  
  css: ['~/assets/css/tailwind.css'],
  pages: true,
  typescript: {
    shim: false
  },
  components: [{
    path: '~/components',
    pathPrefix: false
  }]



})