<template>
  <aside>
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
  </aside>
</template>

<script setup lang="ts">
import { globalPositions, playerPositions, playerRoles } from '~/types'
import type { Player } from '~/types'

const { players = [] } = defineProps<{
  players: Player[]
}>()

const { editablePlayer } = usePlayerComposable()

/**
 * Players
 */

const { players: footballPlayers, search: searchFootballPlayer, searched: searchedFootballPlayers, names: footballPlayerNames } = usePlayers()

/**
 * Preset positions
 */
const { names, items } = usePresetPositions()
const _players = computed(() => players)
const { selectedName, selectedSubName, subNames, selectedPreset, selectedSubPreset, loadPreset } = usePresetPositionSelection(items, _players)

/**
 * Description
 */

const { description } = useGridComposable()
</script>
