# Section

Page section wrapper with optional internal `Container` and spacing.

## Import

```ts
import { Section } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<Section title="Overview">
  Content
</Section>
```

## Live Example

<Example>
  <Section title="Overview">Content</Section>
  <Section :centered="true" title="Centered">Centered content</Section>
</Example>

## Props

- variant?: `default | hero | cta | alternate`
- centered?: boolean
- noContainer?: boolean
- maxWidth?: string
- padding?: string
- fluid?: boolean

See `./Section.model.ts` for types.
