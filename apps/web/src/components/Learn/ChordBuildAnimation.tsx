import { useState, useEffect, useCallback } from 'react'
import { useAudioInit } from '@/hooks/useAudioInit'
import { useAudioStore } from '@/stores/audioStore'

interface ChordBuildAnimationProps {
  /** Notes to build one at a time, e.g. ["C4", "E4", "G4"] */
  notes: string[]
  /** Labels for each note role */
  labels: string[]
  /** Chord name displayed */
  chordName: string
}

/**
 * Visual animation that builds a chord note-by-note.
 * Shows each note appearing with its role label, then plays the full chord.
 */
export default function ChordBuildAnimation({ notes, labels, chordName }: ChordBuildAnimationProps) {
  const { ensureAudio } = useAudioInit()
  const engine = useAudioStore((s) => s.engine)
  const [visibleCount, setVisibleCount] = useState(0)
  const [playing, setPlaying] = useState(false)

  const COLORS = ['#4f6ef7', '#22c55e', '#f59e0b', '#a855f7', '#64748b']

  const build = useCallback(async () => {
    await ensureAudio()
    setVisibleCount(0)
    setPlaying(true)

    for (let i = 0; i < notes.length; i++) {
      await new Promise((r) => setTimeout(r, 600))
      engine.playNote(notes[i], '4n')
      setVisibleCount(i + 1)
    }

    // Play full chord after a pause
    await new Promise((r) => setTimeout(r, 800))
    engine.playChord(notes, '2n')
    setPlaying(false)
  }, [ensureAudio, engine, notes])

  return (
    <div className="bg-surface-50 rounded-xl p-6 text-center space-y-4">
      <div className="text-sm text-surface-500">Building a <strong>{chordName}</strong> chord</div>

      {/* Visual note stack */}
      <div className="flex items-end justify-center gap-3 h-40">
        {notes.map((note, i) => {
          const visible = i < visibleCount
          const height = 40 + i * 25
          return (
            <div
              key={note}
              className="flex flex-col items-center gap-1 transition-all duration-500"
              style={{ opacity: visible ? 1 : 0.15, transform: visible ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <div
                className="rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-500"
                style={{
                  width: 56,
                  height,
                  backgroundColor: COLORS[i % COLORS.length],
                  transform: visible ? 'scale(1)' : 'scale(0.8)',
                }}
              >
                {note.replace(/\d/, '')}
              </div>
              <div className="text-xs font-medium text-surface-500">{labels[i] ?? ''}</div>
            </div>
          )
        })}
      </div>

      <button
        onClick={build}
        disabled={playing}
        className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-colors"
      >
        {playing ? 'Building...' : visibleCount > 0 ? 'Build Again' : 'Build Chord'}
      </button>
    </div>
  )
}
