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
  const showVerticalGrid = useLocalStorage<boolean>('showVerticalGrid', false)
  const showVerticalGridHalfSpaces = useLocalStorage<boolean>('showVerticalGridHalfSpaces', false)
  const showGuardiolaGrid = useLocalStorage<boolean>('showGuardiolaGrid', false)
  const showEighteenGrid = useLocalStorage<boolean>('showEighteenGrid', false)
  const showHorizontalGrid = useLocalStorage<boolean>('showHorizontalGrid', false)

  const toggleWingsGrid = useToggle(showVerticalGrid)
  const toggleWingsGridHalfSpaces = useToggle(showVerticalGridHalfSpaces)
  const toggleGuardiolaGrid = useToggle(showGuardiolaGrid)
  const toggleEighteenGrid = useToggle(showEighteenGrid)
  const toggleHorizontalGrid = useToggle(showHorizontalGrid)

  const description = ref<string>('')

  watch([ showGuardiolaGrid, showVerticalGridHalfSpaces ], ([ newShowGuardiolaGrid, newShowVerticalGridHalfSpaces ]) => {
    if (newShowGuardiolaGrid || newShowVerticalGridHalfSpaces) {
      description.value = halfSpaceDescription.join('\n')
    } else {
      description.value = ''
    }
  })

  return {
    description,
    showVerticalGrid,
    showVerticalGridHalfSpaces,
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
