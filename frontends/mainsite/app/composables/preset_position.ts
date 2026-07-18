import type { RemovableRef } from '@vueuse/core'
import type { Player, PresetPosition } from '~/types'

export function usePresetPositionSelection(presets: Ref<PresetPosition[]>, valuesToUpdate: Ref<Player[]>) {
  const selectedName = ref<string>('')
  const selectedSubName = ref<string>('')
  
  const selectedPreset = computed(() => presets.value.find(preset => preset.strategy === selectedName.value))
  const selectedSubPreset = computed(() => isDefined(selectedPreset) ? selectedPreset.value.formations.find(formation => formation.name === selectedSubName.value) : undefined)

  function loadPreset() {
    if (isDefined(selectedPreset)) {
      valuesToUpdate.value = selectedSubPreset.value?.formations || []
    }
  }
  const subNames = computed(() => isDefined(selectedPreset) ? selectedPreset.value.formations.map(formation => formation.name).sort() : [])

  return {
    selectedName,
    selectedSubName,
    selectedPreset,
    selectedSubPreset,
    subNames,
    loadPreset,
  }
}
