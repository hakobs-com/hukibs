<template>
  <div class="radio-wrapper" :class="wrapperClasses">
    <label class="radio-label" :class="labelClasses">
      <input
        ref="inputRef"
        v-model="internalValue"
        type="radio"
        :value="value"
        :disabled="disabled"
        :required="required"
        :name="name"
        class="radio-input"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div class="radio-control" :class="controlClasses">
        <div class="radio-dot" />
        <div v-if="ripple && !disabled" class="radio-ripple" />
      </div>
      
      <div class="radio-content">
        <span v-if="label" class="radio-text">{{ label }}</span>
        <span v-if="required" class="radio-required">*</span>
        <slot />
      </div>
    </label>
    
    <div v-if="description" class="radio-description">
      {{ description }}
    </div>
    
    <div v-if="error && error.length" class="radio-errors">
      <div v-for="err in Array.isArray(error) ? error : [error]" :key="err" class="radio-error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useId } from '../../../composables/useId'
import type { RadioProps } from './Radio.model'

const props = withDefaults(defineProps<RadioProps>(), {
  size: 'medium',
  color: 'primary',
  ripple: true
})

const modelValue = defineModel<string | number | boolean>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number | boolean]
  change: [value: string | number | boolean]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)
const name = useId('radio')

const isChecked = computed(() => modelValue.value === props.value)

const internalValue = computed({
  get: () => modelValue.value,
  set: (value: string | number | boolean) => {
    modelValue.value = value
    emit('update:modelValue', value)
    emit('change', value)
  }
})

// CSS classes
const wrapperClasses = computed(() => [
  'radio-wrapper',
  `radio-wrapper--${props.size}`,
  `radio-wrapper--${props.color}`,
  {
    'radio-wrapper--disabled': props.disabled,
    'radio-wrapper--error': props.error,
    'radio-wrapper--focused': isFocused.value,
    'radio-wrapper--checked': isChecked.value
  },
  props.class
])

const labelClasses = computed(() => [
  'radio-label',
  `radio-label--${props.size}`,
  {
    'radio-label--disabled': props.disabled
  }
])

const controlClasses = computed(() => [
  'radio-control',
  `radio-control--${props.size}`,
  `radio-control--${props.color}`,
  {
    'radio-control--checked': isChecked.value,
    'radio-control--disabled': props.disabled,
    'radio-control--focused': isFocused.value
  }
])

// Event handlers
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  internalValue.value = target.value
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}
</script>

<style lang="scss">
// Global radio CSS custom properties
:root {
  // Radio sizing
  --radio-size-small: 1rem;
  --radio-size-medium: 1.25rem;
  --radio-size-large: 1.5rem;
  --radio-dot-size-small: 0.25rem;
  --radio-dot-size-medium: 0.375rem;
  --radio-dot-size-large: 0.5rem;
  
  // Radio colors
  --radio-background: var(--input-background);
  --radio-foreground: var(--input-foreground);
  --radio-border: var(--input-border);
  --radio-border-hover: var(--input-border-hover);
  --radio-border-focus: var(--input-border-focus);
  --radio-border-error: var(--input-border-error);
  
  // Radio state colors
  --radio-checked-background: var(--color-primary, #3b82f6);
  --radio-checked-foreground: #ffffff;
  --radio-checked-border: var(--color-primary, #3b82f6);
  
  // Radio color variants
  --radio-primary-background: var(--color-primary, #3b82f6);
  --radio-primary-border: var(--color-primary, #3b82f6);
  --radio-success-background: var(--color-success, #10b981);
  --radio-success-border: var(--color-success, #10b981);
  --radio-warning-background: var(--color-warning, #f59e0b);
  --radio-warning-border: var(--color-warning, #f59e0b);
  --radio-error-background: var(--color-error, #ef4444);
  --radio-error-border: var(--color-error, #ef4444);
  --radio-info-background: var(--color-info, #3b82f6);
  --radio-info-border: var(--color-info, #3b82f6);
  
  // Radio transitions
  --radio-transition: all 0.2s ease;
  --radio-ripple-transition: all 0.3s ease;
}

.radio-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  
  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  
  &--error {
    --radio-border: var(--radio-border-error);
    --radio-border-focus: var(--radio-border-error);
  }
  
  &--focused {
    .radio-control {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--radio-border-focus), transparent 80%);
    }
  }
}

.radio-label {
  display: flex;
  align-items: flex-start;
  gap: var(--space-s, 0.75rem);
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
  }
}

.radio-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  
  &:focus-visible + .radio-control {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--radio-border-focus), transparent 80%);
  }
}

.radio-control {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--radio-background);
  border: 2px solid var(--radio-border);
  border-radius: 50%;
  transition: var(--radio-transition);
  
  &--small {
    width: var(--radio-size-small);
    height: var(--radio-size-small);
  }
  
  &--medium {
    width: var(--radio-size-medium);
    height: var(--radio-size-medium);
  }
  
  &--large {
    width: var(--radio-size-large);
    height: var(--radio-size-large);
  }
  
  &:hover:not(.radio-control--disabled) {
    border-color: var(--radio-border-hover);
  }
  
  &--checked {
    border-color: var(--radio-checked-border);
    
    &.radio-control--primary {
      border-color: var(--radio-primary-border);
    }
    
    &.radio-control--success {
      border-color: var(--radio-success-border);
    }
    
    &.radio-control--warning {
      border-color: var(--radio-warning-border);
    }
    
    &.radio-control--error {
      border-color: var(--radio-error-border);
    }
    
    &.radio-control--info {
      border-color: var(--radio-info-border);
    }
  }
  
  &--disabled {
    background: var(--input-background-disabled);
    border-color: var(--input-border);
    opacity: 0.6;
  }
}

.radio-dot {
  width: 0;
  height: 0;
  background: var(--radio-checked-foreground);
  border-radius: 50%;
  transition: var(--radio-transition);
  
  .radio-control--small & {
    width: var(--radio-dot-size-small);
    height: var(--radio-dot-size-small);
  }
  
  .radio-control--medium & {
    width: var(--radio-dot-size-medium);
    height: var(--radio-dot-size-medium);
  }
  
  .radio-control--large & {
    width: var(--radio-dot-size-large);
    height: var(--radio-dot-size-large);
  }
  
  .radio-control--checked & {
    animation: radioDot 0.2s ease forwards;
    
    &.radio-control--primary {
      background: var(--radio-primary-background);
    }
    
    &.radio-control--success {
      background: var(--radio-success-background);
    }
    
    &.radio-control--warning {
      background: var(--radio-warning-background);
    }
    
    &.radio-control--error {
      background: var(--radio-error-background);
    }
    
    &.radio-control--info {
      background: var(--radio-info-background);
    }
  }
}

.radio-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: var(--radio-ripple-transition);
  pointer-events: none;
  
  .radio-control:hover & {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.radio-content {
  flex: 1;
  display: flex;
  align-items: baseline;
  gap: 0.125rem;
  padding-top: 1px; // Better alignment
}

.radio-text {
  color: var(--radio-foreground);
  font-size: var(--input-font-size);
  line-height: 1.4;
}

.radio-required {
  color: var(--input-error-color);
  margin-left: 0.125rem;
}

.radio-description {
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
  margin-left: calc(var(--radio-size-medium) + var(--space-s, 0.75rem));
}

.radio-errors {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  margin-left: calc(var(--radio-size-medium) + var(--space-s, 0.75rem));
}

.radio-error {
  font-size: var(--input-error-font-size);
  color: var(--input-error-color);
}

// Animation
@keyframes radioDot {
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
</style>