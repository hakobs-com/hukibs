# ContextMenuItems

Renders a list of contextual actions (labels, icons, separators) processed from a config array.

## Import

```ts
import { ContextMenuItems } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<ContextMenu>
  <ContextMenuItems :items="items" />
</ContextMenu>
```

## Props

- items: `ContextMenuItem[]` — see `./ContextMenu.model.ts`
- Other behavior and defaults: see `ContextMenuConfig` and `ContextMenuConfigDefault`
