# SelectInput

Single/multi select input supporting grouped options and searchability.

## Import

```ts
import { SelectInput } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<SelectInput v-model="value" :options="options" placeholder="Choose..." />
```

## Props

- modelValue?: `string | null` (or `string[]` when `multiple`)
- label?: string
- description?: string
- options: `AcceptedOptions` (`string[] | Option[] | OptionGroup[]`)
- error?: `string[]` (default: `[]`)
- size?: `Size` (default: `Size.MEDIUM`)
- allowNull?: boolean (default: `false`)
- nullLabel?: string (default: `"Please select..."`)
- disabled?: boolean (default: `false`)
- placeholder?: string
- searchable?: boolean (default: `false`)
- multiple?: boolean (default: `false`)

Emits:
- `update:modelValue` (value)
- `change` (value)
- `touched` (boolean)
- `focus`, `blur` (FocusEvent)

See `./SelectInput.model.ts` for full types.
