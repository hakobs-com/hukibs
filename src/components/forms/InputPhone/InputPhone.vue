<template>
  <div class="phone-input">
    <div class="phone-input-wrapper">
      <!-- Country Selector -->
      <div v-if="showCountrySelector" class="phone-input-country">
        <select
          v-model="selectedCountry"
          :disabled="disabled"
          :readonly="readonly"
          class="phone-input-country-select"
          @change="handleCountryChange"
        >
          <option v-for="country in countries" :key="country.code" :value="country.code">
            {{ country.flag }} {{ country.dialCode }}
          </option>
        </select>
      </div>
      
      <!-- Phone Input -->
      <div class="phone-input-container">
        <BaseInput
          :type="'tel'"
          :model-value="displayValue"
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
          :prefix-icon="prefixIcon"
          :autocomplete="autocomplete"
          @update:model-value="handleInput"
          @blur="handleBlur"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { BaseInput } from '../BaseInput'
import type { InputPhoneProps } from './InputPhone.model'

interface Country {
  code: string
  name: string
  dialCode: string
  flag: string
  format: string
}

const props = withDefaults(defineProps<InputPhoneProps>(), {
  placeholder: 'Phone number',
  defaultCountry: 'US',
  showCountrySelector: true,
  autoFormat: true,
  international: false,
  clearable: true
})

const modelValue = defineModel<string>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  validity: [isValid: boolean]
  countryChange: [country: Country]
}>()

// Country data
const countries: Country[] = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', format: '(XXX) XXX-XXXX' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', format: 'XXXX XXXXXX' },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', format: '(XXX) XXX-XXXX' },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', format: 'XXXX XXX XXX' },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', format: 'XXX XXXXXXX' },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', format: 'XX XX XX XX XX' },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', format: 'XXX XXXXXXX' },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', format: 'XXX XXX XXX' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31', flag: '🇳🇱', format: 'XX XXX XXXX' },
  { code: 'BE', name: 'Belgium', dialCode: '+32', flag: '🇧🇪', format: 'XXX XX XX XX' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41', flag: '🇨🇭', format: 'XXX XXX XX XX' },
  { code: 'AT', name: 'Austria', dialCode: '+43', flag: '🇦🇹', format: 'XXX XXXXXXX' },
  { code: 'SE', name: 'Sweden', dialCode: '+46', flag: '🇸🇪', format: 'XXX XXX XXXX' },
  { code: 'NO', name: 'Norway', dialCode: '+47', flag: '🇳🇴', format: 'XXXX XX XXX' },
  { code: 'DK', name: 'Denmark', dialCode: '+45', flag: '🇩🇰', format: 'XX XX XX XX' },
  { code: 'FI', name: 'Finland', dialCode: '+358', flag: '🇫🇮', format: 'XX XXX XXXX' },
  { code: 'PL', name: 'Poland', dialCode: '+48', flag: '🇵🇱', format: 'XXX XXX XXX' },
  { code: 'CZ', name: 'Czech Republic', dialCode: '+420', flag: '🇨🇿', format: 'XXX XXX XXX' },
  { code: 'HU', name: 'Hungary', dialCode: '+36', flag: '🇭🇺', format: 'XXX XXX XXX' },
  { code: 'GR', name: 'Greece', dialCode: '+30', flag: '🇬🇷', format: 'XXX XXX XXXX' },
  { code: 'PT', name: 'Portugal', dialCode: '+351', flag: '🇵🇹', format: 'XXX XXX XXX' },
  { code: 'IE', name: 'Ireland', dialCode: '+353', flag: '🇮🇪', format: 'XXX XXX XXXX' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64', flag: '🇳🇿', format: 'XXX XXX XXXX' },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', format: 'XXXX XXXX' },
  { code: 'HK', name: 'Hong Kong', dialCode: '+852', flag: '🇭🇰', format: 'XXXX XXXX' },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', format: 'XX XXXX XXXX' },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', format: 'XX XXXX XXXX' },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', format: 'XXX XXXX XXXX' },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', format: 'XXXXXX XXXXX' },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', format: 'XX XXXXX XXXX' },
  { code: 'MX', name: 'Mexico', dialCode: '+52', flag: '🇲🇽', format: 'XX XXXX XXXX' },
  { code: 'AR', name: 'Argentina', dialCode: '+54', flag: '🇦🇷', format: 'XX XXXX XXXX' },
  { code: 'RU', name: 'Russia', dialCode: '+7', flag: '🇷🇺', format: 'XXX XXX XX XX' },
  { code: 'TR', name: 'Turkey', dialCode: '+90', flag: '🇹🇷', format: 'XXX XXX XXXX' },
  { code: 'IL', name: 'Israel', dialCode: '+972', flag: '🇮🇱', format: 'XX XXX XXXX' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', flag: '🇸🇦', format: 'XX XXX XXXX' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27', flag: '🇿🇦', format: 'XX XXX XXXX' },
  { code: 'EG', name: 'Egypt', dialCode: '+20', flag: '🇪🇬', format: 'XX XXXX XXXX' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234', flag: '🇳🇬', format: 'XX XXX XXXX' },
  { code: 'KE', name: 'Kenya', dialCode: '+254', flag: '🇰🇪', format: 'XX XXX XXXXXX' }
]

const selectedCountry = ref<Country>(countries.find(c => c.code === props.defaultCountry) || countries[0])
const rawPhone = ref('')

// Watch for external changes
watch(() => props.modelValue, (newValue) => {
  if (newValue !== rawPhone.value) {
    rawPhone.value = newValue || ''
  }
})

// Initialize with model value
if (props.modelValue) {
  rawPhone.value = props.modelValue
}

// Phone formatting functions
const formatPhoneNumber = (phone: string, country: Country): string => {
  if (!props.autoFormat) return phone
  
  const digits = phone.replace(/\D/g, '')
  
  let formatted = ''
  let digitIndex = 0
  
  for (let i = 0; i < country.format.length && digitIndex < digits.length; i++) {
    if (country.format[i] === 'X') {
      formatted += digits[digitIndex]
      digitIndex++
    } else {
      formatted += country.format[i]
    }
  }
  
  return formatted
}

const parsePhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '')
}

const isValidPhoneNumber = (phone: string, _country: Country): boolean => {
  const digits = parsePhoneNumber(phone)
  const minLength = 10 // Most countries require at least 10 digits
  const maxLength = 15 // International maximum
  
  return digits.length >= minLength && digits.length <= maxLength
}

// Computed values
const currentCountry = computed(() => 
  countries.find(c => c.code === selectedCountry.value.code) || countries[0]
)

const displayValue = computed(() => 
  formatPhoneNumber(rawPhone.value, currentCountry.value)
)

const displayError = computed(() => {
  if (props.error) return props.error
  
  if (rawPhone.value && !isValidPhoneNumber(rawPhone.value, currentCountry.value)) {
    return 'Please enter a valid phone number'
  }
  
  return undefined
})

const autocomplete = computed(() => 
  props.international ? 'tel-country-code' : 'tel-national'
)

const prefixIcon = computed(() => 'phone')

// Event handlers
const handleInput = (value: string | undefined) => {
  if (!value) return
  
  rawPhone.value = value
  
  if (props.international && props.showCountrySelector) {
    const internationalValue = `${currentCountry.value.dialCode} ${parsePhoneNumber(value)}`
    modelValue.value = internationalValue
  } else {
    modelValue.value = value
  }
  
  emit('update:modelValue', modelValue.value || '')
  emit('validity', isValidPhoneNumber(value, currentCountry.value))
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
  
  if (props.autoFormat) {
    rawPhone.value = formatPhoneNumber(rawPhone.value, currentCountry.value)
    handleInput(rawPhone.value)
  }
  
  emit('validity', isValidPhoneNumber(rawPhone.value, currentCountry.value))
}

const handleCountryChange = () => {
  const country = currentCountry.value
  emit('countryChange', country)
  
  // Reformat with new country
  if (rawPhone.value && props.autoFormat) {
    rawPhone.value = formatPhoneNumber(rawPhone.value, country)
    handleInput(rawPhone.value)
  }
}

// Initialize country if modelValue contains country code
if (props.modelValue && props.international) {
  const dialCodeMatch = props.modelValue.match(/^\+(\d+)/)
  if (dialCodeMatch) {
    const dialCode = `+${dialCodeMatch[1]}`
    const country = countries.find(c => c.dialCode === dialCode)
    if (country) {
      selectedCountry.value = country
      rawPhone.value = props.modelValue.replace(dialCode, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
.phone-input {
  width: 100%;
}

.phone-input-wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
}

.phone-input-container {
  flex: 1;
}

.phone-input-country {
  display: flex;
  align-items: center;
}

.phone-input-country-select {
  height: var(--input-height);
  padding: 0 var(--space-s, 0.75rem);
  background: var(--input-background);
  border: 1px solid var(--input-border);
  border-radius: var(--input-radius);
  color: var(--input-foreground);
  font-size: var(--input-font-size);
  cursor: pointer;
  transition: var(--input-transition);
  
  &:hover:not(:disabled) {
    border-color: var(--input-border-hover);
  }
  
  &:focus {
    outline: none;
    border-color: var(--input-border-focus);
    box-shadow: var(--input-focus-ring);
  }
  
  &:disabled {
    background: var(--input-background-disabled);
    cursor: not-allowed;
    opacity: 0.6;
  }
  
  // Custom styling for country selector
  min-width: 5rem;
  font-weight: 500;
}
</style>