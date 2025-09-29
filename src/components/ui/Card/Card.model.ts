import type { AllColor, Colors } from '../../../types'

export interface CardProps {
  variant?: 'default' | 'elevated' | 'ghost'
  color?: Colors | AllColor
  featured?: boolean
  hoverable?: boolean
  title?: string
  noPadding?: boolean
  noHeaderPadding?: boolean
  noContentPadding?: boolean
  noFooterPadding?: boolean
}
