<template>
  <div class="toggle-wrapper" :class="wrapperClasses">
    <label class="toggle-label" :class="labelClasses">
      <input
        ref="inputRef"
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        class="toggle-input"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      
      <div class="toggle-control" :class="controlClasses">
        <div class="toggle-track" :class="trackClasses">
          <div class="toggle-thumb" :class="thumbClasses">
            <div v-if="showLabels" class="toggle-thumb-label">
              {{ internalValue ? labelOn : labelOff }}
            </div>
          </div>
          <div v-if="ripple && !disabled" class="toggle-ripple" />
        </div>
      </div>
      
      <div class="toggle-content">
        <span v-if="label" class="toggle-text">{{ label }}</span>
        <span v-if="required" class="toggle-required">*</span>
        <slot />
      </div>
    </label>
    
    <div v-if="description" class="toggle-description">
      {{ description }}
    </div>
    
    <div v-if="error && error.length" class="toggle-errors">
      <div v-for="err in Array.isArray(error) ? error : [error]" :key="err" class="toggle-error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ToggleProps } from './Toggle.model'

const props = withDefaults(defineProps<ToggleProps>(), {
  size: 'medium',
  color: 'primary',
  ripple: true,
  labelOn: 'ON',
  labelOff: 'OFF',
  showLabels: false
})

const modelValue = defineModel<boolean>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  change: [value: boolean]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const inputRef = ref<HTMLInputElement>()
const isFocused = ref(false)

const internalValue = computed({
  get: () => Boolean(modelValue.value),
  set: (value: boolean) => {
    modelValue.value = value
    emit('update:modelValue', value)
    emit('change', value)
  }
})

// CSS classes
const wrapperClasses = computed(() => [
  'toggle-wrapper',
  `toggle-wrapper--${props.size}`,
  `toggle-wrapper--${props.color}`,
  {
    'toggle-wrapper--disabled': props.disabled,
    'toggle-wrapper--error': props.error,
    'toggle-wrapper--focused': isFocused.value,
    'toggle-wrapper--checked': internalValue.value
  },
  props.class
])

const labelClasses = computed(() => [
  'toggle-label',
  `toggle-label--${props.size}`,
  {
    'toggle-label--disabled': props.disabled
  }
])

const controlClasses = computed(() => [
  'toggle-control',
  `toggle-control--${props.size}`,
  {
    'toggle-control--checked': internalValue.value,
    'toggle-control--disabled': props.disabled,
    'toggle-control--focused': isFocused.value
  }
])

const trackClasses = computed(() => [
  'toggle-track',
  `toggle-track--${props.size}`,
  `toggle-track--${props.color}`,
  {
    'toggle-track--checked': internalValue.value,
    'toggle-track--disabled': props.disabled
  }
])

const thumbClasses = computed(() => [
  'toggle-thumb',
  `toggle-thumb--${props.size}`,
  {
    'toggle-thumb--checked': internalValue.value,
    'toggle-thumb--disabled': props.disabled
  }
])

// Event handlers
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  internalValue.value = target.checked
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
// Global toggle CSS custom properties
:root {
  // Toggle sizing
  --toggle-width-small: 2.5rem;
  --toggle-height-small: 1.25rem;
  --toggle-width-medium: 3rem;
  --toggle-height-medium: 1.5rem;
  --toggle-width-large: 3.5rem;
  --toggle-height-large: 1.75rem;
  
  // Toggle thumb sizing
  --toggle-thumb-size-small: 0.75rem;
  --toggle-thumb-size-medium: 1rem;
  --toggle-thumb-size-large: 1.25rem;
  
  // Toggle colors
  --toggle-background: var(--color-accent, rgba(255, 255, 255, 0.2));
  --toggle-background-hover: var(--color-accent, rgba(255, 255, 255, 0.3));
  --toggle-background-checked: var(--color-primary, #3b82f6);
  --toggle-thumb-background: #ffffff;
  --toggle-thumb-border: var(--input-border);
  
  // Toggle color variants
  --toggle-primary-background: var(--color-primary, #3b82f6);
  --toggle-success-background: var(--color-success, #10b981);
  --toggle-warning-background: var(--color-warning, #f59e0b);
  --toggle-error-background: var(--color-error, #ef4444);
  --toggle-info-background: var(--color-info, #3b82f6);
  
  // Toggle transitions
  --toggle-transition: all 0.2s ease;
  --toggle-ripple-transition: all 0.3s ease;
}

.toggle-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  
  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }
  
  &--error {
    .toggle-text {
      color: var(--input-error-color);
    }
  }
  
  &--focused {
    .toggle-track {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-border-focus), transparent 80%);
    }
  }
}

.toggle-label {
  display: flex;
  align-items: center;
  gap: var(--space-s, 0.75rem);
  cursor: pointer;
  user-select: none;
  
  &--disabled {
    cursor: not-allowed;
  }
}

.toggle-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  
  &:focus-visible + .toggle-control .toggle-track {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-border-focus), transparent 80%);
  }
}

.toggle-control {
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-track {
  position: relative;
  background: var(--toggle-background);
  border-radius: 100px;
  transition: var(--toggle-transition);
  cursor: pointer;
  
  &--small {
    width: var(--toggle-width-small);
    height: var(--toggle-height-small);
  }
  
  &--medium {
    width: var(--toggle-width-medium);
    height: var(--toggle-height-medium);
  }
  
  &--large {
    width: var(--toggle-width-large);
    height: var(--toggle-height-large);
  }
  
  &:hover:not(.toggle-track--disabled) {
    background: var(--toggle-background-hover);
  }
  
  &--checked {
    background: var(--toggle-background-checked);
    
    &.toggle-track--primary {
      background: var(--toggle-primary-background);
    }
    
    &.toggle-track--success {
      background: var(--toggle-success-background);
    }
    
    &.toggle-track--warning {
      background: var(--toggle-warning-background);
    }
    
    &.toggle-track--error {
      background: var(--toggle-error-background);
    }
    
    &.toggle-track--info {
      background: var(--toggle-info-background);
    }
  }
  
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.toggle-thumb {
  position: absolute;
  background: var(--toggle-thumb-background);
  border: 2px solid var(--toggle-thumb-border);
  border-radius: 50%;
  transition: var(--toggle-transition);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  left: 2px;
  
  &--small {
    width: var(--toggle-thumb-size-small);
    height: var(--toggle-thumb-size-small);
  }
  
  &--medium {
    width: var(--toggle-thumb-size-medium);
    height: var(--toggle-thumb-size-medium);
  }
  
  &--large {
    width: var(--toggle-thumb-size-large);
    height: var(--toggle-thumb-size-large);
  }
  
  &--checked {
    left: calc(100% - var(--toggle-thumb-size-medium) - 2px);
    
    &.toggle-thumb--small {
      left: calc(100% - var(--toggle-thumb-size-small) - 2px);
    }
    
    &.toggle-thumb--large {
      left: calc(100% - var(--toggle-thumb-size-large) - 2px);
    }
  }
  
  &--disabled {
    opacity: 0.7;
  }
}

.toggle-thumb-label {
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--color-background, #000000);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.toggle-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0);
  transition: var(--toggle-ripple-transition);
  pointer-events: none;
  
  .toggle-track:hover & {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.toggle-content {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.125rem;
}

.toggle-text {
  color: var(--input-foreground);
  font-size: var(--input-font-size);
  line-height: 1.4;
}

.toggle-required {
  color: var(--input-error-color);
  margin-left: 0.125rem;
}

.toggle-description {
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
  margin-left: calc(var(--toggle-width-medium) + var(--space-s, 0.75rem));
}

.toggle-errors {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  margin-left: calc(var(--toggle-width-medium) + var(--space-s, 0.75rem));
}

.toggle-error {
  font-size: var(--input-error-font-size);
  color: var(--input-error-color);
}
</style>