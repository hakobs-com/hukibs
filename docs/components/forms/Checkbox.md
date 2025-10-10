# Checkbox

Checkbox component with support for single and array selection modes.

## Import

```ts
import { Checkbox } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <Checkbox 
    v-model="agree" 
    label="I agree to the terms and conditions"
    :required="true"
  />
</template>
```

## Live Example

<Example>
  <Checkbox v-model="checked1" label="Remember me" />
  <Checkbox v-model="checked2" label="Subscribe to newsletter" />
  <Checkbox v-model="checked3" label="Enable notifications" />
  <Checkbox label="Disabled checkbox" disabled />
  <Checkbox label="With error" error="This field is required" />
</Example>

## Examples

### Basic Checkbox
```vue
<template>
  <Checkbox 
    v-model="rememberMe" 
    label="Remember me for 30 days"
  />
</template>
```

### Required Checkbox
```vue
<template>
  <Checkbox 
    v-model="termsAccepted" 
    label="I accept the terms and conditions"
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

### Array Selection (Multiple Checkboxes)
```vue
<template>
  <div>
    <Checkbox 
      v-model="selectedFeatures" 
      value="notifications"
      label="Push notifications"
    />
    <Checkbox 
      v-model="selectedFeatures" 
      value="newsletter"
      label="Weekly newsletter"
    />
    <Checkbox 
      v-model="selectedFeatures" 
      value="updates"
      label="Product updates"
    />
  </div>
</template>

<script setup>
const selectedFeatures = ref(['notifications'])
</script>
```

### With Description
```vue
<template>
  <Checkbox 
    v-model="enableBeta" 
    label="Enable beta features"
    description="Get early access to new features and improvements"
  />
</template>
```

### Color Variants
```vue
<template>
  <Checkbox v-model="primary" label="Primary" color="primary" />
  <Checkbox v-model="success" label="Success" color="success" />
  <Checkbox v-model="warning" label="Warning" color="warning" />
  <Checkbox v-model="error" label="Error" color="error" />
  <Checkbox v-model="info" label="Info" color="info" />
</template>
```

## Props

- modelValue?: boolean | string[]
- value?: string | number | boolean (required for array mode)
- label?: string
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- color?: `primary | success | warning | error | info` (default: `primary`)
- disabled?: boolean (default: `false`)
- required?: boolean (default: `false`)
- indeterminate?: boolean (default: `false`)
- ripple?: boolean (default: `true`)
- class?: string

## Events

- `update:modelValue` (value: boolean | string[])
- `change` (value: boolean | string[])
- `focus` (event: FocusEvent)
- `blur` (event: FocusEvent)

## Selection Modes

### Boolean Mode (Default)
```vue
<Checkbox v-model="checked" label="Check me" />
```
`checked` will be `true` or `false`.

### Array Mode (Multiple Selection)
```vue
<Checkbox v-model="selected" value="option1" label="Option 1" />
<Checkbox v-model="selected" value="option2" label="Option 2" />
```
`selected` will be an array of selected values.

## Styling

Checkbox supports extensive CSS custom properties:

```css
:root {
  /* Sizing */
  --checkbox-size-small: 1rem;
  --checkbox-size-medium: 1.25rem;
  --checkbox-size-large: 1.5rem;
  
  /* Colors */
  --checkbox-background: var(--input-background);
  --checkbox-border: var(--input-border);
  --checkbox-checked-background: var(--color-primary);
  --checkbox-checked-foreground: #ffffff;
  
  /* Color variants */
  --checkbox-success-background: var(--color-success);
  --checkbox-warning-background: var(--color-warning);
  --checkbox-error-background: var(--color-error);
  --checkbox-info-background: var(--color-info);
  
  /* Transitions */
  --checkbox-transition: all 0.2s ease;
}
```

### Targeting Specific Elements
```css
/* Checkbox control */
.checkbox-control { }

/* Checkbox icon/checkmark */
.checkbox-icon { }

/* Required asterisk */
.checkbox-required { }

/* Description text */
.checkbox-description { }

/* Error message */
.checkbox-error { }
```