<template>
  <div class="url-input">
    <BaseInput
      :type="'url'"
      :model-value="modelValue"
      :size="size"
      :variant="variant"
      :label="label"
      :placeholder="placeholder"
      :description="description"
      :error="displayError"
      :disabled="disabled"
      :readonly="readonly"
      :required="required"
      :clearable="clearable"
      :autocomplete="autocomplete"
      :prefix-icon="prefixIcon"
      @update:model-value="handleInput"
      @blur="handleBlur"
    />
    
    <!-- URL Preview -->
    <div v-if="showPreview && validUrl" class="url-preview">
      <div class="url-preview-header">
        <Icon name="link" />
        <span>Preview</span>
      </div>
      <div class="url-preview-content">
        <div class="url-preview-domain">
          {{ urlDomain }}
        </div>
        <div class="url-preview-path">
          {{ urlPath }}
        </div>
        <a 
          v-if="isValidUrl"
          :href="formattedUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="url-preview-link"
        >
          <Icon name="external-link" />
          Open in new tab
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { BaseInput } from '../BaseInput'
import { Icon } from '../../ui/Icon'
import type { InputUrlProps } from './InputUrl.model'

const props = withDefaults(defineProps<InputUrlProps>(), {
  placeholder: 'https://example.com',
  autocomplete: 'url',
  validate: true,
  allowedProtocols: () => ['http:', 'https:', 'ftp:', 'mailto:', 'tel:'],
  autoAddProtocol: true,
  showPreview: false,
  clearable: true
})

const modelValue = defineModel<string>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  validity: [isValid: boolean]
}>()

// URL validation uses native URL API for better accuracy

const isValidUrl = computed(() => {
  if (!props.validate || !modelValue.value) return true
  
  try {
    const url = new URL(modelValue.value)
    return props.allowedProtocols.includes(url.protocol)
  } catch {
    return false
  }
})

const validUrl = computed(() => {
  if (!modelValue.value) return null
  
  try {
    return new URL(modelValue.value)
  } catch {
    return null
  }
})

const urlDomain = computed(() => {
  if (!validUrl.value) return ''
  return `${validUrl.value.protocol}//${validUrl.value.host}`
})

const urlPath = computed(() => {
  if (!validUrl.value) return ''
  const path = validUrl.value.pathname + validUrl.value.search + validUrl.value.hash
  return path || '/'
})

const formattedUrl = computed(() => {
  if (!modelValue.value) return ''
  
  let url = modelValue.value.trim()
  
  // Auto-add protocol if missing
  if (props.autoAddProtocol && !url.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//)) {
    url = `https://${url}`
  }
  
  return url
})

const displayError = computed(() => {
  if (!props.validate) return props.error
  
  if (props.error) {
    return typeof props.error === 'string' ? props.error : props.error.join(', ')
  }
  
  if (modelValue.value && !isValidUrl.value) {
    return 'Please enter a valid URL'
  }
  
  return undefined
})

const handleInput = (value: string | undefined) => {
  if (value === undefined) return
  
  modelValue.value = value
  emit('update:modelValue', value)
  
  if (props.validate) {
    emit('validity', isValidUrl.value)
  }
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
  
  // Auto-format on blur if enabled
  if (props.autoAddProtocol && modelValue.value) {
    let url = modelValue.value.trim()
    
    if (!url.match(/^[a-zA-Z][a-zA-Z0-9+.-]*:\/\//)) {
      url = `https://${url}`
      modelValue.value = url
      emit('update:modelValue', url)
    }
  }
  
  if (props.validate) {
    emit('validity', isValidUrl.value)
  }
}

const prefixIcon = computed(() => 'link')
</script>

<style lang="scss" scoped>
.url-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--space-s, 0.75rem);
}

.url-preview {
  background: var(--color-accent, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--input-border);
  border-radius: var(--input-radius);
  padding: var(--space-s, 0.75rem);
  font-size: var(--input-description-font-size);
}

.url-preview-header {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
  font-weight: 500;
  color: var(--input-foreground);
  margin-bottom: var(--space-xs, 0.25rem);
}

.url-preview-content {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
}

.url-preview-domain {
  color: var(--color-primary, #3b82f6);
  font-weight: 500;
  font-family: monospace;
  word-break: break-all;
}

.url-preview-path {
  color: var(--input-description-color);
  font-family: monospace;
  font-size: 0.875em;
  word-break: break-all;
}

.url-preview-link {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
  color: var(--color-primary, #3b82f6);
  text-decoration: none;
  font-size: 0.875em;
  transition: var(--input-transition);
  align-self: flex-start;
  
  &:hover {
    color: var(--color-primary-hover, #2563eb);
    text-decoration: underline;
  }
  
  .icon {
    font-size: 0.875em;
  }
}
</style>