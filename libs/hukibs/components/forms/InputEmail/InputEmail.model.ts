export interface InputEmailProps {
  /** Email value */
  modelValue?: string
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
  /** Autocomplete attribute */
  autocomplete?: string
  /** Validate email format */
  validate?: boolean
}