<template>
  <component 
    :is="componentTag"
    :class="[blockClasses, props.className]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useBemm } from 'bemm'
import type { TableCellProps } from './Table.model'

const props = withDefaults(defineProps<TableCellProps>(), {
  align: 'left',
  nowrap: false
})

// Inject the table type from parent
const tableType = inject<'table' | 'div'>('tableType', 'table')

// Determine the actual tag to use
const componentTag = computed(() => {
  if (props.as) return props.as
  return tableType === 'table' ? 'td' : 'div'
})

const { bemm } = useBemm('table-cell')

const blockClasses = computed(() => {
  const classes = [bemm()]
  
  if (props.align !== 'left') {
    classes.push(bemm('', `align-${props.align}`))
  }
  
  if (props.nowrap) {
    classes.push(bemm('', 'nowrap'))
  }
  
  return classes
})
</script>

<style lang="scss">
.table-cell {
  padding: var(--space-s) var(--space-m);
  
  &--align-center {
    text-align: center;
  }
  
  &--align-right {
    text-align: right;
  }
  
  &--nowrap {
    white-space: nowrap;
  }
}</style>