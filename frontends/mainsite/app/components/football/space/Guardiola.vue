<template>
  <div class="w-full h-full grid grid-cols-4 grid-rows-5 gap-2 rounded-3xl overflow-hidden text-3xl font-bold pointer-events-none">
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      Aile
    </div>

    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center col-span-2">
      Demi-espace
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      Aile
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      2
    </div>

    <!-- Centre -->
    <div class="grid col-span-2 row-span-3 bg-vertical-space-100 relative overflow-hidden">
      <div class="grid grid-cols-12 grid-rows-1 gap-2">
        <div class="bg-vertical-space-700 text-vertical-space-50 flex items-center justify-center col-span-3">
          <div class="-rotate-90 min-w-50">
            Demi-espace
          </div>
        </div>
        
        <!-- Sub-centre -->
        <div class="bg-vertical-space-100 text-vertical-space-50 h-full col-span-6">
          <!-- Sub-center -->
          <div class="grid grid-cols-1 grid-rows-2 gap-4 w-full h-full">
            <div class="flex items-center justify-center bg-vertical-space-800">
              <div class="-rotate-90">
                Centre
              </div>
            </div>

            <div class="flex items-center justify-center bg-vertical-space-800">
              <div class="-rotate-90">
                Centre
              </div>
            </div>
          </div>
        </div>
  
        <div class="bg-vertical-space-700 text-vertical-space-50 flex items-center justify-center h-full col-span-3">
          <div class="-rotate-90 min-w-50">
            Demi-espace
          </div>
        </div>
      </div>
    </div>

    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      3
    </div>

    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      4
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      5
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      6
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      7
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      8
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center col-span-2">
      9
    </div>
    
    <div :class="glassmorphismTheme" class="text-vertical-space-50 flex items-center justify-center">
      10
    </div>
  </div>
</template>

<script setup lang="ts">
const glassmorphismTheme = ref('bg-vertical-space-500/30 backdrop-blur-sm shadow-md dark:bg-vertical-space-500/30 dark:backdrop-blur-sm')
</script>
