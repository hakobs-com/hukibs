# InputEmail

Email input component with built-in validation and consistent styling.

## Import

```ts
import { InputEmail } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <InputEmail 
    v-model="email" 
    label="Email Address"
    placeholder="Enter your email"
    :required="true"
    @validity="handleValidity"
  />
</template>
```

## Live Example

<Example>
  <InputEmail label="Email Address" placeholder="you@example.com" />
  <InputEmail label="Required Email" placeholder="Enter email" :required="true" />
  <InputEmail label="Disabled Email" disabled />
  <InputEmail label="With Error" error="Please enter a valid email" />
</Example>

## Examples

### Basic Usage
```vue
<template>
  <InputEmail 
    v-model="email" 
    label="Email Address"
    placeholder="Enter your email"
  />
</template>
```

### With Validation
```vue
<template>
  <InputEmail 
    v-model="email" 
    label="Work Email"
    placeholder="you@company.com"
    :required="true"
    :validate="true"
    @validity="handleEmailValidity"
  />
</template>

<script setup>
const handleEmailValidity = (isValid) => {
  console.log('Email is valid:', isValid)
}
</script>
```

### Custom Styling
```vue
<template>
  <InputEmail 
    v-model="email" 
    label="Email"
    size="large"
    variant="ghost"
    :clearable="false"
  />
</template>
```

## Props

- modelValue?: string
- label?: string
- placeholder?: string (default: `"email@example.com"`)
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- variant?: `default | ghost` (default: `default`)
- disabled?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- required?: boolean (default: `false`)
- clearable?: boolean (default: `true`)
- autocomplete?: string (default: `"email"`)
- validate?: boolean (default: `true`)

## Events

- `update:modelValue` (value: string)
- `blur` (event: FocusEvent)
- `validity` (isValid: boolean)

## Styling

InputEmail extends BaseInput and supports all global input CSS custom properties:

```css
:root {
  --input-background: #ffffff;
  --input-foreground: #000000;
  --input-border: #d1d5db;
  --input-border-focus: #3b82f6;
  --input-border-error: #ef4444;
  --input-radius: 0.5rem;
  --input-padding: 0.75rem;
}
```

See BaseInput documentation for all available custom properties.