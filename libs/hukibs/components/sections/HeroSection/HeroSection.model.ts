import type { BaseSectionProps } from '../BaseSection/BaseSection.model'

export interface HeroSectionProps extends BaseSectionProps {
  // Horizontal alignment
  align?: 'left' | 'center' | 'right'
  
  // Vertical alignment
  valign?: 'top' | 'center' | 'bottom'
  
  // Height options
  height?: 'auto' | 'viewport' | 'custom'
  
  // Custom height value (when height is 'custom')
  customHeight?: string
  
  // Text color for contrast control
  textColor?: 'light' | 'dark' | 'auto'
  
  // Background overlay for better text readability
  overlay?: boolean
  overlayColor?: string
  overlayOpacity?: number
}