# Badge

Small status label with color and variant options.

## Import

```ts
import { Badge } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<Badge color="success">Active</Badge>
<Badge color="warning" variant="outline">Pending</Badge>
```

## Props

- color: theme color token (e.g. `success`, `warning`)
- variant: `solid | outline`

See `./Badge.model.ts` for full types.
