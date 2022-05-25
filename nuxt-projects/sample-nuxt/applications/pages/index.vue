<template>
  <main>
    <h1>Home page</h1>
    <h2>Hello world!</h2>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org" target="_next">External Link to another page</a>
  </main>
</template>

export default {
  middleware: ['stats']; 
}

<!-->template>
  <Tutorial />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>-->
