/**
 * User-scoped storage: namespaces all localStorage keys by user ID.
 * When user changes, old stores are ignored and fresh ones load.
 */

const STORAGE_PREFIX = 'moniquemusic'

/** Get the current active user ID from localStorage */
export function getActiveUserId(): string | null {
  return localStorage.getItem(`${STORAGE_PREFIX}-active-user`)
}

/** Set the active user ID */
export function setActiveUserId(userId: string | null): void {
  if (userId) {
    localStorage.setItem(`${STORAGE_PREFIX}-active-user`, userId)
  } else {
    localStorage.removeItem(`${STORAGE_PREFIX}-active-user`)
  }
}

/** Build a user-scoped storage key */
export function userStorageKey(storeName: string, userId?: string | null): string {
  const uid = userId ?? getActiveUserId()
  if (uid) {
    return `${STORAGE_PREFIX}-${storeName}-${uid}`
  }
  // Fallback for unauthenticated users
  return `${STORAGE_PREFIX}-${storeName}`
}

/**
 * Clear all anonymous (non-user-scoped) progress data.
 * This removes the old keys that weren't tied to any user.
 */
export function clearAnonymousProgress(): void {
  const keysToRemove = [
    'moniquemusic-user',
    'moniquemusic-ui',
    'moniquemusic-lessons',
    'moniquemusic-leaderboard',
    'moniquemusic-ear-training',
  ]
  for (const key of keysToRemove) {
    localStorage.removeItem(key)
  }
}
