
export const useHost = (fallback = 'bigjobs') => {
    const host = ref(fallback)
    console.log("sdfadfasdfasfsadfasdfasd")
    if (process.server) {
      // Learn more about the nuxtApp interface on https://v3.nuxtjs.org/docs/usage/nuxt-app#nuxtapp-interface-advanced
      const nuxtApp = useNuxtApp()
      const hostVal = nuxtApp.ssrContext?.req.headers['host']?.split(',')[0]
      if (hostVal) {
        host.value = hostVal
      }
    } else if (process.client) {
      const hostVal = window.location.hostname.split(":")[0]
      host.value = hostVal
    }
    return host
  }