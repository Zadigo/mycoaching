<template>
  <div v-if="isDefined(players) && players.length > 0" class="grid grid-cols-12 w-full h-full gap-1 overflow-hidden rounded-3xl">
    <!-- Attack -->
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[0]?.name }}
    </div>
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[1]?.name }}
    </div>
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[2]?.name }}
    </div>

    <!-- Midfield -->
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[3]?.name }}
    </div>
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[4]?.name }}
    </div>
    <div class="col-span-4 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[5]?.name }}
    </div>

    <!-- Defense -->
    <div class="col-span-3 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[6]?.name }}
    </div>
    <div class="col-span-3 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[7]?.name }}
    </div>
    <div class="col-span-3 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[8]?.name }}
    </div>
    <div class="col-span-3 w-full h-full bg-space-100 p-5 flex items-center justify-center">
      {{ players[9]?.name }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Player } from '~/types'

const { players } = defineProps<{
  players: Player[]
}>()
</script>
