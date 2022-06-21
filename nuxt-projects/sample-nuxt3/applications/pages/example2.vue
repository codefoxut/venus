<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NuxtExampleLayout example="routing/middleware">
    <NuxtPage />

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/example2/" class="n-link-base">
          Home
        </NuxtLink>
        <NuxtLink to="/example2/forbidden" class="n-link-base">
          Forbidden
        </NuxtLink>
        <NuxtLink to="/example2/redirect" class="n-link-base">
          Redirect
        </NuxtLink>
      </nav>
    </template>

    <template #footer>
      <div class="text-center p-4 op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtExampleLayout>
</template>
