# Radio & RadioGroup

Radio button components for single selection with group support.

## Import

```ts
import { Radio, RadioGroup } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

### Single Radio Button
```vue
<template>
  <Radio 
    v-model="selected" 
    value="option1"
    label="Option 1"
  />
</template>
```

### Radio Group (Recommended)
```vue
<template>
  <RadioGroup 
    v-model="selectedPlan" 
    :options="plans"
    label="Choose your plan"
  />
</template>
```

## Live Example

<Example>
  <RadioGroup 
    v-model="selectedOption" 
    :options="['Option A', 'Option B', 'Option C']"
    label="Choose an option"
  />
  <RadioGroup 
    v-model="selectedSize" 
    :options="['Small', 'Medium', 'Large']"
    label="Size"
    direction="horizontal"
  />
</Example>

## Examples

### Basic Radio Group
```vue
<template>
  <RadioGroup 
    v-model="selectedOption" 
    :options="['Option 1', 'Option 2', 'Option 3']"
    label="Choose an option"
    :required="true"
  />
</template>

<script setup>
const selectedOption = ref('Option 1')
</script>
```

### With Object Options
```vue
<template>
  <RadioGroup 
    v-model="selectedPlan" 
    :options="planOptions"
    label="Select a plan"
    direction="vertical"
  />
</template>

<script setup>
const planOptions = [
  { value: 'basic', label: 'Basic Plan', description: 'Perfect for individuals' },
  { value: 'pro', label: 'Pro Plan', description: 'Great for professionals' },
  { value: 'enterprise', label: 'Enterprise', description: 'For large teams' }
]

const selectedPlan = ref('basic')
</script>
```

### Horizontal Layout
```vue
<template>
  <RadioGroup 
    v-model="gender" 
    :options="['Male', 'Female', 'Other']"
    label="Gender"
    direction="horizontal"
  />
</template>
```

### With Color Variants
```vue
<template>
  <RadioGroup 
    v-model="priority" 
    :options="['Low', 'Medium', 'High']"
    label="Priority"
    color="warning"
  />
</template>
```

### Disabled Options
```vue
<template>
  <RadioGroup 
    v-model="shipping" 
    :options="shippingOptions"
    label="Shipping Method"
  />
</template>

<script setup>
const shippingOptions = [
  { value: 'standard', label: 'Standard Shipping (5-7 days)' },
  { value: 'express', label: 'Express Shipping (2-3 days)' },
  { value: 'overnight', label: 'Overnight Shipping', disabled: true }
]

const shipping = ref('standard')
</script>
```

### Individual Radio Buttons
```vue
<template>
  <div>
    <Radio 
      v-model="method" 
      value="email"
      label="Email notifications"
      name="notification-method"
    />
    <Radio 
      v-model="method" 
      value="sms"
      label="SMS notifications"
      name="notification-method"
    />
    <Radio 
      v-model="method" 
      value="push"
      label="Push notifications"
      name="notification-method"
    />
  </div>
</template>
```

## Radio Props

- modelValue?: string | number | boolean
- value?: string | number | boolean
- label?: string
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- color?: `primary | success | warning | error | info` (default: `primary`)
- disabled?: boolean (default: `false`)
- required?: boolean (default: `false`)
- ripple?: boolean (default: `true`)
- class?: string

## RadioGroup Props

- modelValue?: string | number | boolean
- options: (string | number | boolean | RadioOption)[]
- label?: string
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- color?: `primary | success | warning | error | info` (default: `primary`)
- direction?: `vertical | horizontal` (default: `vertical`)
- disabled?: boolean (default: `false`)
- required?: boolean (default: `false`)
- ripple?: boolean (default: `true`)
- class?: string

## RadioOption Interface

```ts
interface RadioOption {
  value: string | number | boolean
  label: string
  description?: string
  disabled?: boolean
}
```

## Events

### Radio Events
- `update:modelValue` (value: string | number | boolean)
- `change` (value: string | number | boolean)
- `focus` (event: FocusEvent)
- `blur` (event: FocusEvent)

### RadioGroup Events
- `update:modelValue` (value: string | number | boolean)
- `change` (value: string | number | boolean)

## Styling

Radio components support extensive CSS custom properties:

```css
:root {
  /* Sizing */
  --radio-size-small: 1rem;
  --radio-size-medium: 1.25rem;
  --radio-size-large: 1.5rem;
  --radio-dot-size-small: 0.25rem;
  --radio-dot-size-medium: 0.375rem;
  --radio-dot-size-large: 0.5rem;
  
  /* Colors */
  --radio-background: var(--input-background);
  --radio-border: var(--input-border);
  --radio-checked-border: var(--color-primary);
  --radio-dot-background: var(--color-primary);
  
  /* Color variants */
  --radio-primary-border: var(--color-primary);
  --radio-success-border: var(--color-success);
  --radio-warning-border: var(--color-warning);
  --radio-error-border: var(--color-error);
  --radio-info-border: var(--color-info);
  
  /* Transitions */
  --radio-transition: all 0.2s ease;
}
```

### Targeting Specific Elements
```css
/* Radio control */
.radio-control { }

/* Radio dot/circle */
.radio-dot { }

/* Radio group */
.radio-group { }

/* Radio group options container */
.radio-group-options { }

/* Horizontal layout */
.radio-group-options--horizontal {
  flex-direction: row;
  gap: 1.5rem;
}
```