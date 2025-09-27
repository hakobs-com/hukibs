<template>
  <Card
    :variant="cardVariant"
    :hoverable="isClickable"
    :class="bemm('', ['', size])"
  >
    <!-- Icon + Value + Label Layout -->
    <template v-if="layout === 'icon'">
      <div :class="bemm('icon-container', { loading: isLoading })">
        <CircularProgress
          v-if="isLoading"
          :size="iconSizes[size]"
          :stroke-width="2"
          indeterminate
        />
        <div v-else :class="bemm('icon', ['', color])">
          <Icon :name="icon" />
        </div>
      </div>
      <div :class="bemm('content')">
        <span :class="bemm('value')">{{ displayValue }}</span>
        <span :class="bemm('label')">{{ label }}</span>
      </div>
    </template>

    <!-- Progress Circle Layout -->
    <template v-else-if="layout === 'progress-circle'">
      <div :class="bemm('progress-container')">
        <CircularProgress
          :percentage="progressValue"
          :size="iconSizes[size]"
          :stroke-width="strokeWidths[size]"
          :color="progressColor"
        />
      </div>
      <div :class="bemm('content')">
        <span :class="bemm('value')">{{ displayValue }}</span>
        <span :class="bemm('label')">{{ label }}</span>
      </div>
    </template>

    <!-- Progress Bar Layout -->
    <template v-else-if="layout === 'progress-bar'">
      <div :class="bemm('header')">
        <span :class="bemm('label')">{{ label }}</span>
        <span :class="bemm('value')">{{ displayValue }}</span>
      </div>
      <div :class="bemm('progress-bar')">
        <div
          :class="bemm('progress-fill', ['', color])"
          :style="{ width: `${progressValue}%` }"
        />
      </div>
    </template>

    <!-- Compact Layout (for badges/chips) -->
    <template v-else-if="layout === 'compact'">
      <Icon v-if="icon" :name="icon" :class="bemm('compact-icon', ['', color])" />
      <span :class="bemm('compact-value')">{{ displayValue }}</span>
      <span v-if="label" :class="bemm('compact-label')">{{ label }}</span>
    </template>

    <!-- Action slot for buttons or other interactive elements -->
    <div v-if="$slots.action" :class="bemm('action')">
      <slot name="action" />
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBemm } from 'bemm';
import { Icon } from '../Icon';
import { Card } from '../Card';
import { CircularProgress } from '../CircularProgress';
import type { StatsCardProps } from './StatsCard.model';

const props = withDefaults(defineProps<StatsCardProps>(), {
  layout: 'icon',
  color: 'primary',
  variant: 'default',
  size: 'medium',
  isLoading: false,
  isClickable: false
});

const { bemm } = useBemm('stats-card');

// Responsive sizing configurations
const iconSizes = {
  small: 32,
  medium: 48,
  large: 64
};

const strokeWidths = {
  small: 3,
  medium: 4,
  large: 5
};

// Computed values
const displayValue = computed(() => {
  if (props.formatter) {
    return props.formatter(props.value);
  }

  if (props.layout === 'progress-circle' || props.layout === 'progress-bar') {
    return `${progressValue.value}%`;
  }

  return props.value.toString();
});

const progressValue = computed(() => {
  if (props.percentage !== undefined) {
    return Math.min(100, Math.max(0, props.percentage));
  }

  if (props.total !== undefined && typeof props.value === 'number') {
    return Math.min(100, Math.max(0, (props.value / props.total) * 100));
  }

  return 0;
});

const progressColor = computed(() => {
  const value = progressValue.value;
  if (value >= 90) return 'success';
  if (value >= 70) return 'info';
  if (value >= 50) return 'warning';
  return 'error';
});

const cardVariant = computed(() => {
  switch (props.variant) {
    case 'elevated':
      return 'elevated';
    case 'outlined':
      return 'default';
    case 'minimal':
      return 'ghost';
    default:
      return 'default';
  }
});
</script>

<style lang="scss">
.stats-card {
  display: flex;
  align-items: center;
  gap: var(--space-m);
  
  // Card component handles padding, background, border, etc.

  // Sizes
  &--small {
    gap: var(--space-s);

    .stats-card__value {
      font-size: var(--font-size-l);
    }

    .stats-card__label {
      font-size: var(--font-size-xs);
    }
  }

  &--large {
    gap: var(--space-l);

    .stats-card__value {
      font-size: var(--font-size-xxl);
    }

    .stats-card__label {
      font-size: var(--font-size-m);
    }
  }

  // Progress bar layout
  &--progress-bar {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-xs);
  }

  // Compact layout
  &--compact {
    gap: var(--space-xs);
  }

  // Icon container
  &__icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--border-radius-s);
    font-size: var(--font-size-xl);
    background: color-mix(in srgb, var(--current-color), transparent 90%);
    color: var(--current-color);

    // Size variants
    .stats-card--small & {
      width: 32px;
      height: 32px;
      font-size: var(--font-size-l);
    }

    .stats-card--large & {
      width: 64px;
      height: 64px;
      font-size: var(--font-size-xxl);
    }

    // Color variants
    &--primary { --current-color: var(--color-primary); }
    &--secondary { --current-color: var(--color-secondary); }
    &--success { --current-color: var(--color-success); }
    &--warning { --current-color: var(--color-warning); }
    &--error { --current-color: var(--color-error); }
    &--info { --current-color: var(--color-info); }
    &--blue { --current-color: var(--color-blue); }
    &--green { --current-color: var(--color-green); }
  }

  // Content
  &__content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    flex: 1;
    min-width: 0;
  }

  &__value {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-foreground);
    line-height: 1.2;
  }

  &__label {
    font-size: var(--font-size-s);
    color: var(--color-foreground-secondary);
    line-height: 1.3;
  }

  // Progress container
  &__progress-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  // Progress bar layout specific
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .stats-card__label {
      font-weight: var(--font-weight-semibold);
    }

    .stats-card__value {
      font-size: var(--font-size-s);
      font-weight: var(--font-weight-semibold);
    }
  }

  &__progress-bar {
    height: 6px;
    background: color-mix(in srgb, var(--color-foreground), transparent 90%);
    border-radius: var(--border-radius-s);
    overflow: hidden;
  }

  &__progress-fill {
    height: 100%;
    border-radius: var(--border-radius-s);
    transition: width 0.3s ease;

    &--primary { background: var(--color-primary); }
    &--secondary { background: var(--color-secondary); }
    &--success { background: var(--color-success); }
    &--warning { background: var(--color-warning); }
    &--error { background: var(--color-error); }
    &--info { background: var(--color-info); }
    &--blue { background: var(--color-blue); }
    &--green { background: var(--color-green); }
  }

  // Compact layout specific
  &__compact-icon {
    font-size: var(--font-size-s);

    &--primary { color: var(--color-primary); }
    &--secondary { color: var(--color-secondary); }
    &--success { color: var(--color-success); }
    &--warning { color: var(--color-warning); }
    &--error { color: var(--color-error); }
    &--info { color: var(--color-info); }
    &--blue { color: var(--color-blue); }
    &--green { color: var(--color-green); }
  }

  &__compact-value {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-semibold);
    color: var(--color-foreground);
  }

  &__compact-label {
    font-size: var(--font-size-xs);
    color: var(--color-foreground-secondary);
  }

  // Action slot
  &__action {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    margin-left: auto;
  }
}
</style>