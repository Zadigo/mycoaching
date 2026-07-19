<template>
  <header>
    <u-card>
      <u-input-menu v-model="selectedName" :items="names" class="w-55" placeholder="Preset positions" />
      <u-select v-model="selectedSubName" :items="subNames" class="w-55" placeholder="Preset positions" />
      <u-select v-if="selectedSubPreset && selectedSubPreset.onPossession && selectedSubPreset.onPossession.length > 0" :items="selectedSubPreset.onPossession" class="w-55" placeholder="On possession" />
      <u-select v-if="selectedSubPreset && selectedSubPreset.onDefense && selectedSubPreset.onDefense.length > 0" :items="selectedSubPreset.onDefense" class="w-55" placeholder="On defense" />
      
        <u-button @click="() => { loadPreset() }">
        <icon name="i-lucide-cloud-upload" />
        Load preset
      </u-button>
      
      <u-button @click="async () => void copy(strPlayers)">
        <icon name="i-lucide-copy" />
        Copy positions
      </u-button>

      <div>
        <u-button @click="() => { toggleWingsGrid() }">
          <icon name="i-lucide-grid" />
          Couloirs
        </u-button>

        <u-button :disabled="!showVerticalGrid" @click="() => { toggleWingsGridHalfSpaces() }">
          <icon name="i-lucide-grid" />
          Couloirs + Demi-espaces
        </u-button>

        <u-button @click="() => { toggleGuardiolaGrid() }">
          <icon name="i-lucide-grid" />
          Guardiola Grid
        </u-button>

        <u-button @click="() => { toggleEighteenGrid() }">
          <icon name="i-lucide-grid" />
          Eighteen Grid
        </u-button>

        <u-button @click="() => { toggleHorizontalGrid() }">
          <icon name="i-lucide-grid" />
          Horizontal Grid
        </u-button>
      </div>
    </u-card>
  </header>
</template>

<script setup lang="ts">
import type { Player } from '~/types'

const { players = [] } = defineProps<{
  players: Player[]
}>()

const {
  showVerticalGrid,
  toggleWingsGrid,
  toggleWingsGridHalfSpaces,
  toggleGuardiolaGrid,
  toggleEighteenGrid,
  toggleHorizontalGrid
} = useGridComposable()

/**
 * Clipboard
 */

const strPlayers = computed(() => JSON.stringify(players))
const { copy } = useClipboard({ source: strPlayers })

/**
 * Preset positions
 */
const { names, items } = usePresetPositions()
const _players = computed(() => players)
const { selectedName, selectedSubName, subNames, selectedPreset, selectedSubPreset, loadPreset } = usePresetPositionSelection(items, _players)
</script>
