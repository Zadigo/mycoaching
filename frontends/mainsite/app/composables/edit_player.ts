import type { Player } from "~/types";

export const usePlayerComposable = createSharedComposable(() => {
  const editablePlayer = ref<Player>()

  const isSelected = reactive((player: Player) => {
    return editablePlayer.value?.id === player.id
  })
  
  function selectPlayer(player: Player) {
    editablePlayer.value = player
  }
  
  return {
    editablePlayer,
    isSelected,
    selectPlayer,
  }
})
