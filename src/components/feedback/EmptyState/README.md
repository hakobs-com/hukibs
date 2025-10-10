# EmptyState

Friendly placeholder for empty content areas with icon, title and description.

## Import

```ts
import { EmptyState } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<EmptyState icon="folder" title="No items" description="Start by creating your first item" />
```

## Live Example

<Example>
  <EmptyState icon="folder" title="Nothing here" description="Add your first item" />
  <EmptyState icon="info-l" title="Tip" description="Use the button above to add" />
  
</Example>

## Props

- icon?: string
- title?: string
- description?: string

See `./EmptyState.model.ts` for types.
