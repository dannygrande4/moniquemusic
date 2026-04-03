import type { NoteEvent } from '@melodypath/shared-types'
import {
  generateOdeToJoy,
  generateSmokeOnTheWater,
  generateDemoSong,
  generateSevenNationArmy,
  generateTwinkle,
  generateHappyBirthday,
  generateLaBamba,
  generateMaryLamb,
  generateWhenTheSaints,
  generateFurElise,
} from './midiParser'

export interface SongData {
  id: string
  title: string
  artist: string
  bpm: number
  key: string
  difficulty: 1 | 2 | 3 | 4 | 5
  genre: string
  concepts: string[]
  getNotes: () => { notes: NoteEvent[]; duration: number }
}

export const SONG_LIBRARY: SongData[] = [
  {
    id: 'twinkle',
    title: 'Twinkle Twinkle Little Star',
    artist: 'Traditional',
    bpm: 90,
    key: 'C',
    difficulty: 1,
    genre: 'Children',
    concepts: ['melody', 'simple rhythm', 'repetition'],
    getNotes: () => generateTwinkle(90),
  },
  {
    id: 'ode-to-joy',
    title: 'Ode to Joy',
    artist: 'Beethoven',
    bpm: 100,
    key: 'C',
    difficulty: 1,
    genre: 'Classical',
    concepts: ['melody', 'stepwise motion', 'quarter notes'],
    getNotes: () => generateOdeToJoy(100),
  },
  {
    id: 'happy-birthday',
    title: 'Happy Birthday',
    artist: 'Traditional',
    bpm: 100,
    key: 'C',
    difficulty: 1,
    genre: 'Traditional',
    concepts: ['melody', '3/4 feel', 'pickup notes'],
    getNotes: () => generateHappyBirthday(100),
  },
  {
    id: 'demo-pattern',
    title: 'Practice Patterns',
    artist: 'MelodyPath',
    bpm: 120,
    key: 'C',
    difficulty: 1,
    genre: 'Practice',
    concepts: ['rhythm', 'coordination', 'timing'],
    getNotes: () => generateDemoSong(120),
  },
  {
    id: 'seven-nation-army',
    title: 'Seven Nation Army',
    artist: 'The White Stripes',
    bpm: 120,
    key: 'Em',
    difficulty: 2,
    genre: 'Rock',
    concepts: ['riff', 'bass line', 'syncopation'],
    getNotes: () => generateSevenNationArmy(120),
  },
  {
    id: 'smoke-on-the-water',
    title: 'Smoke on the Water',
    artist: 'Deep Purple',
    bpm: 112,
    key: 'Gm',
    difficulty: 2,
    genre: 'Rock',
    concepts: ['riff', 'power chords', 'syncopation'],
    getNotes: () => generateSmokeOnTheWater(112),
  },
  {
    id: 'la-bamba',
    title: 'La Bamba',
    artist: 'Ritchie Valens',
    bpm: 130,
    key: 'C',
    difficulty: 3,
    genre: 'Latin Rock',
    concepts: ['I-IV-V', 'fast strumming', 'chord changes'],
    getNotes: () => generateLaBamba(130),
  },
  {
    id: 'mary-lamb',
    title: 'Mary Had a Little Lamb',
    artist: 'Traditional',
    bpm: 100,
    key: 'C',
    difficulty: 1,
    genre: 'Children',
    concepts: ['melody', 'repetition', 'simple rhythm'],
    getNotes: () => generateMaryLamb(100),
  },
  {
    id: 'when-the-saints',
    title: 'When The Saints Go Marching In',
    artist: 'Traditional',
    bpm: 110,
    key: 'C',
    difficulty: 2,
    genre: 'Jazz/Spiritual',
    concepts: ['melody', 'major key', 'syncopation'],
    getNotes: () => generateWhenTheSaints(110),
  },
  {
    id: 'fur-elise',
    title: 'Für Elise',
    artist: 'Beethoven',
    bpm: 85,
    key: 'Am',
    difficulty: 3,
    genre: 'Classical',
    concepts: ['classical', 'chromatic', 'eighth notes'],
    getNotes: () => generateFurElise(85),
  },
]

export function getSongById(id: string): SongData | undefined {
  return SONG_LIBRARY.find((s) => s.id === id)
}
