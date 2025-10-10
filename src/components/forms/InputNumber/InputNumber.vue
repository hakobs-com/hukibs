<template>
  <div class="number-input">
    <div class="number-input-wrapper">
      <!-- Prefix -->
      <div v-if="prefix" class="number-input-prefix">
        {{ prefix }}
      </div>
      
      <!-- Input with controls -->
      <div class="number-input-container">
        <BaseInput
          :type="'text'"
          :model-value="displayValue"
          :size="size"
          :variant="variant"
          :label="label"
          :placeholder="placeholder"
          :description="description"
          :error="error"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :clearable="clearable"
          :prefix-icon="prefixIcon"
          :suffix-icon="suffixIcon"
          @update:model-value="handleInput"
          @blur="handleBlur"
          @focus="handleFocus"
          @keydown="handleKeydown"
        />
        
        <!-- Increment/Decrement controls -->
        <div v-if="controls" class="number-input-controls">
          <button
            type="button"
            class="number-input-control number-input-control--up"
            :disabled="disabled || readonly || (max !== undefined && internalValue >= max)"
            @click="increment"
          >
            <Icon name="chevron-up" />
          </button>
          <button
            type="button"
            class="number-input-control number-input-control--down"
            :disabled="disabled || readonly || (min !== undefined && internalValue <= min)"
            @click="decrement"
          >
            <Icon name="chevron-down" />
          </button>
        </div>
      </div>
      
      <!-- Suffix -->
      <div v-if="suffix" class="number-input-suffix">
        {{ suffix }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import { BaseInput } from '../BaseInput'
import { Icon } from '../../ui/Icon'
import type { InputNumberProps } from './InputNumber.model'

const props = withDefaults(defineProps<InputNumberProps>(), {
  step: 1,
  controls: true,
  precision: 0,
  locale: 'en-US'
})

const modelValue = defineModel<number | null>()

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
  blur: [event: FocusEvent]
  focus: [event: FocusEvent]
  increment: [value: number]
  decrement: [value: number]
}>()

const isFocused = ref(false)
const inputElement = ref<HTMLInputElement>()

const internalValue = ref<number | null>(modelValue.value ?? null)

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  if (newValue !== internalValue.value) {
    internalValue.value = newValue
  }
})

// Format the display value
const displayValue = computed(() => {
  if (!isFocused.value && internalValue.value !== null) {
    if (props.locale) {
      return internalValue.value.toLocaleString(props.locale, {
        minimumFractionDigits: props.precision,
        maximumFractionDigits: props.precision
      })
    }
    return internalValue.value.toFixed(props.precision)
  }
  return internalValue.value?.toString() || ''
})

// Validation helpers
const isValidNumber = (value: string): boolean => {
  const num = parseFloat(value)
  return !isNaN(num) && isFinite(num)
}

const clampValue = (value: number): number => {
  if (props.min !== undefined && value < props.min) return props.min
  if (props.max !== undefined && value > props.max) return props.max
  return value
}

const applyPrecision = (value: number): number => {
  const factor = Math.pow(10, props.precision)
  return Math.round(value * factor) / factor
}

// Event handlers
const handleInput = (value: string) => {
  if (value === '') {
    internalValue.value = null
    modelValue.value = null
    return
  }
  
  if (isValidNumber(value)) {
    let num = parseFloat(value)
    num = clampValue(num)
    num = applyPrecision(num)
    internalValue.value = num
    modelValue.value = num
  }
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
  
  // Select all text when focused
  nextTick(() => {
    if (inputElement.value) {
      inputElement.value.select()
    }
  })
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
  
  // Re-format on blur
  if (internalValue.value !== null) {
    const formatted = applyPrecision(clampValue(internalValue.value))
    internalValue.value = formatted
    modelValue.value = formatted
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (props.disabled || props.readonly) return
  
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      increment()
      break
    case 'ArrowDown':
      event.preventDefault()
      decrement()
      break
    case 'Enter':
      event.preventDefault()
      handleBlur(event as any)
      break
  }
}

const increment = () => {
  if (props.disabled || props.readonly) return
  
  const currentValue = internalValue.value ?? 0
  let newValue = currentValue + props.step
  newValue = clampValue(newValue)
  newValue = applyPrecision(newValue)
  
  internalValue.value = newValue
  modelValue.value = newValue
  emit('increment', newValue)
}

const decrement = () => {
  if (props.disabled || props.readonly) return
  
  const currentValue = internalValue.value ?? 0
  let newValue = currentValue - props.step
  newValue = clampValue(newValue)
  newValue = applyPrecision(newValue)
  
  internalValue.value = newValue
  modelValue.value = newValue
  emit('decrement', newValue)
}

// Icons
const prefixIcon = computed(() => !props.prefix && !props.controls ? 'hash' : undefined)
const suffixIcon = computed(() => !props.suffix && !props.controls ? undefined : undefined)
</script>

<style lang="scss" scoped>
.number-input {
  width: 100%;
}

.number-input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
}

.number-input-container {
  flex: 1;
  position: relative;
}

.number-input-prefix,
.number-input-suffix {
  display: flex;
  align-items: center;
  padding: 0 var(--input-padding);
  background: var(--input-background);
  border: 1px solid var(--input-border);
  color: var(--input-foreground);
  font-size: var(--input-font-size);
  font-weight: var(--input-font-weight);
  white-space: nowrap;
  user-select: none;
  
  &:first-child {
    border-radius: var(--input-radius) 0 0 var(--input-radius);
    border-right: none;
  }
  
  &:last-child {
    border-radius: 0 var(--input-radius) var(--input-radius) 0;
    border-left: none;
  }
}

.number-input-controls {
  position: absolute;
  right: calc(var(--input-padding) + 2px);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--input-background);
  border-radius: calc(var(--input-radius) * 0.5);
  border: 1px solid var(--input-border);
  overflow: hidden;
}

.number-input-control {
  background: none;
  border: none;
  padding: 0;
  width: 1.5rem;
  height: calc(var(--input-height) / 2 - 1px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--input-icon-color);
  transition: var(--input-transition);
  font-size: 0.75rem;
  
  &:hover:not(:disabled) {
    background: var(--color-accent, rgba(255, 255, 255, 0.1));
    color: var(--input-foreground);
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &--up {
    border-radius: calc(var(--input-radius) * 0.3) calc(var(--input-radius) * 0.3) 0 0;
  }
  
  &--down {
    border-radius: 0 0 calc(var(--input-radius) * 0.3) calc(var(--input-radius) * 0.3);
  }
}

// Adjust BaseInput when controls are present
:deep(.input-container:has(.number-input-controls)) {
  .input {
    padding-right: calc(var(--input-padding) * 3);
  }
}
</style>