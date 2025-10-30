# TextInput

Standard text input with label, validation, and consistent styling.

## Import

```ts
import { TextInput } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<TextInput v-model="name" label="Full Name" placeholder="Enter your name" :required="true" />
```

## Live Example

<Example>
  <TextInput label="Name" placeholder="Your name" />
  <TextInput label="Email" placeholder="you@example.com" />
  <TextInput label="Disabled" disabled />
</Example>

## Props

Extends BaseInput (minus `type`):
- size?: `small | medium | large`
- variant?: `default | ghost`
- label?: string
- placeholder?: string
- description?: string
- error?: `string | string[]`
- disabled?: boolean
- readonly?: boolean
- required?: boolean
- clearable?: boolean
- clearTitle?: string
- suffixIcon?: string

See `./TextInput.model.ts` and `../BaseInput/BaseInput.model.ts` for full types.
