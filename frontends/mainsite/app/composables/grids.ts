const halfSpaceDescription: string[] = [
  'Les half - spaces sont les zones du terrain situées entre les couloirs latéraux(ailes) et la zone centrale. Concrètement, le terrain est divisé en cinq verticales :',
  'Couloir gauche(aile gauche)',
  'Demi - espace gauche',
  'Zone centrale',
  'Demi - espace droit',
  'Couloir droit(aile droite)',
  'Ces demi - espaces offrent des opportunités tactiques uniques, car ils permettent aux joueurs d\'opérer dans des zones moins densément peuplées, tout en étant plus proches du but qu\'en passant par les ailes.',
]

export const useGridComposable = createSharedComposable(() => {
  const showWingsGrid = useLocalStorage<boolean>('showWingsGrid', false)
  const showWingsGridWithHalfSpaces = useLocalStorage<boolean>('showWingsGridWithHalfSpaces', false)
  const showGuardiolaGrid = useLocalStorage<boolean>('showGuardiolaGrid', false)
  const showEighteenGrid = useLocalStorage<boolean>('showEighteenGrid', false)
  const showHorizontalGrid = useLocalStorage<boolean>('showHorizontalGrid', false)

  const toggleWingsGrid = useToggle(showWingsGrid)
  const toggleWingsGridHalfSpaces = useToggle(showWingsGridWithHalfSpaces)
  const toggleGuardiolaGrid = useToggle(showGuardiolaGrid)
  const toggleEighteenGrid = useToggle(showEighteenGrid)
  const toggleHorizontalGrid = useToggle(showHorizontalGrid)

  const description = ref<string>('')

  watch(showWingsGrid, (newValue) => {
    if (newValue) {
      toggleWingsGridHalfSpaces(false)
      toggleGuardiolaGrid(false)
      toggleEighteenGrid(false)
      toggleHorizontalGrid(false)
    }
  })

  watch(showWingsGridWithHalfSpaces, (newValue) => {
    if (newValue) {
      toggleGuardiolaGrid(false)
      toggleEighteenGrid(false)
      toggleHorizontalGrid(false)
    }
  })
  
  watch(showGuardiolaGrid, (newValue) => {
    if (newValue) {
      toggleWingsGrid(false)
      toggleWingsGridHalfSpaces(false)
      toggleEighteenGrid(false)
      toggleHorizontalGrid(false)
    }
  })
  
  watch(showEighteenGrid, (newValue) => {
    if (newValue) {
      toggleWingsGrid(false)
      toggleWingsGridHalfSpaces(false)
      toggleHorizontalGrid(false)
    }
  })

  watch([ showGuardiolaGrid, showWingsGridWithHalfSpaces ], ([ newShowGuardiolaGrid, newShowVerticalGridHalfSpaces ]) => {
    if (newShowGuardiolaGrid || newShowVerticalGridHalfSpaces) {
      description.value = halfSpaceDescription.join('\n')
    } else {
      description.value = ''
    }
  })

  return {
    description,
    showWingsGrid,
    showWingsGridWithHalfSpaces,
    showGuardiolaGrid,
    showEighteenGrid,
    showHorizontalGrid,
    toggleWingsGrid,
    toggleWingsGridHalfSpaces,
    toggleGuardiolaGrid,
    toggleEighteenGrid,
    toggleHorizontalGrid
  }
})
