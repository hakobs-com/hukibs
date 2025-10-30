# PageFooter

A comprehensive footer component with multi-column menu groups, brand content area, and optional footer section. Perfect for complex website footers with organized navigation.

## Import

```ts
import { PageFooter } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

### Basic Usage with Menu Groups

<Example>
  <PageFooter 
    :menu-groups="[
      {
        id: 'company',
        title: 'Company',
        items: [
          { id: '1', label: 'About Us', href: '#' },
          { id: '2', label: 'Careers', href: '#' },
          { id: '3', label: 'Press', href: '#' }
        ]
      },
      {
        id: 'product',
        title: 'Product',
        items: [
          { id: '1', label: 'Features', href: '#' },
          { id: '2', label: 'Pricing', href: '#' },
          { id: '3', label: 'Documentation', href: '#' }
        ]
      },
      {
        id: 'support',
        title: 'Support',
        items: [
          { id: '1', label: 'Help Center', href: '#' },
          { id: '2', label: 'Contact', href: '#' },
          { id: '3', label: 'Status', href: '#' }
        ]
      }
    ]"
  >
    <img src="https://via.placeholder.com/150x40/3b82f6/ffffff?text=BRAND" alt="Company Logo" />
    <p>Making the web better, one component at a time.</p>
  </PageFooter>
</Example>

```vue
<script setup>
const menuGroups = [
  {
    id: 'company',
    title: 'Company',
    items: [
      { id: '1', label: 'About Us', href: '#' },
      { id: '2', label: 'Careers', href: '#' },
      { id: '3', label: 'Press', href: '#' }
    ]
  },
  {
    id: 'product',
    title: 'Product',
    items: [
      { id: '1', label: 'Features', href: '#' },
      { id: '2', label: 'Pricing', href: '#' },
      { id: '3', label: 'Documentation', href: '#' }
    ]
  }
]
</script>

<template>
  <PageFooter :menu-groups="menuGroups">
    <img src="/logo.svg" alt="Company Logo" />
    <p>Your company description here.</p>
  </PageFooter>
</template>
```

### With Copyright Footer

<Example>
  <PageFooter 
    :menu-groups="[
      {
        id: 'legal',
        title: 'Legal',
        items: [
          { id: '1', label: 'Privacy Policy', href: '#' },
          { id: '2', label: 'Terms of Service', href: '#' }
        ]
      }
    ]"
  >
    <img src="https://via.placeholder.com/150x40/3b82f6/ffffff?text=BRAND" alt="Company Logo" />
    <p>Building amazing web experiences.</p>
    <template #footer>
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <p>Made with ❤️ using Vue.js</p>
    </template>
  </PageFooter>
</Example>

```vue
<PageFooter :menu-groups="menuGroups">
  <img src="/logo.svg" alt="Company Logo" />
  <p>Company description.</p>
  
  <template #footer>
    <p>&copy; 2024 Your Company. All rights reserved.</p>
    <div class="social-links">
      <a href="#">Twitter</a> • <a href="#">GitHub</a> • <a href="#">LinkedIn</a>
    </div>
  </template>
</PageFooter>
```

### With Icons and External Links

```vue
<script setup>
const menuGroups = [
  {
    id: 'connect',
    title: 'Connect',
    items: [
      { 
        id: '1', 
        label: 'Twitter', 
        href: 'https://twitter.com/company', 
        icon: 'search',
        target: '_blank',
        rel: 'noopener noreferrer'
      },
      { 
        id: '2', 
        label: 'GitHub', 
        href: 'https://github.com/company', 
        icon: 'rocket',
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    ]
  }
]
</script>

<template>
  <PageFooter :menu-groups="menuGroups">
    <img src="/logo.svg" alt="Company Logo" />
    <p>Follow us on social media!</p>
  </PageFooter>
</template>
```

## Props

PageFooterProps extends BaseSectionProps:
- menuGroups: `MenuItemGroup[]` (optional) — Array of menu groups to display in columns

Plus all BaseSectionProps:
- padding: `string` (optional) — Section padding, defaults to `'var(--spacing-xl) 0'`
- containerSize: `'full' | 'large' | 'small'` (optional) — Container size
- sectionColor: `string` (optional) — Section background color, defaults to `'var(--color-surface)'`
- containerColor: `string` (optional) — Container background color
- label: `string` (optional) — Section label

MenuItemGroup:
- id: `string` (required) — Unique identifier for the group
- title: `string` (optional) — Group title displayed above items
- items: `MenuItem[]` (required) — Array of menu items

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

- default: `slot` — Brand content (logo, description) displayed on the left
- content: `slot` — Alias for default slot
- footer: `slot` — Bottom section for copyright, social links, etc.

## Styling

- Responsive grid layout (2 columns on tablet, 1 on mobile)
- Brand section with maximum width constraint
- Multi-column menu layout with consistent spacing
- Hover effects and focus states for accessibility
- Clean typography with proper visual hierarchy