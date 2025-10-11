<template>
  <BaseSection 
    :padding="padding"
    :container-size="containerSize"
    :section-color="sectionColor"
    :container-color="containerColor"
    :label="label"
  >
    <div :class="bemm('')">
      <header v-if="title || description" :class="bemm('header')">
        <h2 v-if="title" :class="bemm('title')">{{ title }}</h2>
        <p v-if="description" :class="bemm('description')">{{ description }}</p>
      </header>

      <div :class="bemm('layout', [layout, alignment])" :style="layoutStyle">
        <div 
          v-for="(item, index) in content" 
          :key="item.id"
          :class="bemm('item', [getVariant(index), item.imagePosition || ''])"
        >
          <!-- Background Image -->
          <div v-if="item.image && item.imagePosition === 'background'" :class="bemm('background-image')">
            <img :src="item.image" :alt="item.imageAlt || item.title" />
            <div :class="bemm('background-overlay')"></div>
          </div>

          <!-- Content Layout -->
          <div :class="bemm('item-content')">
            <!-- Image Left/Right -->
            <div 
              v-if="item.image && ['left', 'right'].includes(item.imagePosition || '')" 
              :class="bemm('media', [item.imagePosition || '', imageSize])"
            >
              <img :src="item.image" :alt="item.imageAlt || item.title" :class="bemm('image')" />
            </div>

            <!-- Image Top -->
            <div 
              v-if="item.image && item.imagePosition === 'top'" 
              :class="bemm('media', ['top', imageSize])"
            >
              <img :src="item.image" :alt="item.imageAlt || item.title" :class="bemm('image')" />
            </div>

            <!-- Text Content -->
            <div :class="bemm('text')">
              <!-- Badge -->
              <div v-if="item.badge && showBadges" :class="bemm('badge')" :style="{ '--badge-color': getBadgeColor(item.badgeColor) }">
                {{ item.badge }}
              </div>

              <!-- Icon -->
              <Icon v-if="item.icon" :name="item.icon" :class="bemm('icon')" />

              <!-- Title -->
              <h3 v-if="item.title" :class="bemm('item-title')">{{ item.title }}</h3>

              <!-- Subtitle -->
              <p v-if="item.subtitle" :class="bemm('subtitle')">{{ item.subtitle }}</p>

              <!-- Content -->
              <div v-if="item.content" :class="bemm('content')" v-html="item.content"></div>

              <!-- CTA -->
              <div v-if="item.cta" :class="bemm('cta')">
                <Button 
                  v-if="item.cta.link"
                  :href="item.cta.link"
                  :color="(item.cta.color || 'primary') as any"
                  size="small"
                >
                  {{ item.cta.label }}
                </Button>
                <Button 
                  v-else
                  :color="(item.cta.color || 'primary') as any"
                  size="small"
                >
                  {{ item.cta.label }}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer v-if="$slots.footer" :class="bemm('footer')">
        <slot name="footer" />
      </footer>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
import { BaseSection } from '../BaseSection'
import { Icon, Button } from '../../ui'
import type { ContentSectionProps } from './ContentSection.model'
import type { Colors } from '../../../types'

const props = withDefaults(defineProps<ContentSectionProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
  layout: 'stacked',
  alignment: 'left',
  imageAspectRatio: 'auto',
  imageSize: 'medium',
  showBadges: true,
  contentSpacing: 'normal'
})

const { bemm } = useBemm('content-section')

// Computed layout styles
const layoutStyle = computed(() => ({
  '--content-alignment': props.alignment,
  '--content-spacing': props.contentSpacing,
  '--image-aspect-ratio': props.imageAspectRatio,
  '--image-size': props.imageSize
}))

// Get variant based on layout and index
const getVariant = (index: number) => {
  if (props.layout === 'featured' && index === 0) return 'featured'
  if (props.layout === 'grid') return 'grid-item'
  return 'default'
}

// Get badge color CSS variable
const getBadgeColor = (color?: Colors) => {
  const colorMap: Record<string, string> = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    info: 'var(--color-info)'
  }
  return color ? colorMap[color] : 'var(--color-primary)'
}
</script>

<style lang="scss">
.content-section {
  &__header {
    text-align: center;
    margin-bottom: var(--spacing-xl, 3rem);
  }

  &__title {
    font-size: var(--font-size-h2, 2rem);
    font-weight: 700;
    margin-bottom: var(--spacing-md, 1rem);
    color: var(--color-heading, var(--color-text));
  }

  &__description {
    font-size: var(--font-size-lg, 1.125rem);
    color: var(--color-text-muted);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  // Layout containers
  &__layout {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg, 2rem);
    margin-bottom: var(--spacing-xl, 3rem);

    &--stacked {
      > .content-section__item {
        text-align: var(--content-alignment, left);
      }
    }

    &--side-by-side {
      flex-direction: row;
      align-items: stretch;
      gap: var(--spacing-xl, 3rem);

      > .content-section__item {
        flex: 1;
      }
    }

    &--grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-lg, 2rem);
    }

    &--featured {
      > .content-section__item:first-child {
        grid-column: 1 / -1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--spacing-xl, 3rem);
        align-items: center;
      }

      > .content-section__item:not(:first-child) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-lg, 2rem);
      }
    }

    // Alignment modifiers
    &--left > .content-section__item {
      text-align: left;
    }

    &--center > .content-section__item {
      text-align: center;

      .content-section__text {
        max-width: 600px;
        margin: 0 auto;
      }
    }

    &--right > .content-section__item {
      text-align: right;

      .content-section__text {
        margin-left: auto;
      }
    }
  }

  // Individual content items
  &__item {
    position: relative;
    border-radius: var(--border-radius, 8px);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    &--featured {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      padding: var(--spacing-xl, 3rem);
    }

    &--background {
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;

      .content-section__text {
        position: relative;
        z-index: 2;
      }
    }

    &--grid-item {
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      padding: var(--spacing-lg, 2rem);
      height: 100%;
    }
  }

  // Background image
  &__background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__background-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  // Item content layout
  &__item-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md, 1rem);

    .content-section__item--left &,
    .content-section__item--right & {
      flex-direction: row;
      align-items: center;
      gap: var(--spacing-xl, 3rem);
    }

    .content-section__item--right & {
      flex-direction: row-reverse;
    }
  }

  // Media (images)
  &__media {
    flex-shrink: 0;

    &--left,
    &--right {
      flex: 0 0 auto;
      max-width: 40%;
    }

    &--top {
      width: 100%;
      margin-bottom: var(--spacing-lg, 2rem);
    }

    &--small {
      max-width: 200px;
    }

    &--medium {
      max-width: 300px;
    }

    &--large {
      max-width: 400px;
    }
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius, 8px);
    object-fit: cover;

    .content-section__media--left &,
    .content-section__media--right & {
      aspect-ratio: var(--image-aspect-ratio, auto);
    }

    .content-section__media--top & {
      max-height: 300px;
      object-fit: cover;
    }
  }

  // Text content
  &__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md, 1rem);
  }

  &__badge {
    display: inline-block;
    padding: var(--space-xs, 0.25rem) var(--space-s, 0.75rem);
    background: var(--badge-color, var(--color-primary));
    color: var(--color-primary-text);
    border-radius: var(--border-radius-s, 4px);
    font-size: var(--font-size-xs, 0.75rem);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: var(--spacing-s, 0.75rem);
    align-self: flex-start;
  }

  &__icon {
    font-size: 2.5rem;
    color: var(--color-primary);
    margin-bottom: var(--spacing-s, 0.75rem);
  }

  &__item-title {
    font-size: var(--font-size-h3, 1.5rem);
    font-weight: 600;
    margin: 0;
    color: var(--color-heading, var(--color-text));
    line-height: 1.3;
  }

  &__subtitle {
    font-size: var(--font-size-lg, 1.125rem);
    color: var(--color-primary);
    font-weight: 500;
    margin: 0;
    line-height: 1.4;
  }

  &__content {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin: 0;

    p {
      margin: 0 0 var(--spacing-s, 0.75rem) 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__cta {
    margin-top: var(--spacing-lg, 2rem);
  }

  &__footer {
    text-align: center;
    padding-top: var(--spacing-lg, 2rem);
    border-top: 1px solid var(--color-border);
  }

  // Responsive design
  @media (max-width: 1024px) {
    &__layout--featured > .content-section__item:first-child {
      grid-template-columns: 1fr;
      text-align: center;
    }

    &__layout--side-by-side {
      flex-direction: column;
    }

    &__item-content {
      .content-section__item--left &,
      .content-section__item--right & {
        flex-direction: column;
        text-align: center;
      }
    }

    &__media--left,
    &__media--right {
      max-width: 100%;
      margin-bottom: var(--spacing-lg, 2rem);
    }
  }

  @media (max-width: 640px) {
    &__layout--grid {
      grid-template-columns: 1fr;
    }

    &__item--featured {
      padding: var(--spacing-lg, 2rem);
    }

    &__media--small,
    &__media--medium,
    &__media--large {
      max-width: 100%;
    }
  }
}
</style>