<template>
  <BaseInput
    v-model="modelValue"
    type="text"
    v-bind="$attrs"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    @input="$emit('input', $event)"
    @change="$emit('change', $event)"
    @clear="$emit('clear')"
  />
</template>

<script setup lang="ts">
import type { TextInputProps } from './TextInput.model'
import { BaseInput } from '../BaseInput'

defineOptions({
  inheritAttrs: false
})

defineProps<TextInputProps>()

const modelValue = defineModel<string>()

defineEmits<{
  focus: [event: FocusEvent]
  blur: [event: FocusEvent] 
  input: [event: Event]
  change: [event: Event]
  clear: []
}>()
</script>