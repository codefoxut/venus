export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        myBasePlugin: () => 'String generated from my auto-imported plugin!'
      }
    }
  })
  