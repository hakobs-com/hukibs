<template>
  <BaseSection 
    :padding="padding"
    :container-size="containerSize"
    :section-color="sectionColor"
    :container-color="containerColor"
    :label="label"
  >
    <footer :class="bemm('')">
      <div v-if="$slots.default || $slots.content" :class="bemm('content')">
        <slot name="default">
          <slot name="content" />
        </slot>
      </div>
      
      <nav v-if="menuItems && menuItems.length > 0" :class="bemm('nav', [menuAlignment])">
        <ul :class="bemm('menu')">
          <li 
            v-for="item in menuItems" 
            :key="item.id" 
            :class="bemm('menu-item', [item.disabled ? 'disabled' : ''])"
          >
            <a 
              v-if="item.href"
              :href="item.href"
              :target="item.target"
              :rel="item.rel"
              :class="bemm('link')"
            >
              <Icon v-if="item.icon" :name="item.icon" :class="bemm('icon')" />
              {{ item.label }}
            </a>
            <router-link 
              v-else-if="item.to"
              :to="item.to"
              :class="bemm('link')"
            >
              <Icon v-if="item.icon" :name="item.icon" :class="bemm('icon')" />
              {{ item.label }}
            </router-link>
            <span v-else :class="bemm('link')">
              <Icon v-if="item.icon" :name="item.icon" :class="bemm('icon')" />
              {{ item.label }}
            </span>
          </li>
        </ul>
      </nav>
    </footer>
  </BaseSection>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm'
import { BaseSection } from '../BaseSection'
import { Icon } from '../../ui'
import type { SimpleFooterProps } from './SimpleFooter.model'

const props = withDefaults(defineProps<SimpleFooterProps>(), {
  padding: 'var(--spacing-lg) 0',
  containerSize: 'large',
  sectionColor: 'var(--color-surface)',
  containerColor: 'transparent',
  menuAlignment: 'left'
})

const { bemm } = useBemm('simple-footer')
</script>

<style lang="scss">
.simple-footer {
  &__content {
    margin-bottom: var(--spacing-md, 1rem);
    text-align: center;
    
    :deep(img) {
      max-height: 32px;
      width: auto;
    }
  }

  &__nav {
    &--left {
      text-align: left;
    }
    
    &--center {
      text-align: center;
    }
    
    &--right {
      text-align: right;
    }
  }

  &__menu {
    list-style: none;
    padding: 0;
    margin: 0;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-lg, 2rem);
    flex-wrap: wrap;
  }

  &__menu-item {
    &--disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs, 0.5rem);
    color: var(--color-text-muted);
    text-decoration: none;
    font-size: var(--font-size-sm, 0.875rem);
    transition: color 0.2s ease;

    &:hover {
      color: var(--color-primary);
    }
    
    &:focus {
      outline: 2px solid var(--color-primary);
      outline-offset: 2px;
      border-radius: var(--border-radius-sm, 4px);
    }
  }

  &__icon {
    font-size: 1em;
  }
}

@media (max-width: 768px) {
  .simple-footer {
    &__menu {
      gap: var(--spacing-md, 1rem);
    }
    
    &__nav {
      &--left,
      &--center,
      &--right {
        text-align: center;
      }
    }
  }
}
</style>