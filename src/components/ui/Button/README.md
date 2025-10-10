# Button

Versatile action button with variants, sizes, icons, loading state and link support.

## Import

```ts
import { Button } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>

<Button color="success">Success</Button>
<Button size="small">Small</Button>
<Button size="large">Large</Button>

<Button icon="plus">Add</Button>
<Button icon="arrow-right" :icon-after="true">Next</Button>
<Button :icon-only="true" icon="search">Search</Button>

<!-- As link -->
<Button href="/pricing">Pricing</Button>
```

## Props

ButtonProps:
- size: `ButtonSize` (optional) — Button size variant
- variant: `ButtonVariant` (optional) — Button style variant
- type: `ButtonType` (optional) — HTML button type attribute
- icon: `string` (optional) — Icon name to display
- iconOnly: `boolean` (optional) — Whether to show icon only (hide text)
- iconAfter: `boolean` (optional) — Position icon after text
- disabled: `boolean` (optional) — Whether button is disabled
- loading: `boolean` (optional) — Whether button is in loading state
- block: `boolean` (optional) — Make button full width
- to: `string` (optional) — Link URL for router-link
- href: `string` (optional) — External link URL
- element: `string` (optional) — HTML element type to render
- color: `Colors` (optional) — Custom color override
- tooltip: `string` (optional) — Tooltip text to display on hover
- fullWidth: `boolean` (optional)

ButtonGroupProps:
- direction: `ButtonGroupDirection | 'row' | 'column'` (optional) — Direction of button layout
- fluid: `boolean` (optional) — Whether buttons should fill available width
- gap: `ButtonGroupGap | 'none' | 'small' | 'medium' | 'large'` (optional) — Gap size between buttons
- align: `ButtonGroupAlign | 'start' | 'center' | 'end' | 'stretch'` (optional) — Vertical alignment of buttons
- justify: `ButtonGroupJustify | 'start' | 'center' | 'end' | 'between' | 'around'` (optional) — Horizontal justification of buttons
- wrap: `boolean` (optional) — Whether to wrap buttons on overflow
## Styling

- Uses CSS variables for theming: `--button-color`, `--button-color-text`, etc.
- Ensure the library stylesheet is loaded: `import 'hukibs/style.css'`.
