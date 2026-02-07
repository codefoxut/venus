import { ref, computed, unref } from 'vue'
import type { Ref } from 'vue'

export const useHost = (fallback = 'bigjobs') => {
    const host = ref(fallback);
    console.log("sdfadfasdfasfsadfasdfasd")
    if (import.meta.server) {
      // Learn more about the nuxtApp interface on https://v3.nuxtjs.org/docs/usage/nuxt-app#nuxtapp-interface-advanced
      const headers = useRequestHeaders(['host'])
      const hostVal = headers['host']?.split(',')[0];
      if (hostVal) {
        host.value = hostVal;
      }
    } else if (import.meta.client) {
      const hostVal = window.location.hostname.split(":")[0];
      host.value = hostVal;
    }
    return host
  }