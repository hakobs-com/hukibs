# SimpleFooter

A clean, minimal footer component with inline menu items and optional content slot. Perfect for simple footers or as a base for more complex footer layouts.

## Import

```ts
import { SimpleFooter } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

### Basic Usage with Menu

<Example>
  <SimpleFooter 
    :menu-items="[
      { id: '1', label: 'About', href: '#' },
      { id: '2', label: 'Contact', href: '#' },
      { id: '3', label: 'Privacy', href: '#' },
      { id: '4', label: 'Terms', href: '#' }
    ]"
    menu-alignment="center"
  />
</Example>

```vue
<script setup>
const menuItems = [
  { id: '1', label: 'About', href: '#' },
  { id: '2', label: 'Contact', href: '#' },
  { id: '3', label: 'Privacy', href: '#' },
  { id: '4', label: 'Terms', href: '#' }
]
</script>

<template>
  <SimpleFooter :menu-items="menuItems" menu-alignment="center" />
</template>
```

### With Logo and Content

<Example>
  <SimpleFooter 
    :menu-items="[
      { id: '1', label: 'GitHub', href: '#', icon: 'rocket' },
      { id: '2', label: 'Twitter', href: '#', icon: 'search' }
    ]"
    menu-alignment="right"
  >
    <img src="https://via.placeholder.com/120x32/3b82f6/ffffff?text=LOGO" alt="Company Logo" />
  </SimpleFooter>
</Example>

```vue
<SimpleFooter menu-alignment="right">
  <img src="/logo.svg" alt="Company Logo" />
  <template #content>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
  </template>
</SimpleFooter>
```

### With Router Links

```vue
<script setup>
const menuItems = [
  { id: '1', label: 'Home', to: '/' },
  { id: '2', label: 'About', to: '/about' },
  { id: '3', label: 'Services', to: '/services' }
]
</script>

<template>
  <SimpleFooter :menu-items="menuItems" />
</template>
```

## Props

SimpleFooterProps extends BaseSectionProps:
- menuItems: `MenuItem[]` (optional) — Array of menu items to display
- menuAlignment: `'left' | 'center' | 'right'` (optional) — Alignment of menu items, defaults to `'left'`

Plus all BaseSectionProps:
- padding: `string` (optional) — Section padding, defaults to `'var(--spacing-lg) 0'`
- containerSize: `'full' | 'large' | 'small'` (optional) — Container size
- sectionColor: `string` (optional) — Section background color, defaults to `'var(--color-surface)'`
- containerColor: `string` (optional) — Container background color
- label: `string` (optional) — Section label

MenuItem:
- id: `string` (required) — Unique identifier
- label: `string` (required) — Display text
- href: `string` (optional) — External link URL
- to: `string` (optional) — Internal router link
- target: `string` (optional) — Link target (for external links)
- rel: `string` (optional) — Link relationship (for external links)
- disabled: `boolean` (optional) — Whether item is disabled
- icon: `string` (optional) — Icon name to display

## Slots

- default: `slot` — Content displayed above the menu (logo, copyright text, etc.)
- content: `slot` — Alias for default slot

## Styling

- Responsive design automatically centers menu on mobile
- Hover effects with color transitions
- Support for icons in menu items
- Clean, minimal design with proper spacing