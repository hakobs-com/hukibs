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

## Live Example

<Example>
  <SettingsLayout :sections="[{ id:'general', label:'General', icon:'settings' }, { id:'account', label:'Account', icon:'user' }]" active-section="general" />
</Example>

## Props

SettingsLayoutProps:
- sections: `SettingsLayoutSection[]` (required)
- activeSection: `string` (required)
