// Common types used across UI components

export enum Size {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  DEFAULT = 'default',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum NotificationType {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export enum Icons {
  // Calendar and time
  CALENDAR = 'calendar',
  CLOCK = 'clock',

  // Navigation
  ARROW_LEFT = 'arrow-left',
  ARROW_RIGHT = 'arrow-right',
  ARROW_UP = 'arrow-up',
  ARROW_DOWN = 'arrow-down',

  // Actions
  PLUS = 'plus',
  MINUS = 'minus',
  CHECK = 'check',
  CLOSE = 'close',
  SEARCH = 'search',
  FILTER = 'filter',
  EDIT = 'edit',
  DELETE = 'delete',

  // UI elements
  MENU = 'menu',
  MORE = 'more',
  SETTINGS = 'settings',
  USER = 'user',

  // Status
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  SUCCESS = 'success',
}

export interface BaseComponentProps {
  id?: string
  class?: string | string[] | Record<string, boolean>
  style?: string | Record<string, string>
}

export type ComponentSize = Size

// Color types
export enum Colors {
  BACKGROUND = 'background',
  FOREGROUND = 'foreground',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
  INFO = 'info',
}

export const BaseColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info'
] as const

export const AllColors = [
  ...BaseColors,
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'purple',
  'pink',
  'gray'
] as const

export type BaseColor = typeof BaseColors[number]
export type AllColor = typeof AllColors[number]
