export type Player = {
  id: number
  name: string
  position: Positions
  globalPosition: GlobalPositions
  x: number
  y: number
  roles: Roles[]
}

export type GlobalPositions = 'Attaquant' | 'Milieu' | 'Défenseur' | 'Gardien'

export type Positions = 'Attaquant' | 'Avant-Centre Gauche' | 'Avant-Centre Droit' | 'Ailier Droit' | 'Ailier Gauche' | 'Milieu Central Droit' | 'Milieu Central Gauche' | 'Milieu Défensif Droit' | 'Milieu Défensif Gauche' | 'Milieu Défensif Central' | 'Milieu Offensif Central' | 'Milieu Droit' | 'Milieu Gauche' | 'Défenseur Central' | 'Défenseur Central Droit' | 'Défenseur Central Gauche' | 'Arrière Droit' | 'Arrière Gauche' | 'Latéral Droit' | 'Latéral Gauche' | 'Gardien'

export type Roles = 'Latéral Inversé' | 'Latéral Offensif' | 'Latéral Défensif' | 'Milieu Box-to-Box' | 'Milieu Défensif' | 'Milieu Offensif' | 'Ailier Inversé' | 'Ailier Offensif' | 'Ailier Défensif' | 'Attaquant Pivot' | 'Attaquant Renard' | 'Avant-Centre' | 'Faux Neuf' | 'Attaquant de Pressing' | 'Attaquant de Soutien' | 'Attaquant de Création' | 'Gardien Libéro'

export type PresetPosition = {
  name: string
  positions: Player[]
}
