# Alert

Banner-style message for success, info, warning, and error states.

## Import

```ts
import { Alert } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<Alert variant="success">Saved successfully</Alert>
<Alert variant="error" :closable="true">Something went wrong</Alert>
```

## Props

- variant?: `DEFAULT | INFO | SUCCESS | WARNING | ERROR` (enum values map to theme colors)
- title?: string
- description?: string
- dismissible?: boolean
- icon?: string

See `./Alert.model.ts` for types.
