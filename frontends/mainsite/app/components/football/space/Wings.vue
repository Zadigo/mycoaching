<template>
  <div :class="theme" class="w-full h-full bg-red-100/20 backdrop-blur-3xl shadow-sm grid grid-rows-1 rounded-3xl overflow-hidden">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { withHalfSpaces = false } = defineProps<{
  withHalfSpaces?: boolean
}>()

const theme = computed(() => {
  return [
    {
      'grid-cols-3 gap-10': !withHalfSpaces,
      'grid-cols-5 gap-5': withHalfSpaces
    }
  ]
})
</script>
