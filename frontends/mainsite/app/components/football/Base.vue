<template>
  <section id="football" class="w-full h-full p-5 max-w-7xl mx-auto space-y-5 relative transition-all ease-in-out duration-300">
    <!-- Header -->
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
    
    <!-- Pitch -->
    <div class="relative grid grid-cols-2 gap-10 rounded-lg">
      <client-only>
        <div ref="footballPitchEl" class="bg-primary-50 dark:bg-primary-800 h-200 w-full p-2 relative overflow-hidden rounded-4xl">
          <football-player v-for="player in players" :key="player.id" :player="player" :parent="footballPitchEl" />
          
          <football-space-formations-base :players="players" />

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

      <div>
        <u-card>
          <template #title>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Description
            </h3>
          </template>

          <p v-for="item in selectedPreset?.description" class="font-light">
            {{ item }}
          </p>
        </u-card>

        <u-card>
          <p>
            {{ description }}
          </p>
        </u-card>

        <u-card id="edit-player">
          <template #title>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Modifier le joueur
            </h3>
          </template>
          
          <div v-if="editablePlayer" class="space-y-2">
            <div class="flex">
              <u-input-menu v-model="editablePlayer.name" :items="footballPlayerNames" class="w-full" placeholder="Nom" />
            </div>
            
            <div class="flex justify-start gap-2">
              <u-select v-model="editablePlayer.globalPosition" :items="Array.from(globalPositions)" placeholder="Position globale" />
              <u-input-menu v-model="editablePlayer.position" :items="Array.from(playerPositions)" placeholder="Position spécifique" />
            </div>
            <u-input-menu v-model="editablePlayer.roles" :items="Array.from(playerRoles)" placeholder="Rôle" multiple />
          </div>
        </u-card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { globalPositions, playerPositions, playerRoles } from '~/types'

const footballPitchEl = useTemplateRef('footballPitchEl')

const players = getBasePositions()
const { history, commit, undo, redo } = useManualRefHistory(players)
const { editablePlayer } = usePlayerComposable()

/**
 * Preset positions
 */
const { names, items } = usePresetPositions()
const { selectedName, selectedSubName, subNames, selectedPreset, selectedSubPreset, loadPreset } = usePresetPositionSelection(items, players)

/**
 * Clipboard
 */

const strPlayers = computed(() => JSON.stringify(players.value))
const { copy } = useClipboard({ source: strPlayers })

/**
 * Grids
 */

 const {
  description,
  showVerticalGrid, 
  showVerticalGridHalfSpaces, 
  showGuardiolaGrid, 
  showEighteenGrid, 
  showHorizontalGrid,
  toggleWingsGrid, 
  toggleWingsGridHalfSpaces, 
  toggleGuardiolaGrid, 
  toggleEighteenGrid, 
  toggleHorizontalGrid
} = useGridComposable()

/**
 * Players
 */

const { players: footballPlayers, search: searchFootballPlayer, searched: searchedFootballPlayers, names: footballPlayerNames } = usePlayers()
</script>
