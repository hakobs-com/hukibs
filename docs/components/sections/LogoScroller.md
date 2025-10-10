# LogoScroller

A versatile logo display component that can render logos in either an animated scrolling marquee or a static grid layout. Supports both image URLs and Vue components as logo content.

## Import

```ts
import { LogoScroller } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

### Scroller Variant (Default)

<Example>
  <LogoScroller 
    :logos="[
      { id: '1', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+1', href: '#' },
      { id: '2', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+2', href: '#' },
      { id: '3', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+3' },
      { id: '4', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+4', href: '#' },
      { id: '5', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+5' },
      { id: '6', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+6', href: '#' },
    ]"
  />
</Example>

```vue
<script setup>
const logos = [
  { id: '1', src: '/logos/company1.svg', href: 'https://company1.com' },
  { id: '2', src: '/logos/company2.svg', href: 'https://company2.com' },
  { id: '3', src: '/logos/company3.svg' },
  { id: '4', src: '/logos/company4.svg' },
]
</script>

<template>
  <LogoScroller :logos="logos" />
</template>
```

### Grid Variant

<Example>
  <LogoScroller 
    :logos="[
      { id: '1', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+1', href: '#' },
      { id: '2', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+2', href: '#' },
      { id: '3', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+3' },
      { id: '4', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+4', href: '#' },
      { id: '5', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+5' },
      { id: '6', src: 'https://via.placeholder.com/120x40/f0f0f0/666666?text=Company+6' },
    ]"
    variant="grid"
    :grid-size="3"
  />
</Example>

```vue
<LogoScroller 
  :logos="logos" 
  variant="grid"
  :grid-size="4"
/>
```

### With Components

```vue
<script setup>
import CustomLogo from './CustomLogo.vue'

const logos = [
  { id: '1', component: CustomLogo },
  { id: '2', src: '/logos/company2.svg' },
]
</script>

<template>
  <LogoScroller :logos="logos" speed="slow" />
</template>
```

### Custom Styling

<Example>
  <LogoScroller 
    :logos="[
      { id: '1', src: 'https://via.placeholder.com/120x40/e1f5fe/01579b?text=Fast+1', href: '#' },
      { id: '2', src: 'https://via.placeholder.com/120x40/e8f5e8/2e7d32?text=Fast+2', href: '#' },
      { id: '3', src: 'https://via.placeholder.com/120x40/fff3e0/e65100?text=Fast+3' },
      { id: '4', src: 'https://via.placeholder.com/120x40/fce4ec/880e4f?text=Fast+4', href: '#' },
    ]"
    logo-height="60px"
    gap="3rem"
    speed="fast"
    direction="right"
    :pause-on-hover="false"
  />
</Example>

```vue
<LogoScroller 
  :logos="logos"
  logo-height="60px"
  gap="3rem"
  speed="fast"
  direction="right"
  :pause-on-hover="false"
/>
```

## Props

LogoScrollerProps:
- logos: `LogoItem[]` (required) — Array of logo items to display
- variant: `'scroller' | 'grid'` (optional) — Display variant, defaults to `'scroller'`
- speed: `'slow' | 'normal' | 'fast'` (optional) — Animation speed for scroller variant, defaults to `'normal'`
- direction: `'left' | 'right'` (optional) — Scroll direction for scroller variant, defaults to `'left'`
- pauseOnHover: `boolean` (optional) — Pause animation on hover for scroller variant, defaults to `true`
- gridSize: `number` (optional) — Number of columns for grid variant, defaults to `4`
- logoHeight: `string` (optional) — Height of logo items, defaults to `'40px'`
- gap: `string` (optional) — Spacing between logos, defaults to `'2rem'`

LogoItem:
- id: `string` (required) — Unique identifier
- src: `string` (optional) — Image source URL
- alt: `string` (optional) — Alt text for image
- href: `string` (optional) — Link URL for clickable logos
- component: `any` (optional) — Vue component to render instead of image

## Styling

- Uses CSS variables for customization: `--logo-height`, `--gap`, `--animation-duration`
- Responsive design automatically adjusts grid columns on smaller screens
- Smooth CSS animations for scrolling effect
- Hover states with opacity transitions