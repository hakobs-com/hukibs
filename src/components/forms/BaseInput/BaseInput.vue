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
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
}

.input-label {
  font-size: var(--font-size-s, 0.875rem);
  font-weight: 500;
  color: var(--color-foreground, #ffffff);
  display: block;
}

.input-required {
  color: var(--color-error, #ef4444);
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;

  &--small {
    --input-height: 2rem;
    --input-padding: var(--space-xs, 0.5rem);
    --input-font-size: var(--font-size-xs, 0.75rem);
  }

  &--medium {
    --input-height: 2.5rem;
    --input-padding: var(--space-s, 0.75rem);
    --input-font-size: var(--font-size-s, 0.875rem);
  }

  &--large {
    --input-height: 3rem;
    --input-padding: var(--space-m, 1rem);
    --input-font-size: var(--font-size-m, 1rem);
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
    --input-border-color: var(--color-error, #ef4444);
  }
}

.input {
  width: 100%;
  height: var(--input-height);
  padding: 0 var(--input-padding);
  background: var(--color-background, #000000);
  border: 1px solid var(--input-border-color, rgba(255, 255, 255, 0.2));
  border-radius: var(--input-radius, var(--space-xs, 0.5rem));
  color: var(--color-foreground, #ffffff);
  font-size: var(--input-font-size);
  transition: all 0.2s ease;

  &::placeholder {
    color: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary, #3b82f6);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary, #3b82f6), transparent 80%);
  }

  &:disabled {
    background: var(--color-accent, rgba(255, 255, 255, 0.05));
    cursor: not-allowed;
  }

  &:readonly {
    background: var(--color-accent, rgba(255, 255, 255, 0.05));
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
  color: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  pointer-events: none;
  font-size: 1.2em;

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
  color: var(--color-text-secondary, rgba(255, 255, 255, 0.5));
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: var(--color-foreground, #ffffff);
  }
}

.input-description {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-text-secondary, rgba(255, 255, 255, 0.7));
}

.input-error {
  font-size: var(--font-size-xs, 0.75rem);
  color: var(--color-error, #ef4444);
}
</style>