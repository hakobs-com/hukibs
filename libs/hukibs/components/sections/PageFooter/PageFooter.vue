<template>
  <BaseSection 
    :padding="padding"
    :container-size="containerSize"
    :section-color="sectionColor"
    :container-color="containerColor"
    :label="label"
  >
    <footer :class="bemm('')">
      <div :class="bemm('top')">
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
      </div>
      <div v-if="copyright" :class="bemm('bottom')">
        <small>&copy; {{ new Date().getFullYear() }} {{ copyright }}</small>
      </div>
    </footer>
  </BaseSection>
</template>

<script setup lang="ts">
import { useBemm } from 'bemm'
import { BaseSection } from '../BaseSection'
import type { PageFooterProps } from './PageFooter.model'

withDefaults(defineProps<PageFooterProps>(), {
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
})

const { bemm } = useBemm('page-footer')
</script>

<style lang="scss">
.page-footer {
  &__top {
    display: flex;
    gap: var(--spacing);
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
  }
  &__links {
    display: flex;
    gap: var(--spacing);
    flex-wrap: wrap;
  }
  &__group { list-style: none; margin: 0; padding: 0; }
  &__group-title { font-weight: 600; margin-bottom: 0.5rem; }
  &__item a { color: inherit; text-decoration: none; }
  &__bottom { margin-top: var(--spacing); color: var(--color-text-muted); }
}
</style>

