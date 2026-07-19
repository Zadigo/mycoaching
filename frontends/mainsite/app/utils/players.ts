import type { FootballPlayerStatisticKeys, FootballPlayer } from '~/types'
import jsonPlayers from './players.json'

export function usePlayers() {
  const players = computed(() => jsonPlayers as FootballPlayer[]) 
  const names = computed(() => players.value.map(player => player.fullName))

  const search = ref<string>('')
  const searched = computed(() => {
    if (search.value === '') return players.value
    return players.value.filter(player => player.fullName.toLowerCase().includes(search.value.toLowerCase()))
  })

  return {
    players,
    names,
    search,
    searched
  }
}

export function usePlayerStatistics<T extends FootballPlayerStatisticKeys>(playerName: Ref<string>, key: T) {
  const { search, searched } = usePlayers()
  syncRef(playerName, search, { direction: 'ltr' })

  const getValues = computed(() => {
    if (isDefined(searched)) {
      return searched.value
        .map(player => player.statistics
        .map(statistic => statistic[key]))
        .filter(value => value !== undefined)
        .flat()
    } else {
      return []
    }
  })

  const getAverage = usePrecision(useAverage(getValues), 1)
  const getSum = useSum(getValues)
  const getMin = useMin(getValues)
  const getMax = useMax(getValues)

  return {
    searched,
    getValues,
    getAverage,
    getMin,
    getMax,
    getSum
  }
}

export function useAdvancedStatistics() {
  const ratio = reactive((a: number, b: number) => {
    return b !== 0 ? a / b : 0
  })

  const variance = reactive((values: number[]) => {
    const mean = useAverage(values)
    return useAverage(values.map(value => (value - mean.value) ** 2))
  })

  const standardDeviation = reactive((values: number[]) => {
    const varianceValue = variance(values)
    return Math.sqrt(varianceValue.value)
  })

  const meanAbsoluteDeviation = reactive((values: number[]) => {
    const mean = useAverage(values)
    return useAverage(values.map(value => Math.abs(value - mean.value)))
  })

  const relativeStandardDeviation = reactive((values: number[]) => {
    const mean = useAverage(values)
    const stdDev = standardDeviation(values)
    return mean.value !== 0 ? stdDev / mean.value : 0
  })

  return {
    ratio,
    variance,
    standardDeviation,
    meanAbsoluteDeviation,
    relativeStandardDeviation
  }
}
