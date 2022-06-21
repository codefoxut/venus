<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <NuxtExampleLayout example="routing/pages">
    <NuxtPage />

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/routers/" class="n-link-base">
          Home
        </NuxtLink>
        <NuxtLink to="/routers/about" class="n-link-base">
          About
        </NuxtLink>
        <NuxtLink to="/routers/parent" class="n-link-base">
          Parent (index)
        </NuxtLink>
        <NuxtLink to="/routers/parent/b" class="n-link-base">
          Parent (b)
        </NuxtLink>
        <button class="n-link-base" @click="$router.push(`/routers/parent/reload-${(Math.random() * 100).toFixed()}`)">
          Keyed child
        </button>
        <button class="n-link-base" @click="$router.push(`/routers/parent/static-${(Math.random() * 100).toFixed()}`)">
          Non-keyed child
        </button>
      </nav>
    </template>

    <template #footer>
      <div class="text-center p-4 op-50">
        Current route: <code>{{ route.path }}</code>
      </div>
    </template>
  </NuxtExampleLayout>
</template>
