# Toast

Transient notification messages with type and position variants. Use the `toastService` for programmatic toasts.

## Import

```ts
import { toastService } from '@sil/ui'
import '@sil/ui/style.css'
```

## Service Usage

```ts
toastService.success('Saved!')
toastService.info('Heads up')
toastService.warning('Be careful')
toastService.error('Oops! Something went wrong')

// With options
toastService.show({
  type: 'success',
  message: 'Saved!',
  position: 'top-right',
  duration: 4000
})
```

## Component Usage

```vue
<template>
  <Toast />
</template>

<script setup lang="ts">
import Toast from '@sil/ui/dist/index.es.js'
// If you export Toast as a named export, use: import { Toast } from '@sil/ui'
</script>
```

## API

- See `./Toast.model.ts` for `ToastType` and `ToastPosition` enums and props.
- See `./Toast.service.ts` for the programmatic API.
