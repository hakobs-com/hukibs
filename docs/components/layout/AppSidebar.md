# AppSidebar

Responsive sidebar with sections, grouped navigation and collapse behavior.

## Import

```ts
import { AppSidebar } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<AppSidebar :sections="sections" :user="user" />
```

## Live Example

<Example>
  <AppSidebar :sections="[{ id: 'main', items: [{ label: 'Dashboard', icon: 'home' }, { label: 'Settings', icon: 'settings' }] }]" />
</Example>

## Props

AppSidebarProps:
- sections: `AppSidebarSection[]` (optional)
- userInfo: `AppSidebarUserInfo` (optional)
- collapsed: `boolean` (optional)
- collapsible: `boolean` (optional)
