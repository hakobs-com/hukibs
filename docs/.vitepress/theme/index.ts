import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Load Hukibs styles globally so examples render correctly
import 'hukibs/style.css'

// Register commonly used Hukibs components for live examples
import {
  Button,
  ButtonGroup,
  Icon,
  Card,
  Container,
  Badge,
  Tabs,
  Tab,
  TabPanel,
  CircularProgress,
  StatsCard,
  OptionItem,
  Progress,
  ThemeToggle,
  Table,
  TableRow,
  TableCell,
  Section,
  PageHeader,
  AppHeader,
  AppSidebar,
  SettingsLayout,
  Popup,
  Popup as PopupComponent,
  Popup as PopupDialog,
  Popup as Modal,
  PopupWrapper,
  Toast,
  Tooltip,
  Alert,
  EmptyState
} from 'hukibs'

// Example wrapper component (light styling)
import Example from './components/Example.vue'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // UI
    app.component('Button', Button)
    app.component('ButtonGroup', ButtonGroup)
    app.component('Icon', Icon)
    app.component('Card', Card)
    app.component('Container', Container)
    app.component('Badge', Badge)
    app.component('Tabs', Tabs)
    app.component('Tab', Tab)
    app.component('TabPanel', TabPanel)
    app.component('CircularProgress', CircularProgress)
    app.component('StatsCard', StatsCard)
    app.component('OptionItem', OptionItem)
    app.component('Progress', Progress)
    app.component('ThemeToggle', ThemeToggle)
    app.component('Table', Table)
    app.component('TableRow', TableRow)
    app.component('TableCell', TableCell)

    // Layout
    app.component('Section', Section)
    app.component('PageHeader', PageHeader)
    app.component('AppHeader', AppHeader)
    app.component('AppSidebar', AppSidebar)
    app.component('SettingsLayout', SettingsLayout)

    // Feedback
    app.component('Popup', Popup)
    app.component('PopupWrapper', PopupWrapper)
    app.component('Toast', Toast)
    app.component('Tooltip', Tooltip)
    app.component('Alert', Alert)
    app.component('EmptyState', EmptyState)

    // Docs helpers
    app.component('Example', Example)
  }
}

export default theme

