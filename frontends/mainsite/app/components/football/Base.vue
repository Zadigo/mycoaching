<template>
  <section id="football" class="w-full h-full relative transition-all ease-in-out duration-300">
    <!-- Header -->
    <header>
      <u-card>
        <u-input-menu v-model="selectedName" :items="names" class="w-55" placeholder="Preset positions" />
        <u-select v-model="selectedSubName" :items="subNames" class="w-55" placeholder="Preset positions" />
        <u-select v-if="selectedSubPreset && selectedSubPreset.onPossession && selectedSubPreset.onPossession.length > 0" :items="selectedSubPreset.onPossession" class="w-55" placeholder="On possession" />
        <u-select v-if="selectedSubPreset && selectedSubPreset.onDefense && selectedSubPreset.onDefense.length > 0" :items="selectedSubPreset.onDefense" class="w-55" placeholder="On defense" />
        <u-button @click="() => { loadPreset() }">
          <icon name="i-cloud" />
          Load preset
        </u-button>
        <u-button @click="async () => void copy(strPlayers)">
          <icon name="i-lucide-copy" />
          Copy positions
        </u-button>
      </u-card>
    </header>
    
    <!-- Pitch -->
    <div class="p-20 relative">
      <client-only>
        <div ref="footballPitchEl" class="bg-blue-50 dark:bg-blue-800 h-200 w-150 p-10 mx-auto relative">
          <football-player v-for="player in players" :key="player.id" :player="player" :parent="footballPitchEl" />
        </div>
      </client-only>
    </div>
  </section>

  <!-- Edit Player -->
  <u-modal v-model:open="showModal">
    <template #title>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        Modifier le joueur
      </h3>
    </template>

    <template #body>
      <div v-if="editablePlayer">
        <u-input v-model="editablePlayer.name" placeholder="Nom" />
        <u-select v-model="editablePlayer.globalPosition" :items="globalPositionsConstant" placeholder="Position globale" />
        <u-input-menu v-model="editablePlayer.position" :items="positionConstant" placeholder="Position spécifique" />
        <u-input-menu v-model="editablePlayer.roles" :items="rolesConstant" placeholder="Rôle" multiple />
      </div>
    </template>
  </u-modal>
</template>

<script setup lang="ts">
const footballPitchEl = useTemplateRef('footballPitchEl')

const players = getBasePositions()
const { history, commit, undo, redo } = useManualRefHistory(players)
const { showModal, editablePlayer } = usePlayerComposable()

/**
 * Preset positions
 */
const { names, items } = usePresetPositions()
const { selectedName, selectedSubName, subNames, selectedSubPreset, loadPreset } = usePresetPositionSelection(items, players)

const strPlayers = computed(() => JSON.stringify(players.value))
const { copy } = useClipboard({ source: strPlayers })
</script>
