<template>
  <aside :class="[
    bemm(),
    isFolded && bemm('', 'folded'),
    shouldOverlay && bemm('', 'overlay'),
    shouldOverlay && !isFolded && bemm('', 'overlay-expanded')
  ]">
    <!-- Toggle button -->
    <button 
      v-if="collapsible && !isMobile" 
      :class="bemm('toggle')" 
      @click="toggleFolded" 
      :title="isFolded ? 'Expand sidebar' : 'Collapse sidebar'"
    >
      <Icon :name="isFolded ? 'chevron-right' : 'chevron-left'" />
    </button>

    <!-- Header slot -->
    <div v-if="$slots.header" :class="bemm('header')">
      <slot name="header" />
    </div>

    <!-- Navigation -->
    <nav :class="bemm('nav')">
      <div 
        v-for="section in sections" 
        :key="section.id" 
        :class="bemm('section')"
      >
        <h3 v-if="section.title && !isFolded" :class="bemm('section-title')">
          {{ section.title }}
        </h3>
        
        <div :class="bemm('nav-list')">
          <template v-for="item in section.items" :key="item.path || item.href">
            <slot name="nav-link" :item="item" :is-folded="isFolded">
              <a
                :href="item.href || item.path || '#'"
                :class="bemm('nav-link')"
                :title="isFolded ? item.label : undefined"
              >
                <Icon 
                  :name="item.icon" 
                  :class="bemm('nav-icon')" 
                />
                <span v-if="!isFolded" :class="bemm('nav-text')">
                  {{ item.label }}
                </span>
                <span 
                  v-if="item.badge && !isFolded" 
                  :class="bemm('nav-badge')"
                >
                  {{ item.badge }}
                </span>
              </a>
            </slot>
          </template>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div v-if="userInfo || $slots.footer" :class="bemm('footer')">
      <slot name="footer">
        <div 
          v-if="userInfo" 
          :class="bemm('user-profile', ['', isFolded ? 'folded' : ''])"
        >
          <div :class="bemm('user-avatar')">
            <Icon v-if="!userInfo.avatar" name="user" :class="bemm('user-icon')" />
            <img 
              v-else 
              :src="userInfo.avatar" 
              :alt="userInfo.name || 'User avatar'"
              :class="bemm('user-image')"
            />
          </div>
          
          <div v-if="!isFolded" :class="bemm('user-info')">
            <span v-if="userInfo.name" :class="bemm('user-name')">
              {{ userInfo.name }}
            </span>
            <span v-if="userInfo.email" :class="bemm('user-email')">
              {{ userInfo.email }}
            </span>
            <span v-if="userInfo.role" :class="bemm('user-role')">
              {{ userInfo.role }}
            </span>
          </div>
          
          <slot name="user-menu-trigger" :is-folded="isFolded">
            <Icon 
              v-if="!isFolded" 
              name="chevron-up" 
              :class="bemm('user-menu-arrow')" 
            />
          </slot>
        </div>
      </slot>
    </div>
  </aside>

  <!-- Overlay backdrop for mobile -->
  <div 
    v-if="shouldOverlay && !isFolded" 
    :class="bemm('overlay-backdrop')" 
    @click="toggleFolded" 
  />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useBemm } from 'bemm';
import { Icon } from '../../ui/Icon';
import type { AppSidebarProps } from './AppSidebar.model';

const props = withDefaults(defineProps<AppSidebarProps>(), {
  sections: () => [],
  collapsible: true
});

const emit = defineEmits<{
  'update:collapsed': [value: boolean];
}>();

const { bemm } = useBemm('app-sidebar');

// Responsive breakpoints
const FOLDED_BREAKPOINT = 1200;
const OVERLAY_BREAKPOINT = 768;

const windowWidth = ref(window.innerWidth);
const manuallyFolded = ref(props.collapsed || localStorage.getItem('sidebar-folded') === 'true');

const shouldOverlay = computed(() => windowWidth.value <= OVERLAY_BREAKPOINT);
const isMobile = computed(() => windowWidth.value <= OVERLAY_BREAKPOINT);
const isFolded = computed(() => {
  return props.collapsible && manuallyFolded.value;
});

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

const toggleFolded = () => {
  if (!props.collapsible) return;
  
  manuallyFolded.value = !manuallyFolded.value;
  localStorage.setItem('sidebar-folded', manuallyFolded.value.toString());
  emit('update:collapsed', manuallyFolded.value);
};

// Sync with external collapsed prop
watch(() => props.collapsed, (newValue) => {
  if (newValue !== undefined) {
    manuallyFolded.value = newValue;
  }
});

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style lang="scss">
.app-sidebar {
  --sidebar-unfolded-width: 260px;
  --sidebar-folded-width: 64px;
  
  width: var(--sidebar-unfolded-width);
  height: 100vh;
  background: var(--color-background);
  background-image: radial-gradient(
    ellipse at 0 0%, 
    color-mix(in srgb, var(--color-secondary), var(--color-background) 75%), 
    var(--color-background)
  );
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  transition: width 0.3s ease;
  z-index: 50;

  // Overlay mode (small screens)
  &--overlay {
    position: fixed;
    z-index: 2000;

    &:not(.app-sidebar--overlay-expanded) {
      width: var(--sidebar-folded-width);
    }

    &.app-sidebar--overlay-expanded {
      width: var(--sidebar-unfolded-width);
      box-shadow: 0 0 20px color-mix(in srgb, var(--color-foreground), transparent 80%);
    }
  }

  // Folded mode
  &--folded {
    width: var(--sidebar-folded-width);

    .app-sidebar__section-title,
    .app-sidebar__user-email,
    .app-sidebar__user-name,
    .app-sidebar__user-role,
    .app-sidebar__nav-text,
    .app-sidebar__nav-badge {
      display: none;
    }

    .app-sidebar__header,
    .app-sidebar__nav,
    .app-sidebar__footer {
      padding-left: var(--space-s);
      padding-right: var(--space-s);
    }

    .app-sidebar__nav-link {
      justify-content: center;
      padding-left: var(--space-s);
      padding-right: var(--space-s);
    }
  }

  &::after {
    width: 1px;
    height: 50vh;
    position: absolute;
    right: 0;
    top: 0;
    content: "";
    display: block;
    background-image: linear-gradient(
      to bottom, 
      var(--color-secondary), 
      transparent
    );
  }

  &__toggle {
    position: absolute;
    top: var(--space-l);
    right: var(--space);
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
    border: 1px solid color-mix(in srgb, var(--color-foreground), transparent 90%);
    border-radius: var(--border-radius-s);
    cursor: pointer;
    transition: all 0.2s;
    z-index: 1001;
    box-shadow: 0 2px 8px color-mix(in srgb, var(--color-foreground), transparent 90%);

    &:hover {
      background: color-mix(in srgb, var(--color-foreground), transparent 95%);
      border-color: color-mix(in srgb, var(--color-foreground), transparent 80%);
      box-shadow: 0 4px 12px color-mix(in srgb, var(--color-foreground), transparent 85%);
    }

    .icon {
      font-size: 14px;
      color: color-mix(in srgb, var(--color-foreground), transparent 30%);
    }
  }

  &__header {
    padding: var(--space-l);
    border-bottom: 1px solid var(--border-color);
  }

  &__nav {
    flex: 1;
    padding: var(--space-l);
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: color-mix(in srgb, var(--color-foreground), transparent 90%) transparent;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: color-mix(in srgb, var(--color-foreground), transparent 90%);
      border-radius: 3px;
    }
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: var(--space-s);
  }

  &__section-title {
    font-size: var(--font-size-s);
    font-weight: var(--font-weight-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-foreground-tertiary);
    margin: 0 0 var(--space-s);
    padding: 0 var(--space-s);
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
  }

  &__nav-link {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    padding: var(--space-s) var(--space-m);
    border-radius: var(--border-radius-s);
    text-decoration: none;
    color: var(--color-foreground-secondary);
    transition: all var(--transition-fast);
    font-size: var(--font-size-m);
    position: relative;

    &:hover {
      background: color-mix(in srgb, var(--color-primary), transparent 95%);
      color: var(--color-foreground);
    }

    &[aria-current="page"],
    &--active {
      background: color-mix(in srgb, var(--color-primary), transparent 90%);
      color: var(--color-primary);
      font-weight: var(--font-weight-semibold);
    }
  }

  &__nav-icon {
    font-size: 1.2em;
    flex-shrink: 0;
  }

  &__nav-text {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &__nav-badge {
    background: var(--color-primary);
    color: var(--color-background);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    padding: 0 var(--space-xs);
    border-radius: var(--border-radius-round);
    min-width: 20px;
    text-align: center;
    flex-shrink: 0;
  }

  &__footer {
    padding: var(--space-l);
    border-top: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    gap: var(--space-l);
  }

  &__user-profile {
    display: flex;
    align-items: center;
    gap: var(--space-m);
    padding: var(--space-m);
    background: color-mix(in srgb, var(--color-foreground), transparent 97%);
    border-radius: var(--border-radius-m);
    border: 1px solid color-mix(in srgb, var(--color-foreground), transparent 90%);
    cursor: pointer;
    transition: all var(--transition-fast);

    &:hover {
      background: color-mix(in srgb, var(--color-foreground), transparent 94%);
      border-color: color-mix(in srgb, var(--color-foreground), transparent 85%);
    }

    &--folded {
      padding: 0;
      border: none;
      align-items: center;
      justify-content: center;
      background: transparent;

      &:hover {
        border: none;
        background-color: transparent;
      }
    }
  }

  &__user-avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: color-mix(in srgb, var(--color-primary), transparent 85%);
    border-radius: var(--border-radius-round);
    flex-shrink: 0;
    overflow: hidden;
  }

  &__user-icon {
    font-size: 1.2em;
    color: var(--color-primary);
  }

  &__user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__user-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
    min-width: 0;
  }

  &__user-name {
    font-size: var(--font-size-m);
    font-weight: var(--font-weight-semibold);
    color: var(--color-foreground);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__user-email {
    font-size: var(--font-size-s);
    color: var(--color-foreground-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__user-role {
    font-size: var(--font-size-xs);
    color: var(--color-foreground-tertiary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__user-menu-arrow {
    font-size: var(--font-size-s);
    color: var(--color-foreground-secondary);
    transition: transform var(--transition-fast);
    flex-shrink: 0;
  }

  &__overlay-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: color-mix(in srgb, var(--color-background), transparent 70%);
    z-index: 1999;
    backdrop-filter: blur(2px);
    animation: fadeIn 0.2s ease-out;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>