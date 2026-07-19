export const globalPositions = ['Attaquant', 'Milieu', 'Défenseur', 'Gardien']  as const

export const playerPositions = [
  // ==========================
  // GOALKEEPER
  // ==========================
  'Gardien',

  // ==========================
  // CENTRAL DEFENDERS
  // ==========================
  'Défenseur Central',
  'Défenseur Central Gauche',
  'Défenseur Central Droit',
  'Libéro', // position basse en 3-5-2 ou 5-3-2

  // ==========================
  // FULLBACKS / WING-BACKS
  // ==========================
  'Arrière Gauche',
  'Arrière Droit',
  'Latéral Gauche',
  'Latéral Droit',
  'Piston Gauche',
  'Piston Droit',

  // ==========================
  // DEFENSIVE MIDFIELDERS
  // ==========================
  'Milieu Défensif',
  'Milieu Défensif Central',
  'Milieu Défensif Gauche',
  'Milieu Défensif Droit',
  'Milieu Récupérateur',
  'Milieu Ancre',

  // ==========================
  // CENTRAL MIDFIELDERS
  // ==========================
  'Milieu Central',
  'Milieu Central Gauche',
  'Milieu Central Droit',
  'Milieu Relayeur',
  'Milieu Box-to-Box',
  'Milieu Polyvalent',

  // ==========================
  // WIDE MIDFIELDERS
  // ==========================
  'Milieu Droit',
  'Milieu Gauche',
  'Ailier Droit',
  'Ailier Gauche',
  'Milieu Offensif Droit',
  'Milieu Offensif Gauche',

  // ==========================
  // ATTACKING MIDFIELDERS
  // ==========================
  'Milieu Offensif',
  'Milieu Offensif Central',
  'Numéro 10',
  'Meneur de Jeu',
  'Milieu Créatif',

  // ==========================
  // FORWARDS
  // ==========================
  'Attaquant',
  'Attaquant Central',
  'Attaquant Droit',
  'Attaquant Gauche',
  'Avant-Centre',
  'Avant-Centre Central',
  'Avant-Centre Droit',
  'Avant-Centre Gauche',
  'Deuxième Attaquant',
  'Second Attaquant',
  'Ailier de Piston',
  'Faux Neuf',

  // ==========================
  // MODERN HYBRID POSITIONS
  // ==========================
  'Défenseur Latéral Intérieur', // ou "Inverted Fullback"
  'Milieu Défensif Relanceur',
  'Milieu Offensif Polyvalent',
  'Ailier Polyvalent',
  'Attaquant Polyvalent',
] as const

export const playerRoles = [
  // ==========================
  // GOALKEEPERS
  // ==========================
  'Gardien Classique',
  'Gardien Libéro',
  'Gardien Relanceur',
  'Gardien Stoppeur',

  // ==========================
  // CENTRAL DEFENDERS
  // ==========================
  'Défenseur Central',
  'Défenseur Stoppeur',
  'Défenseur Libéro',
  'Défenseur Relanceur',
  'Défenseur Ball Playing',
  'Défenseur Aggressif',
  'Défenseur Couverture',
  'Défenseur Hybride',

  // ==========================
  // FULLBACKS
  // ==========================
  'Latéral Défensif',
  'Latéral Offensif',
  'Latéral Inversé',
  'Latéral Relanceur',
  'Latéral Complet',
  'Latéral de Soutien',
  'Latéral de Débordement',
  'Latéral Intérieur',
  'Latéral Créatif',
  'Piston',
  'Piston Inversé',
  'Piston Offensif',

  // ==========================
  // DEFENSIVE MIDFIELDERS
  // ==========================
  'Sentinelle',
  'Milieu Défensif',
  'Milieu Récupérateur',
  'Milieu Ancre',
  'Regista',
  'Meneur de Jeu Reculé',
  'Half-Back',
  'Volante',

  // ==========================
  // CENTRAL MIDFIELDERS
  // ==========================
  'Milieu Relayeur',
  'Milieu Box-to-Box',
  'Milieu Polyvalent',
  'Milieu Organisateur',
  'Milieu Contrôleur',
  'Milieu Créatif',
  'Milieu Vertical',
  'Milieu Dynamique',
  'Mezzala',
  'Carrilero',

  // ==========================
  // ATTACKING MIDFIELDERS
  // ==========================
  'Milieu Offensif',
  'Numéro 10',
  'Meneur de Jeu Avancé',
  'Meneur de Jeu Libre',
  'Trequartista',
  'Enganche',
  'Shadow Striker',

  // ==========================
  // WINGERS
  // ==========================
  'Ailier Offensif',
  'Ailier Défensif',
  'Ailier Inversé',
  'Ailier Classique',
  'Ailier Créatif',
  'Ailier Percuteur',
  'Ailier de Débordement',
  'Ailier Intérieur',
  'Wide Playmaker',
  'Wide Target',
  'Raumdeuter',

  // ==========================
  // FORWARDS
  // ==========================
  'Avant-Centre',
  'Attaquant Pivot',
  'Attaquant Renard',
  'Faux Neuf',
  'Attaquant de Soutien',
  'Attaquant de Pressing',
  'Attaquant de Création',
  'Attaquant Complet',
  'Poacher',
  'Deep-Lying Forward',
  'Target Man',
  'Second Attaquant',
  'Raumstürmer',
  'Neuf et Demi',

  // ==========================
  // MODERN HYBRID ROLES
  // ==========================
  'Inverted Centre-Back',
  'Libéro Moderne',
  'Central Progressif',
  'Créateur Latéral',
  'Milieu Faux Latéral',
  'Faux Ailier',
  'Faux Dix',
  'Faux Six',
  'Faux Huit',
  'Neuf Mobile',
  'Attaquant Hybride',
] as const

export const playerRolesDescriptions = {
  // ==========================
  // GOALKEEPERS
  // ==========================
  'Gardien Classique': {
    attaque: 'Lance long ou dégage en sécurité.',
    defense: 'Reste sur sa ligne, arrête les tirs et capte les centres.',
  },
  'Gardien Libéro': {
    attaque: 'Relance au sol et peut sortir pour surnombrer.',
    defense: 'Anticipe en avançant pour couper les ballons dans le dos de sa défense.',
  },
  'Gardien Relanceur': {
    attaque: 'Déclenche les transitions par des passes courtes ou longues précises.',
    defense: 'Bon placement, mais privilégie le jeu au pied plutôt que le jeu aérien.',
  },
  'Gardien Stoppeur': {
    attaque: 'Dégage loin et rapidement.',
    defense: 'Exceptionnel sur les face-à-face et les frappes puissantes, sortie agressive.',
  },

  // ==========================
  // CENTRAL DEFENDERS
  // ==========================
  'Défenseur Central': {
    attaque: 'Relance simple et courte.',
    defense: 'Placement, duels aériens et tacles propres.',
  },
  'Défenseur Stoppeur': {
    attaque: 'Peu de jeu au pied, dégagement en priorité.',
    defense: 'Dur sur l\'homme, coupe les centres, ne recule jamais.',
  },
  'Défenseur Libéro': {
    attaque: 'Peut monter balle au pied pour créer le surnombre.',
    defense: 'Couvre les espaces et anticipe les erreurs de ses coéquipiers.',
  },
  'Défenseur Relanceur': {
    attaque: 'Lance proprement depuis l\'arrière, court ou long.',
    defense: 'Solide, mais sa valeur est surtout dans la première relance.',
  },
  'Défenseur Ball Playing': {
    attaque: 'Ose la passe cassante ou le jeu long précis pour casser les lignes.',
    defense: 'Intervient intelligemment, évite la faute.',
  },
  'Défenseur Aggressif': {
    attaque: 'Provoque des fautes pour gagner du terrain.',
    defense: 'Tacleur, anticipe, pressant et intense.',
  },
  'Défenseur Couverture': {
    attaque: 'Sécurise la relance sans prendre de risque.',
    defense: 'Se place en dernier rempart, lit bien les trajectoires.',
  },
  'Défenseur Hybride': {
    attaque: 'Adapte sa sortie selon le contexte.',
    defense: 'Polyvalent, bon en duel comme en couverture.',
  },

  // ==========================
  // FULLBACKS
  // ==========================
  'Latéral Défensif': {
    attaque: 'Peu de montée, reste bas.',
    defense: 'Verrouille son couloir, ne se fait pas éliminer.',
  },
  'Latéral Offensif': {
    attaque: 'Monte fréquemment, centre ou combine.',
    defense: 'Revient vite, mais peut être pris en contre.',
  },
  'Latéral Inversé': {
    attaque: 'Rentre dans l\'axe pour créer des supériorités numériques.',
    defense: 'Reprend sa place latérale sans le ballon.',
  },
  'Latéral Relanceur': {
    attaque: 'Propre techniquement, lance les attaques depuis l\'arrière.',
    defense: 'Bon placement, peu de tacles agressifs.',
  },
  'Latéral Complet': {
    attaque: 'Apporte largeur, centres, dribbles.',
    defense: 'Solide, bon en 1v1 et en couverture.',
  },
  'Latéral de Soutien': {
    attaque: 'Monte en appui, sans prendre de risque.',
    defense: 'Reste connecté au bloc, couvre les déplacements.',
  },
  'Latéral de Débordement': {
    attaque: 'Prend le couloir et centre systématiquement.',
    defense: 'Course de retour importante.',
  },
  'Latéral Intérieur': {
    attaque: 'Se place entre les lignes côté intérieur.',
    defense: 'Compense en se repliant en couloir.',
  },
  'Latéral Créatif': {
    attaque: 'Cherche la passe clé ou le centre précis.',
    defense: 'Moins agressif, mais bien placé.',
  },
  Piston: {
    attaque: 'Toute la largeur, très haut.',
    defense: 'Redescend en couverture mais gère un couloir entier seul.',
  },
  'Piston Inversé': {
    attaque: 'Rentre dans l\'axe pour combiner.',
    defense: 'Repart large pour défendre.',
  },
  'Piston Offensif': {
    attaque: 'Très haut, centres et finitions.',
    defense: 'Travail défensif limité.',
  },

  // ==========================
  // DEFENSIVE MIDFIELDERS
  // ==========================
  Sentinelle: {
    attaque: 'Joue simple, met le ballon en sécurité.',
    defense: 'Verrouille devant la défense, casse les lignes adverses.',
  },
  'Milieu Défensif': {
    attaque: 'Relance courte, peu de prise de risque.',
    defense: 'Récupère beaucoup de ballons.',
  },
  'Milieu Récupérateur': {
    attaque: 'Joue dans la transition directe.',
    defense: 'Ratisse, intercepte, couvre les espaces.',
  },
  'Milieu Ancre': {
    attaque: 'Reste bas pour équilibrer.',
    defense: 'Coulisse entre les centraux, protège la surface.',
  },
  Regista: {
    attaque: 'Dicte le jeu depuis l\'arrière, passes longues précises.',
    defense: 'Lit les trajectoires, peu de tacles.',
  },
  'Meneur de Jeu Reculé': {
    attaque: 'Lance les attaques par le jeu long ou la diagonale.',
    defense: 'Compense par le placement.',
  },
  'Half-Back': {
    attaque: 'S\'abaisse entre les centraux pour aider la sortie.',
    defense: 'Protège l\'axe, libère les latéraux.',
  },
  Volante: {
    attaque: 'Peut s\'infiltrer dans la surface.',
    defense: 'Récupère et projette vers l\'avant.',
  },

  // ==========================
  // CENTRAL MIDFIELDERS
  // ==========================
  'Milieu Relayeur': {
    attaque: 'Fait la liaison, joue à 1 ou 2 touches.',
    defense: 'Presse et coupe les lignes de passe.',
  },
  'Milieu Box-to-Box': {
    attaque: 'Arrive dans la surface, frappe.',
    defense: 'Redescend, tacle et récupère.',
  },
  'Milieu Polyvalent': {
    attaque: 'S\'adapte au besoin du système.',
    defense: 'Mobile, couvre les espaces.',
  },
  'Milieu Organisateur': {
    attaque: 'Gère le tempo, oriente le jeu.',
    defense: 'Lit le jeu et place ses coéquipiers.',
  },
  'Milieu Contrôleur': {
    attaque: 'Garde le ballon, calme le jeu.',
    defense: 'Ne se précipite pas, gère l\'équilibre.',
  },
  'Milieu Créatif': {
    attaque: 'Passe décisive, dribble pour casser le bloc.',
    defense: 'Peu de tacles, mais bon en interception.',
  },
  'Milieu Vertical': {
    attaque: 'Va vite vers l\'avant, remonte balle au pied.',
    defense: 'Revient en sprint pour compenser.',
  },
  'Milieu Dynamique': {
    attaque: 'Accélérations et appels profonds.',
    defense: 'Intensité, second ballon.',
  },
  Mezzala: {
    attaque: 'Se décale sur le côté, combine avec l\'ailier.',
    defense: 'Reprend sa place en bloc.',
  },
  Carrilero: {
    attaque: 'Joue large pour occuper les espaces.',
    defense: 'Couvre le latéral, tient le couloir.',
  },

  // ==========================
  // ATTACKING MIDFIELDERS
  // ==========================
  'Milieu Offensif': {
    attaque: 'Proche de l\'attaquant, finit les actions.',
    defense: 'Premier rideau en pressing.',
  },
  'Numéro 10': {
    attaque: 'Crée en zone dense, dernière passe.',
    defense: 'Peu défensif, reste haut.',
  },
  'Meneur de Jeu Avancé': {
    attaque: 'Oriente le jeu vers l\'avant.',
    defense: 'Presse par séquences.',
  },
  'Meneur de Jeu Libre': {
    attaque: 'Erre partout pour trouver des espaces.',
    defense: 'Libéré des tâches défensives.',
  },
  Trequartista: {
    attaque: 'Génie technique, dribble et passes.',
    defense: 'Inactif sans ballon.',
  },
  Enganche: {
    attaque: 'Fixe les défenseurs, garde le ballon dos au but.',
    defense: 'Reste haut, pas de repli.',
  },
  'Shadow Striker': {
    attaque: 'Démarque dans la profondeur, finit.',
    defense: 'Presse le porteur.',
  },

  // ==========================
  // WINGERS
  // ==========================
  'Ailier Offensif': {
    attaque: 'Centre ou dribble vers l\'intérieur.',
    defense: 'Repli moyen.',
  },
  'Ailier Défensif': {
    attaque: 'Plutôt centre ou maintien.',
    defense: 'Couvre son latéral.',
  },
  'Ailier Inversé': {
    attaque: 'Rentre sur son pied fort pour tirer.',
    defense: 'Peu de repli.',
  },
  'Ailier Classique': {
    attaque: 'Prend la ligne, centre du pied fort.',
    defense: 'Soutient le latéral.',
  },
  'Ailier Créatif': {
    attaque: 'Cherche la passe entre les lignes.',
    defense: 'Moins de repli.',
  },
  'Ailier Percuteur': {
    attaque: 'Dribble, accélération, élimination.',
    defense: 'Rarement défensif.',
  },
  'Ailier de Débordement': {
    attaque: 'Dépasse son défenseur, centre.',
    defense: 'Repli en soutien.',
  },
  'Ailier Intérieur': {
    attaque: 'Se replace dans l\'axe.',
    defense: 'Peu présent.',
  },
  'Wide Playmaker': {
    attaque: 'Ordonne le jeu depuis le côté.',
    defense: 'Se recentre sans ballon.',
  },
  'Wide Target': {
    attaque: 'Joue dos au but, dévie les ballons.',
    defense: 'Reste haut.',
  },
  Raumdeuter: {
    attaque: 'Cherche l\'espace libre, frappe ou sert.',
    defense: 'Peu d\'efforts défensifs.',
  },

  // ==========================
  // FORWARDS
  // ==========================
  'Avant-Centre': {
    attaque: 'Finit les actions, bon appels.',
    defense: 'Met un peu de pression.',
  },
  'Attaquant Pivot': {
    attaque: 'Joue dos au but, remise.',
    defense: 'Protège le ballon même bas.',
  },
  'Attaquant Renard': {
    attaque: 'Surprend dans la surface, finition pure.',
    defense: 'Très peu.',
  },
  'Faux Neuf': {
    attaque: 'Décroche pour créer des espaces.',
    defense: 'Presse les relances.',
  },
  'Attaquant de Soutien': {
    attaque: 'Participe à la construction.',
    defense: 'Presse ou coupe les lignes.',
  },
  'Attaquant de Pressing': {
    attaque: 'Course pour gêner la sortie.',
    defense: 'Premier défenseur.',
  },
  'Attaquant de Création': {
    attaque: 'Dernière passe et dribble.',
    defense: 'Peu de repli.',
  },
  'Attaquant Complet': {
    attaque: 'Tout fait – finit, crée, pivote.',
    defense: 'Pressing régulier.',
  },
  Poacher: {
    attaque: 'Vit dans la surface, finition en 1 touche.',
    defense: 'Inactif.',
  },
  'Deep-Lying Forward': {
    attaque: 'Descend pour combiner.',
    defense: 'Presse occasionnel.',
  },
  'Target Man': {
    attaque: 'Reçoit dos au but, dévie, centre.',
    defense: 'Reste haut.',
  },
  'Second Attaquant': {
    attaque: 'Joueur complémentaire, décroche ou percute.',
    defense: 'Appuie sur le porteur.',
  },
  Raumstürmer: {
    attaque: 'Vit dans les espaces, finit les centres.',
    defense: 'Très peu.',
  },
  'Neuf et Demi': {
    attaque: 'Entre milieu offensif et avant-centre.',
    defense: 'Premier rideau.',
  },

  // ==========================
  // MODERN HYBRID ROLES
  // ==========================
  'Inverted Centre-Back': {
    attaque: 'Monte dans l\'axe pour faire le surnombre.',
    defense: 'Recule vite, couvre l\'axe.',
  },
  'Libéro Moderne': {
    attaque: 'Relance longue ou montée balle au pied.',
    defense: 'Couvre et anticipe les espaces.',
  },
  'Central Progressif': {
    attaque: 'Perce au dribble ou en passe.',
    defense: 'Agressif sur les récupérations.',
  },
  'Créateur Latéral': {
    attaque: 'Décroche pour la passe décisive.',
    defense: 'Se replace derrière.',
  },
  'Milieu Faux Latéral': {
    attaque: 'Décroche en milieu pour relancer.',
    defense: 'Reprend son couloir.',
  },
  'Faux Ailier': {
    attaque: 'Se place souvent dans l\'axe.',
    defense: 'Couvre un couloir en repli.',
  },
  'Faux Dix': {
    attaque: 'Décroche bas, brouille les pistes.',
    defense: 'Presse depuis le milieu.',
  },
  'Faux Six': {
    attaque: 'Se place entre les centraux pour construire.',
    defense: 'Protège l\'axe en repli.',
  },
  'Faux Huit': {
    attaque: 'Part de plus haut, joue entre les lignes.',
    defense: 'Descend en bloc.',
  },
  'Neuf Mobile': {
    attaque: 'Erre sur tout le front, déstabilise.',
    defense: 'Pressant constant.',
  },
  'Attaquant Hybride': {
    attaque: 'Ailier ou axial, selon le moment.',
    defense: 'S\'adapte au système.',
  },
} as const

export type GlobalPosition = (typeof globalPositions)[number]

export type PlayerPosition = (typeof playerPositions)[number]

// export type PlayerRole = (typeof playerRoles)[number]
export type PlayerRole = keyof typeof playerRolesDescriptions

export type PlayerRoleDescription = {
  attaque: string
  defense: string
}

export type Player = {
  id: number
  name: string
  position: PlayerPosition
  globalPosition: GlobalPosition
  x: number
  y: number
  roles: PlayerRole[]
}  

export type Formation = {
  name: string
  altNames: string[]
  description: string[]
  formations: Player[]
  onPossession: Player[]
  onDefense: Player[]
  example: string[]
  isDefault: boolean
}

export type PresetPosition = {
  strategy: string | null
  description: string | string[]
  formations: Formation[]
}

export type FootballPlayerStatistic = {
  competition: string
  appearances: number
  goals: number
  assists: number
  ownGoals: number
  substitutionOn: number
  substitutionOff: number
  yellowCards: number
  redCards: number
  penaltyGoals: number
  minutesPerGoal: number
  minutesPlayed: number
}

export type FootballPlayer = {
  fullName: string
  statistics: FootballPlayerStatistic[]
}

export type FootballPlayerStatisticKeys = keyof Pick<FootballPlayerStatistic, 'assists' | 'goals' | 'ownGoals' | 'substitutionOn' | 'substitutionOff' | 'yellowCards' | 'redCards' | 'penaltyGoals' | 'minutesPerGoal' | 'minutesPlayed'>
