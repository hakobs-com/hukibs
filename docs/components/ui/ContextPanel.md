# ContextPanel

Clickable/hoverable panel that opens a contextual menu or panel at a given position.

## Import

```ts
import { ContextPanel } from 'hukibs'
import 'hukibs/style.css'
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

## Live Example

<Example>
  <ContextPanel :config="{ position: 'bottom-right' }">
    <template #trigger>
      <Button>Open Panel</Button>
    </template>
    <div>Panel content</div>
  </ContextPanel>
</Example>

## Props

See `./ContextPanel.model.ts` for `ContextPanelConfig`, `ContextPanelPosition`, and `ContextPanelClickMode`.
