export interface InputNumberProps {
  /** Number value */
  modelValue?: number | null
  /** Input size */
  size?: 'small' | 'medium' | 'large'
  /** Visual variant */
  variant?: 'default' | 'ghost'
  /** Input label */
  label?: string
  /** Placeholder text */
  placeholder?: string
  /** Help text */
  description?: string
  /** Error message or array of error messages */
  error?: string | string[]
  /** Disabled state */
  disabled?: boolean
  /** Readonly state */
  readonly?: boolean
  /** Required field */
  required?: boolean
  /** Show clear button */
  clearable?: boolean
  /** Minimum value */
  min?: number
  /** Maximum value */
  max?: number
  /** Step increment */
  step?: number
  /** Show increment/decrement buttons */
  controls?: boolean
  /** Decimal places */
  precision?: number
  /** Format number with locale */
  locale?: string
  /** Prefix text */
  prefix?: string
  /** Suffix text */
  suffix?: string
}