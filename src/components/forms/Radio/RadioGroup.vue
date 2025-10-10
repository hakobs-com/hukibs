<template>
  <div class="radio-group" :class="groupClasses">
    <div v-if="label" class="radio-group-label">
      {{ label }}
      <span v-if="required" class="radio-group-required">*</span>
    </div>
    
    <div v-if="description" class="radio-group-description">
      {{ description }}
    </div>
    
    <div class="radio-group-options" :class="optionsClasses">
      <Radio
        v-for="(option, index) in normalizedOptions"
        :key="typeof option === 'object' ? option.value : option"
        :model-value="modelValue"
        :value="typeof option === 'object' ? option.value : option"
        :label="typeof option === 'object' ? option.label : String(option)"
        :description="typeof option === 'object' ? option.description : undefined"
        :size="size"
        :color="color"
        :disabled="disabled || (typeof option === 'object' && option.disabled)"
        :required="required"
        :ripple="ripple"
        :error="error"
        :name="groupName"
        @update:model-value="handleUpdate"
        @change="handleChange"
      />
    </div>
    
    <div v-if="error && error.length" class="radio-group-errors">
      <div v-for="err in Array.isArray(error) ? error : [error]" :key="err" class="radio-group-error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../../composables/useId'
import { Radio } from './Radio'
import type { RadioGroupProps, RadioOption } from './Radio.model'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  size: 'medium',
  color: 'primary',
  direction: 'vertical',
  ripple: true
})

const modelValue = defineModel<string | number | boolean>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
  change: [value: string | number | boolean]
}>()

const groupName = useId('radio-group')

// Normalize options to RadioOption format
const normalizedOptions = computed(() => {
  return props.options.map(option => {
    if (typeof option === 'object') {
      return option as RadioOption
    }
    return {
      value: option,
      label: String(option),
      disabled: false
    } as RadioOption
  })
})

// CSS classes
const groupClasses = computed(() => [
  'radio-group',
  `radio-group--${props.size}`,
  `radio-group--${props.color}`,
  `radio-group--${props.direction}`,
  {
    'radio-group--disabled': props.disabled,
    'radio-group--error': props.error
  },
  props.class
])

const optionsClasses = computed(() => [
  'radio-group-options',
  `radio-group-options--${props.direction}`
])

// Event handlers
const handleUpdate = (value: string | number | boolean) => {
  modelValue.value = value
  emit('update:modelValue', value)
  emit('change', value)
}

const handleChange = (value: string | number | boolean) => {
  emit('change', value)
}
</script>

<style lang="scss" scoped>
.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-s, 0.75rem);
  
  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  
  &--error {
    .radio-group-label {
      color: var(--input-error-color);
    }
  }
}

.radio-group-label {
  font-size: var(--input-label-font-size);
  font-weight: var(--input-label-font-weight);
  color: var(--input-label-color);
  display: block;
  margin-bottom: var(--space-xs, 0.25rem);
}

.radio-group-required {
  color: var(--input-error-color);
  margin-left: 0.125rem;
}

.radio-group-description {
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
  margin-bottom: var(--space-s, 0.75rem);
}

.radio-group-options {
  display: flex;
  gap: var(--space-m, 1rem);
  
  &--vertical {
    flex-direction: column;
    gap: var(--space-s, 0.75rem);
  }
  
  &--horizontal {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--space-l, 1.5rem);
  }
}

.radio-group-errors {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  margin-top: var(--space-xs, 0.25rem);
}

.radio-group-error {
  font-size: var(--input-error-font-size);
  color: var(--input-error-color);
}
</style>