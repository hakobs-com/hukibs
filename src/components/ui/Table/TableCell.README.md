# TableCell

Cell component used with the UI `Table` for flexible table layouts.

## Import

```ts
import { TableCell } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<TableCell align="right" nowrap as="td">42</TableCell>
```

## Props

TableCellProps:
- align?: `left | center | right`
- nowrap?: `boolean`
- as?: `td | div`
- className?: `string`

See `./Table.model.ts` for exact types.
