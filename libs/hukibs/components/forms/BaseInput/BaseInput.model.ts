export interface BaseInputProps {
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number'
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
  /** Clear button title */
  clearTitle?: string
  /** Prefix icon */
  prefixIcon?: string
  /** Suffix icon */
  suffixIcon?: string
}