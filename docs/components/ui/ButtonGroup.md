# ButtonGroup

Layouts multiple `Button` components with consistent spacing, alignment and direction.

## Import

```ts
import { ButtonGroup } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<ButtonGroup gap="medium">
  <Button>Cancel</Button>
  <Button variant="outline">Preview</Button>
  <Button color="success">Save</Button>
</ButtonGroup>

<ButtonGroup direction="column" align="stretch" gap="small">
  <Button fullWidth>One</Button>
  <Button fullWidth>Two</Button>
</ButtonGroup>
```

## Props

ButtonGroupProps:
- direction: `row | column` (optional) — Direction of layout
- fluid: `boolean` (optional) — Make group full width
- gap: `none | small | medium | large` (optional) — Space between buttons
- align: `start | center | end | stretch` (optional) — Vertical alignment
- justify: `start | center | end | between | around` (optional) — Horizontal distribution
- wrap: `boolean` (optional) — Wrap onto multiple lines

See `./ButtonGroup.model.ts` for full types.
