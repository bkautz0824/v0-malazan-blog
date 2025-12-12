export interface Character {
  id: string
  name: string
  race: string
  rank?: string
  status: "alive" | "dead" | "ascended" | "unknown" | "undead"
  deathBook?: string
  deathLocation?: string
  affiliations: string[]
  primaryGroup?: string
  books: string[]
  description: string
  notable?: string
  image?: string
}

export interface Group {
  id: string
  name: string
  description: string
  color: string
  books: string[]
  timeline?: TimelineEvent[]
}

export interface TimelineEvent {
  book: string
  chapter?: number
  event: string
  location?: string
}

export interface MapData {
  id: string
  name: string
  book: string
  bounds: [[number, number], [number, number]]
  imageUrl: string
  locations?: MapLocation[]
  journeys?: Journey[]
}

export interface MapLocation {
  name: string
  coordinates: [number, number]
  description?: string
  type: "city" | "fortress" | "landmark" | "battlefield"
}

export type Location = MapLocation

export interface Journey {
  group: string
  path: [number, number][]
  color: string
  description?: string
  summary?: string
}

export const BOOK_CODES = {
  GOTM: "Gardens of the Moon",
  DG: "Deadhouse Gates",
  MOI: "Memories of Ice",
  HOC: "House of Chains",
  MT: "Midnight Tides",
  BH: "The Bonehunters",
} as const

export type BookCode = keyof typeof BOOK_CODES
