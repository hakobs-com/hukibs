<template>
  <BaseInput
    v-model="modelValue"
    type="search"
    prefix-icon="search"
    :clearable="clearable"
    v-bind="$attrs"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    @clear="$emit('clear')"
  />
</template>

<script setup lang="ts">
import type { SearchInputProps } from './SearchInput.model'
import { BaseInput } from '../BaseInput'

defineOptions({
  inheritAttrs: false
})

withDefaults(defineProps<SearchInputProps>(), {
  clearable: true,
  placeholder: 'Search...'
})

const modelValue = defineModel<string>()

defineEmits<{
  focus: [event: FocusEvent]
  blur: [event: FocusEvent] 
  input: [event: Event]
  change: [event: Event]
  clear: []
}>()
</script>