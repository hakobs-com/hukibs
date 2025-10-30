<template>
  <div :class="containerClasses" :style="containerStyle">
    <!-- Header -->
    <header v-if="showHeader && (title || subtitle || $slots.header)"
      :class="bemm('header', ['', noPadding || noHeaderPadding ? 'no-padding' : ''])">
      <div :class="bemm('header-content')">
        <div v-if="title || subtitle" :class="bemm('header-text')">
          <h1 v-if="title" :class="bemm('title')">{{ title }}</h1>
          <p v-if="subtitle" :class="bemm('subtitle')">{{ subtitle }}</p>
        </div>
        <slot name="header" />
      </div>
    </header>

    <!-- Content -->
    <main :class="bemm('content', ['', noPadding || noContentPadding ? 'no-padding' : ''])">
      <slot />
    </main>

    <!-- Footer -->
    <footer v-if="showFooter && $slots.footer"
      :class="bemm('footer', ['', noPadding || noFooterPadding ? 'no-padding' : ''])">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
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

const { bemm } = useBemm('container')

const containerClasses = computed(() => [
  bemm(),
  props.fluid && bemm('', 'fluid'),
  props.max && bemm('', props.max)
])

const containerStyle = computed(() => {
  const maxWidths = {
    small: '600px',
    medium: '900px',
    large: '1200px',
    wide: '1400px',
    full: '100%',
    'fit-content': 'fit-content'
  }

  return {
    '--int-container-max-width': props.maxWidth || maxWidths[props.max as keyof typeof maxWidths] || maxWidths.large,
    '--int-container-padding': props.padding || 'var(--spacing)'
  }
})
</script>

<style lang="scss">
.container {
  width: 100%;
  max-width: var(--container-max-width, var(--int-container-max-width, 1200px));
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &--fluid {
    max-width: 100%;
  }

  &__header {
    padding: var(--container-padding, var(--int-container-padding));
    border-bottom: 1px solid var(--color-border, rgba(255, 255, 255, 0.1));
    background-image: linear-gradient(to left bottom, color-mix(in srgb, var(--color-primary), transparent 90%), transparent 50%);

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
    padding: var(--container-padding, var(--int-container-padding));
    display: flex;
    flex-direction: column;
    gap: var(--space-l, 2rem);

    &--no-padding {
      padding: 0;
    }
  }

  &__footer {
    padding: var(--container-padding, var(--int-container-padding));
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
