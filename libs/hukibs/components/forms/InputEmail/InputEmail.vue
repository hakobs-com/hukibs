<template>
  <BaseInput
    :type="'email'"
    :model-value="modelValue"
    :size="size"
    :variant="variant"
    :label="label"
    :placeholder="placeholder"
    :description="description"
    :error="computedError"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :clearable="clearable"
    :autocomplete="autocomplete"
    :prefix-icon="prefixIcon"
    @update:model-value="handleUpdate"
    @blur="handleBlur"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BaseInput } from '../BaseInput'
import type { InputEmailProps } from './InputEmail.model'

const props = withDefaults(defineProps<InputEmailProps>(), {
  placeholder: 'email@example.com',
  autocomplete: 'email',
  validate: true,
  clearable: true
})

const modelValue = defineModel<string>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  validity: [isValid: boolean]
}>()

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const computedError = computed(() => {
  if (!props.validate || !props.error) return props.error
  
  if (typeof props.error === 'string') {
    return props.error
  }
  
  // Add validation error if email is invalid and has been touched
  if (modelValue.value && !emailRegex.test(modelValue.value)) {
    const validationError = 'Please enter a valid email address'
    return Array.isArray(props.error) 
      ? [...props.error, validationError]
      : validationError
  }
  
  return props.error
})

const handleUpdate = (value: string | undefined) => {
  if (value === undefined) return
  
  modelValue.value = value
  
  // Emit validity if validation is enabled
  if (props.validate) {
    const isValid = !value || emailRegex.test(value)
    emit('validity', isValid)
  }
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
  
  // Validate on blur if validation is enabled
  if (props.validate && modelValue.value) {
    const isValid = emailRegex.test(modelValue.value)
    emit('validity', isValid)
  }
}

// Determine prefix icon
const prefixIcon = computed(() => 'mail')
</script>