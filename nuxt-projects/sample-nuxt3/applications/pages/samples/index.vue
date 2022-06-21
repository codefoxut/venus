<template>
  <NuxtExampleLayout example="routing/layouts">
    <template #nav>
      <nav class="flex align-center gap-4 p-4">
        <NuxtLink to="/samples/default">
          Default layout
        </NuxtLink>
        <NuxtLink to="/samples/custom">
          Custom layout
        </NuxtLink>
        <NuxtLink to="/samples/dynamic">
          Dynamic layout
        </NuxtLink>
      </nav>
    </template>
  </NuxtExampleLayout>
</template>
