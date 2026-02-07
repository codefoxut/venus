<script setup lang="ts">
import { computed } from 'vue'
const { count } = defineProps<{
  count: number,
}>()
const doubled = computed(() => count * 2)
</script>

<template>
  <div class="pb2">
    Count <b>{{ count }}</b><br>
    Doubled <b>{{ doubled }}</b>
  </div>
</template>