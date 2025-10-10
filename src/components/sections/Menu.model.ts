export interface MenuItem {
  id: string
  label: string
  href?: string
  to?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  disabled?: boolean
  icon?: string
}

export interface MenuItemGroup {
  id: string
  title?: string
  items: MenuItem[]
}