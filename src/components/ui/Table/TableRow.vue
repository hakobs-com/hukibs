<template>
  <component 
    :is="componentTag"
    :class="blockClasses"
    :style="rowStyle"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useBemm } from 'bemm'
import type { TableRowProps } from './Table.model'

const props = withDefaults(defineProps<TableRowProps>(), {
  clickable: false,
  selected: false
})

// Inject the table type from parent
const tableType = inject<'table' | 'div'>('tableType', 'table')

// Determine the actual tag to use
const componentTag = computed(() => {
  if (props.as) return props.as
  return tableType === 'table' ? 'tr' : 'div'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { bemm } = useBemm('table-row')

const blockClasses = computed(() => {
  const classes = [bemm()]
  
  if (props.clickable) {
    classes.push(bemm('', 'clickable'))
  }
  
  if (props.selected) {
    classes.push(bemm('', 'selected'))
  }
  
  if (componentTag.value === 'div') {
    classes.push(bemm('', 'div'))
  }
  
  if (props.expandable) {
    classes.push(bemm('', 'expandable'))
  }
  
  if (props.expanded) {
    classes.push(bemm('', 'expanded'))
  }
  
  if (props.level && props.level > 0) {
    classes.push(bemm('', `level-${props.level}`))
  }
  
  return classes
})

const rowStyle = computed(() => {
  if (componentTag.value === 'div' && props.columns) {
    return {
      display: 'grid',
      gridTemplateColumns: props.columns
    }
  }
  return {}
})

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event)
  }
}
</script>

<style lang="scss">
.table-row {
  border-bottom: 1px solid var(--color-border);
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &--clickable {
    cursor: pointer;
    
    &:hover {
      background: var(--color-accent);
    }
  }
  
  &--selected {
    background: var(--color-primary-light);
    
    &:hover {
      background: var(--color-primary-light);
    }
  }
  
  // When used in a regular table
  td {
    padding: var(--space-s) var(--space-m);
  }
  
  // When rendered as div (detected by modifier class)
  &--div {
    display: grid;
    gap: var(--space-m);
    padding: var(--space-m);
    align-items: center;
  }
  
  // Level styling for nested rows
  &--level-1 {
    background: rgba(0, 0, 0, 0.02);
  }
  
  &--level-2 {
    background: rgba(0, 0, 0, 0.04);
  }
  
  &--level-3 {
    background: rgba(0, 0, 0, 0.06);
  }
  
  // Dark mode support
  @media (prefers-color-scheme: dark) {
    &--level-1 {
      background: rgba(255, 255, 255, 0.02);
    }
    
    &--level-2 {
      background: rgba(255, 255, 255, 0.04);
    }
    
    &--level-3 {
      background: rgba(255, 255, 255, 0.06);
    }
  }
}</style>