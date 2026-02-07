<script setup>
  const count = ref(1);
  const { data } = await useFetch(() => `/api/beer/${count.value}`, {
    query: { token: 123 },
    watch: [count],
    immediate: true
  });
</script>

<template>
  <NuxtExampleLayout example="composables/use-fetch">
    <div>
      Fetch result:
      <pre class="text-left"><code>{{ data }}</code></pre>
      <NButton @click="count++"> + </NButton>
    </div>
  </NuxtExampleLayout>
</template>
