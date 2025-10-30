<template>
  <div 
    :class="[
      bemm(), 
      clickable && bemm('', 'clickable'),
      selected && bemm('', 'selected')
    ]"
    @click="handleClick"
  >
    <div :class="bemm('content')">
      <div v-if="icon || $slots.icon" :class="bemm('icon')">
        <slot name="icon">
          <Icon v-if="icon" :name="icon" />
        </slot>
      </div>
      
      <div :class="bemm('info')">
        <div v-if="label || $slots.label" :class="bemm('label')">
          <slot name="label">{{ label }}</slot>
        </div>
        <div v-if="value || description || $slots.default" :class="bemm('value')">
          <slot>
            {{ value || description }}
          </slot>
        </div>
      </div>
    </div>
    
    <div v-if="$slots.actions || showArrow" :class="bemm('actions')">
      <slot name="actions">
        <Icon v-if="showArrow" name="chevron-right" :class="bemm('arrow')" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm';
import { Icon } from '../Icon';
import type { OptionItemProps } from './OptionItem.model';

const props = withDefaults(defineProps<OptionItemProps>(), {
  clickable: true,
  showArrow: false,
  selected: false
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const { bemm } = useBemm('option-item');

const handleClick = (event: MouseEvent) => {
  if (props.clickable) {
    emit('click', event);
  }
};
</script>

<style lang="scss">
.option-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-m);
  background: var(--color-accent);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-m);
  transition: all var(--transition-base);

  &--clickable {
    cursor: pointer;

    &:hover {
      background: var(--color-background);
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
    }
  }

  &--selected {
    border-color: var(--color-primary);
    background: color-mix(in srgb, var(--color-primary), transparent 95%);
  }

  &__content {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    flex: 1;
  }

  &__icon {
    font-size: var(--font-size-xl);
    color: var(--color-primary);
    flex-shrink: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    flex: 1;
    min-width: 0; // Prevent content from pushing out of bounds
  }

  &__label {
    font-size: var(--font-size-m);
    font-weight: 500;
    color: var(--color-text-secondary);
  }

  &__value {
    font-size: var(--font-size-l);
    font-weight: 600;
    color: var(--color-text-primary);
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: var(--space-s);
    flex-shrink: 0;
  }

  &__arrow {
    font-size: var(--font-size-m);
    color: var(--color-text-secondary);
    flex-shrink: 0;
  }
}
</style>