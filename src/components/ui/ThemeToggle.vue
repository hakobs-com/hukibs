<template>
  <button
    :class="bemm()"
    @click="$emit('toggle')"
    :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
    type="button"
  >
    <Icon :name="iconName" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
import { Icon } from './Icon'

export interface ThemeToggleProps {
  theme?: 'light' | 'dark' | 'system'
}

const props = withDefaults(defineProps<ThemeToggleProps>(), {
  theme: 'light'
})

const emit = defineEmits<{
  toggle: []
}>()

const { bemm } = useBemm('theme-toggle')

const iconName = computed(() => {
  if (props.theme === 'system') {
    return 'monitor'
  }
  return props.theme === 'dark' ? 'sun' : 'moon'
})
</script>

<style lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-accent);
  border-radius: var(--border-radius);
  background: var(--color-background);
  color: var(--color-primary-text);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--color-secondary);
    border-color: var(--color-primary-text);
  }

  &:focus {
    outline: 2px solid var(--color-focus);
    outline-offset: 2px;
  }
}
</style>