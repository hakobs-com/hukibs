<template>
  <div :class="bemm()">
    <div :class="bemm('content')">
      <div :class="bemm('left')">
        <h1 :class="bemm('title')">{{ title }}</h1>
        <p v-if="description" :class="bemm('description')">{{ description }}</p>
      </div>
      <div v-if="hasActions" :class="bemm('actions')">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { useBemm } from 'bemm';
import type { PageHeaderProps } from './PageHeader.model';

const props = defineProps<PageHeaderProps>();
const slots = useSlots();

const { bemm } = useBemm('page-header');

const hasActions = computed(() => !!slots.actions);
</script>

<style lang="scss">
.page-header {
  background-image: linear-gradient(to top right, transparent 50%, color-mix(in srgb, var(--color-primary), transparent 75%));
  border-bottom: 1px solid var(--color-accent);
  padding: var(--space-l) calc(var(--spacing) - var(--space-l));
}

.page-header__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-l);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-l);
}

.page-header__left {
  flex: 1;
}

.page-header__title {
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0 0 var(--space-xs) 0;
  line-height: 1.2;
}

.page-header__description {
  font-size: var(--font-size);
  opacity: .75;
  color: color-mix(in srgb, var(--color-secondary), var(--color-foreground) 50%);
  margin: 0;
  line-height: 1.4;
}

.page-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-s);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .page-header__content {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-m);
  }

  .page-header__actions {
    justify-content: flex-start;
  }
}
</style>
