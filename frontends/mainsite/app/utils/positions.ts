import type { RemovableRef } from '@vueuse/core'
import type { Player, PlayerPosition, PresetPosition } from '~/types'
import presetPositions from './positions.json'
import type { InputMenuItem } from '@nuxt/ui'


export function positionShortcuts(position: PlayerPosition) {
  switch (position) {
    case 'Attaquant':
      return 'ATT'
    case 'Ailier Droit':
      return 'AD'
    case 'Ailier Gauche':
      return 'AG'
    case 'Milieu Central Droit':
      return 'MCD'
    case 'Milieu Central Gauche':
      return 'MCG'
    case 'Milieu Défensif Central':
      return 'MDC'
    case 'Milieu Défensif Droit':
      return 'MDD'
    case 'Milieu Défensif Gauche':
      return 'MDG'
    case 'Milieu Offensif Central':
      return 'MOC'
    case 'Défenseur Central Droit':
      return 'DCD'
    case 'Défenseur Central Gauche':
      return 'DCG'
    case 'Latéral Droit':
      return 'LD'
    case 'Latéral Gauche':
      return 'LG'
    case 'Gardien':
      return 'G'
    default:
      return ''
  }
}

/**
 * Returns the typical number associated with a given football position.
 * @param position - The football position for which to retrieve the number.
 */
export function positionNumbers(position: PlayerPosition) {
  switch (position) {
    case 'Attaquant':
      return 9
    case 'Ailier Droit':
      return 0
    case 'Ailier Gauche':
      return 0
    case 'Milieu Central Droit':
      return 0
    case 'Milieu Central Gauche':
      return 0
    case 'Milieu Défensif Central':
      return 6
    case 'Milieu Défensif Droit':
      return 0
    case 'Milieu Défensif Gauche':
      return 0
    case 'Milieu Offensif Central':
      return 10
    case 'Défenseur Central Droit':
      return 0
    case 'Défenseur Central Gauche':
      return 0
    case 'Latéral Droit':
      return 0
    case 'Latéral Gauche':
      return 0
    case 'Gardien':
      return 1
    default:
      return 0
  }
}

/**
 * Returns the base positions of football players. Changes are stored 
 * in local storage, so they persist across page reloads.
 * 
 */
export function getBasePositions(): RemovableRef<Player[]> {
  const players: Player[] = [
    {
      id: 1,
      name: 'Player 1',
      position: 'Gardien',
      globalPosition: 'Gardien',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 2,
      name: 'Player 2',
      position: 'Défenseur Central Droit',
      globalPosition: 'Défenseur',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 3,
      name: 'Player 3',
      position: 'Défenseur Central Gauche',
      globalPosition: 'Défenseur',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 4,
      name: 'Player 4',
      position: 'Latéral Droit',
      globalPosition: 'Défenseur',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 5,
      name: 'Player 5',
      position: 'Latéral Gauche',
      globalPosition: 'Défenseur',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 6,
      name: 'Player 6',
      position: 'Milieu Défensif Gauche',
      globalPosition: 'Milieu',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 7,
      name: 'Player 7',
      position: 'Milieu Défensif Droit',
      globalPosition: 'Milieu',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 8,
      name: 'Player 8',
      position: 'Milieu Offensif Central',
      globalPosition: 'Milieu',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 9,
      name: 'Player 9',
      position: 'Ailier Droit',
      globalPosition: 'Attaquant',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 10,
      name: 'Player 10',
      position: 'Ailier Gauche',
      globalPosition: 'Attaquant',
      x: 0,
      y: 0,
      roles: []
    },
    {
      id: 11,
      name: 'Player 11',
      position: 'Attaquant',
      globalPosition: 'Attaquant',
      x: 0,
      y: 0,
      roles: []
    }
  ]

  const _players = useLocalStorage<Player[]>('players', players, {
    serializer: {
      write: (value) => JSON.stringify(value),
      read: (value) => {
        try {
          return JSON.parse(value) as Player[]
        } catch (e) {
          return players
        }
      }
    }
  })

  return _players
}

export function usePresetPositions() {
  const items = computed(() => presetPositions as PresetPosition[])
  const names = computed(() => presetPositions.map((position) => position.strategy))

  return {
    items,
    names
  }
}
