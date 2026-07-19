<template>
  <div class="w-full h-full grid grid-cols-3 grid-rows-6 gap-2 rounded-3xl overflow-hidden text-3xl font-bold">
    <div v-for="i in 18" :key="i" :class="handleColor(i)" class="text-vertical-space-50 backdrop-blur-3xl shadow-sm flex items-center justify-center">
      {{ i }}
    </div>
  </div>
</template>

<script setup lang="ts">
function handleColor(spaceNumber: number) {
  switch (spaceNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      return 'bg-vertical-space-400/30'
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      return 'bg-vertical-space-600/30'
    default:
      return 'bg-vertical-space-900/30'
  }
}
</script>
