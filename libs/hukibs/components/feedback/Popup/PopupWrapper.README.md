# PopupWrapper

Convenience component that manages popup open/close state around a trigger and default slot content.

## Import

```ts
import { PopupWrapper } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <PopupWrapper title="Invite user" description="Send an invitation email">
    <template #trigger>
      <Button icon="plus">Invite</Button>
    </template>
    <InviteForm @submitted="handleSubmitted" />
  </PopupWrapper>
</template>

<script setup lang="ts">
import { Button, PopupWrapper } from 'hukibs'
import InviteForm from './InviteForm.vue'

const handleSubmitted = () => {
  // close is handled internally when child emits or on your own event
}
</script>
```

## Live Example

<Example>
  <PopupWrapper title="Live Popup" description="This is a live example">
    <template #trigger>
      <Button>Open Popup</Button>
    </template>
    <div>Popup content</div>
  </PopupWrapper>
</Example>

Slots:
- `trigger`: element that opens the popup
- default: content of the popup

See `./Popup.md` and `./PopupWrapper.vue` for details.
