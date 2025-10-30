<template>
  <BaseSection 
    :class="bemm('', [align, valign, height, textColor])"
    :style="sectionStyle"
  >
    <!-- Background Slot -->
    <div v-if="$slots.background" :class="bemm('background')">
      <slot name="background" />
    </div>
    
    <!-- Overlay -->
    <div 
      v-if="overlay" 
      :class="bemm('overlay')" 
      :style="overlayStyle"
    ></div>
    
    <!-- Container with custom padding -->
    <Container :class="bemm('container')" :style="containerStyle">
      <!-- Main Content -->
      <div :class="bemm('content')">
        <slot name="content" />
      </div>
      
      <!-- Footnote -->
      <div v-if="$slots.footnote" :class="bemm('footnote')">
        <slot name="footnote" />
      </div>
    </Container>
  </BaseSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
import BaseSection from '../BaseSection/BaseSection.vue'
import Container from '../../ui/Container/Container.vue'
import type { HeroSectionProps } from './HeroSection.model'

const props = withDefaults(defineProps<HeroSectionProps>(), {
  align: 'center',
  valign: 'center',
  height: 'viewport',
  textColor: 'auto',
  overlay: false,
  overlayOpacity: 0.5,
})

const bemm = useBemm('hero-section')

// Section styles for height control
const sectionStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.height === 'custom' && props.customHeight) {
    styles.height = props.customHeight
  } else if (props.height === 'viewport') {
    styles.height = '100vh'
  }
  
  return styles
})

// Container styles with custom padding
const containerStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.height === 'viewport') {
    // Use calc(var(--spacing) * 3) for top and bottom padding as requested
    styles.paddingTop = 'calc(var(--spacing) * 3)'
    styles.paddingBottom = 'calc(var(--spacing) * 3)'
    styles.minHeight = '100vh'
    styles.display = 'flex'
    styles.flexDirection = 'column'
    styles.justifyContent = props.valign === 'top' ? 'flex-start' : 
                          props.valign === 'bottom' ? 'flex-end' : 'center'
  }
  
  return styles
})

// Overlay styles
const overlayStyle = computed(() => {
  const styles: Record<string, string> = {}
  
  if (props.overlayColor) {
    styles.backgroundColor = props.overlayColor
  }
  
  styles.opacity = props.overlayOpacity.toString()
  
  return styles
})
</script>

<style lang="scss" scoped>
.hero-section {
  position: relative;
  overflow: hidden;
  
  // Text color variants
  &--text-color-light {
    color: var(--color-text-inverted);
    
    :deep(.container) {
      color: var(--color-text-inverted);
    }
  }
  
  &--text-color-dark {
    color: var(--color-text);
    
    :deep(.container) {
      color: var(--color-text);
    }
  }
  
  // Auto text color (based on background or overlay)
  &--text-color-auto {
    color: var(--color-text-inverted);
    
    :deep(.container) {
      color: var(--color-text-inverted);
    }
  }
  
  // Height variants
  &--height-auto {
    min-height: 400px;
  }
  
  &--height-viewport {
    height: 100vh;
  }
  
  &--height-custom {
    // Height controlled by inline styles
  }
}

.hero-section__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  // Ensure background content fills the space
  :deep(*) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.hero-section__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: var(--color-background-overlay);
}

.hero-section__container {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.hero-section__content {
  flex: 1;
  display: flex;
  
  // Horizontal alignment
  .hero-section--align-left & {
    justify-content: flex-start;
    text-align: left;
  }
  
  .hero-section--align-center & {
    justify-content: center;
    text-align: center;
  }
  
  .hero-section--align-right & {
    justify-content: flex-end;
    text-align: right;
  }
  
  // Vertical alignment (when not using custom container styles)
  .hero-section--valign-top & {
    align-items: flex-start;
  }
  
  .hero-section--valign-center & {
    align-items: center;
  }
  
  .hero-section--valign-bottom & {
    align-items: flex-end;
  }
}

.hero-section__footnote {
  margin-top: calc(var(--spacing) * 2);
  
  // Horizontal alignment for footnote
  .hero-section--align-left & {
    text-align: left;
  }
  
  .hero-section--align-center & {
    text-align: center;
  }
  
  .hero-section--align-right & {
    text-align: right;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .hero-section__content {
    text-align: center !important;
    justify-content: center !important;
  }
  
  .hero-section__footnote {
    text-align: center !important;
  }
}
</style>