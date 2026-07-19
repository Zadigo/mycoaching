<template>
  <section id="football" class="max-w-7xl mx-auto space-y-5 relative transition-all ease-in-out duration-300 my-10">
    <!-- Header -->
    <football-header :players="players" />

    <!-- Pitch -->
    <div class="relative grid grid-cols-2 gap-10">
      <football-pitch :players="players" />
      <football-aside :players="players" />
    </div>
  </section>
</template>

<script setup lang="ts">
/**
 * Grids
 */

useGridComposable()

/**
 * Players
 */

const players = getBasePositions()
const { history, commit, undo, redo } = useManualRefHistory(players)
</script>
