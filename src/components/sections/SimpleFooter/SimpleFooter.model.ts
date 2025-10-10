import type { BaseSectionProps } from './BaseSection/BaseSection.model'
import type { MenuItem } from './Menu.model'

export interface SimpleFooterProps extends BaseSectionProps {
  menuItems?: MenuItem[]
  menuAlignment?: 'left' | 'center' | 'right'
}