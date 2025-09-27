import type { Colors } from '../../../types'

export const BadgeVariant = {
  DEFAULT: 'default',
  OUTLINE: 'outline'
} as const

export type BadgeVariant = typeof BadgeVariant[keyof typeof BadgeVariant]

export interface BadgeProps {
  /** Visual variant */
  variant?: BadgeVariant
  /** Size variant */
  size?: 'small' | 'medium' | 'large'
  /** Color theme */
  color?: Colors
  /** Icon name */
  icon?: string
}