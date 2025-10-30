<template>
  <BaseSection 
    :padding="padding"
    :container-size="containerSize"
    :section-color="sectionColor"
    :container-color="containerColor"
    :label="label"
  >
    <footer :class="bemm('')">
      <nav v-if="links?.length" :class="bemm('links')">
        <ul v-for="group in links" :key="group.id" :class="bemm('group')">
          <li v-if="group.title" :class="bemm('group-title')">{{ group.title }}</li>
          <li v-for="item in group.items" :key="item.id" :class="bemm('item')">
            <a :href="item.href || '#'" :target="item.target" :rel="item.rel">{{ item.label }}</a>
          </li>
        </ul>
      </nav>
      <div :class="bemm('slot')">
        <slot />
      </div>
    </footer>
  </BaseSection>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm'
import { BaseSection } from '../BaseSection'
import type { SimpleFooterProps } from './SimpleFooter.model'

withDefaults(defineProps<SimpleFooterProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
})

const { bemm } = useBemm('simple-footer')
</script>

<style lang="scss">
.simple-footer {
  &__links {
    display: flex;
    gap: var(--spacing);
    flex-wrap: wrap;
    margin-bottom: var(--spacing);
  }
  &__group {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__group-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  &__item a {
    color: inherit;
    text-decoration: none;
  }
}
</style>

