# Popup

Modal dialog system with a component API and a service API (confirm, prompt, input, progress).

## Import

```ts
import { Popup, popupService } from 'hukibs'
import 'hukibs/style.css'
```

## Component Usage

```vue
<template>
  <Popup v-model="open" title="Delete item" description="This action cannot be undone">
    <template #actions>
      <Button variant="ghost" @click="open = false">Cancel</Button>
      <Button color="error" @click="confirm">Delete</Button>
    </template>
  </Popup>

  <Button @click="open = true">Open Popup</Button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button, Popup } from 'hukibs'

const open = ref(false)
const confirm = () => {
  // destructive action
  open.value = false
}
</script>
```

## Service Usage

```ts
import { popupService } from 'hukibs'

// Confirm
const ok = await popupService.confirm({
  title: 'Delete item',
  description: 'This action cannot be undone'
})
if (ok) {
  // proceed
}

// Prompt / Input
const name = await popupService.prompt({
  title: 'Rename',
  placeholder: 'Enter a new name'
})
```

## Wrapper Component

For convenience, use `PopupWrapper` to wrap arbitrary content with a trigger and managed state.

```vue
<template>
  <PopupWrapper :title="'Invite user'">
    <template #trigger>
      <Button icon="plus">Invite</Button>
    </template>
    <InviteForm />
  </PopupWrapper>
</template>

<script setup lang="ts">
import { Button, PopupWrapper } from 'hukibs'
import InviteForm from './InviteForm.vue'
</script>
```

See `./Popup.md` for more advanced scenarios and full API.
