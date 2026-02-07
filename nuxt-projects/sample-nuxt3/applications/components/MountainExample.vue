<script setup>
const { data: mountain } = await useFetch(
  'https://api.nuxtjs.dev/mountains/mount-everest', {
    "server": true,
    "lazy": false
  }
)
</script>

<template>
  <pre class="text-sm text-left overflow-auto">{{ mountain }}</pre>
</template>
