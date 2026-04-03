import type { SkillLevel } from '@melodypath/shared-types'

export type StepType = 'text' | 'exercise' | 'quiz'

export interface TextStep {
  type: 'text'
  title: string
  content: string  // markdown-ish (we'll render with basic formatting)
}

export interface ExerciseStep {
  type: 'exercise'
  instruction: string
  expectedNotes: string[]  // notes to play
}

export interface QuizStep {
  type: 'quiz'
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export type LessonStep = TextStep | ExerciseStep | QuizStep

export interface LessonDef {
  id: string
  title: string
  module: string
  level: SkillLevel
  concepts: string[]
  xpReward: number
  order: number
  prerequisites: string[]
  steps: LessonStep[]
}

// ─── Beginner Lessons ────────────────────────────────────────────────────────

export const LESSONS: LessonDef[] = [
  {
    id: 'notes-basics',
    title: 'The Musical Alphabet',
    module: 'Foundations',
    level: 'BEGINNER',
    concepts: ['notes', 'musical alphabet'],
    xpReward: 20,
    order: 1,
    prerequisites: [],
    steps: [
      {
        type: 'text',
        title: 'Welcome to Music!',
        content: `Music is built on just 12 notes. The main seven are named after letters:\n\n**A  B  C  D  E  F  G**\n\nAfter G, it starts over at A again. This repeating pattern is called an **octave**.\n\nThe other 5 notes are the sharps/flats — they sit between certain letter notes (like the black keys on a piano).`,
      },
      {
        type: 'quiz',
        question: 'How many letter-named notes are there in music?',
        options: ['5', '7', '12', '26'],
        correctIndex: 1,
        explanation: 'There are 7 letter-named notes: A through G. The remaining 5 are sharps/flats.',
      },
      {
        type: 'text',
        title: 'Sharps and Flats',
        content: `Between most letter notes, there's an extra note:\n\nC → **C#** → D → **D#** → E → F → **F#** → G → **G#** → A → **A#** → B → C\n\nNotice: there's **no sharp between E-F** and **no sharp between B-C**. These pairs are only a half-step apart.\n\nA sharp (#) raises a note by one half-step. A flat (b) lowers it by one half-step. C# and Db are the same sound!`,
      },
      {
        type: 'quiz',
        question: 'Which pair of notes does NOT have a sharp/flat between them?',
        options: ['C and D', 'E and F', 'G and A', 'A and B'],
        correctIndex: 1,
        explanation: 'E and F are naturally a half-step apart — there\'s no note between them. Same for B and C.',
      },
      {
        type: 'exercise',
        instruction: 'Play these notes on the piano: C4, D4, E4, F4, G4',
        expectedNotes: ['C4', 'D4', 'E4', 'F4', 'G4'],
      },
    ],
  },
  {
    id: 'major-scale',
    title: 'The Major Scale',
    module: 'Foundations',
    level: 'BEGINNER',
    concepts: ['major scale', 'whole steps', 'half steps'],
    xpReward: 25,
    order: 2,
    prerequisites: ['notes-basics'],
    steps: [
      {
        type: 'text',
        title: 'What is a Scale?',
        content: `A **scale** is a set of notes played in order. The most important one is the **major scale** — it's the foundation of almost all Western music.\n\nThe major scale follows a specific pattern of **whole steps (W)** and **half steps (H)**:\n\n**W  W  H  W  W  W  H**\n\nA whole step = 2 frets on guitar, or skipping one key on piano.\nA half step = 1 fret, or the very next key.`,
      },
      {
        type: 'text',
        title: 'C Major Scale',
        content: `The easiest major scale is **C major** — it uses only white keys on the piano:\n\n**C → D → E → F → G → A → B → C**\n\nLet's verify the pattern:\n- C to D = Whole step ✓\n- D to E = Whole step ✓\n- E to F = Half step ✓\n- F to G = Whole step ✓\n- G to A = Whole step ✓\n- A to B = Whole step ✓\n- B to C = Half step ✓\n\nThat's W-W-H-W-W-W-H. It works!`,
      },
      {
        type: 'quiz',
        question: 'What is the pattern of a major scale?',
        options: ['W-W-W-H-W-W-H', 'W-W-H-W-W-W-H', 'H-W-W-W-H-W-W', 'W-H-W-W-W-H-W'],
        correctIndex: 1,
        explanation: 'The major scale pattern is: Whole, Whole, Half, Whole, Whole, Whole, Half.',
      },
      {
        type: 'exercise',
        instruction: 'Play the C major scale: C4, D4, E4, F4, G4, A4, B4, C5',
        expectedNotes: ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'],
      },
    ],
  },
  {
    id: 'first-chord',
    title: 'Your First Chord',
    module: 'Chords',
    level: 'BEGINNER',
    concepts: ['chords', 'triads', 'C major chord'],
    xpReward: 30,
    order: 3,
    prerequisites: ['major-scale'],
    steps: [
      {
        type: 'text',
        title: 'What is a Chord?',
        content: `A **chord** is three or more notes played at the same time. The most basic chord is a **triad** — built from 3 notes.\n\nTo build a major triad, take the **1st, 3rd, and 5th** notes of the major scale.\n\nFor C major: C (1st) + E (3rd) + G (5th) = **C major chord**\n\nThat's it! Those three notes together create a bright, happy sound.`,
      },
      {
        type: 'quiz',
        question: 'A major triad uses which scale degrees?',
        options: ['1st, 2nd, 3rd', '1st, 3rd, 5th', '1st, 4th, 5th', '1st, 3rd, 7th'],
        correctIndex: 1,
        explanation: 'A major triad is built from the 1st (root), 3rd, and 5th degrees of the major scale.',
      },
      {
        type: 'text',
        title: 'Major vs Minor',
        content: `If you **lower the 3rd by one half-step**, you get a **minor chord**.\n\n- C major = C, E, G (bright, happy)\n- C minor = C, **Eb**, G (dark, sad)\n\nThe only difference is that one note — the 3rd! This tiny change completely transforms the mood.`,
      },
      {
        type: 'quiz',
        question: 'What makes a chord minor instead of major?',
        options: ['Remove the 5th', 'Lower the 3rd by a half step', 'Add a 7th note', 'Raise the root'],
        correctIndex: 1,
        explanation: 'A minor chord has a lowered (flat) 3rd compared to major. That\'s the only difference!',
      },
      {
        type: 'exercise',
        instruction: 'Play a C major chord: press C4, E4, and G4 together',
        expectedNotes: ['C4', 'E4', 'G4'],
      },
    ],
  },
  {
    id: 'chord-progressions-intro',
    title: 'Chord Progressions',
    module: 'Chords',
    level: 'BEGINNER',
    concepts: ['chord progressions', 'I-IV-V', 'roman numerals'],
    xpReward: 30,
    order: 4,
    prerequisites: ['first-chord'],
    steps: [
      {
        type: 'text',
        title: 'What is a Chord Progression?',
        content: `A **chord progression** is a sequence of chords played in order. It's the harmonic backbone of a song.\n\nWe label chords with **Roman numerals** based on their position in the scale:\n\n- I = chord built on the 1st note (C in C major)\n- IV = chord built on the 4th note (F in C major)\n- V = chord built on the 5th note (G in C major)\n\nUppercase = major, lowercase = minor.`,
      },
      {
        type: 'text',
        title: 'The I-IV-V Progression',
        content: `The **I-IV-V** progression is the most common in all of music. In the key of C:\n\n**C → F → G → C**\n\nThis progression is used in thousands of songs across rock, pop, blues, country, and folk. It sounds natural because the V chord creates tension that wants to resolve back to I.`,
      },
      {
        type: 'quiz',
        question: 'In the key of C major, what chord is the V (five)?',
        options: ['C', 'D', 'F', 'G'],
        correctIndex: 3,
        explanation: 'G is the 5th note of the C major scale, so the V chord is G major.',
      },
      {
        type: 'quiz',
        question: 'The I-V-vi-IV progression (C-G-Am-F) is used in many pop songs. Which chord is minor?',
        options: ['I (C)', 'V (G)', 'vi (Am)', 'IV (F)'],
        correctIndex: 2,
        explanation: 'Lowercase Roman numerals indicate minor chords. The "vi" chord is A minor (Am).',
      },
    ],
  },
  {
    id: 'rhythm-basics',
    title: 'Rhythm & Time',
    module: 'Rhythm',
    level: 'BEGINNER',
    concepts: ['rhythm', 'time signature', 'BPM', 'note values'],
    xpReward: 25,
    order: 5,
    prerequisites: ['notes-basics'],
    steps: [
      {
        type: 'text',
        title: 'The Beat',
        content: `Music happens in **time**. The basic unit is the **beat** — a steady pulse you can tap your foot to.\n\n**BPM** (Beats Per Minute) tells you how fast the beats go:\n- 60 BPM = one beat per second (slow ballad)\n- 120 BPM = two beats per second (typical pop/rock)\n- 180 BPM = three beats per second (fast punk)`,
      },
      {
        type: 'text',
        title: 'Note Values',
        content: `Notes have different **durations** — how long they ring out:\n\n- **Whole note** = 4 beats\n- **Half note** = 2 beats\n- **Quarter note** = 1 beat (the most common)\n- **Eighth note** = 1/2 beat\n- **Sixteenth note** = 1/4 beat\n\nEach step cuts the duration in half. A rest is silence for the same duration.`,
      },
      {
        type: 'quiz',
        question: 'How many beats does a half note last?',
        options: ['1 beat', '2 beats', '4 beats', '1/2 beat'],
        correctIndex: 1,
        explanation: 'A half note lasts 2 beats — half of a whole note (4 beats).',
      },
      {
        type: 'text',
        title: 'Time Signatures',
        content: `A **time signature** tells you how many beats are in each **measure** (bar).\n\nThe most common is **4/4 time**:\n- Top number (4) = 4 beats per measure\n- Bottom number (4) = a quarter note gets one beat\n\n**3/4 time** (waltz) has 3 beats per measure. **6/8 time** has a different feel entirely.`,
      },
      {
        type: 'quiz',
        question: 'In 4/4 time, how many beats are in each measure?',
        options: ['2', '3', '4', '8'],
        correctIndex: 2,
        explanation: '4/4 time has 4 beats per measure. The top number always tells you the count.',
      },
    ],
  },

  // ─── Intermediate Lessons ──────────────────────────────────────────────────

  {
    id: 'seventh-chords',
    title: '7th Chords',
    module: 'Intermediate Harmony',
    level: 'INTERMEDIATE',
    concepts: ['7th chords', 'maj7', 'dom7', 'min7'],
    xpReward: 35,
    order: 6,
    prerequisites: ['chord-progressions-intro'],
    steps: [
      {
        type: 'text',
        title: 'Beyond Triads',
        content: `Triads use 3 notes (1st, 3rd, 5th). **7th chords** add a 4th note — the **7th degree** of the scale.\n\nThis extra note adds richness, color, and tension. There are several types:\n\n- **Major 7th (maj7):** Major triad + major 7th → dreamy, jazzy\n- **Dominant 7th (7):** Major triad + minor 7th → bluesy, wants to resolve\n- **Minor 7th (m7):** Minor triad + minor 7th → smooth, mellow\n- **Half-diminished (m7b5):** Diminished triad + minor 7th → dark, unresolved`,
      },
      {
        type: 'quiz',
        question: 'What note do you add to a triad to make a 7th chord?',
        options: ['The 2nd', 'The 4th', 'The 6th', 'The 7th'],
        correctIndex: 3,
        explanation: '7th chords add the 7th scale degree on top of a triad (1-3-5-7).',
      },
      {
        type: 'text',
        title: 'Cmaj7 vs C7',
        content: `These look similar but sound very different!\n\n**Cmaj7** = C, E, G, **B** (major 7th)\nSmooth, stable, sophisticated — used in jazz and R&B.\n\n**C7** = C, E, G, **Bb** (minor/flat 7th)\nBluesy, tense, wants to move to F — used in blues, rock, and jazz.\n\nThe difference is just one half-step (B vs Bb), but it completely changes the feeling.`,
      },
      {
        type: 'quiz',
        question: 'A dominant 7th chord (like C7) uses which type of 7th?',
        options: ['Major 7th (B)', 'Minor/flat 7th (Bb)', 'Augmented 7th', 'Diminished 7th'],
        correctIndex: 1,
        explanation: 'A dominant 7th chord uses a minor (flat) 7th. That\'s what gives it the bluesy, unresolved tension.',
      },
      {
        type: 'exercise',
        instruction: 'Play a Cmaj7 chord: C4, E4, G4, B4',
        expectedNotes: ['C4', 'E4', 'G4', 'B4'],
      },
    ],
  },
  {
    id: 'chord-inversions',
    title: 'Chord Inversions',
    module: 'Intermediate Harmony',
    level: 'INTERMEDIATE',
    concepts: ['inversions', 'root position', 'voice leading'],
    xpReward: 35,
    order: 7,
    prerequisites: ['seventh-chords'],
    steps: [
      {
        type: 'text',
        title: 'Same Notes, Different Order',
        content: `A **chord inversion** is the same chord with a different note on the bottom.\n\nC major = C, E, G. All three of these are C major:\n\n- **Root position:** C-E-G (C on bottom)\n- **1st inversion:** E-G-C (E on bottom)\n- **2nd inversion:** G-C-E (G on bottom)\n\nThey're all "C major" but each one has a different feel and smoothness when moving between chords.`,
      },
      {
        type: 'quiz',
        question: 'In first inversion of C major, which note is on the bottom?',
        options: ['C', 'E', 'G', 'B'],
        correctIndex: 1,
        explanation: '1st inversion puts the 3rd (E) on the bottom. Root position has the root (C), 2nd inversion has the 5th (G).',
      },
      {
        type: 'text',
        title: 'Why Use Inversions?',
        content: `Inversions are key to **voice leading** — making chord changes sound smooth instead of jumpy.\n\nInstead of leaping to a new chord position, inversions let you keep common notes and move the others by small steps.\n\nExample progression C → F → G:\n- Without inversions: big jumps between positions\n- With inversions: C (root) → F (2nd inv, C stays) → G (1st inv, B moves to C)\n\nSmooth voice leading is what makes piano playing and arranging sound professional.`,
      },
      {
        type: 'quiz',
        question: 'Voice leading means:',
        options: [
          'Playing as loud as possible',
          'Moving smoothly between chords with minimal note movement',
          'Singing while playing',
          'Playing only root position chords'
        ],
        correctIndex: 1,
        explanation: 'Voice leading is about smooth, minimal movement between chords. Inversions make this possible.',
      },
    ],
  },
  {
    id: 'intro-to-modes',
    title: 'Introduction to Modes',
    module: 'Intermediate Scales',
    level: 'INTERMEDIATE',
    concepts: ['modes', 'dorian', 'mixolydian'],
    xpReward: 40,
    order: 8,
    prerequisites: ['major-scale', 'chord-progressions-intro'],
    steps: [
      {
        type: 'text',
        title: 'What Are Modes?',
        content: `**Modes** are scales built by starting on different notes of the major scale.\n\nTake C major: C D E F G A B. Now play the same notes, but start on D:\n\n**D E F G A B C D** — this is **D Dorian**.\n\nSame notes as C major, but it sounds completely different because D is now "home."\n\nEach starting note creates a different mode with a unique mood.`,
      },
      {
        type: 'text',
        title: 'The 7 Modes',
        content: `Starting from each degree of the major scale:\n\n1. **Ionian** (1st) — The regular major scale. Bright, happy.\n2. **Dorian** (2nd) — Minor with a brighter 6th. Jazzy, groovy.\n3. **Phrygian** (3rd) — Exotic, Spanish. Dark with a flat 2nd.\n4. **Lydian** (4th) — Dreamy, floating. Major with a raised 4th.\n5. **Mixolydian** (5th) — Bluesy major. Like major but with a flat 7th.\n6. **Aeolian** (6th) — Natural minor. Sad, dark.\n7. **Locrian** (7th) — Unstable, tense. Rarely used in songs.`,
      },
      {
        type: 'quiz',
        question: 'D Dorian uses the same notes as which major scale?',
        options: ['D major', 'C major', 'G major', 'F major'],
        correctIndex: 1,
        explanation: 'D Dorian starts on the 2nd degree of C major, so it uses the same notes: all naturals (no sharps or flats).',
      },
      {
        type: 'quiz',
        question: 'Which mode sounds "Spanish" or exotic?',
        options: ['Dorian', 'Phrygian', 'Lydian', 'Mixolydian'],
        correctIndex: 1,
        explanation: 'Phrygian has a flat 2nd which gives it that distinctive Spanish/exotic flavor.',
      },
      {
        type: 'exercise',
        instruction: 'Play D Dorian: D4, E4, F4, G4, A4, B4, C5, D5',
        expectedNotes: ['D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5'],
      },
    ],
  },
  {
    id: 'ii-v-i',
    title: 'The ii-V-I Progression',
    module: 'Intermediate Harmony',
    level: 'INTERMEDIATE',
    concepts: ['ii-V-I', 'jazz harmony', 'tension and resolution'],
    xpReward: 40,
    order: 9,
    prerequisites: ['seventh-chords'],
    steps: [
      {
        type: 'text',
        title: 'The Most Important Jazz Progression',
        content: `The **ii-V-I** (two-five-one) is the backbone of jazz and shows up in pop, R&B, and film music.\n\nIn C major:\n- **ii** = Dm7 (D minor 7th)\n- **V** = G7 (G dominant 7th)\n- **I** = Cmaj7 (C major 7th)\n\nIt creates a beautiful arc: **preparation → tension → resolution**.\n\nThe ii chord sets things up, the V chord creates tension (it really wants to go somewhere), and the I chord brings it home.`,
      },
      {
        type: 'quiz',
        question: 'In the key of C, what is the ii chord?',
        options: ['C', 'Dm', 'Em', 'F'],
        correctIndex: 1,
        explanation: 'The ii chord is built on the 2nd degree of the scale. In C major, that\'s D, and it\'s naturally minor.',
      },
      {
        type: 'text',
        title: 'Why ii-V-I Works',
        content: `Each chord moves to the next by the strongest motion in music: **root movement by a 4th/5th**.\n\n- D → G (up a 4th)\n- G → C (up a 4th)\n\nThis "cycle of 4ths" motion is the most satisfying harmonic movement to our ears.\n\nOnce you can hear ii-V-I, you'll start recognizing it everywhere — "Autumn Leaves," "Fly Me to the Moon," even pop songs use it.`,
      },
      {
        type: 'quiz',
        question: 'What type of chord is the V in a ii-V-I?',
        options: ['Major 7th', 'Minor 7th', 'Dominant 7th', 'Diminished'],
        correctIndex: 2,
        explanation: 'The V chord is a dominant 7th — that flat 7th creates the tension that demands resolution to the I chord.',
      },
    ],
  },
  {
    id: 'minor-scales',
    title: 'The Three Minor Scales',
    module: 'Intermediate Scales',
    level: 'INTERMEDIATE',
    concepts: ['natural minor', 'harmonic minor', 'melodic minor'],
    xpReward: 35,
    order: 10,
    prerequisites: ['major-scale', 'intro-to-modes'],
    steps: [
      {
        type: 'text',
        title: 'Natural Minor',
        content: `The **natural minor** scale is the 6th mode (Aeolian) of the major scale.\n\nA natural minor: **A B C D E F G A**\n\nPattern: **W H W W H W W**\n\nIt's the sad, dark-sounding scale used in countless rock and pop songs. It uses the exact same notes as C major, just starting on A.`,
      },
      {
        type: 'text',
        title: 'Harmonic Minor',
        content: `The **harmonic minor** raises the 7th note by a half step.\n\nA harmonic minor: A B C D E F **G#** A\n\nThis creates a **leading tone** (G# → A) that strongly pulls back to the root. It also creates an exotic gap between the 6th and 7th (F to G# = 1.5 steps).\n\nThis is the scale that sounds "classical" or "Middle Eastern."`,
      },
      {
        type: 'quiz',
        question: 'What makes harmonic minor different from natural minor?',
        options: ['Raised 3rd', 'Lowered 5th', 'Raised 7th', 'Raised 6th'],
        correctIndex: 2,
        explanation: 'Harmonic minor raises the 7th degree by a half step to create a leading tone.',
      },
      {
        type: 'text',
        title: 'Melodic Minor',
        content: `**Melodic minor** raises both the 6th AND 7th going up, then reverts to natural minor coming down.\n\nA melodic minor ascending: A B C D E **F# G#** A\nA melodic minor descending: A G F E D C B A (= natural minor)\n\nThis smooths out the awkward 1.5-step gap in harmonic minor while keeping the strong leading tone. Classical composers love it.`,
      },
      {
        type: 'quiz',
        question: 'Which minor scale raises both the 6th and 7th when ascending?',
        options: ['Natural minor', 'Harmonic minor', 'Melodic minor', 'Pentatonic minor'],
        correctIndex: 2,
        explanation: 'Melodic minor raises both the 6th and 7th ascending, then uses natural minor descending.',
      },
      {
        type: 'exercise',
        instruction: 'Play A natural minor: A3, B3, C4, D4, E4, F4, G4, A4',
        expectedNotes: ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4'],
      },
    ],
  },
]

export function getLessonById(id: string): LessonDef | undefined {
  return LESSONS.find((l) => l.id === id)
}

export function getLessonsByLevel(level: SkillLevel): LessonDef[] {
  return LESSONS.filter((l) => l.level === level).sort((a, b) => a.order - b.order)
}

export function isLessonUnlocked(id: string, completedIds: Set<string>): boolean {
  const lesson = getLessonById(id)
  if (!lesson) return false
  return lesson.prerequisites.every((prereq) => completedIds.has(prereq))
}
