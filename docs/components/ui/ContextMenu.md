# ContextMenu

Contextual menu system with panel and items for actions.

## Import

```ts
import { ContextMenu, ContextPanel, ContextMenuItems } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<ContextMenu>
  <ContextPanel>Right click or trigger</ContextPanel>
  <ContextMenuItems :items="items" />
 </ContextMenu>
```

## Props

- ContextMenuItems: `items` array defining labels, icons, and handlers
- ContextPanel: slot for the panel content

Refer to the component source for the full API.
