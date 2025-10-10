<template>
  <div class="input-wrapper">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="input-required">*</span>
    </label>
    
    <div v-if="description" class="input-description">
      {{ description }}
    </div>
    
    <div class="input-container" :class="inputContainerClasses">
      <slot
        name="control" 
        :id="inputId"
        :value="modelValue"
        :disabled="disabled"
        :handle-input="handleInput"
      >
        <!-- Default input control -->
        <Icon v-if="prefixIcon" :name="prefixIcon" class="input-icon input-icon--prefix" />
        
        <input
          :id="inputId"
          v-model="modelValue"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :class="inputClasses"
          v-bind="$attrs"
          @focus="$emit('focus', $event)"
          @blur="$emit('blur', $event)"
          @input="handleInput"
          @change="$emit('change', $event)"
        />
        
        <Icon v-if="suffixIcon" :name="suffixIcon" class="input-icon input-icon--suffix" />
        
        <button
          v-if="clearable && modelValue"
          type="button"
          class="input-clear"
          @click="handleClear"
          :title="clearTitle"
        >
          <Icon name="multiply" />
        </button>
      </slot>
    </div>
    
    <div v-if="error && error.length" class="input-errors">
      <div v-for="err in error" :key="err" class="input-error">
        {{ err }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useId } from '../../../composables/useId'
import { Icon } from '../../ui/Icon'
import type { BaseInputProps } from './BaseInput.model'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  size: 'medium',
  variant: 'default',
  clearTitle: 'Clear'
})

const inputId = useId('input')

const modelValue = defineModel<string>()

const emit = defineEmits<{
  focus: [event: FocusEvent]
  blur: [event: FocusEvent] 
  input: [event: Event]
  change: [event: Event]
  clear: []
  touched: [value: boolean]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLSelectElement
  modelValue.value = target.value
  emit('input', event)
}

const inputContainerClasses = computed(() => [
  'input-container',
  `input-container--${props.size}`,
  `input-container--${props.variant}`,
  props.disabled && 'input-container--disabled',
  props.readonly && 'input-container--readonly',
  props.error && 'input-container--error',
  props.prefixIcon && 'input-container--has-prefix',
  props.suffixIcon && 'input-container--has-suffix',
  (props.clearable && modelValue.value) && 'input-container--has-clear'
])

const inputClasses = computed(() => [
  'input',
  `input--${props.size}`,
  `input--${props.variant}`
])

const handleClear = () => {
  modelValue.value = ''
  emit('clear')
}
</script>

<style lang="scss">
// Global form input CSS custom properties
:root {
  // Input sizing
  --input-height-small: 2rem;
  --input-height-medium: 2.5rem;
  --input-height-large: 3rem;
  
  // Input padding
  --input-padding-small: 0.5rem;
  --input-padding-medium: 0.75rem;
  --input-padding-large: 1rem;
  --input-padding: var(--input-padding-medium);
  
  // Input typography
  --input-font-size-small: 0.75rem;
  --input-font-size-medium: 0.875rem;
  --input-font-size-large: 1rem;
  --input-font-weight: 400;
  
  // Input colors
  --input-background: var(--color-background, #000000);
  --input-foreground: var(--color-foreground, #ffffff);
  --input-border: rgba(255, 255, 255, 0.2);
  --input-border-hover: rgba(255, 255, 255, 0.3);
  --input-border-focus: var(--color-primary, #3b82f6);
  --input-border-error: var(--color-error, #ef4444);
  --input-placeholder: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  
  // Input states
  --input-background-disabled: var(--color-accent, rgba(255, 255, 255, 0.05));
  --input-background-readonly: var(--color-accent, rgba(255, 255, 255, 0.05));
  --input-foreground-disabled: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  
  // Input border radius
  --input-radius: 0.5rem;
  --input-radius-small: 0.25rem;
  --input-radius-large: 0.75rem;
  
  // Focus ring
  --input-focus-ring: 0 0 0 2px color-mix(in srgb, var(--input-border-focus), transparent 80%);
  --input-focus-ring-error: 0 0 0 2px color-mix(in srgb, var(--input-border-error), transparent 80%);
  
  // Icon sizing and colors
  --input-icon-size: 1.2em;
  --input-icon-color: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  --input-icon-hover: var(--input-foreground);
  
  // Label and helper text
  --input-label-color: var(--input-foreground);
  --input-label-font-size: 0.875rem;
  --input-label-font-weight: 500;
  --input-description-color: var(--color-text-secondary, rgba(255, 255, 255, 0.7));
  --input-description-font-size: 0.75rem;
  --input-error-color: var(--input-border-error);
  --input-error-font-size: 0.75rem;
  
  // Transitions
  --input-transition: all 0.2s ease;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
}

.input-label {
  font-size: var(--input-label-font-size);
  font-weight: var(--input-label-font-weight);
  color: var(--input-label-color);
  display: block;
}

.input-required {
  color: var(--input-error-color);
  margin-left: 0.125rem;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;

  &--small {
    --input-height: var(--input-height-small);
    --input-padding: var(--input-padding-small);
    --input-font-size: var(--input-font-size-small);
    --input-radius: var(--input-radius-small);
  }

  &--medium {
    --input-height: var(--input-height-medium);
    --input-padding: var(--input-padding-medium);
    --input-font-size: var(--input-font-size-medium);
  }

  &--large {
    --input-height: var(--input-height-large);
    --input-padding: var(--input-padding-large);
    --input-font-size: var(--input-font-size-large);
    --input-radius: var(--input-radius-large);
  }

  &--has-prefix .input {
    padding-left: calc(var(--input-padding) * 2.5);
  }

  &--has-suffix .input,
  &--has-clear .input {
    padding-right: calc(var(--input-padding) * 2.5);
  }

  &--disabled {
    opacity: 0.6;
    pointer-events: none;
  }

  &--error {
    --input-border: var(--input-border-error);
  }

  &--ghost .input {
    background: transparent;
    border-color: transparent;
    
    &:focus {
      background: var(--input-background);
      border-color: var(--input-border-focus);
    }
  }
}

.input {
  width: 100%;
  height: var(--input-height);
  padding: 0 var(--input-padding);
  background: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: var(--input-radius);
  color: var(--input-foreground);
  font-size: var(--input-font-size);
  font-weight: var(--input-font-weight);
  transition: var(--input-transition);

  &::placeholder {
    color: var(--input-placeholder);
  }

  &:hover:not(:disabled):not(:focus) {
    border-color: var(--input-border-hover);
  }

  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
    box-shadow: var(--input-focus-ring);
  }

  &:focus:invalid {
    border-color: var(--input-border-error);
    box-shadow: var(--input-focus-ring-error);
  }

  &:disabled {
    background: var(--input-background-disabled);
    color: var(--input-foreground-disabled);
    cursor: not-allowed;
  }

  &:readonly {
    background: var(--input-background-readonly);
  }

  // Remove default search input styling
  &[type="search"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      display: none;
    }
  }
}

.input-icon {
  position: absolute;
  color: var(--input-icon-color);
  pointer-events: none;
  font-size: var(--input-icon-size);

  &--prefix {
    left: var(--input-padding);
  }

  &--suffix {
    right: var(--input-padding);
  }
}

.input-clear {
  position: absolute;
  right: var(--input-padding);
  background: none;
  border: none;
  color: var(--input-icon-color);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--input-transition);

  &:hover {
    color: var(--input-icon-hover);
  }
}

.input-description {
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
}

.input-error {
  font-size: var(--input-error-font-size);
  color: var(--input-error-color);
}
</style>