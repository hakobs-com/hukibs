<template>
  <button
    :class="blockClasses"
    :aria-selected="isActive"
    :aria-controls="`panel-${props.id}`"
    :disabled="props.disabled"
    @click="handleClick"
    type="button"
    role="tab"
  >
    <Icon v-if="props.icon" :name="props.icon" :class="bemm('icon')" />
    <span :class="bemm('label')">{{ props.label }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useBemm } from 'bemm'
import type { TabProps } from './Tabs.model'
import type { Ref } from 'vue'
import Icon from '../Icon/Icon.vue'

const props = withDefaults(defineProps<TabProps>(), {
  disabled: false
})

const { bemm } = useBemm('tab')

const activeTab = inject<Ref<string>>('activeTab')
const selectTab = inject<(id: string) => void>('selectTab')

const isActive = computed(() => activeTab?.value === props.id)

const blockClasses = computed(() => {
  const classes = [bemm()]
  
  if (isActive.value) {
    classes.push(bemm('', 'active'))
  }
  
  if (props.disabled) {
    classes.push(bemm('', 'disabled'))
  }
  
  if (props.icon) {
    classes.push(bemm('', 'has-icon'))
  }
  
  return classes
})

const handleClick = () => {
  if (!props.disabled && selectTab) {
    selectTab(props.id)
  }
}
</script>

<style lang="scss">
.tab {
  display: flex;
  align-items: center;
  gap: var(--space-s);
  padding: var(--space-m) var(--space-l);
  border: none;
  background: none;
  cursor: pointer;
  font-size: var(--font-size-m);
  font-weight: 500;
  color: var(--color-text-secondary);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  position: relative;

  &:hover:not(&--disabled) {
    color: var(--color-text-primary);
    background: var(--color-accent);
  }

  &--active {
    color: var(--color-primary);
    border-bottom-color: var(--color-primary);
  }

  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &__icon {
    font-size: var(--font-size-m);
    flex-shrink: 0;
  }

  &__label {
    white-space: nowrap;
  }

  .tabs--vertical & {
    width: 100%;
    justify-content: flex-start;
    border-bottom: none;
    border-left: 2px solid transparent;

    &--active {
      border-left-color: var(--color-primary);
      border-bottom-color: transparent;
    }
  }
}</style>