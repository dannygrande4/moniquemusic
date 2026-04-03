import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AgeMode } from '@melodypath/shared-types'

export type ThemeMode = 'light' | 'dark' | 'system'

interface UIState {
  ageMode: AgeMode
  theme: ThemeMode
  highContrast: boolean
  reducedMotion: boolean
  sidebarOpen: boolean

  setAgeMode: (mode: AgeMode) => void
  setTheme: (theme: ThemeMode) => void
  setHighContrast: (on: boolean) => void
  setReducedMotion: (on: boolean) => void
  toggleSidebar: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      ageMode: 'adult',
      theme: 'system',
      highContrast: false,
      reducedMotion: false,
      sidebarOpen: true,

      setAgeMode: (ageMode) => set({ ageMode }),
      setTheme: (theme) => set({ theme }),
      setHighContrast: (highContrast) => set({ highContrast }),
      setReducedMotion: (reducedMotion) => set({ reducedMotion }),
      toggleSidebar: () => set((s) => ({ sidebarOpen: !s.sidebarOpen })),
    }),
    {
      name: 'melodypath-ui',
      partialize: (state) => ({
        ageMode: state.ageMode,
        theme: state.theme,
        highContrast: state.highContrast,
        reducedMotion: state.reducedMotion,
      }),
    }
  )
)
