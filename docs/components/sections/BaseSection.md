# BaseSection

A foundational section component that provides consistent layout, styling, and structure for all section components. Includes container management, responsive design, and optional labeling.

## Import

```ts
import { BaseSection } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

### Basic Usage

```vue
<template>
  <BaseSection>
    <p>Your content here</p>
  </BaseSection>
</template>
```

### With Label and Background Color

```vue
<template>
  <BaseSection 
    label="Featured" 
    container-color="var(--color-primary)"
    section-color="color-mix(in srgb, var(--color-primary), transparent 95%)"
  >
    <h2>Featured Content</h2>
    <p>This section has a colored background and label.</p>
  </BaseSection>
</template>
```

### Different Container Sizes

```vue
<template>
  <!-- Full width container -->
  <BaseSection container-size="full">
    <HeroContent />
  </BaseSection>

  <!-- Large container (default) -->
  <BaseSection container-size="large">
    <StandardContent />
  </BaseSection>

  <!-- Small container -->
  <BaseSection container-size="small">
    <ArticleContent />
  </BaseSection>
</template>
```

## Props

BaseSectionProps:
- padding: `string` (optional) — Section padding, defaults to `'var(--spacing)'`
- containerSize: `'full' | 'large' | 'small'` (optional) — Container max-width, defaults to `'large'`
- sectionColor: `string` (optional) — Background color for the section, defaults to `'transparent'`
- containerColor: `string` (optional) — Background color for the container, defaults to `'transparent'`
- label: `string` (optional) — Label displayed in top-left of container

## Styling

- Container size uses CSS variables: `--content-max-width` (default: 1200px) and `--post-max-width` (default: 680px)
- Container padding: `--container-padding` (defaults to 0 when no background, var(--spacing) with background)
- Border radius: `--container-border-radius` (defaults to var(--border-radius))
- Responsive design with automatic mobile adaptation