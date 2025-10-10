# InputPassword

Password input component with visibility toggle, strength indicator, and validation.

## Import

```ts
import { InputPassword } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <InputPassword 
    v-model="password" 
    label="Password"
    placeholder="Enter password"
    :show-strength="true"
    :required="true"
  />
</template>
```

## Live Example

<Example>
  <InputPassword label="Password" placeholder="Enter password" />
  <InputPassword label="With Strength" placeholder="Strong password" :show-strength="true" />
  <InputPassword label="Disabled" disabled />
  <InputPassword label="With Error" error="Password is too weak" />
</Example>

## Examples

### Basic Password Input
```vue
<template>
  <InputPassword 
    v-model="password" 
    label="Password"
    placeholder="Enter your password"
  />
</template>
```

### With Strength Indicator
```vue
<template>
  <InputPassword 
    v-model="password" 
    label="Secure Password"
    placeholder="Create a strong password"
    :show-strength="true"
    @strength="handleStrengthChange"
  />
</template>

<script setup>
const handleStrengthChange = (strength) => {
  console.log('Password strength:', strength) // 0-100
}
</script>
```

### With Custom Requirements
```vue
<template>
  <InputPassword 
    v-model="password" 
    label="Account Password"
    placeholder="Must meet all requirements"
    :show-strength="true"
    :min-length="12"
    :require-uppercase="true"
    :require-lowercase="true"
    :require-numbers="true"
    :require-special="true"
    @validity="handlePasswordValidity"
  />
</template>
```

## Props

- modelValue?: string
- label?: string
- placeholder?: string (default: `"Enter password"`)
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- variant?: `default | ghost` (default: `default`)
- disabled?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- required?: boolean (default: `false`)
- clearable?: boolean (default: `false`)
- autocomplete?: string (default: `"current-password"`)
- showStrength?: boolean (default: `false`)
- minLength?: number (default: `8`)
- requireUppercase?: boolean (default: `true`)
- requireLowercase?: boolean (default: `true`)
- requireNumbers?: boolean (default: `true`)
- requireSpecial?: boolean (default: `true`)

## Events

- `update:modelValue` (value: string)
- `blur` (event: FocusEvent)
- `validity` (isValid: boolean)
- `strength` (strength: number) // 0-100

## Password Strength

The strength indicator evaluates:
- Length (minimum and additional points for longer passwords)
- Character variety (lowercase, uppercase, numbers, special characters)
- Common patterns (penalizes simple patterns)

## Styling

InputPassword supports additional CSS custom properties for the strength indicator:

```css
:root {
  --password-strength-weak: #ef4444;
  --password-strength-fair: #f59e0b;
  --password-strength-good: #3b82f6;
  --password-strength-strong: #10b981;
}
```

See BaseInput documentation for all available input custom properties.