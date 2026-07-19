<template>
  <client-only>
    <div ref="footballPitchEl" class="bg-primary-50 dark:bg-primary-800 h-200 w-full p-2 relative overflow-hidden rounded-4xl">
      <football-player v-for="player in players" :key="player.id" :player="player" :parent="footballPitchEl" />
      
      <!-- <football-space-formations-base :players="players" /> -->

      <football-space-horizontal v-if="showHorizontalGrid" />
      <football-space-eighteen v-if="showEighteenGrid" />
      <football-space-guardiola v-if="showGuardiolaGrid" />

      <!-- Divisions -->
      <football-space-wings v-if="showVerticalGrid" :with-half-spaces="showVerticalGridHalfSpaces">
        <football-space-wing id="couloir-droit" name="Couloir droit" />
        <football-space-wing v-show="showVerticalGridHalfSpaces" :half-space="true" id="half-space-1" name="Demi-espace droit" />
        <football-space-wing id="couloir-central" name="Couloir central" />
        <football-space-wing v-show="showVerticalGridHalfSpaces" :half-space="true" id="half-space-2" name="Demi-espace gauche" />
        <football-space-wing id="couloir-gauche" name="Couloir gauche" />
      </football-space-wings>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import type { Player } from '~/types'

const { players = [] } = defineProps<{
  players: Player[]
}>()

const footballPitchEl = useTemplateRef('footballPitchEl')

/**
 * Grids
 */

 const {
  showVerticalGrid, 
  showVerticalGridHalfSpaces, 
  showGuardiolaGrid, 
  showEighteenGrid, 
  showHorizontalGrid
} = useGridComposable()
</script>
