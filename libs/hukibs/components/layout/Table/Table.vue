<template>
  <div :class="bemm('wrapper')">
    <component :is="props.as" :class="blockClasses">
      <!-- Automatic rendering with columns prop -->
      <template v-if="props.columns && props.data">
        <!-- Header -->
        <thead v-if="props.as === 'table'" :class="bemm('head')">
          <tr>
            <th 
              v-for="column in props.columns" 
              :key="column.key"
              :style="{ width: column.width }"
              :class="getHeaderCellClass(column)"
            >
              {{ column.label }}
            </th>
          </tr>
        </thead>
        <div v-else :class="bemm('head')">
          <TableRow :columns="gridColumns">
            <TableCell 
              v-for="column in props.columns" 
              :key="column.key"
              :align="column.align"
              class="header-cell"
            >
              {{ column.label }}
            </TableCell>
          </TableRow>
        </div>

        <!-- Body -->
        <tbody v-if="props.as === 'table'" :class="bemm('body')">
          <tr
            v-for="{ item: row, index, level } in flattenedData"
            :key="getRowKey(row, index)"
            :class="getRowClass(row, index)"
            @click="handleRowClick(row, index)"
          >
            <td
              v-for="(column, colIndex) in props.columns"
              :key="column.key"
              :class="getCellClass(column)"
            >
              <div 
                v-if="colIndex === 0 && props.expandable" 
                :style="{ paddingLeft: `${level * props.indentSize}px`, display: 'flex', alignItems: 'center', gap: '8px' }"
              >
                <button
                  v-if="hasChildren(row)"
                  @click.stop="toggleExpand(row, index)"
                  class="expand-button"
                  type="button"
                >
                  <Icon :name="isExpanded(row, index) ? 'chevron-down' : 'chevron-right'" />
                </button>
                <span v-else :style="{ width: '24px' }"></span>
                <component 
                  v-if="column.render" 
                  :is="column.render(row[column.key], row, index, level)"
                />
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </div>
              <template v-else>
                <component 
                  v-if="column.render" 
                  :is="column.render(row[column.key], row, index, level)"
                />
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </template>
            </td>
          </tr>
        </tbody>
        <div v-else :class="bemm('body')">
          <TableRow
            v-for="{ item: row, index, level } in flattenedData"
            :key="getRowKey(row, index)"
            :columns="gridColumns"
            :clickable="props.clickable"
            :selected="isSelected(row, index)"
            :level="level"
            :expandable="props.expandable && hasChildren(row)"
            :expanded="isExpanded(row, index)"
            @click="handleRowClick(row, index)"
          >
            <TableCell
              v-for="(column, colIndex) in props.columns"
              :key="column.key"
              :align="column.align"
            >
              <div 
                v-if="colIndex === 0 && props.expandable" 
                :style="{ paddingLeft: `${level * props.indentSize}px`, display: 'flex', alignItems: 'center', gap: '8px' }"
              >
                <button
                  v-if="hasChildren(row)"
                  @click.stop="toggleExpand(row, index)"
                  class="expand-button"
                  type="button"
                >
                  <Icon :name="isExpanded(row, index) ? 'chevron-down' : 'chevron-right'" />
                </button>
                <span v-else :style="{ width: '24px' }"></span>
                <component 
                  v-if="column.render" 
                  :is="column.render(row[column.key], row, index, level)"
                />
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </div>
              <template v-else>
                <component 
                  v-if="column.render" 
                  :is="column.render(row[column.key], row, index, level)"
                />
                <template v-else>
                  {{ row[column.key] }}
                </template>
              </template>
            </TableCell>
          </TableRow>
        </div>
      </template>

      <!-- Manual slot-based rendering -->
      <template v-else>
        <thead v-if="$slots.header && props.as === 'table'" :class="bemm('head')">
          <slot name="header" />
        </thead>
        <div v-if="$slots.header && props.as === 'div'" :class="bemm('head')">
          <slot name="header" />
        </div>
        <tbody v-if="props.as === 'table'" :class="bemm('body')">
          <slot />
        </tbody>
        <div v-if="props.as === 'div'" :class="bemm('body')">
          <slot />
        </div>
        <tfoot v-if="$slots.footer && props.as === 'table'" :class="bemm('foot')">
          <slot name="footer" />
        </tfoot>
        <div v-if="$slots.footer && props.as === 'div'" :class="bemm('foot')">
          <slot name="footer" />
        </div>
      </template>
    </component>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watchEffect } from 'vue'
import { useBemm } from 'bemm'
import { Icon } from '../../ui'
import type { TableProps } from './Table.model'

// Import child components for automatic rendering
import TableRow from './TableRow.vue'
import TableCell from './TableCell.vue'

const props = withDefaults(defineProps<TableProps>(), {
  striped: false,
  hover: true,
  bordered: false,
  compact: false,
  as: 'table',
  clickable: false,
  childrenKey: 'children',
  expandable: true,
  defaultExpandAll: false,
  indentSize: 20
})

const emit = defineEmits<{
  'row-click': [row: any, index: number]
  'expand': [expanded: boolean, row: any]
}>()

// Provide the table type to children
provide('tableType', props.as)

// State for expanded rows
const internalExpandedKeys = ref<Set<string | number>>(new Set())

// Initialize expanded keys
watchEffect(() => {
  if (props.expandedKeys) {
    internalExpandedKeys.value = new Set(
      Array.isArray(props.expandedKeys) ? props.expandedKeys : props.expandedKeys
    )
  } else if (props.defaultExpandAll && props.data) {
    // Expand all rows with children by default
    const keys = new Set<string | number>()
    const addKeys = (items: any[], parentIndex = '') => {
      items.forEach((item, index) => {
        const key = getRowKey(item, index)
        if (item[props.childrenKey!]?.length > 0) {
          keys.add(key)
          addKeys(item[props.childrenKey!], `${parentIndex}${index}-`)
        }
      })
    }
    addKeys(props.data)
    internalExpandedKeys.value = keys
  }
})

const { bemm } = useBemm('table')

const blockClasses = computed(() => {
  const classes = [bemm()]
  
  if (props.striped) {
    classes.push(bemm('', 'striped'))
  }
  
  if (props.hover) {
    classes.push(bemm('', 'hover'))
  }
  
  if (props.bordered) {
    classes.push(bemm('', 'bordered'))
  }
  
  if (props.compact) {
    classes.push(bemm('', 'compact'))
  }
  
  return classes
})

// Computed property for grid columns
const gridColumns = computed(() => {
  if (!props.columns) return ''
  return props.columns.map(col => col.width || '1fr').join(' ')
})

// Helper methods
const getRowKey = (row: any, index: number): string => {
  if (!props.rowKey) return String(index)
  if (typeof props.rowKey === 'function') {
    return props.rowKey(row, index)
  }
  return String(row[props.rowKey])
}

const isSelected = (row: any, index: number): boolean => {
  if (props.selectedKey === undefined) return false
  const key = getRowKey(row, index)
  return key === String(props.selectedKey)
}

const handleRowClick = (row: any, index: number) => {
  if (props.clickable) {
    emit('row-click', row, index)
  }
}

const getRowClass = (row: any, index: number) => {
  const classes = []
  if (props.clickable) classes.push(bemm('row', 'clickable'))
  if (isSelected(row, index)) classes.push(bemm('row', 'selected'))
  return classes
}

const getHeaderCellClass = (column: any) => {
  const classes = ['header-cell']
  if (column.align && column.align !== 'left') {
    classes.push(`align-${column.align}`)
  }
  if (column.sortable) {
    classes.push('sortable')
  }
  return classes
}

const getCellClass = (column: any) => {
  const classes = []
  if (column.align && column.align !== 'left') {
    classes.push(`align-${column.align}`)
  }
  return classes
}

// Check if a row is expanded
const isExpanded = (row: any, index: number): boolean => {
  const key = getRowKey(row, index)
  return internalExpandedKeys.value.has(key)
}

// Toggle row expansion
const toggleExpand = (row: any, index: number) => {
  const key = getRowKey(row, index)
  const newSet = new Set(internalExpandedKeys.value)
  
  if (newSet.has(key)) {
    newSet.delete(key)
  } else {
    newSet.add(key)
  }
  
  internalExpandedKeys.value = newSet
  emit('expand', !internalExpandedKeys.value.has(key), row)
}

// Check if a row has children
const hasChildren = (row: any): boolean => {
  return props.childrenKey ? row[props.childrenKey]?.length > 0 : false
}

// Flatten hierarchical data for rendering
const flattenedData = computed(() => {
  if (!props.data || !props.childrenKey || !props.expandable) {
    return props.data?.map((item, index) => ({ item, index, level: 0 })) || []
  }
  
  const result: { item: any; index: number; level: number; parentIndex?: string }[] = []
  
  const flatten = (items: any[], level = 0, parentIndex = '') => {
    items.forEach((item, index) => {
      result.push({ item, index, level, parentIndex })
      
      if (hasChildren(item) && isExpanded(item, index)) {
        flatten(item[props.childrenKey!], level + 1, `${parentIndex}${index}-`)
      }
    })
  }
  
  flatten(props.data)
  return result
})
</script>

<style lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  background: var(--color-background);
  
  &__wrapper {
    overflow-x: auto;
    border-radius: var(--border-radius-m);
  }
  
  &__head {
    background: var(--color-accent);
  }
  
  &__body {
    // Body styles
  }
  
  &__foot {
    background: var(--color-accent);
    font-weight: var(--font-weight-semibold);
  }
  
  // Modifiers
  &--striped {
    .table__body tr:nth-child(even) {
      background: var(--color-accent);
    }
  }
  
  &--hover {
    .table__body tr:hover {
      background: var(--color-accent);
    }
  }
  
  &--bordered {
    border: 1px solid var(--color-border);
    
    th, td {
      border: 1px solid var(--color-border);
    }
  }
  
  &--compact {
    th, td {
      padding: var(--space-xs) var(--space-s);
    }
  }
  
  // Automatic rendering styles
  &__row {
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
  }
  
  th, td {
    padding: var(--space-s) var(--space-m);
    text-align: left;
    
    &.align-center {
      text-align: center;
    }
    
    &.align-right {
      text-align: right;
    }
  }
  
  th {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-secondary);
    
    &.sortable {
      cursor: pointer;
      user-select: none;
      
      &:hover {
        color: var(--color-text-primary);
      }
    }
  }
}

.header-cell {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}

.expand-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-s);
  transition: background-color 0.2s;
  color: var(--color-text-secondary);
  
  &:hover {
    background: var(--color-accent);
    color: var(--color-text-primary);
  }
  
  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}
</style>