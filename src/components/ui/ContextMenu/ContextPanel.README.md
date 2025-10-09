# ContextPanel

Clickable/hoverable panel that opens a contextual menu or panel at a given position.

## Import

```ts
import { ContextPanel } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<ContextPanel :config="{ position: 'bottom-right' }">
  <template #trigger>
    <Button icon="more-horizontal" aria-label="More" />
  </template>
  <template #default>
    <!-- panel content here -->
  </template>
</ContextPanel>
```

## Props

See `./ContextPanel.model.ts` for `ContextPanelConfig`, `ContextPanelPosition`, and `ContextPanelClickMode`.
