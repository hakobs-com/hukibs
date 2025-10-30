<template>
  <section
    :class="bemm('', ['', label ? 'has-label' : ''])"
    :style="sectionStyles"
  >
    <Container
      :class="bemm('container', [containerSize, containerColor ? 'has-background' : ''])"
      :style="containerStyles"
    >
      <div v-if="label" :class="bemm('label')">
        {{ label }}
      </div>
      <div :class="bemm('content')">
        <slot />
      </div>
    </Container>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
import { Container } from '../../ui'
import type { BaseSectionProps } from './BaseSection.model'

const props = withDefaults(defineProps<BaseSectionProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent'
})

const { bemm } = useBemm('base-section')

const sectionStyles = computed(() => ({
  backgroundColor: props.sectionColor,
  padding: props.padding
}))

const containerStyles = computed(() => {
  const maxWidth = props.containerSize === 'full'
    ? '100%'
    : props.containerSize === 'small'
      ? 'var(--post-max-width, 680px)'
      : 'var(--content-max-width, 1200px)'

  const padding = (props.containerColor && props.containerColor !== 'transparent')
    ? 'var(--container-padding, var(--spacing))'
    : 'var(--container-padding, 0)'

  return {
    maxWidth,
    backgroundColor: props.containerColor,
    padding
  }
})
</script>

<style lang="scss">
.base-section {
  width: 100%;

  &--has-label {
    .base-section__container {
      position: relative;
    }
  }

  &__container {
    border-radius: var(--container-border-radius, var(--border-radius, 8px));
    margin: 0 auto;

    &--full {
      max-width: 100%;
    }

    &--large {
      max-width: var(--content-max-width, 1200px);
    }

    &--small {
      max-width: var(--post-max-width, 680px);
    }
  }

  &__label {
    position: absolute;
    top: -12px;
    left: 16px;
    background: color-mix(in srgb, var(--color-background, #fff) 90%, var(--color-primary, #000));
    color: var(--color-text, #333);
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    z-index: 1;
    border: 1px solid color-mix(in srgb, var(--color-primary, #000) 20%, transparent);
  }

  &__content {
    position: relative;
    z-index: 1;
  }
}
</style>
