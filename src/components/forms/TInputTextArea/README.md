# TInputTextArea

Multi-line text area input with consistent styling and optional auto-size.

## Import

```ts
import { TInputTextArea } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<TInputTextArea v-model="description" label="Description" rows="4" />
```

## Live Example

<Example>
  <TInputTextArea label="Description" placeholder="Write something..." />
</Example>

## Props

- modelValue?: string
- label?: string
- placeholder?: string
- description?: string
- autoGrow?: boolean (default: `true`)
- allowResize?: boolean (default: `false`)
- minRows?: number (default: `3`)
- maxRows?: number (default: `10`)
- disabled?: boolean (default: `false`)
- maxlength?: number
- showCount?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- spellcheck?: boolean (default: `true`)

Emits: `update:modelValue`, `change`, `touched`, `focus`, `blur`, `submit`

See `./TInputTextArea.model.ts` for full types.
