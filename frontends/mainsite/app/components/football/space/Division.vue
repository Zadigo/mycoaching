<template>
  <div :id="id" class="w-full h-full bg-yellow-200 dark:bg-yellow-700 font-bold text-3xl flex items-center justify-center">
    <div class="-rotate-90">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  name: string
}>()
</script>
