<template>
  <div :id="`player-${player.id}`" :style="_style" style="position: fixed;" ref="playerEl" class="w-13 h-13 rounded-full z-30 bg-blue-500 cursor-pointer shadow-2xs text-md font-bold uppercase text-white flex items-center justify-center" @click.right="() => toggleModal(player)">
    <span>{{ positionShortcuts(player.position) }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Player } from '~/types'

const { player, parent } = defineProps<{
  player: Player,
  parent: HTMLDivElement | null
}>()

const playerEl = useTemplateRef('playerEl')

const _style = ref<string>('')

if (import.meta.client) {
  const { x, y, style } = useDraggable(playerEl, {
    initialValue: { x: player.x, y: player.y },
    containerElement: parent,
    autoScroll: true,
  })

  syncRef(_style, style, { direction: 'rtl' })
  
  watchEffect(() => {
    player.x = x.value
    player.y = y.value
  })

  watch(() => player, (newPlayer) => {
    x.value = newPlayer.x
    y.value = newPlayer.y
  })
}

const { toggleModal } = usePlayerComposable()
</script>
