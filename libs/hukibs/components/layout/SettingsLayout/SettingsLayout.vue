<template>
  <div :class="[bemm(), isFolded && bemm('', 'folded')]">
    <!-- Sidebar Navigation -->
    <nav :class="bemm('sidebar')">
      <!-- Toggle button for manual folding on desktop -->
      <button v-if="!isMobile" :class="bemm('toggle')" @click="toggleFolded"
        :title="isFolded ? 'Expand sidebar' : 'Collapse sidebar'">
        <Icon :name="isFolded ? 'chevron-right' : 'chevron-left'" />
      </button>

      <ul :class="bemm('nav')">
        <li v-for="(section, index) in sections" :key="section.id" :class="bemm('nav-item')" :style="`--i: ${index}`">
          <button :class="[
            bemm('nav-button'),
            activeSection === section.id && bemm('nav-button', 'active')
          ]" 
          @click="navigateToSection(section.id)" 
          :title="isFolded ? section.label : undefined">
            <Tooltip v-if="isFolded" :text="section.label" position="right">
              <Icon :name="section.icon" />
            </Tooltip>
            <Icon v-else :name="section.icon" />
            <span :class="bemm('nav-label')">{{ section.label }}</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Settings Content -->
    <div :class="bemm('main')">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useBemm } from 'bemm';
import { Icon } from '../../ui/Icon';
import { Tooltip } from '../../feedback/Tooltip';
import type { SettingsLayoutProps } from './SettingsLayout.model';

defineProps<SettingsLayoutProps>();

const emit = defineEmits<{
  navigate: [sectionId: string];
}>();

const { bemm } = useBemm('settings-layout');

// Responsive breakpoints
const MOBILE_BREAKPOINT = 768;
const FOLDED_BREAKPOINT = 1024;

const windowWidth = ref(window.innerWidth);
const manuallyFolded = ref(false);

const isMobile = computed(() => windowWidth.value <= MOBILE_BREAKPOINT);
const shouldAutoFold = computed(() => windowWidth.value <= FOLDED_BREAKPOINT && windowWidth.value > MOBILE_BREAKPOINT);
const isFolded = computed(() => !isMobile.value && (manuallyFolded.value || shouldAutoFold.value));

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const toggleFolded = () => {
  manuallyFolded.value = !manuallyFolded.value;
};

const navigateToSection = (sectionId: string) => {
  emit('navigate', sectionId);
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss">
.settings-layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: var(--space-xl);
  min-height: 500px;
  transition: grid-template-columns 0.3s ease;

  // Folded mode: Narrow sidebar
  &--folded {
    grid-template-columns: 60px 1fr;

    .settings-layout__nav-label {
      display: none;
    }

    .settings-layout__nav-button {
      justify-content: center;
      padding: var(--space-m) var(--space-s);
    }

    .settings-layout__sidebar {
      width: 60px;
    }
  }

  // Mobile: Top navigation
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--space-l);
  }

  &__sidebar {
    position: relative;

    // Desktop: Vertical sidebar
    @media (min-width: 769px) {
      position: sticky;
      top: var(--space-l);
      height: fit-content;
    }

    // Mobile: Horizontal scrollable navigation
    @media (max-width: 768px) {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  &__toggle {
    position: absolute;
    top: var(--space-s);
    right: calc(var(--space-s) * -1);
    transform: translateX(100%);
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
    border: 1px solid color-mix(in srgb, var(--color-foreground), transparent 90%);
    border-radius: var(--border-radius-s);
    cursor: pointer;
    transition: all 0.2s;
    z-index: 10;

    &:hover {
      background: color-mix(in srgb, var(--color-foreground), transparent 95%);
      border-color: color-mix(in srgb, var(--color-foreground), transparent 80%);
    }

    .icon {
      font-size: 12px;
      color: color-mix(in srgb, var(--color-foreground), transparent 30%);
    }
  }

  &__nav {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
    position: relative;
    
    // The hover background indicator
    &::before {
      content: '';
      position: absolute;
      background: color-mix(in srgb, var(--color-primary), transparent 95%);
      border-radius: var(--border-radius-s);
      transition: opacity 0.3s, top 0.3s, left 0.3s, width 0.3s, height 0.3s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 0;
      z-index: 0;
      pointer-events: none;
    }
    
    // When hovering any button, show the background
    &:has(.settings-layout__nav-button:hover)::before {
      opacity: 1;
    }

    // Mobile: Horizontal layout
    @media (max-width: 768px) {
      flex-direction: row;
      padding-bottom: var(--space-s);
    }
  }

  &__nav-item {
    position: relative;
    --item-height: 44;

    // Mobile: Prevent shrinking
    @media (max-width: 768px) {
      flex-shrink: 0;
    }
  }

  &__nav-button {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    width: 100%;
    padding: var(--space-m);
    background: transparent;
    border: none;
    border-radius: var(--border-radius-s);
    font-size: var(--font-size-m);
    color: color-mix(in srgb, var(--color-foreground), transparent 30%);
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    position: relative;
    z-index: 2;

    // Mobile: Adjust for horizontal layout
    @media (max-width: 768px) {
      padding: var(--space-s) var(--space-m);
      white-space: nowrap;
    }

    &:hover {
      color: var(--color-foreground);
    }

    &--active {
      background: color-mix(in srgb, var(--color-primary), transparent 90%);
      color: var(--color-primary);
      font-weight: var(--font-weight-semibold);

      &:hover {
        background: color-mix(in srgb, var(--color-primary), transparent 85%);
      }
    }
  }

  &__nav-label {
    transition: opacity 0.2s, width 0.2s;

    // Mobile: Hide labels on very small screens
    @media (max-width: 480px) {
      display: none;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
    min-width: 0; // Prevent overflow
  }
}
</style>