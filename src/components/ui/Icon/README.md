# Icon

Displays an icon from the open-icon set with size variants and currentColor support.

## Import

```ts
import { Icon } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<Icon name="search" />
<Icon name="check" class="text-green" />
<Icon name="arrow-right" />
```

## Props

- name: string (required; icon name from open-icon)
- size: `small | medium | large | xl` (default: `medium`)
- color: `primary | secondary | success | warning | error`
- ariaLabel: string (accessibility label for screen readers)

See `./Icon.model.ts` for full types.
