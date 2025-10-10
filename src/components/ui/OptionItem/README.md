# OptionItem

Simple, styled option/list item with icon and text for menus or lists.

## Import

```ts
import { OptionItem } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<OptionItem icon="settings" label="Settings" />
```

## Live Example

<Example>
  <OptionItem icon="settings" label="Settings" />
  <OptionItem icon="info-l" label="About" />
</Example>

## Props

OptionItemProps:
- label: `string` (optional)
- value: `string` (optional)
- description: `string` (optional)
- icon: `string` (optional)
- clickable: `boolean` (optional)
- showArrow: `boolean` (optional)
- selected: `boolean` (optional)
