# SettingsLayout

Two-column settings layout with responsive collapse and in-page navigation.

## Import

```ts
import { SettingsLayout } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<SettingsLayout :sections="sections" />
```

## Props

SettingsLayoutProps:
- sections: `SettingsLayoutSection[]` (required)
- activeSection: `string` (required)