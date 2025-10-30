import type { BaseSectionProps } from '../BaseSection/BaseSection.model'
import type { MenuItemGroup } from '../Menu.model'

export interface SimpleFooterProps extends BaseSectionProps {
  /** Footer title or label */
  label?: string
  /** Footer link groups */
  links?: MenuItemGroup[]
}

