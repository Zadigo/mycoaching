import type { Player } from "~/types";

export const usePlayerComposable = createSharedComposable(() => {
  const editablePlayer = ref<Player>()
  const showModal = ref(false)
  const _toggleModal = useToggle(showModal)
  function toggleModal(player: Player) {
    editablePlayer.value = player
  }
  whenever(() => isDefined(editablePlayer), () => {
    _toggleModal(true)
  })
  watch(showModal, (newValue) => {
    if (!newValue) {
      editablePlayer.value = undefined
    }
  })
  return {
    editablePlayer,
    showModal,
    toggleModal,
  }
})
