# Badge

Small status label with color and variant options.

## Live Example

<Example>
  <Badge color="success">Active</Badge>
  <Badge color="warning" variant="outline">Pending</Badge>
  <Badge color="error">Failed</Badge>
</Example>

## Import

```ts
import { Badge } from 'hukibs'
import 'hukibs/style.css'
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
