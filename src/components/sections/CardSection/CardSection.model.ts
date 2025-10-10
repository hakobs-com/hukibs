import type { BaseSectionProps } from '../BaseSection/BaseSection.model'

export interface CardItem {
  id: string
  title?: string
  subtitle?: string
  content?: string
  cta?: {
    label: string
    color?: string
    link?: string
  }
  image?: string
  icon?: string
  color?: string
}

export interface CardSectionProps extends BaseSectionProps {
  title?: string
  description?: string
  cards: CardItem[]
  columns?: number
}