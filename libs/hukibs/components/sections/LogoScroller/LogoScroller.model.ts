import type { BaseSectionProps } from '../BaseSection/BaseSection.model'

export interface LogoItem {
  id: string
  src?: string
  alt?: string
  href?: string
  component?: any
}

export interface LogoScrollerProps extends BaseSectionProps {
  logos: LogoItem[]
  variant?: 'scroller' | 'grid'
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  gridSize?: number
  logoHeight?: string
  gap?: string
}