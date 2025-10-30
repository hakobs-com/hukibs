# PageHeader

Page-level header with title, description and optional actions.

## Import

```ts
import { PageHeader } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<PageHeader title="Settings" description="Manage your preferences">
  <template #actions>
    <Button variant="outline">Help</Button>
  </template>
</PageHeader>
```

## Live Example

<Example>
  <PageHeader title="Settings" description="Manage your preferences" />
</Example>

## Props

PageHeaderProps:
- title: `string` (required)
- description: `string` (optional)
