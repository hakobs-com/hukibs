# Alert

Banner-style message for success, info, warning, and error states.

## Import

```ts
import { Alert } from '@sil/ui'
import '@sil/ui/style.css'
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
