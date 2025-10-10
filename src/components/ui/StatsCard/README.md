# StatsCard

Card for displaying a statistic with label, value, optional trend and icon.

## Import

```ts
import { StatsCard } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<StatsCard label="Active Users" value="1,024" trend="+12%" icon="users" />
```

## Props

StatsCardProps:
- value: `string | number` (required)
- label: `string` (required)
- layout: `'icon' | 'progress-circle' | 'progress-bar' | 'compact'` (optional)
- icon: `string` (optional)
- color: `'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'blue' | 'green'` (optional)
- variant: `'default' | 'elevated' | 'outlined' | 'minimal'` (optional)
- size: `'small' | 'medium' | 'large'` (optional)
- percentage: `number` (optional)
- total: `number` (optional)
- isLoading: `boolean` (optional)
- isClickable: `boolean` (optional)
- formatter: `(value: string | number) => string` (optional)
