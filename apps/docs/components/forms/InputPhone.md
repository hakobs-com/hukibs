# InputPhone

Phone number input component with country selector and auto-formatting.

## Import

```ts
import { InputPhone } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <InputPhone 
    v-model="phone" 
    label="Phone Number"
    :show-country-selector="true"
    :auto-format="true"
  />
</template>
```

## Live Example

<Example>
  <InputPhone label="Phone" placeholder="(555) 123-4567" />
  <InputPhone label="With Country" :show-country-selector="true" />
  <InputPhone label="International" :international="true" :show-country-selector="true" />
  <InputPhone label="Disabled" disabled />
</Example>

## Examples

### Basic Phone Input
```vue
<template>
  <InputPhone 
    v-model="phone" 
    label="Phone Number"
    placeholder="(555) 123-4567"
    :auto-format="true"
  />
</template>
```

### With Country Selector
```vue
<template>
  <InputPhone 
    v-model="phone" 
    label="Mobile Phone"
    :show-country-selector="true"
    :default-country="'US'"
    @country-change="handleCountryChange"
  />
</template>

<script setup>
const handleCountryChange = (country) => {
  console.log('Selected country:', country.name, country.dialCode)
}
</script>
```

### International Format
```vue
<template>
  <InputPhone 
    v-model="phone" 
    label="International Phone"
    :international="true"
    :show-country-selector="true"
    :auto-format="true"
  />
</template>
```

### Without Country Selector
```vue
<template>
  <InputPhone 
    v-model="phone" 
    label="Local Phone"
    :show-country-selector="false"
    :default-country="'US'"
  />
</template>
```

## Props

- modelValue?: string
- label?: string
- placeholder?: string (default: `"Phone number"`)
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- variant?: `default | ghost` (default: `default`)
- disabled?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- required?: boolean (default: `false`)
- clearable?: boolean (default: `true`)
- defaultCountry?: string (default: `"US"`)
- showCountrySelector?: boolean (default: `true`)
- autoFormat?: boolean (default: `true`)
- international?: boolean (default: `false`)

## Events

- `update:modelValue` (value: string)
- `blur` (event: FocusEvent)
- `validity` (isValid: boolean)
- `countryChange` (country: Country)

## Supported Countries

The component includes 40+ countries with proper formatting:

**Popular regions:**
- United States (+1) - (XXX) XXX-XXXX
- United Kingdom (+44) - XXXX XXXXXX  
- Canada (+1) - (XXX) XXX-XXXX
- Australia (+61) - XXXX XXX XXX
- Germany (+49) - XXX XXXXXXX

And many more European, Asian, and international regions.

## Features

### Auto-formatting
- Formats numbers according to country-specific patterns
- Handles different phone number lengths per country
- Preserves formatting while typing

### Country Detection
- Automatically detects country code in international mode
- Updates country selector when dial code changes

### Validation
- Validates minimum length (usually 10 digits)
- Validates maximum length (international standard: 15 digits)
- Country-specific validation rules

## Styling

InputPhone supports additional CSS custom properties:

```css
:root {
  --phone-select-width: 5rem;
  --phone-select-background: var(--input-background);
  --phone-select-border: var(--input-border);
}
```

See BaseInput documentation for all available input custom properties.