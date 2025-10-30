<template>
  <div class="password-input">
    <BaseInput
      :type="showPassword ? 'text' : 'password'"
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
      :suffix-icon="showPassword ? 'eye-off' : 'eye'"
      @update:model-value="handleUpdate"
      @blur="handleBlur"
      @suffix-click="togglePasswordVisibility"
    />
    
    <!-- Password Strength Indicator -->
    <div v-if="showStrength && modelValue" class="password-strength">
      <div class="password-strength-bar">
        <div 
          class="password-strength-fill" 
          :class="strengthClass"
          :style="{ width: `${strengthPercentage}%` }"
        />
      </div>
      <div class="password-strength-text" :class="strengthClass">
        {{ strengthText }}
      </div>
    </div>
    
    <!-- Password Requirements -->
    <div v-if="showRequirements" class="password-requirements">
      <div class="requirement" :class="{ fulfilled: meetsLengthRequirement }">
        <Icon :name="meetsLengthRequirement ? 'check' : 'x'" />
        At least {{ minLength }} characters
      </div>
      <div v-if="requireUppercase" class="requirement" :class="{ fulfilled: meetsUppercaseRequirement }">
        <Icon :name="meetsUppercaseRequirement ? 'check' : 'x'" />
        One uppercase letter
      </div>
      <div v-if="requireLowercase" class="requirement" :class="{ fulfilled: meetsLowercaseRequirement }">
        <Icon :name="meetsLowercaseRequirement ? 'check' : 'x'" />
        One lowercase letter
      </div>
      <div v-if="requireNumbers" class="requirement" :class="{ fulfilled: meetsNumbersRequirement }">
        <Icon :name="meetsNumbersRequirement ? 'check' : 'x'" />
        One number
      </div>
      <div v-if="requireSpecial" class="requirement" :class="{ fulfilled: meetsSpecialRequirement }">
        <Icon :name="meetsSpecialRequirement ? 'check' : 'x'" />
        One special character
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BaseInput } from '../BaseInput'
import { Icon } from '../../ui/Icon'
import type { InputPasswordProps } from './InputPassword.model'

const props = withDefaults(defineProps<InputPasswordProps>(), {
  placeholder: 'Enter password',
  autocomplete: 'current-password',
  clearable: false,
  showStrength: false,
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecial: true
})

const modelValue = defineModel<string>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  blur: [event: FocusEvent]
  strength: [strength: number]
}>()

const showPassword = ref(false)
const showRequirements = ref(false)

// Password strength calculation
const strengthScore = computed(() => {
  if (!modelValue.value) return 0
  
  let score = 0
  const password = modelValue.value
  
  // Length contribution
  if (password.length >= props.minLength) score += 25
  if (password.length >= 12) score += 10
  if (password.length >= 16) score += 15
  
  // Character variety contribution
  if (/[a-z]/.test(password)) score += 15
  if (/[A-Z]/.test(password)) score += 15
  if (/[0-9]/.test(password)) score += 15
  if (/[^a-zA-Z0-9]/.test(password)) score += 20
  
  return Math.min(score, 100)
})

const strengthClass = computed(() => {
  const score = strengthScore.value
  if (score < 30) return 'weak'
  if (score < 60) return 'fair'
  if (score < 80) return 'good'
  return 'strong'
})

const strengthText = computed(() => {
  const score = strengthScore.value
  if (score < 30) return 'Weak password'
  if (score < 60) return 'Fair password'
  if (score < 80) return 'Good password'
  return 'Strong password'
})

const strengthPercentage = computed(() => strengthScore.value)

// Requirements validation
const meetsLengthRequirement = computed(() => 
  modelValue.value && modelValue.value.length >= props.minLength
)

const meetsUppercaseRequirement = computed(() => 
  !props.requireUppercase || (modelValue.value && /[A-Z]/.test(modelValue.value))
)

const meetsLowercaseRequirement = computed(() => 
  !props.requireLowercase || (modelValue.value && /[a-z]/.test(modelValue.value))
)

const meetsNumbersRequirement = computed(() => 
  !props.requireNumbers || (modelValue.value && /[0-9]/.test(modelValue.value))
)

const meetsSpecialRequirement = computed(() => 
  !props.requireSpecial || (modelValue.value && /[^a-zA-Z0-9]/.test(modelValue.value))
)

const isValidPassword = computed(() => 
  meetsLengthRequirement.value &&
  meetsUppercaseRequirement.value &&
  meetsLowercaseRequirement.value &&
  meetsNumbersRequirement.value &&
  meetsSpecialRequirement.value
)

// Error handling
const displayError = computed(() => {
  if (props.error) return props.error
  
  if (showRequirements.value && modelValue.value && !isValidPassword.value) {
    return 'Password does not meet all requirements'
  }
  
  return undefined
})

const handleUpdate = (value: string | undefined) => {
  if (value === undefined) return
  
  modelValue.value = value
  emit('update:modelValue', value)
  emit('strength', strengthScore.value)
  // emit('validity', isValidPassword.value)
}

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
  showRequirements.value = true
  // emit('validity', isValidPassword.value)
}

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value
}
</script>

<style lang="scss" scoped>
.password-input {
  display: flex;
  flex-direction: column;
  gap: var(--space-s, 0.75rem);
}

.password-strength {
  display: flex;
  align-items: center;
  gap: var(--space-s, 0.75rem);
}

.password-strength-bar {
  flex: 1;
  height: 4px;
  background: var(--color-accent, rgba(255, 255, 255, 0.1));
  border-radius: 2px;
  overflow: hidden;
}

.password-strength-fill {
  height: 100%;
  transition: all 0.3s ease;
  
  &.weak {
    background: var(--color-error, #ef4444);
  }
  
  &.fair {
    background: var(--color-warning, #f59e0b);
  }
  
  &.good {
    background: var(--color-info, #3b82f6);
  }
  
  &.strong {
    background: var(--color-success, #10b981);
  }
}

.password-strength-text {
  font-size: var(--input-description-font-size);
  font-weight: 500;
  min-width: 100px;
  
  &.weak {
    color: var(--color-error, #ef4444);
  }
  
  &.fair {
    color: var(--color-warning, #f59e0b);
  }
  
  &.good {
    color: var(--color-info, #3b82f6);
  }
  
  &.strong {
    color: var(--color-success, #10b981);
  }
}

.password-requirements {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs, 0.25rem);
  padding: var(--space-s, 0.75rem);
  background: var(--color-accent, rgba(255, 255, 255, 0.05));
  border-radius: var(--input-radius);
  border: 1px solid var(--input-border);
}

.requirement {
  display: flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
  font-size: var(--input-description-font-size);
  color: var(--input-description-color);
  transition: color 0.2s ease;
  
  &.fulfilled {
    color: var(--color-success, #10b981);
  }
  
  .icon {
    font-size: 0.875em;
  }
}
</style>