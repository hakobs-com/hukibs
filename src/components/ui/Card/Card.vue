<template>
  <div :class="blockClasses" :data-variant="variant" :style="styles" @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave" ref="cardRef">
    <div :class="bemm('glow')"></div>
    <div class="card__container">
      <!-- Header -->
      <div v-if="showHeader" :class="['card__header', noHeaderPadding && 'card__header--no-padding']">
        <h3 v-if="title" class="card__title">{{ title }}</h3>
        <slot v-else name="header" />
      </div>

      <!-- Content -->
      <div :class="['card__content', noContentPadding && 'card__content--no-padding']">
        <slot />
      </div>

      <!-- Footer -->
      <div v-if="showFooter" :class="['card__footer', noFooterPadding && 'card__footer--no-padding']">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CardProps } from './Card.model'
import { useBemm } from "bemm";

const bemm = useBemm('card');

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  noPadding: false,
  noHeaderPadding: false,
  noContentPadding: false,
  noFooterPadding: false
})

const slots = defineSlots<{
  default: any
  header?: any
  footer?: any
}>()

// Mouse tracking
const cardRef = ref<HTMLElement>()
const pointerX = ref(50)
const pointerY = ref(50)
const pointerAngle = ref(0)

// Determine if header should be shown
const showHeader = computed(() => {
  return props.title || slots.header
})

// Determine if footer should be shown
const showFooter = computed(() => {
  return slots.footer
})

const blockClasses = computed(() => {
  return bemm('', [
    '',
    props.variant ? `${props.variant}` : '',
    props.color ? `${props.color}` : '',
    props.color ? 'has-color' : '',
    props.featured ? 'featured' : '',
    props.hoverable ? 'hoverable' : '',
    props.noPadding ? 'no-padding' : '',
    showHeader.value ? 'has-header' : '',
    showFooter.value ? 'has-footer' : '',
  ])
})

const styles = computed(() => {
  const styleObj: Record<string, string> = {
    '--pointer-x': `${pointerX.value}%`,
    '--pointer-y': `${pointerY.value}%`,
    '--pointer-angle': `${pointerAngle.value}deg`
  }

  if (props.color) {
    styleObj['--card-color'] = `var(--color-${props.color})`
  }

  return styleObj
})

// Mouse event handlers
const handleMouseMove = (event: MouseEvent) => {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Calculate percentage positions
  pointerX.value = Math.round((x / rect.width) * 100)
  pointerY.value = Math.round((y / rect.height) * 100)

  // Calculate angle from center (50%, 50%) to pointer position
  const centerX = 50
  const centerY = 50
  const deltaX = pointerX.value - centerX
  const deltaY = pointerY.value - centerY

  // Calculate angle in radians then convert to degrees
  // Math.atan2 returns angle in radians from -π to π
  // deltaY is positive when going down (CSS coordinates)
  const angleRadians = Math.atan2(deltaY, deltaX)
  const angleDegrees = angleRadians * (180 / Math.PI)

  // Normalize angle: 0° at top, positive clockwise
  // atan2 gives: 0° at right, so we subtract 90°
  pointerAngle.value = Math.round(angleDegrees)
}

const handleMouseLeave = () => {
  // Reset to center on mouse leave
  pointerX.value = 50
  pointerY.value = 50
  // Keep angle at last position
}
</script>

<style lang="scss">
.card {
  --card-border-width: 1px;
  --card-radius: var(--space);
  --card-overflow: visible;
  --card-color: var(--color-primary);

  border-radius: var(--card-radius);
  position: relative;
  transition: all 0.3s ease;
  overflow: var(--card-overflow);
  display: flex;
  flex-direction: column;
  // padding: 2px;
  // background-image: radial-gradient(circle at var(--pointer-x) var(--pointer-y),  var(--card-color) 0%, color-mix(in srgb, var(--card-color), transparent 90%) 100%);


  &--has-color {
    --card-background-color: color-mix(in srgb, var(--card-color), transparent 90%);
    --card-text-color: color-mix(in srgb, var(--card-color), transparent 0%);
  }

  &--hoverable {
    cursor: pointer;

    &:hover {
      transform: translateY(calc(var(--spacing-1, 0.25rem) * -1.25));
      box-shadow: 0 8px 40px color-mix(in srgb, var(--color-foreground), transparent 88%);
    }
  }

  &--featured {
    border-color: var(--color-primary);
    border-width: 2px;
  }

  &--has-color {
    --card-background-color: color-mix(in srgb, var(--card-color), var(--color-background) 75%);
  }

  &[data-variant="elevated"] {
    box-shadow: 0 4px 20px color-mix(in srgb, var(--color-foreground), transparent 95%);
  }

  &[data-variant="ghost"] {
    background: transparent;
    border-color: transparent;
  }

  &__container {
    border-radius: var(--card-radius);
    background: color-mix(in srgb, var(--card-background-color, var(--color-background)), transparent 50%);
    backdrop-filter: blur(5px);
    color: var(--card-text-color, var(--color-foreground));
    border-radius: calc(var(--card-radius) - var(--card-border-width));
    height: 100%;
  }

  // When card has no padding, apply default padding to children
  &--no-padding {
    padding: 0;

    .card__content {
      padding: var(--card-padding, var(--space-m, 2rem));
    }
  }

  // Content wrapper - always has padding unless explicitly removed
  &__content {
    flex: 1;
    padding: var(--card-padding, var(--space-m, 2rem));

    &--no-padding {
      padding: 0;
    }
  }

  // Header styles
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space, 1rem);
    padding: var(--card-header-padding, var(--space) var(--space));
    border-bottom: 1px solid var(--card-border-color, var(--color-accent));

    &--no-padding {
      padding: 0;
    }
  }

  &__title {
    margin: 0;
    font-size: var(--card-title-size, var(--font-size-l, 1.25rem));
    font-weight: var(--card-title-weight, 600);
    color: var(--card-title-color, var(--color-foreground));
    flex: 1;
  }

  // Footer styles
  &__footer {
    display: flex;
    align-items: center;
    padding: var(--card-footer-padding, var(--spacing-6, 1.5rem) var(--space-m, 2rem));
    border-top: 1px solid var(--card-border-color, var(--color-accent));

    &--no-padding {
      padding: 0;
    }
  }

  // Adjustments when header/footer are present
  &--has-header {
    .card__content {
      padding-top: var(--space-m, 2rem);
    }

    &.card--no-padding .card__content {
      padding-top: var(--card-padding, var(--space-m, 2rem));
    }
  }

  &--has-footer {
    .card__content {
      padding-bottom: var(--space-m, 2rem);
    }

    &.card--no-padding .card__content {
      padding-bottom: var(--card-padding, var(--space-m, 2rem));
    }
  }

  // Both header and footer
  &--has-header.card--has-footer {
    .card__content {
      padding: var(--space-m, 2rem);
    }
  }


  &::before {
    content: "";
    position: absolute;
    left: -1px;
    top: -1px;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: inherit;
    display: block;
    background: conic-gradient(from var(--pointer-angle, 45deg) at center in oklch,
        transparent 0%, var(--card-color), color-mix(in oklch, var(--card-color), var(--color-light) 80%), var(--card-color), transparent 50%) border-box;
    mask:
      linear-gradient(transparent),
      linear-gradient(black);
    mask-repeat: no-repeat;
    mask-clip: padding-box, border-box;
    mask-composite: subtract;
  }


  &__glow {

    --radius: var(--card-radius);

    pointer-events: none;

    border-radius: calc(var(--radius) * 2.5);
    border: calc(var(--radius) * 1.25) solid transparent;
    inset: calc(var(--radius) * -2);

    width: calc(100% + (var(--radius) * 4));
    height: calc(100% + (var(--radius) * 4));
    display: block;
    position: absolute;
    left: auto;
    bottom: auto;

    mask: url('https://assets.codepen.io/13471/noise-base.png');
    mask-mode: luminance;
    mask-size: 29%;

    opacity: 1;
    filter: blur(12px) saturate(1.25) brightness(0.5);
    mix-blend-mode: plus-lighter;
    z-index: 3;

    &::before,
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border: inherit;
      border-radius: inherit;
      background: conic-gradient(from var(--pointer-angle, 45deg) at center in oklch,
          transparent var(--start, 0%),  color-mix(in oklch, var(--card-color), var(--color-light) 50%), transparent var(--end, 50%)) border-box;
      mask:
        linear-gradient(transparent),
        linear-gradient(black);
      mask-repeat: no-repeat;
      mask-clip: padding-box, border-box;
      mask-composite: subtract;
      filter: saturate(2) brightness(1);

    }

    &::after {
      --lit: 70%;
      --sat: 100%;
      --start: 15%;
      --end: 35%;
      border-width: calc(var(--radius) * 1.75);
      border-radius: calc(var(--radius) * 2.75);
      inset: calc(var(--radius) * -0.25);
      z-index: 4;
      opacity: 1;
    }


  }
}
</style>
