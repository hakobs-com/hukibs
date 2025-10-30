# InputUrl

URL input component with validation, auto-protocol handling, and preview.

## Import

```ts
import { InputUrl } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<template>
  <InputUrl 
    v-model="website" 
    label="Website URL"
    placeholder="https://example.com"
    :auto-add-protocol="true"
  />
</template>
```

## Live Example

<Example>
  <InputUrl label="Website" placeholder="https://example.com" />
  <InputUrl label="With Preview" :show-preview="true" />
  <InputUrl label="Custom Protocol" placeholder="ftp://files.example.com" />
  <InputUrl label="Disabled" disabled />
</Example>

## Examples

### Basic URL Input
```vue
<template>
  <InputUrl 
    v-model="url" 
    label="Website"
    placeholder="https://example.com"
    :validate="true"
  />
</template>
```

### With Preview
```vue
<template>
  <InputUrl 
    v-model="url" 
    label="Company Website"
    placeholder="https://company.com"
    :show-preview="true"
    :auto-add-protocol="true"
  />
</template>
```

### Restricted Protocols
```vue
<template>
  <InputUrl 
    v-model="url" 
    label="Secure Link"
    placeholder="https://secure.example.com"
    :allowed-protocols="['https:']"
    :validate="true"
  />
</template>
```

### Email and Phone URLs
```vue
<template>
  <InputUrl 
    v-model="contactUrl" 
    label="Contact URL"
    placeholder="mailto:info@example.com"
    :allowed-protocols="['mailto:', 'tel:', 'https:']"
  />
</template>
```

## Props

- modelValue?: string
- label?: string
- placeholder?: string (default: `"https://example.com"`)
- description?: string
- error?: string | string[]
- size?: `small | medium | large` (default: `medium`)
- variant?: `default | ghost` (default: `default`)
- disabled?: boolean (default: `false`)
- readonly?: boolean (default: `false`)
- required?: boolean (default: `false`)
- clearable?: boolean (default: `true`)
- autocomplete?: string (default: `"url"`)
- validate?: boolean (default: `true`)
- allowedProtocols?: string[] (default: `['http:', 'https:', 'ftp:', 'mailto:', 'tel:']`)
- autoAddProtocol?: boolean (default: `true`)
- showPreview?: boolean (default: `false`)

## Events

- `update:modelValue` (value: string)
- `blur` (event: FocusEvent)
- `validity` (isValid: boolean)

## Features

### Auto-Protocol Handling
- Automatically adds `https://` if missing and `autoAddProtocol` is true
- Preserves existing protocols when provided
- Handles special protocols like `mailto:` and `tel:`

### URL Validation
- Validates URL format using native URL API
- Validates against allowed protocols
- Provides clear error messages

### URL Preview
- Shows domain and path separately when `showPreview` is enabled
- Displays external link for valid URLs
- Opens links in new tab safely

## Protocol Support

Default allowed protocols:
- **http://**, **https://** - Web URLs
- **ftp://** - FTP servers  
- **mailto:** - Email links
- **tel:** - Phone numbers

You can restrict protocols using the `allowedProtocols` prop.

## Styling

InputUrl supports additional CSS custom properties for the preview:

```css
:root {
  --url-preview-background: var(--color-accent);
  --url-preview-domain: var(--color-primary);
  --url-preview-path: var(--color-text-secondary);
  --url-preview-link: var(--color-primary);
}
```

See BaseInput documentation for all available input custom properties.