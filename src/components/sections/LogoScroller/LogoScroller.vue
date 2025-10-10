<template>
  <div :class="bemm('', [variant])" :data-speed="speed" :data-direction="direction">
    <div 
      v-if="variant === 'scroller'" 
      :class="bemm('track', [pauseOnHover ? 'pause-on-hover' : ''])"
      :style="{ '--logo-height': logoHeight, '--gap': gap }"
    >
      <div :class="bemm('content')">
        <div 
          v-for="logo in duplicatedLogos" 
          :key="`${logo.id}-${logo._setIndex}`" 
          :class="bemm('logo')"
        >
          <a v-if="logo.href" :href="logo.href" :class="bemm('link')" target="_blank" rel="noopener noreferrer">
            <component 
              v-if="logo.component" 
              :is="logo.component" 
              :class="bemm('component')"
            />
            <img 
              v-else-if="logo.src" 
              :src="logo.src" 
              :alt="logo.alt || `Logo ${logo.id}`" 
              :class="bemm('image')"
            />
          </a>
          <component 
            v-else-if="logo.component" 
            :is="logo.component" 
            :class="bemm('component')"
          />
          <img 
            v-else-if="logo.src" 
            :src="logo.src" 
            :alt="logo.alt || `Logo ${logo.id}`" 
            :class="bemm('image')"
          />
        </div>
      </div>
    </div>

    <div 
      v-else-if="variant === 'grid'" 
      :class="bemm('grid')"
      :style="{ '--grid-size': gridSize, '--logo-height': logoHeight, '--gap': gap }"
    >
      <div 
        v-for="logo in logos" 
        :key="logo.id" 
        :class="bemm('logo')"
      >
        <a v-if="logo.href" :href="logo.href" :class="bemm('link')" target="_blank" rel="noopener noreferrer">
          <component 
            v-if="logo.component" 
            :is="logo.component" 
            :class="bemm('component')"
          />
          <img 
            v-else-if="logo.src" 
            :src="logo.src" 
            :alt="logo.alt || `Logo ${logo.id}`" 
            :class="bemm('image')"
          />
        </a>
        <component 
          v-else-if="logo.component" 
          :is="logo.component" 
          :class="bemm('component')"
        />
        <img 
          v-else-if="logo.src" 
          :src="logo.src" 
          :alt="logo.alt || `Logo ${logo.id}`" 
          :class="bemm('image')"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBemm } from 'bemm'
import type { LogoScrollerProps, LogoItem } from './LogoScroller.model'

const props = withDefaults(defineProps<LogoScrollerProps>(), {
  variant: 'scroller',
  speed: 'normal',
  direction: 'left',
  pauseOnHover: true,
  gridSize: 4,
  logoHeight: '40px',
  gap: '2rem'
})

const { bemm } = useBemm('logo-scroller')

const duplicatedLogos = computed(() => {
  if (props.variant !== 'scroller') return []
  
  const logos = props.logos.map((logo, index) => ({
    ...logo,
    _setIndex: 0
  }))
  
  return [...logos, ...logos.map(logo => ({ ...logo, _setIndex: 1 }))]
})
</script>

<style lang="scss">
.logo-scroller {
  --logo-height: 40px;
  --gap: 2rem;
  --animation-duration: 30s;

  &--scroller {
    overflow: hidden;
    
    .logo-scroller__track {
      display: flex;
      align-items: center;
      
      &--pause-on-hover:hover .logo-scroller__content {
        animation-play-state: paused;
      }
    }
    
    .logo-scroller__content {
      display: flex;
      gap: var(--gap);
      animation: scroll var(--animation-duration) linear infinite;
    }
    
    &[data-speed="slow"] {
      --animation-duration: 60s;
    }
    
    &[data-speed="fast"] {
      --animation-duration: 15s;
    }
    
    &[data-direction="right"] .logo-scroller__content {
      animation-direction: reverse;
    }
  }
  
  &--grid {
    .logo-scroller__grid {
      display: grid;
      grid-template-columns: repeat(var(--grid-size, 4), 1fr);
      gap: var(--gap);
      justify-items: center;
      align-items: center;
    }
  }
  
  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: var(--logo-height);
  }
  
  &__link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    opacity: 0.7;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 1;
    }
  }
  
  &__image,
  &__component {
    height: var(--logo-height);
    width: auto;
    object-fit: contain;
    
    &:global(svg) {
      height: var(--logo-height);
      width: auto;
    }
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .logo-scroller {
    &--grid .logo-scroller__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

@media (max-width: 480px) {
  .logo-scroller {
    &--grid .logo-scroller__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>