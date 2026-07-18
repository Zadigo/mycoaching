import type { RemovableRef } from '@vueuse/core'
import type { Player, PresetPosition } from '~/types'

export function usePresetPositionSelection(presets: Ref<PresetPosition[]>, valuesToUpdate: Ref<Player[]> | RemovableRef<Player[]>) {
  const selectedName = ref<string>('')
  const selectedPreset = computed(() => {
    return presets.value.find(preset => preset.name === selectedName.value)
  })
  function loadPreset() {
    if (isDefined(selectedPreset)) {
      console.log(selectedPreset.value)
      valuesToUpdate.value = selectedPreset.value.positions
    }
  }
  return {
    selectedName,
    selectedPreset,
    loadPreset
  }
}
