<template>
  <span :class="badgeClasses" :data-variant="variant" :data-size="size" :style="badgeStyles">
    <Icon v-if="icon" :name="icon" class="badge__icon" />
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps } from './Badge.model'
import { Icon } from '../Icon'

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'default',
  size: 'medium'
})

const badgeClasses = computed(() => [
  'badge',
  props.variant && `badge--${props.variant}`,
  props.size && `badge--${props.size}`,
  props.color && 'badge--has-color'
])

const badgeStyles = computed(() => {
  if (props.color) {
    return {
      '--badge-color': `var(--color-${props.color})`,
      '--badge-text-color': `var(--color-${props.color})-text`
    }
  }
  return {}
})
</script>

<style lang="scss">
.badge {
  --badge-background-color: color-mix(in srgb, var(--badge-color, var(--color-primary)), transparent 75%);
  --badge-text-color: var(--color-foreground);

  background: var(--badge-background-color);
  color: var(--badge-text-color);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs, 0.25rem);
  padding: var(--badge-padding, var(--space-xs, 0.25rem) var(--space-s, 0.75rem));
  border-radius: var(--badge-radius, var(--space-s, 0.75rem));
  font-size: var(--badge-font-size, var(--font-size-s, 0.875rem));
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;

  &--has-color {
    --badge-background-color: color-mix(in srgb, var(--badge-color), transparent 75%);
    --badge-text-color: var(--badge-color);
    --badge-border-color: var(--badge-color);
  }

  &:empty {
    height: 1.5em;
    width: 1.5em;
    padding: 0;
  }

  &--outline {
    background: transparent;
    border: 1px solid var(--badge-border-color, currentColor);
  }

  &--small {
    --badge-padding: var(--space-xxs, 0.125rem) var(--space-xs, 0.5rem);
    --badge-font-size: var(--font-size-xs, 0.75rem);
  }

  &--large {
    --badge-padding: var(--space-s, 0.375rem) var(--space-m, 1rem);
    --badge-font-size: var(--font-size-m, 1rem);
  }

  &__icon {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }
}
</style>