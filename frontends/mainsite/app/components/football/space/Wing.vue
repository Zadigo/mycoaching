<template>
  <div :id="id" :class="theme" class="w-full h-full backdrop-blur-2xl shadow-md font-bold text-3xl flex items-center justify-center pointer-events-none">
    <div class="-rotate-90 opacity-35 min-w-90">
      {{ name }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { id, name, halfSpace } = defineProps<{
  id: string
  name: string
  halfSpace?: boolean
}>()

const theme = computed(() => {
  return [
    {
      'bg-space-700/20 dark:bg-space-900/20': !halfSpace,
      'bg-space-500/20 dark:bg-space-600/20': halfSpace
    }
  ]
})
</script>
