# LogoScroller

A versatile logo display component that can render logos in either an animated scrolling marquee or a static grid layout. Supports both image URLs and Vue components as logo content.

## Import

```ts
import { LogoScroller } from 'hukibs'
import 'hukibs/style.css'
```

## Interactive Demo

<div style="margin-bottom: 2rem;">
  <h3>Configure LogoScroller</h3>
  
  <!-- Preset Buttons -->
  <div style="margin-bottom: 1rem; display: flex; gap: 0.5rem; flex-wrap: wrap;">
    <Button @click="applyPreset('default')" size="small" color="primary">Default</Button>
    <Button @click="applyPreset('fast')" size="small" color="primary">Fast Scroll</Button>
    <Button @click="applyPreset('grid')" size="small" color="primary">Grid Layout</Button>
    <Button @click="applyPreset('compact')" size="small" color="primary">Compact</Button>
    <Button @click="applyPreset('large')" size="small" color="primary">Large</Button>
  </div>
  
  <!-- Configuration Controls -->
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; padding: 1rem; background: var(--color-accent, rgba(255,255,255,0.05)); border-radius: 0.5rem;">
    <div>
      <SelectInput 
        v-model="demoVariant" 
        label="Variant"
        :options="['scroller', 'grid']"
        @update:model-value="demoVariant = $event"
      />
    </div>
    <div>
      <SelectInput 
        v-model="demoSpeed" 
        label="Speed"
        :options="['slow', 'normal', 'fast']"
        @update:model-value="demoSpeed = $event"
      />
    </div>
    <div>
      <SelectInput 
        v-model="demoDirection" 
        label="Direction"
        :options="['left', 'right']"
        @update:model-value="demoDirection = $event"
      />
    </div>
    <div>
      <Toggle 
        v-model="demoPauseOnHover" 
        label="Pause on Hover"
        @update:model-value="demoPauseOnHover = $event"
      />
    </div>
    <div v-if="demoVariant === 'grid'">
      <InputNumber 
        v-model="demoGridSize" 
        label="Grid Size"
        :min="2"
        :max="6"
        @update:model-value="demoGridSize = $event"
      />
    </div>
    <div>
      <TextInput 
        v-model="demoLogoHeight" 
        label="Logo Height"
        placeholder="40px"
        @update:model-value="demoLogoHeight = $event"
      />
    </div>
    <div>
      <TextInput 
        v-model="demoGap" 
        label="Gap"
        placeholder="2rem"
        @update:model-value="demoGap = $event"
      />
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const demoVariant = ref('scroller')
const demoSpeed = ref('normal')
const demoDirection = ref('left')
const demoPauseOnHover = ref(true)
const demoGridSize = ref(4)
const demoLogoHeight = ref('40px')
const demoGap = ref('2rem')

// Preset configurations
const applyPreset = (preset) => {
  switch (preset) {
    case 'default':
      demoVariant.value = 'scroller'
      demoSpeed.value = 'normal'
      demoDirection.value = 'left'
      demoPauseOnHover.value = true
      demoLogoHeight.value = '40px'
      demoGap.value = '2rem'
      break
    case 'fast':
      demoVariant.value = 'scroller'
      demoSpeed.value = 'fast'
      demoDirection.value = 'left'
      demoPauseOnHover.value = false
      demoLogoHeight.value = '40px'
      demoGap.value = '1.5rem'
      break
    case 'grid':
      demoVariant.value = 'grid'
      demoGridSize.value = 4
      demoLogoHeight.value = '50px'
      demoGap.value = '2rem'
      break
    case 'compact':
      demoVariant.value = 'scroller'
      demoSpeed.value = 'slow'
      demoDirection.value = 'right'
      demoPauseOnHover.value = true
      demoLogoHeight.value = '30px'
      demoGap.value = '1rem'
      break
    case 'large':
      demoVariant.value = 'scroller'
      demoSpeed.value = 'slow'
      demoDirection.value = 'left'
      demoPauseOnHover.value = true
      demoLogoHeight.value = '60px'
      demoGap.value = '3rem'
      break
  }
}

const demoLogos = [
  {
    id: '1',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjZjBmMGYwIi8+CiAgPHRleHQgeD0iNjAiIHk9IjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NjY2NjYiPkxPR088L3RleHQ+Cjwvc3ZnPg==',
    alt: 'Logo 1'
  },
  {
    id: '2', 
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjE4IiBmaWxsPSIjM0I4MkY2Ii8+CiAgPHJlY3QgeD0iNDIiIHk9IjEyIiB3aWR0aD0iNTYiIGhlaWdodD0iMTYiIHJ4PSI4IiBmaWxsPSIjM0I4MkY2Ii8+CiAgPHRleHQgeD0iNzAiIHk9IjI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IndoaXRlIj5URUNIPC90ZXh0Pgo8L3N2Zz4=',
    alt: 'Logo 2'
  },
  {
    id: '3',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwb2x5Z29uIHBvaW50cz0iMjAsMTAgNDAsMjAgNjAsMTAgODAsMjAgMTAwLDEwIDEwMCwzMCA4MCw0MCA2MCwzMCA0MCw0MCAyMCwzMCAxMCwxMCAzMCwyMCA1MCwxMCA3MCwyMCA5MCwxMCA5MCwzMCA3MCw0MCA1MCwzMCAzMCw0MCAxMCwzMCAiIGZpbGw9IiMxMEI5ODEiLz4KICA8dGV4dCB4PSI1NSIgeT0iMjUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiPkJJVDwvdGV4dD4KPC9zdmc+',
    alt: 'Logo 3'
  },
  {
    id: '4',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0yMCAxMEw0MCAzMEg2MEwyMCAxMFoiIGZpbGw9IiNGNTlFMEIiLz4KICA8cGF0aCBkPSJNNDAgMzBMMzAgMTBIMTBMMzAgMzBIMzBaIiBmaWxsPSIjRjU5RTBCIi8+CiAgPHBhdGggZD0iTTYwIDEwTDgwIDMwSDEwMEw2MCAxMFoiIGZpbGw9IiNGNTlFMEIiLz4KICA8cGF0aCBkPSJNMTEwIDEwTDEwMCAzMEgxMDBMMTEwIDEwWiIgZmlsbD0iI0Y1OUUwQiIvPgogIDx0ZXh0IHg9IjYwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSJ3aGl0ZSI+RkFTVDwvdGV4dD4KPC9zdmc+',
    alt: 'Logo 4'
  },
  {
    id: '5',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSI2MCIgY3k9IjIwIiByeD0iNDAiIHJ5PSIxNSIgZmlsbD0iI0VGNDQ0NCIvPgogIDx0ZXh0IHg9IjYwIiB5PSIyNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSJ3aGl0ZSI+RVJSPC90ZXh0Pgo8L3N2Zz4=',
    alt: 'Logo 5'
  },
  {
    id: '6',
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTIwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxsaW5lIHgxPSIxMCIgeTE9IjMwIiB4Mj0iMTEwIiB5Mj0iMzAiIHN0cm9rZT0iIzEwQjk4MSIgc3Ryb2tlLXdpZHRoPSIzIi8+CiAgPGNpcmNsZSBjeD0iMjAiIGN5PSIxNSIgcj0iNSIgZmlsbD0iIzEwQjk4MSIvPgogIDxjaXJjbGUgY3g9IjYwIiBjeT0iMTUiIHI9IjUiIGZpbGw9IiMxMEI5ODEiLz4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxNSIgcj0iNSIgZmlsbD0iIzEwQjk4MSIvPgogIDx0ZXh0IHg9IjYwIiB5PSIzNSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmaWxsPSIjMTBCOTgxIj5MTBBRDwvdGV4dD4KPC9zdmc+',
    alt: 'Logo 6'
  }
]
</script>

<Example>
  <LogoScroller 
    :logos="demoLogos"
    :variant="demoVariant"
    :speed="demoSpeed"
    :direction="demoDirection"
    :pause-on-hover="demoPauseOnHover"
    :grid-size="demoGridSize"
    :logo-height="demoLogoHeight"
    :gap="demoGap"
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

LogoScrollerProps extends BaseSectionProps:
- logos: `LogoItem[]` (required) — Array of logo items to display
- variant: `'scroller' | 'grid'` (optional) — Display variant, defaults to `'scroller'`
- speed: `'slow' | 'normal' | 'fast'` (optional) — Animation speed for scroller variant, defaults to `'normal'`
- direction: `'left' | 'right'` (optional) — Scroll direction for scroller variant, defaults to `'left'`
- pauseOnHover: `boolean` (optional) — Pause animation on hover for scroller variant, defaults to `true`
- gridSize: `number` (optional) — Number of columns for grid variant, defaults to `4`
- logoHeight: `string` (optional) — Height of logo items, defaults to `'40px'`
- gap: `string` (optional) — Spacing between logos, defaults to `'2rem'`

Plus all BaseSectionProps:
- padding: `string` (optional) — Section padding
- containerSize: `'full' | 'large' | 'small'` (optional) — Container size
- sectionColor: `string` (optional) — Section background color
- containerColor: `string` (optional) — Container background color
- label: `string` (optional) — Section label

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