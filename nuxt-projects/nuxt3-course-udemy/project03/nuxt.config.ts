// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
//   supabase: {
//     types: 'types/database.types.ts'
// },
  compatibilityDate: '2026-02-09',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    // "@nuxt/image-edge"
    // "@vueuse/nuxt"
  ]
})
