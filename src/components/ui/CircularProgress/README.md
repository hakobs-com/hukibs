# CircularProgress

Circular progress indicator for showing loading or completion percentage.

## Import

```ts
import { CircularProgress } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<CircularProgress :value="42" />
<CircularProgress :value="75" size="large" />
```

## Props

CircularProgressProps:
- percentage: `number` (optional)
- size: `number` (optional)
- strokeWidth: `number` (optional)
- indeterminate: `boolean` (optional)
- color: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'` (optional)
