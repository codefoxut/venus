<template>
  <div>
    Child reloaded: {{ reloads }}
    ID-value: {{}}
  </div>
</template>

<script setup>
const reloads = useState('reload', () => 0)
onMounted(() => { reloads.value++ })
</script>