# Table (UI)

Composable table building blocks: `Table`, `TableRow`, and `TableCell` for display use-cases.

## Import

```ts
import { Table, TableRow, TableCell } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

```vue
<Table :rows="rows" :headers="headers">
  <template #cell.name="{ value }">{{ value }}</template>
</Table>
```

## Props

Table:
- striped?: boolean
- hover?: boolean
- bordered?: boolean
- compact?: boolean
- as?: `table | div`
- columns?: `{ key, label, width?, align?, sortable?, render? }[]`
- data?: any[]
- rowKey?: `string | (row, index) => string`
- clickable?: boolean
- selectedKey?: `string | number`
- childrenKey?: string
- expandedKeys?: `Set<string|number> | (string|number)[]`
- defaultExpandAll?: boolean
- expandable?: boolean
- indentSize?: number

Header:
- sortable?: boolean

Row:
- clickable?: boolean
- selected?: boolean
- as?: `tr | div`
- columns?: string
- level?: number
- expandable?: boolean
- expanded?: boolean

Cell:
- align?: `left | center | right`
- nowrap?: boolean
- as?: `td | div`
- className?: string

See `./Table.model.ts` for exact types.
