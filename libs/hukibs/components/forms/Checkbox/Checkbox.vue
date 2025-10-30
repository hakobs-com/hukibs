<template>
  <div class="checkbox-wrapper" :class="wrapperClasses">
    <label class="checkbox-label" :class="labelClasses">
      <input
        ref="inputRef"
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        :indeterminate="indeterminate"
        :class="['checkbox-input', { 'checkbox-input--indeterminate': indeterminate }]"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div class="checkbox-control" :class="controlClasses">
        <div class="checkbox-checkmark">
          <Icon v-if="indeterminate" name="minus" class="checkbox-icon checkbox-icon--indeterminate" />
          <Icon v-else-if="isChecked" name="check" class="checkbox-icon checkbox-icon--checked" />
        </div>
        <div v-if="ripple && !disabled" class="checkbox-ripple" />
      </div>
      
      <div class="checkbox-content">
        <span v-if="label" class="checkbox-text">{{ label }}</span>
        <span v-if="required" class="checkbox-required">*</span>
        <slot />
      </div>
    </label>
    
    <div v-if="description" class="checkbox-description">
      {{ description }}
    </div>
    
    <div v-if="error && error.length" class="checkbox-errors">
      <div v-for="err in Array.isArray(error) ? error : [error]" :key="err" class="checkbox-error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, nextTick, watch } from 'vue'
import { Icon } from '../../ui/Icon'
import type { CheckboxProps } from './Checkbox.model'

const props = withDefaults(defineProps<CheckboxProps>(), {
  size: 'medium',
  color: 'primary',
  ripple: true
})

const modelValue = defineModel<boolean | string[]>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
  change: [value: boolean | string[]]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)

// Handle both boolean and array modes
const isChecked = computed(() => {
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.includes(String(props.value))
  }
  return Boolean(modelValue.value)
})

const internalValue = computed({
  get: () => {
    if (Array.isArray(modelValue.value)) {
      return modelValue.value.includes(String(props.value))
    }
    return modelValue.value || false
  },
  set: (value: boolean) => {
    if (Array.isArray(modelValue.value)) {
      const valueStr = String(props.value)
      const newValue = [...modelValue.value]
      
      if (value) {
        if (!newValue.includes(valueStr)) {
          newValue.push(valueStr)
        }
      } else {
        const index = newValue.indexOf(valueStr)
        if (index > -1) {
          newValue.splice(index, 1)
        }
      }
      
      modelValue.value = newValue
      emit('update:modelValue', newValue)
      emit('change', newValue)
    } else {
      modelValue.value = value
      emit('update:modelValue', value)
      emit('change', value)
    }
  }
})

// CSS classes
const wrapperClasses = computed(() => [
  'checkbox-wrapper',
  `checkbox-wrapper--${props.size}`,
  `checkbox-wrapper--${props.color}`,
  {
    'checkbox-wrapper--disabled': props.disabled,
    'checkbox-wrapper--error': props.error,
    'checkbox-wrapper--focused': isFocused.value,
    'checkbox-wrapper--indeterminate': props.indeterminate
  },
  props.class
])

const labelClasses = computed(() => [
  'checkbox-label',
  `checkbox-label--${props.size}`,
  {
    'checkbox-label--disabled': props.disabled
  }
])

const controlClasses = computed(() => [
  'checkbox-control',
  `checkbox-control--${props.size}`,
  `checkbox-control--${props.color}`,
  {
    'checkbox-control--checked': isChecked.value,
    'checkbox-control--indeterminate': props.indeterminate,
    'checkbox-control--disabled': props.disabled,
    'checkbox-control--focused': isFocused.value
  }
])

// Event handlers
const handleChange = (_event: Event) => {
  // Handled by the computed setter
  nextTick(() => {
    emit('change', internalValue.value)
  })
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

// Handle indeterminate state
watch(() => props.indeterminate, (newValue) => {
  if (inputRef.value) {
    inputRef.value.indeterminate = newValue
  }
}, { immediate: true })
</script>

<style lang="scss">
// Global checkbox CSS custom properties
:root {
  // Checkbox sizing
  --checkbox-size-small: 1rem;
  --checkbox-size-medium: 1.25rem;
  --checkbox-size-large: 1.5rem;
  
  // Checkbox colors
  --checkbox-background: var(--input-background);
  --checkbox-foreground: var(--input-foreground);
  --checkbox-border: var(--input-border);
  --checkbox-border-hover: var(--input-border-hover);
  --checkbox-border-focus: var(--input-border-focus);
  --checkbox-border-error: var(--input-border-error);
  
  // Checkbox state colors
  --checkbox-checked-background: var(--color-primary, #3b82f6);
  --checkbox-checked-foreground: #ffffff;
  --checkbox-indeterminate-background: var(--color-primary, #3b82f6);
  --checkbox-indeterminate-foreground: #ffffff;
  
  // Checkbox color variants
  --checkbox-primary-background: var(--color-primary, #3b82f6);
  --checkbox-success-background: var(--color-success, #10b981);
  --checkbox-warning-background: var(--color-warning, #f59e0b);
  --checkbox-error-background: var(--color-error, #ef4444);
  --checkbox-info-background: var(--color-info, #3b82f6);
  
  // Checkbox transitions
  --checkbox-transition: all 0.2s ease;
  --checkbox-ripple-transition: all 0.3s ease;
}

.checkbox-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  
  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  
  &--error {
    --checkbox-border: var(--checkbox-border-error);
    --checkbox-border-focus: var(--checkbox-border-error);
  }
  
  &--focused {
    .checkbox-control {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--checkbox-border-focus), transparent 80%);
    }
  }
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-s, 0.75rem);
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
  }
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  
  &:focus-visible + .checkbox-control {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--checkbox-border-focus), transparent 80%);
  }
}

.checkbox-control {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--checkbox-background);
  border: 2px solid var(--checkbox-border);
  border-radius: calc(var(--checkbox-size-medium) * 0.25);
  transition: var(--checkbox-transition);
  
  &--small {
    width: var(--checkbox-size-small);
    height: var(--checkbox-size-small);
  }
  
  &--medium {
    width: var(--checkbox-size-medium);
    height: var(--checkbox-size-medium);
  }
  
  &--large {
    width: var(--checkbox-size-large);
    height: var(--checkbox-size-large);
  }
  
  &:hover:not(.checkbox-control--disabled) {
    border-color: var(--checkbox-border-hover);
  }
  
  &--checked,
  &--indeterminate {
    background: var(--checkbox-checked-background);
    border-color: var(--checkbox-checked-background);
    
    &.checkbox-control--primary {
      background: var(--checkbox-primary-background);
      border-color: var(--checkbox-primary-background);
    }
    
    &.checkbox-control--success {
      background: var(--checkbox-success-background);
      border-color: var(--checkbox-success-background);
    }
    
    &.checkbox-control--warning {
      background: var(--checkbox-warning-background);
      border-color: var(--checkbox-warning-background);
    }
    
    &.checkbox-control--error {
      background: var(--checkbox-error-background);
      border-color: var(--checkbox-error-background);
    }
    
    &.checkbox-control--info {
      background: var(--checkbox-info-background);
      border-color: var(--checkbox-info-background);
    }
  }
  
  &--disabled {
    background: var(--input-background-disabled);
    border-color: var(--input-border);
    opacity: 0.6;
  }
}

.checkbox-checkmark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.checkbox-icon {
  color: var(--checkbox-checked-foreground);
  font-size: 0.75em;
  transition: var(--checkbox-transition);
  
  &--checked {
    animation: checkboxCheck 0.2s ease;
  }
  
  &--indeterminate {
    animation: checkboxIndeterminate 0.2s ease;
  }
}

.checkbox-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: var(--checkbox-ripple-transition);
  pointer-events: none;
  
  .checkbox-control:hover & {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.checkbox-content {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: 0.125rem;
  padding-top: 1px; // Better alignment
}

.checkbox-text {
  color: var(--checkbox-foreground);
  font-size: var(--input-font-size);
  line-height: 1.4;
}

.checkbox-required {
  color: var(--input-error-color);
  margin-left: 0.125rem;
}

.checkbox-description {
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
  margin-left: calc(var(--checkbox-size-medium) + var(--space-s, 0.75rem));
}

.checkbox-errors {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  margin-left: calc(var(--checkbox-size-medium) + var(--space-s, 0.75rem));
}

.checkbox-error {
  font-size: var(--input-error-font-size);
  color: var(--input-error-color);
}

// Animations
@keyframes checkboxCheck {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes checkboxIndeterminate {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>