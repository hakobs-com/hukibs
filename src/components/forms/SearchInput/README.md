# SearchInput

Text input specialized for search, with built-in search icon and clear behavior.

## Import

```ts
import { SearchInput } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<SearchInput v-model="query" placeholder="Search..." :clearable="true" />
```

## Live Example

<Example>
  <SearchInput placeholder="Search..." :clearable="true" />
</Example>

## Props

Extends BaseInput minus `type` and `prefixIcon`:
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

See `./SearchInput.model.ts` and `../BaseInput/BaseInput.model.ts` for full types.
