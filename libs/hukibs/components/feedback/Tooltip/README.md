# Tooltip

Lightweight tooltip for hint text on hover/focus.

## Import

```ts
import { Tooltip } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<Tooltip text="More info" position="top">
  <Button icon="info" aria-label="Info" />
</Tooltip>
```

## Live Example

<Example>
  <Tooltip text="More info" position="top">
    <Button>Hover me</Button>
  </Tooltip>
</Example>

## Props

- position?: `top | right | bottom | left` (see `TooltipPosition`)
- delay?: number (ms)
- color?: string

See `./Tooltip.model.ts` for types.
