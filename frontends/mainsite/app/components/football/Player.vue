<template>
  <div :id="`player-${player.id}`" :class="{'ring-1 ring-primary-50': selected }" :style="_style" style="position:fixed;" ref="playerEl" class="w-13 h-13 rounded-full z-30 bg-primary-500 cursor-pointer shadow-md text-md font-bold uppercase text-blue-50 flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-100" @click="selectPlayer(player)">
    <u-popover mode="hover">
      <span class="block">
        {{ positionShortcuts(player.position) }}
      </span>

      <template #content>
        <div class="max-w-80 p-10">
          <p class="font-bold">{{ player.name }}</p>
          <p class="font-light italic">{{ player.position }}</p>

          <div class="my-4">
            <p v-for="role in player.roles" :key="role" class="flex items-center">
              <icon name="i-lucide-star" class="me-2" />
              {{ role }}
            </p>
          </div>

          <div id="statistics" class="mt-4">
            <p class="flex gap-2">
              <span class="font-medium">Avg. Goals:</span>
              <span class="font-light">{{ getAverageGoals }}</span>
            </p>

            <p class="flex gap-2">
              <span class="font-medium">Avg. Assists:</span>
              <span class="font-light">{{ getAverageAssists }}</span>
            </p>

            <p class="flex gap-2">
              <span class="font-medium">Goals to Assists Ratio:</span>
              <span class="font-light">{{ goalsToAssistsRatio }}</span>
            </p>
          </div>
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
    autoScroll: true,
    containerElement: parent
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

const { isSelected, selectPlayer, editablePlayer } = usePlayerComposable()
const selected = isSelected(player)

// if (import.meta.client) {
//   onClickOutside(playerEl, () => {
//     editablePlayer.value = undefined
//   }, {
//     ignore: ['#edit-player']
//   })
// }

/**
 * Player Statistics
 */

const { searched: searchedPlayer, getAverage: getAverageGoals, getMin: getMinGoals, getMax: getMaxGoals, getSum: getSumGoals } = usePlayerStatistics(computed(() => player.name), 'goals')
const { getAverage: getAverageAssists, getMin: getMinAssists, getMax: getMaxAssists, getSum: getSumAssists } = usePlayerStatistics(computed(() => player.name), 'assists')

const { ratio } = useAdvancedStatistics()
const goalsToAssistsRatio = usePrecision(ratio(getSumGoals.value, getSumAssists.value), 2)
// const goaldsByApparencesRatio = usePrecision(ratio(getSumGoals.value, searchedPlayer.value), 2)
</script>
