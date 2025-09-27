<template>
  <div :class="blockClasses">
    <nav :class="bemm('nav')" role="tablist">
      <slot name="tabs" />
    </nav>
    <div :class="bemm('panels')">
      <slot name="panels" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref, watch } from 'vue'
import { useBemm } from 'bemm'
import type { TabsProps } from './Tabs.model'

const props = withDefaults(defineProps<TabsProps>(), {
  modelValue: '',
  orientation: 'horizontal'
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { bemm } = useBemm('tabs')

const activeTab = ref(props.modelValue)

const blockClasses = computed(() => {
  return [
    bemm(),
    bemm('', props.orientation)
  ]
})

watch(() => props.modelValue, (newValue) => {
  activeTab.value = newValue
})

const selectTab = (tabId: string) => {
  activeTab.value = tabId
  emit('update:modelValue', tabId)
}

// Provide active tab state to child components
provide('activeTab', activeTab)
provide('selectTab', selectTab)
</script>

<style lang="scss">
.tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-l);

  &--vertical {
    flex-direction: row;
  }

  &__nav {
    display: flex;
    gap: var(--space-xs);
    border-bottom: 1px solid var(--color-border);
    
    .tabs--vertical & {
      flex-direction: column;
      border-bottom: none;
      border-right: 1px solid var(--color-border);
      padding-right: var(--space-l);
    }
  }

  &__panels {
    position: relative;
    
    .tabs--vertical & {
      flex: 1;
      padding-left: var(--space-l);
    }
  }
}</style>