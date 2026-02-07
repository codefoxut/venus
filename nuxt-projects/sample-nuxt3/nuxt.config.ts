// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  compatibilityDate: '2026-02-08',
  extends: [
    './applications/ui',
    './applications/base'
  ],
  runtimeConfig: {
    public: {
      theme: {
        primaryColor: 'user_primary'
      }
    }
  },
  srcDir: "applications/",
  modules: [
    '~/modules/pages',
    '@nuxt/ui',
  ],
  components: {
    dirs: [
      '~/components',
      {
        path: '~/other-components-folder',
        extensions: ['vue'],
        prefix: 'nuxt'
      }
    ]
  },
})