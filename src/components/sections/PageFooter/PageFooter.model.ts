import type { BaseSectionProps } from './BaseSection/BaseSection.model'
import type { MenuItemGroup } from './Menu.model'

export interface PageFooterProps extends BaseSectionProps {
  menuGroups?: MenuItemGroup[]
}