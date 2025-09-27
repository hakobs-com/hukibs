export interface ContainerProps {
  /** Maximum width constraint */
  max?: 'small' | 'medium' | 'large' | 'wide' | 'full' | 'default'
  /** Custom max width */
  maxWidth?: string
  /** Custom padding */
  padding?: string
  /** Make container fluid (full width) */
  fluid?: boolean
  /** Show header section */
  showHeader?: boolean
  /** Show footer section */
  showFooter?: boolean
  /** Header title */
  title?: string
  /** Header subtitle */
  subtitle?: string
  /** Remove all padding */
  noPadding?: boolean
  /** Remove header padding */
  noHeaderPadding?: boolean
  /** Remove content padding */
  noContentPadding?: boolean
  /** Remove footer padding */
  noFooterPadding?: boolean
}