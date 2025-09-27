<template>
  <div :class="containerClasses" :style="containerStyle">
    <!-- Header -->
    <header v-if="showHeader && (title || subtitle || $slots.header)"
      :class="['container__header', { 'container__header--no-padding': noHeaderPadding }]">
      <div class="container__header-content">
        <div v-if="title || subtitle" class="container__header-text">
          <h1 v-if="title" class="container__title">{{ title }}</h1>
          <p v-if="subtitle" class="container__subtitle">{{ subtitle }}</p>
        </div>
        <slot name="header" />
      </div>
    </header>

    <!-- Content -->
    <main :class="['container__content', { 'container__content--no-padding': noContentPadding }]">
      <slot />
    </main>

    <!-- Footer -->
    <footer v-if="showFooter && $slots.footer"
      :class="['container__footer', { 'container__footer--no-padding': noFooterPadding }]">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ContainerProps } from './Container.model'

const props = withDefaults(defineProps<ContainerProps>(), {
  max: 'default',
  showHeader: true,
  showFooter: true,
  fluid: false,
  noPadding: false,
  noHeaderPadding: false,
  noContentPadding: false,
  noFooterPadding: false
})

const containerClasses = computed(() => [
  'container',
  props.fluid && 'container--fluid',
  props.max && `container--${props.max}`
])

const containerStyle = computed(() => {
  const maxWidths = {
    small: '600px',
    medium: '900px',
    large: '1200px',
    wide: '1400px',
    full: '100%'
  }

  return {
    '--container-max-width': props.maxWidth || maxWidths[props.max as keyof typeof maxWidths] || maxWidths.large,
    '--container-padding': props.padding || 'var(--spacing)'
  }
})
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: var(--container-max-width, 1200px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &--fluid {
    max-width: 100%;
  }

  &--small {
    max-width: 600px;
  }

  &--medium {
    max-width: 900px;
  }

  &--large {
    max-width: 1200px;
  }

  &--wide {
    max-width: 1400px;
  }

  &--full {
    max-width: 100%;
  }

  &__header {
    padding: var(--container-padding);
    border-bottom: 1px solid var(--color-border, rgba(255, 255, 255, 0.1));
    background-image: linear-gradient(to left bottom, color-mix(in srgb, var(--color-primary, #3b82f6), transparent 90%), transparent 50%);

    &--no-padding {
      padding: 0;
    }
  }

  &__header-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs, 0.5rem);
  }

  &__header-text {
    display: flex;
    flex-direction: column;
    gap: var(--space-xxs, 0.25rem);
  }

  &__title {
    margin: 0;
    font-size: var(--font-size-xxl, 2rem);
    font-weight: var(--font-weight-semibold, 600);
    color: var(--color-foreground, #ffffff);
  }

  &__subtitle {
    margin: 0;
    font-size: var(--font-size-l, 1.25rem);
    color: var(--color-text-secondary, rgba(255, 255, 255, 0.7));
    opacity: 0.8;
  }

  &__content {
    flex: 1;
    padding: var(--container-padding);
    display: flex;
    flex-direction: column;
    gap: var(--space-l, 2rem);

    &--no-padding {
      padding: 0;
    }
  }

  &__footer {
    padding: var(--container-padding);
    border-top: 1px solid var(--color-border, rgba(255, 255, 255, 0.1));

    &--no-padding {
      padding: 0;
    }
  }
}

@media (max-width: 768px) {
  .container {
    &__header {
      padding: var(--space-m, 1rem);
    }

    &__content {
      padding: var(--space-m, 1rem);
    }

    &__footer {
      padding: var(--space-m, 1rem);
    }
  }
}
</style>
