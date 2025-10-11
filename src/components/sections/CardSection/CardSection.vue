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

      <div :class="[bemm('grid'), scrollable ? bemm('grid', 'scrollable') : '']" :style="gridStyle">
        <Card
          v-for="card in cards"
          :key="card.id"
          :class="bemm('card')"
          :style="card.color ? { '--card-color': card.color } : {}"
        >
          <div v-if="card.image || card.icon" :class="bemm('media')">
            <img v-if="card.image" :src="card.image" :alt="card.title" :class="bemm('image')" />
            <Icon v-else-if="card.icon" :name="card.icon" :class="bemm('icon')" />
          </div>

          <div :class="bemm('content')">
            <h3 v-if="card.title" :class="bemm('card-title')">{{ card.title }}</h3>
            <p v-if="card.subtitle" :class="bemm('subtitle')">{{ card.subtitle }}</p>
            <p v-if="card.content" :class="bemm('text')">{{ card.content }}</p>

            <div v-if="card.cta" :class="bemm('cta')">
              <Button
                v-if="card.cta.link"
                :href="card.cta.link"
                :color="(card.cta.color || 'primary') as any"
                size="small"
              >
                {{ card.cta.label }}
              </Button>
              <Button
                v-else
                :color="(card.cta.color || 'primary') as any"
                size="small"
              >
                {{ card.cta.label }}
              </Button>
            </div>
          </div>
        </Card>
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
import { Card, Icon, Button } from '../../ui'
import type { CardSectionProps } from './CardSection.model'

const props = withDefaults(defineProps<CardSectionProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
  columns: 3,
  scrollable: false,
  scrollDirection: 'horizontal'
})

// Computed styles for scrollable grid
const gridStyle = computed(() => ({
  '--columns': props.columns,
  '--flex-direction': props.scrollDirection === 'horizontal' ? 'row' : 'column',
  '--overflow-x': props.scrollDirection === 'horizontal' ? 'auto' : 'hidden',
  '--overflow-y': props.scrollDirection === 'vertical' ? 'auto' : 'hidden',
  '--padding-bottom': props.scrollDirection === 'horizontal' ? 'var(--spacing-md, 1rem)' : '0',
  '--min-width': props.scrollable && props.scrollDirection === 'horizontal' ? '300px' : 'auto'
}))

const { bemm } = useBemm('card-section')
</script>

<style lang="scss">
.card-section {
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

  &__grid {
    display: grid;
    grid-template-columns: repeat(var(--columns, 3), 1fr);
    gap: var(--spacing-lg, 2rem);
    margin-bottom: var(--spacing-xl, 3rem);

    &--scrollable {
      display: flex;
      flex-direction: var(--flex-direction, row);
      overflow-x: var(--overflow-x, hidden);
      overflow-y: var(--overflow-y, hidden);
      gap: var(--spacing-lg, 2rem);
      padding-bottom: var(--padding-bottom, 0);

      // Custom scrollbar styling
      &::-webkit-scrollbar {
        height: 6px;
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: var(--color-surface);
        border-radius: 3px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--color-border);
        border-radius: 3px;

        &:hover {
          background: var(--color-text-muted);
        }
      }
    }
  }

  &__card {

  }

  &__media {
    padding: var(--spacing-l);
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content; max-width: 100%;
    background: color-mix(in srgb, var(--card-color) 10%, transparent);
    border-radius: var(--border-radius-s);
  }

  &__image {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius-s);
  }

  &__icon {
    font-size: clamp(1em, 2vw, 3em);
    color: var(--card-color);
  }

  &__content {
    padding: var(--spacing-l);
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__card-title {
    font-size: var(--font-size-l);
    font-weight: 600;
    margin-bottom: var(--spacing-s);
    color: var(--color-heading, var(--color-text));
  }

  &__subtitle {
    font-size: var(--font-size-m);
    font-weight: 500;
    color: var(--card-color);
    margin-bottom: var(--spacing-m);
  }

  &__text {
    opacity: .75;
    line-height: 1.5;
    margin-bottom: var(--spacing-l);
    flex: 1;
  }

  &__cta {
    margin-top: auto;
  }

  &__footer {
    text-align: center;
    padding-top: var(--spacing-l);
    border-top: 1px solid var(--color-border);
  }
}

@media (max-width: 1024px) {
  .card-section {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 640px) {
  .card-section {
    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>
