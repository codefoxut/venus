import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    './applications/ui',
    './applications/base'
  ],
  publicRuntimeConfig: {
    theme: {
      primaryColor: 'user_primary'
    }
  },
  srcDir: "applications/",
  modules: [
    '~/modules/pages',
    '@nuxt/ui'
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
  experimental: {
    reactivityTransform: true
  }
})