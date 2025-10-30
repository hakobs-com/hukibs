# TableRow

Row component used with the UI `Table` for flexible table layouts.

## Import

```ts
import { TableRow } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<TableRow :clickable="true" :selected="isSelected" as="tr" />
```

## Props

TableRowProps:
- clickable?: `boolean`
- selected?: `boolean`
- as?: `tr | div`
- columns?: `string`
- level?: `number`
- expandable?: `boolean`
- expanded?: `boolean`

See `./Table.model.ts` for exact types.
