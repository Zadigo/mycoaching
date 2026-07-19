export function useGridComposable() {
  const showVerticalGrid = ref(false)
  const showVerticalGridHalfSpaces = ref(false)
  const showGuardiolaGrid = ref(false)
  const showEighteenGrid = ref(false)
  const showHorizontalGrid = ref(false)

  const toggleWingsGrid = useToggle(showVerticalGrid)
  const toggleWingsGridHalfSpaces = useToggle(showVerticalGridHalfSpaces)
  const toggleGuardiolaGrid = useToggle(showGuardiolaGrid)
  const toggleEighteenGrid = useToggle(showEighteenGrid)
  const toggleHorizontalGrid = useToggle(showHorizontalGrid)

  return {
    showVerticalGrid,
    showVerticalGridHalfSpaces,
    showGuardiolaGrid,
    showEighteenGrid,
    showHorizontalGrid,
    toggleWingsGrid,
    toggleWingsGridHalfSpaces,
    toggleGuardiolaGrid,
    toggleEighteenGrid,
    toggleHorizontalGrid,
  }
}
