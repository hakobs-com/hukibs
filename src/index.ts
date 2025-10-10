// Import base styles
import './style.css'

// UI Components
export { Button, ButtonGroup } from './components/ui/Button'
export { Icon } from './components/ui/Icon'
export { Card } from './components/ui/Card'
export { Container } from './components/ui/Container'
export { Badge, BadgeVariant } from './components/ui/Badge'
export { ContextMenu, ContextPanel, ContextMenuItems } from './components/ui/ContextMenu'
export { Tab, TabPanel, Tabs } from './components/ui/Tabs'
export { CircularProgress } from './components/ui/CircularProgress'
export { StatsCard } from './components/ui/StatsCard'
export { OptionItem } from './components/ui/OptionItem'
export { default as Progress } from './components/ui/Progress.vue'
export { default as ThemeToggle } from './components/ui/ThemeToggle.vue'

// Form Components
export { SearchInput } from './components/forms/SearchInput'
export { TextInput } from './components/forms/TextInput'
export { TextInput as TInputText } from './components/forms/TextInput'
export { SelectInput } from './components/forms/SelectInput'
export { TInputTextArea } from './components/forms/TInputTextArea'
// Note: BaseInput is internal only, not exported

// Layout Components
export { Section } from './components/layout/Section'
export { PageHeader } from './components/layout/PageHeader'
export { Table, TableRow, TableCell } from './components/ui/Table'
export { AppHeader } from './components/layout/AppHeader'
export { AppSidebar } from './components/layout/AppSidebar'
export { SettingsLayout } from './components/layout/SettingsLayout'

// Section Components
export { LogoScroller } from './components/sections/LogoScroller'

// Feedback Components
export { default as Popup } from './components/feedback/Popup/Popup.vue'
export { default as PopupSlot } from './components/feedback/Popup/PopupSlot.vue'
export { popupService } from './components/feedback/Popup/Popup.service'
export { Alert, AlertVariant } from './components/feedback/Alert'
export { EmptyState } from './components/feedback/EmptyState'
export { Tooltip, TooltipPosition } from './components/feedback/Tooltip'
export { default as Toast } from './components/feedback/Toast/Toast.vue'
export { toastService } from './components/feedback/Toast/Toast.service'
export { ToastType, ToastPosition } from './components/feedback/Toast/Toast.model'

// Essential types
export { Colors, Size } from './types'
export type { CircularProgressProps } from './components/ui/CircularProgress'
export type { StatsCardProps } from './components/ui/StatsCard'
export type { OptionItemProps } from './components/ui/OptionItem'
export type { AppHeaderProps, AppHeaderNavItem } from './components/layout/AppHeader'
export type { AppSidebarProps, AppSidebarNavItem, AppSidebarSection, AppSidebarUserInfo } from './components/layout/AppSidebar'
export type { SettingsLayoutProps, SettingsLayoutSection } from './components/layout/SettingsLayout'
export type { LogoScrollerProps, LogoItem } from './components/sections/LogoScroller'

// Main install function for Vue app
import type { App } from 'vue'

export const install = (app: App) => {
  return app
}

export default { install }