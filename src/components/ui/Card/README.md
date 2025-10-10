# Card

Flexible content container with header, content, and footer areas. Supports hover/elevated variants and color accents.

## Import

```ts
import { Card } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<Card title="Basic Card">Content</Card>
<Card hoverable>Interactive card</Card>
<Card variant="elevated">Shadowed card</Card>
<Card color="primary">Colored card</Card>
```

## Props

- variant: `default | elevated | ghost`
- color: `Colors | AllColor`
- featured: boolean (adds emphasis/border)
- hoverable: boolean (hover affordance)
- title: string
- noPadding, noHeaderPadding, noContentPadding, noFooterPadding: booleans

See implementation for available slots: header, default (content), footer.
