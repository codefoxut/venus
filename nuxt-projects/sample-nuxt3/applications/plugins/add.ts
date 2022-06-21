export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', () => {
      console.log('this global middleware was added in a plugin')
    }, { global: true })
  
    addRouteMiddleware('named-test', () => {
      console.log('this named middleware was added in a plugin')
    })


    const timer = useState('timer', () => 0)
  
    if (process.client) {
      addRouteMiddleware(async () => {
        console.log('Starting timer...')
        timer.value = 5
        do {
          await new Promise(resolve => setTimeout(resolve, 100))
          timer.value--
        } while (timer.value)
        console.log('...and navigating')
      })
    }
  
    addRouteMiddleware((to) => {
      if (to.path === '/example2/forbidden') {
        console.log("i reached here.")
        return false
      }
    })
  
    addRouteMiddleware((to) => {
      const { $config } = useNuxtApp()
      if ($config) {
        console.log('Accessed runtime config within middleware.')
      }
  
      if (to.path !== '/example2/redirect') { return }
      console.log("there or here, does not matter.")
      console.log('Heading to', to.path, 'but I think we should go somewhere else...')
      return '/example2/secret'
    })
  })