export interface LogoItem {
  id: string
  src?: string
  alt?: string
  href?: string
  component?: any
}

export interface LogoScrollerProps {
  logos: LogoItem[]
  variant?: 'scroller' | 'grid'
  speed?: 'slow' | 'normal' | 'fast'
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
  gridSize?: number
  logoHeight?: string
  gap?: string
}