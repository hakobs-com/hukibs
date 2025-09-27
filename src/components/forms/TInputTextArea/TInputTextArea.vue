<template>
  <div :class="bemm()">
    <label v-if="label" :for="id" :class="bemm('label')">
      {{ label }}
    </label>
    
    <div :class="bemm('control-wrapper')">
      <textarea
        :id="id"
        ref="control"
        :value="modelValue"
        :style="textareaStyle"
        :class="[bemm('control'), { 'no-resize': !allowResize }]"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :spellcheck="spellcheck"
        @input="handleInput"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @keydown="handleKeydown"
      />
    </div>
    
    <div v-if="description || showCount" :class="bemm('footer')">
      <p v-if="description" :class="bemm('description')">
        {{ description }}
      </p>
      <span v-if="showCount && maxlength" :class="bemm('count')">
        {{ (modelValue || '').length }}/{{ maxlength }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useBemm } from 'bemm'
import type { TInputTextAreaProps, TInputTextAreaEmits } from './TInputTextArea.model'

const props = withDefaults(defineProps<TInputTextAreaProps>(), {
  modelValue: '',
  label: '',
  placeholder: '',
  autoGrow: true,
  allowResize: false,
  minRows: 3,
  maxRows: 10,
  disabled: false,
  readonly: false,
  spellcheck: true,
  showCount: false
})

const emit = defineEmits<TInputTextAreaEmits>()

const bemm = useBemm('t-input-textarea')
const control = ref<HTMLTextAreaElement>()
const id = `textarea-${Math.random().toString(36).substr(2, 9)}`

const controlHeight = ref(0)
const lineHeight = ref(0)

// Calculate base styles including line height and min/max heights
const textareaStyle = computed(() => {
  const styles: Record<string, string> = {}

  if (props.autoGrow && controlHeight.value) {
    styles.height = `${controlHeight.value}px`
  }

  if (props.minRows && lineHeight.value) {
    styles.minHeight = `${props.minRows * lineHeight.value}px`
  }

  if (props.maxRows && lineHeight.value) {
    styles.maxHeight = `${props.maxRows * lineHeight.value}px`
  }

  return styles
})

const handleAutoGrow = (element: HTMLTextAreaElement) => {
  if (!props.autoGrow) return

  // Reset height to auto to get proper scrollHeight
  element.style.height = 'auto'

  // Get the line height if we haven't yet
  if (!lineHeight.value) {
    const computedStyle = window.getComputedStyle(element)
    lineHeight.value = parseInt(computedStyle.lineHeight)
  }

  // Calculate new height
  let newHeight = element.scrollHeight

  // Apply min/max constraints
  if (props.minRows && lineHeight.value) {
    const minHeight = props.minRows * lineHeight.value
    newHeight = Math.max(newHeight, minHeight)
  }

  if (props.maxRows && lineHeight.value) {
    const maxHeight = props.maxRows * lineHeight.value
    newHeight = Math.min(newHeight, maxHeight)
  }

  controlHeight.value = newHeight
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  const value = target.value
  
  emit('update:modelValue', value)
  emit('change', value)
  
  if (props.autoGrow) {
    handleAutoGrow(target)
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
    emit('submit', event)
  }
}

onMounted(() => {
  if (control.value) {
    // Get initial line height
    const computedStyle = window.getComputedStyle(control.value)
    lineHeight.value = parseInt(computedStyle.lineHeight)

    // Set initial height based on minRows
    if (props.autoGrow) {
      controlHeight.value = props.minRows * lineHeight.value

      // If there's initial content, adjust height accordingly
      if (props.modelValue) {
        handleAutoGrow(control.value)
      }
    }
  }
})
</script>

<style lang="scss">
.t-input-textarea {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);

  &__label {
    font-weight: var(--font-weight-semibold);
    color: var(--color-foreground);
    font-size: var(--font-size-s);
  }

  &__control-wrapper {
    position: relative;
  }

  &__control {
    width: 100%;
    padding: var(--space-s);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    background: var(--color-background);
    color: var(--color-foreground);
    font-family: inherit;
    font-size: var(--font-size-m);
    line-height: 1.5;
    resize: vertical;
    transition: border-color 0.2s ease;

    &::placeholder {
      color: var(--color-foreground-secondary);
    }

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary), transparent 80%);
    }

    &:disabled {
      background: var(--color-accent);
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:read-only {
      background: var(--color-accent);
      cursor: default;
    }

    &.no-resize {
      resize: none;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-s);
  }

  &__description {
    color: var(--color-foreground-secondary);
    font-size: var(--font-size-s);
    margin: 0;
  }

  &__count {
    color: var(--color-foreground-secondary);
    font-size: var(--font-size-s);
    font-variant-numeric: tabular-nums;
  }
}
</style>