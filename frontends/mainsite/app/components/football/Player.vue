<template>
  <div :id="`player-${player.id}`" :style="_style" style="position: fixed;" ref="playerEl" class="w-13 h-13 rounded-full z-30 bg-blue-500 cursor-pointer shadow-md text-md font-bold uppercase text-blue-50 flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-100">
    <u-popover mode="hover">
      <span class="block">{{ positionShortcuts(player.position) }}</span>

      <template #content>
        <div class="max-w-60 p-10">
          <p class="font-bold">{{ player.name }}</p>
          <p class="font-light italic">{{ player.position }}</p>
          <p v-for="role in player.roles" :key="role">{{ role }}</p>

          <u-button @click="() => toggleModal(player)">
            <icon name="i-lucide-edit" />
            Edit player
          </u-button>
        </div>
      </template>
    </u-popover>
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
