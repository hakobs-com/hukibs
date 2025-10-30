import type { BaseInputProps } from '../BaseInput/BaseInput.model'

export interface TextInputProps extends Omit<BaseInputProps, 'type'> {
  // TextInput-specific props can be added here
}