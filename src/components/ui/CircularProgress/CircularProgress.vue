<template>
  <svg
    :width="size"
    :height="size"
    :class="bemm()"
  >
    <!-- Background track -->
    <circle
      :class="bemm('track')"
      :cx="center"
      :cy="center"
      :r="radius"
      :stroke-width="strokeWidth"
      fill="none"
    />
    
    <!-- Progress fill (or indeterminate animation) -->
    <circle
      :class="[bemm('fill', ['', color || progressStatus]), indeterminate && bemm('fill', 'indeterminate')]"
      :cx="center"
      :cy="center"
      :r="radius"
      :stroke-width="strokeWidth"
      fill="none"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="dashOffset"
      transform="rotate(-90)"
      :transform-origin="`${center} ${center}`"
    />
    
    <!-- Percentage text (only shown if not indeterminate) -->
    <text
      v-if="!indeterminate && percentage !== undefined"
      :x="center"
      :y="center"
      :class="bemm('text', ['', color || progressStatus])"
      text-anchor="middle"
      dominant-baseline="middle"
      :style="{ fontSize: textSize }"
    >
      {{ Math.round(percentage) }}%
    </text>
  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBemm } from 'bemm';
import type { CircularProgressProps } from './CircularProgress.model';

const props = withDefaults(defineProps<CircularProgressProps>(), {
  size: 48,
  strokeWidth: 4,
  indeterminate: false
});

const { bemm } = useBemm('circular-progress');

const center = computed(() => props.size / 2);
const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const dashOffset = computed(() => {
  if (props.indeterminate) {
    return circumference.value * 0.25; // Shows 75% of the circle
  }
  const progress = Math.min(Math.max(props.percentage || 0, 0), 100);
  return circumference.value - (progress / 100) * circumference.value;
});

// Determine progress status based on percentage
const progressStatus = computed(() => {
  if (!props.percentage) return 'default';
  if (props.percentage === 100) return 'success';
  if (props.percentage >= 90) return 'almost';
  if (props.percentage >= 50) return 'warning';
  return 'danger';
});

// Calculate text size based on the circle size
const textSize = computed(() => {
  const baseFontSize = 16;
  const baseCircleSize = 100;
  const scaledSize = (props.size / baseCircleSize) * baseFontSize;
  return `${scaledSize * 1.75}px`;
});
</script>

<style lang="scss">
@keyframes circular-progress-rotate {
  to {
    transform: rotate(360deg);
  }
}

.circular-progress {
  &__track {
    stroke: color-mix(in srgb, var(--color-foreground), transparent 90%);
  }

  &__fill {
    stroke: var(--color-primary);
    transition: stroke-dashoffset 0.3s ease, stroke 0.3s ease;
    stroke-linecap: round;

    &--primary {
      stroke: var(--color-primary);
    }

    &--secondary {
      stroke: var(--color-secondary);
    }

    &--success {
      stroke: var(--color-success);
    }

    &--almost {
      stroke: var(--color-yellow, var(--color-warning));
    }

    &--warning {
      stroke: var(--color-warning);
    }

    &--danger,
    &--error {
      stroke: var(--color-error);
    }

    &--info {
      stroke: var(--color-info);
    }

    &--indeterminate {
      animation: circular-progress-rotate 1.4s linear infinite;
      transform-origin: center;
    }
  }

  &__text {
    font-weight: var(--font-weight-bold);
    fill: var(--color-foreground);
    transition: fill 0.3s ease;

    &--primary {
      fill: var(--color-primary);
    }

    &--secondary {
      fill: var(--color-secondary);
    }

    &--success {
      fill: var(--color-success);
    }

    &--almost {
      fill: var(--color-yellow, var(--color-warning));
    }

    &--warning {
      fill: var(--color-warning);
    }

    &--danger,
    &--error {
      fill: var(--color-error);
    }

    &--info {
      fill: var(--color-info);
    }
  }
}
</style>