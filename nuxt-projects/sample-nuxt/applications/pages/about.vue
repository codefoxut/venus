
<template>
<div>
  <NuxtLink to="/">Home page</NuxtLink>
  <h1>I am rendered on the {{ renderedOn }} side</h1>
  </div>
</template>



<script>
  export default {
    asyncData() {
      return { renderedOn: process.client ? 'client' : 'server' }
    }
  }
</script>

