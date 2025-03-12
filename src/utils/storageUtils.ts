export const loadState = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    console.error("Failed to load state:", e)
    return undefined
  }
}

export const saveState = (key: string, state: unknown): void => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
  } catch (e) {
    console.error("Failed to save state:", e)
  }
}

export const removeState = (key: string): void => {
  try {
    localStorage.removeItem(key)
  } catch (e) {
    console.error("Failed to remove state:", e)
  }
}
