/**
 * Simple composable to generate unique IDs for components
 * This mimics Vue 3.5's built-in useId function
 */
let idCounter = 0;

export function useId(prefix = 'id'): string {
  idCounter++;
  return `${prefix}-${idCounter}`;
}

export default useId;