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

      <div :class="bemm('grid')" :style="{ '--columns': columns }">
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
                :color="card.cta.color || 'primary'"
                size="small"
              >
                {{ card.cta.label }}
              </Button>
              <Button 
                v-else
                :color="card.cta.color || 'primary'"
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
import { useBemm } from 'bemm'
import { BaseSection } from '../BaseSection'
import { Card, Icon, Button } from '../../ui'
import type { CardSectionProps } from './CardSection.model'

const props = withDefaults(defineProps<CardSectionProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
  columns: 3
})

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
  }

  &__card {
    --card-color: var(--color-primary);
    
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: var(--border-radius, 8px);
    background: var(--color-background);
    border: 1px solid var(--color-border);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    overflow: hidden;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  }

  &__media {
    padding: var(--spacing-lg, 2rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background: color-mix(in srgb, var(--card-color) 10%, transparent);
  }

  &__image {
    max-width: 100%;
    height: auto;
    border-radius: var(--border-radius-sm, 4px);
  }

  &__icon {
    font-size: 3rem;
    color: var(--card-color);
  }

  &__content {
    padding: var(--spacing-lg, 2rem);
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__card-title {
    font-size: var(--font-size-h3, 1.5rem);
    font-weight: 600;
    margin-bottom: var(--spacing-sm, 0.75rem);
    color: var(--color-heading, var(--color-text));
  }

  &__subtitle {
    font-size: var(--font-size-md, 1rem);
    font-weight: 500;
    color: var(--card-color);
    margin-bottom: var(--spacing-md, 1rem);
  }

  &__text {
    color: var(--color-text-muted);
    line-height: 1.6;
    margin-bottom: var(--spacing-lg, 2rem);
    flex: 1;
  }

  &__cta {
    margin-top: auto;
  }

  &__footer {
    text-align: center;
    padding-top: var(--spacing-lg, 2rem);
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