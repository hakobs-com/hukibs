# Toggle

Toggle switch component for binary on/off selections with label support.

## Import

```ts
import { Toggle } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <Toggle 
    v-model="enabled" 
    label="Enable notifications"
    :show-labels="true"
  />
</template>
```

## Live Example

<Example>
  <Toggle v-model="toggle1" label="Dark mode" />
  <Toggle v-model="toggle2" label="Email notifications" :show-labels="true" />
  <Toggle v-model="toggle3" label="Auto-save" color="success" />
  <Toggle label="Disabled toggle" disabled />
</Example>

## Examples

### Basic Toggle
```vue
<template>
  <Toggle 
    v-model="enabled" 
    label="Enable feature"
  />
</template>

<script setup>
const enabled = ref(true)
</script>
```

### With On/Off Labels
```vue
<template>
  <Toggle 
    v-model="notifications" 
    label="Push notifications"
    :show-labels="true"
    label-on="ON"
    label-off="OFF"
  />
</template>
```

### Color Variants
```vue
<template>
  <div>
    <Toggle v-model="primary" label="Primary" color="primary" />
    <Toggle v-model="success" label="Success" color="success" />
    <Toggle v-model="warning" label="Warning" color="warning" />
    <Toggle v-model="error" label="Error" color="error" />
    <Toggle v-model="info" label="Info" color="info" />
  </div>
</template>
```

### Custom Labels
```vue
<template>
  <Toggle 
    v-model="wifi" 
    label="Wi-Fi"
    :show-labels="true"
    label-on="Connected"
    label-off="Disconnected"
    color="success"
  />
</template>
```

### With Description
```vue
<template>
  <Toggle 
    v-model="analytics" 
    label="Share analytics data"
    description="Help us improve by sharing anonymous usage data"
  />
</template>
```

### Different Sizes
```vue
<template>
  <div>
    <Toggle v-model="small" label="Small" size="small" />
    <Toggle v-model="medium" label="Medium" size="medium" />
    <Toggle v-model="large" label="Large" size="large" />
  </div>
</template>
```

### Required Field
```vue
<template>
  <Toggle 
    v-model="terms" 
    label="I accept the terms"
    :required="true"
    @change="handleTermsChange"
  />
</template>

<script setup>
const handleTermsChange = (value) => {
  console.log('Terms accepted:', value)
}
</script>
```

## Props

- modelValue?: boolean
- label?: string
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- color?: `primary | success | warning | error | info` (default: `primary`)
- disabled?: boolean (default: `false`)
- required?: boolean (default: `false`)
- ripple?: boolean (default: `true`)
- labelOn?: string (default: `"ON"`)
- labelOff?: string (default: `"OFF"`)
- showLabels?: boolean (default: `false`)
- class?: string

## Events

- `update:modelValue` (value: boolean)
- `change` (value: boolean)
- `focus` (event: FocusEvent)
- `blur` (event: FocusEvent)

## Features

### Smooth Animations
- Toggle thumb slides smoothly between positions
- Color transitions for state changes
- Optional ripple effect on interaction

### Accessibility
- Proper keyboard navigation
- Screen reader support
- High contrast visibility

### Visual States
- **On**: Colored track with thumb on the right
- **Off**: Neutral track with thumb on the left
- **Disabled**: Reduced opacity, no interaction
- **Focus**: Visible focus ring

## Styling

Toggle supports extensive CSS custom properties:

```css
:root {
  /* Sizing */
  --toggle-width-small: 2.5rem;
  --toggle-height-small: 1.25rem;
  --toggle-width-medium: 3rem;
  --toggle-height-medium: 1.5rem;
  --toggle-width-large: 3.5rem;
  --toggle-height-large: 1.75rem;
  
  /* Thumb sizing */
  --toggle-thumb-size-small: 0.75rem;
  --toggle-thumb-size-medium: 1rem;
  --toggle-thumb-size-large: 1.25rem;
  
  /* Colors */
  --toggle-background: var(--color-accent);
  --toggle-background-checked: var(--color-primary);
  --toggle-thumb-background: #ffffff;
  --toggle-thumb-border: var(--input-border);
  
  /* Color variants */
  --toggle-primary-background: var(--color-primary);
  --toggle-success-background: var(--color-success);
  --toggle-warning-background: var(--color-warning);
  --toggle-error-background: var(--color-error);
  --toggle-info-background: var(--color-info);
  
  /* Transitions */
  --toggle-transition: all 0.2s ease;
}
```

### Targeting Specific Elements
```css
/* Toggle wrapper */
.toggle-wrapper { }

/* Toggle control container */
.toggle-control { }

/* Toggle track */
.toggle-track { }

/* Toggle thumb */
.toggle-thumb { }

/* Thumb labels */
.toggle-thumb-label { }

/* Required asterisk */
.toggle-required { }

/* Description text */
.toggle-description { }

/* Error message */
.toggle-error { }
```