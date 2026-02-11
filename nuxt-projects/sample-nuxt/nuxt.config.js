export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sample-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt', // Bootstrap Vue is incompatible with Vue 3
    // https://go.nuxtjs.dev/axios
    // '@nuxtjs/axios', // Removed legacy axios module
    // https://go.nuxtjs.dev/pwa
    '@vite-pwa/nuxt',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  srcDir: 'applications/',

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // router configurations
  router: {
    middleware: ['stats', 'domain'],
    prefetchLinks: false,
  },
  serverMiddleware: ['~/server-middleware/logger'],
}
