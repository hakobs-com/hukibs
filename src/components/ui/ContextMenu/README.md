# ContextMenu

Contextual menu system with panel and items for actions.

## Import

```ts
import { ContextMenu, ContextPanel, ContextMenuItems } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<ContextMenu>
  <ContextPanel>Right click or trigger</ContextPanel>
  <ContextMenuItems :items="items" />
 </ContextMenu>
```

## Live Example

<Example>
  <ContextMenu>
    <ContextPanel>Open Menu</ContextPanel>
    <ContextMenuItems :items="[{ label: 'Edit' }, { label: 'Delete' }]" />
  </ContextMenu>
</Example>

## Props

- ContextMenuItems: `items` array defining labels, icons, and handlers
- ContextPanel: slot for the panel content

Refer to the component source for the full API.
