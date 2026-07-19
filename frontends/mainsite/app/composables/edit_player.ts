import type { Player } from '~/types'

export const usePlayerComposable = createSharedComposable(() => {
  const editablePlayer = ref<Player>()

  const isSelected = reactive((player: Player) => {
    return editablePlayer.value?.id === player.id
  })
  
  function selectPlayer(player: MaybeRef<Player>) {
    editablePlayer.value = unref(player)
  }
  
  return {
    editablePlayer,
    isSelected,
    selectPlayer,
  }
})
