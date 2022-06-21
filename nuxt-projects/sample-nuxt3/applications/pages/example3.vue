<script setup lang="ts">
const route = useRoute()
const timer = useState('timer', () => 0)
</script>

<template>
  <NuxtExampleLayout example="routing/universal-router">
    A page...
    <br>

    <template v-if="timer">
      Processing navigation in 0.{{ timer }}s
    </template>

    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/example3/" class="n-link-base">
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