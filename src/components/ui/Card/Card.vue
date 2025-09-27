<template>
  <div
    :class="blockClasses"
    :data-variant="variant"
    :style="styles"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    ref="cardRef"
  >
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

// Determine if header should be shown
const showHeader = computed(() => {
  return props.title || slots.header
})

// Determine if footer should be shown
const showFooter = computed(() => {
  return slots.footer
})

const blockClasses = computed(() => {
  const classes = [
    'card',
    props.variant && `card--${props.variant}`,
    props.color && `card--${props.color}`,
    props.color && 'card--has-color',
    props.featured && 'card--featured',
    props.hoverable && 'card--hoverable',
    props.noPadding && 'card--no-padding',
    showHeader.value && 'card--has-header',
    showFooter.value && 'card--has-footer'
  ]

  return classes.filter(Boolean);
})

const styles = computed(() => {
  const styleObj: Record<string, string> = {
    '--pointer-x': `${pointerX.value}%`,
    '--pointer-y': `${pointerY.value}%`
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
}

const handleMouseLeave = () => {
  // Reset to center on mouse leave
  pointerX.value = 50
  pointerY.value = 50
}
</script>

<style lang="scss">
.card {
  --card-border-width: 2px;
  --card-radius: var(--space);
  --card-overflow: visible;
  --card-color: var(--color-primary);

  border-radius: var(--card-radius);
  position: relative;
  transition: all 0.3s ease;
  overflow: var(--card-overflow);
  display: flex;
  flex-direction: column;
  padding: 2px;
  background-image: radial-gradient(circle at var(--pointer-x) var(--pointer-y),  var(--card-color) 0%, color-mix(in srgb, var(--card-color), transparent 90%) 100%);

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

  &--has-color{
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
    background: var(--card-background-color, var(--color-background));
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
}
</style>