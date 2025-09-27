<template>
  <div
    v-if="isActive"
    :id="`panel-${props.id}`"
    :class="blockClasses"
    role="tabpanel"
    :aria-labelledby="props.id"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { useBemm } from 'bemm'
import type { TabPanelProps } from './Tabs.model'
import type { Ref } from 'vue'

const props = defineProps<TabPanelProps>()

const { bemm } = useBemm('tab-panel')

const activeTab = inject<Ref<string>>('activeTab')

const isActive = computed(() => activeTab?.value === props.id)

const blockClasses = computed(() => {
  return [bemm()]
})
</script>

<style lang="scss">
.tab-panel {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}</style>