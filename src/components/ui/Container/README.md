# Container

Responsive layout container with configurable max width and fluid behavior.

## Import

```ts
import { Container } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<Container max="medium">Content</Container>
<Container fluid>Full width</Container>
<Container max-width="800px">Custom width</Container>
```

## Props

- max: `small | medium | large | wide | full | default`
- maxWidth: string (CSS length)
- padding: string (CSS padding)
- fluid: boolean (full width)
- showHeader, showFooter: booleans
- title, subtitle: strings
- noPadding, noHeaderPadding, noContentPadding, noFooterPadding: booleans
