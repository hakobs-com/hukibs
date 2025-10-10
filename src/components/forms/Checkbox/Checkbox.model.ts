export interface CheckboxProps {
  /** Checkbox value */
  modelValue?: boolean | string[]
  /** Checkbox value for array mode */
  value?: string | number | boolean
  /** Checkbox size */
  size?: 'small' | 'medium' | 'large'
  /** Checkbox label */
  label?: string
  /** Help text */
  description?: string
  /** Error message or array of error messages */
  error?: string | string[]
  /** Disabled state */
  disabled?: boolean
  /** Required field */
  required?: boolean
  /** Indeterminate state */
  indeterminate?: boolean
  /** Checkbox color variant */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info'
  /** Show ripple effect */
  ripple?: boolean
  /** Custom CSS class */
  class?: string
}