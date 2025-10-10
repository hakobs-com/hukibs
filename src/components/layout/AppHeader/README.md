# AppHeader

Application header with brand, navigation, and action slots.

## Import

```ts
import { AppHeader } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<AppHeader :nav-items="nav">
  <template #actions>
    <ThemeToggle />
  </template>
</AppHeader>
```

## Live Example

<Example>
  <AppHeader :nav-items="[{ label: 'Home', href: '#' }, { label: 'Docs', href: '#' }]" />
</Example>

## Props

AppHeaderProps:
- icon: `string` (optional)
- text: `string` (optional)
- href: `string` (optional)
- navItems: `AppHeaderNavItem[]` (optional)
- showThemeToggle: `boolean` (optional)
- showSettings: `boolean` (optional)
