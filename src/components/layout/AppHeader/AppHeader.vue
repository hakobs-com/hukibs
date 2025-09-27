<template>
  <header :class="bemm()">
    <div :class="bemm('container')">
      <!-- Logo slot or default logo -->
      <div :class="bemm('logo')">
        <slot name="logo">
          <a v-if="logo" :href="logo.href || '#'" :class="bemm('logo-link')">
            <Icon v-if="logo.icon" :name="logo.icon" :class="bemm('logo-icon')" />
            <span v-if="logo.text" :class="bemm('logo-text')">{{ logo.text }}</span>
          </a>
        </slot>
      </div>

      <!-- Navigation -->
      <nav v-if="navItems && navItems.length" :class="bemm('nav')">
        <template v-for="item in navItems" :key="item.path || item.href">
          <slot name="nav-link" :item="item">
            <a
              :href="item.href || item.path || '#'"
              :class="bemm('nav-link')"
              :target="item.external ? '_blank' : undefined"
              :rel="item.external ? 'noopener noreferrer' : undefined"
            >
              {{ item.label }}
              <Icon v-if="item.external" name="open-in-new" :class="bemm('nav-link-icon')" />
            </a>
          </slot>
        </template>
      </nav>

      <!-- Actions -->
      <div :class="bemm('actions')">
        <slot name="actions">
          <ThemeToggle v-if="showThemeToggle" />
          <Button
            v-if="showSettings"
            variant="outline"
            size="small"
            icon="settings"
            @click="$emit('settings-click')"
          />
        </slot>
        <slot name="extra-actions" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm';
import { Icon } from '../../ui/Icon';
import { Button } from '../../ui/Button';
import ThemeToggle from '../../ui/ThemeToggle.vue';
import type { AppHeaderProps } from './AppHeader.model';

const props = withDefaults(defineProps<AppHeaderProps>(), {
  showThemeToggle: true,
  showSettings: false
});

defineEmits<{
  'settings-click': [];
}>();

const { bemm } = useBemm('app-header');
</script>

<style lang="scss">
.app-header {
  background: var(--color-background);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky, 100);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-m) var(--space-l);
    max-width: var(--max-width, 1400px);
    margin: 0 auto;
  }

  &__logo {
    flex-shrink: 0;
  }

  &__logo-link {
    display: flex;
    align-items: center;
    gap: var(--space-s);
    text-decoration: none;
    color: var(--color-foreground);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-l);
    transition: opacity var(--transition-fast);

    &:hover {
      opacity: 0.8;
    }
  }

  &__logo-icon {
    font-size: 1.5em;
    color: var(--color-primary);
  }

  &__logo-text {
    color: var(--color-foreground);
  }

  &__nav {
    display: flex;
    gap: var(--space-xl);
    flex: 1;
    justify-content: center;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__nav-link {
    color: var(--color-foreground-tertiary);
    text-decoration: none;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--space-xs);

    &:hover {
      color: var(--color-foreground);
    }

    &[aria-current="page"],
    &--active {
      color: var(--color-primary);

      &::after {
        content: '';
        position: absolute;
        bottom: calc(-1 * var(--space-m) - 1px);
        left: 0;
        right: 0;
        height: 2px;
        background: var(--color-primary);
      }
    }
  }

  &__nav-link-icon {
    font-size: 0.875em;
    opacity: 0.7;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    flex-shrink: 0;
  }
}
</style>