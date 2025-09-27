import type { BaseInputProps } from '../BaseInput/BaseInput.model'

export interface SearchInputProps extends Omit<BaseInputProps, 'type' | 'prefixIcon'> {
  // SearchInput-specific props can be added here
}