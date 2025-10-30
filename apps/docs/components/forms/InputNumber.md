# InputNumber

Number input component with controls, formatting, and validation.

## Import

```ts
import { InputNumber } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <InputNumber 
    v-model="quantity" 
    label="Quantity"
    :min="1"
    :max="100"
    :step="1"
  />
</template>
```

## Live Example

<Example>
  <InputNumber label="Quantity" :min="1" :max="10" />
  <InputNumber label="Price" :step="0.01" :precision="2" prefix="$" />
  <InputNumber label="Percentage" :min="0" :max="100" suffix="%" />
  <InputNumber label="Disabled" disabled />
</Example>

## Examples

### Basic Number Input
```vue
<template>
  <InputNumber 
    v-model="count" 
    label="Count"
    placeholder="Enter a number"
    :min="0"
  />
</template>
```

### With Currency Formatting
```vue
<template>
  <InputNumber 
    v-model="price" 
    label="Price"
    placeholder="0.00"
    :step="0.01"
    :precision="2"
    prefix="$"
    :min="0"
  />
</template>
```

### With Percentage
```vue
<template>
  <InputNumber 
    v-model="percentage" 
    label="Discount"
    placeholder="0%"
    :min="0"
    :max="100"
    suffix="%"
    :step="5"
  />
</template>
```

### Without Controls
```vue
<template>
  <InputNumber 
    v-model="age" 
    label="Age"
    :min="18"
    :max="120"
    :controls="false"
  />
</template>
```

## Props

- modelValue?: number | null
- label?: string
- placeholder?: string
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- variant?: `default | ghost` (default: `default`)
- disabled?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- required?: boolean (default: `false`)
- clearable?: boolean (default: `true`)
- min?: number
- max?: number
- step?: number (default: `1`)
- controls?: boolean (default: `true`)
- precision?: number (default: `0`)
- locale?: string (default: `"en-US"`)
- prefix?: string
- suffix?: string

## Events

- `update:modelValue` (value: number | null)
- `blur` (event: FocusEvent)
- `focus` (event: FocusEvent)
- `increment` (value: number)
- `decrement` (value: number)

## Features

### Keyboard Controls
- **Arrow Up**: Increment by step
- **Arrow Down**: Decrement by step
- **Enter**: Apply and blur

### Formatting
- Numbers are formatted with locale-specific thousand separators
- Precision controls decimal places
- Prefix and suffix are displayed but not included in the model value

### Validation
- Enforces min/max constraints
- Clamps values to valid range
- Handles decimal precision

## Styling

InputNumber supports additional CSS custom properties:

```css
:root {
  --number-control-width: 1.5rem;
  --number-control-background: var(--input-background);
  --number-control-border: var(--input-border);
  --number-control-hover: var(--color-accent);
}
```

See BaseInput documentation for all available input custom properties.