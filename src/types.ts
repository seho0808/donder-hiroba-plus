import { type BADGES, type CROWNS, type DIFFICULTIES } from './constants'

export interface DonderInfo {
  id?: string
  name?: string
  title?: string
}

export type DifficultyType = typeof DIFFICULTIES[number]
export type CrownType = typeof CROWNS[number]
export type BadgeType = typeof BADGES[number]

export interface SearchOptions {
  text: string
  crown: Record<CrownType, boolean>
  badge: Record<BadgeType, boolean>
  minLevel: number
  maxLevel: number
}

export interface SortOptions {
  key: string
  inc: boolean
}

export interface SongScoreDetail {
  crown: CrownType
  badge: BadgeType
}

export interface SongScore {
  title: string
  songNo: string
  details: Partial<Record<DifficultyType, SongScoreDetail>>
}

export interface SongData {
  title: string
  title_kr_official: string
  title_kr_user: string
  bpmMin: number
  bpmMax: number
  levels: Partial<Record<DifficultyType, number>>
  asia: boolean
  length: number
  balloonCounts: Partial<Record<DifficultyType, number>>
  drumrollLengths: Partial<Record<DifficultyType, number>>
  composer: string
  artist: string
  noteCounts: Partial<Record<DifficultyType, number>>
}

export interface DonforceItem {
  songNo: string
  title: string // to index SongData, maybe removed in the future
  difficulty: DifficultyType
  donforce: number
}

export type Language = 'ja' | 'en' | 'ko'

export interface Storage {
  songsByNo: Record<string, SongScore>
}

export interface Playlist {
  title: string
  songNoList: number[]
}

export interface ExtensionSetting {
  lastTabIndex?: number
  language?: Language
}

export interface StorageData {
  donderInfo: DonderInfo
  scoresByNo: Record<string, SongScore>
  playlists: Playlist[]
  settings: ExtensionSetting
}
