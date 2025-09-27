<template>
  <div :class="iconClasses" :aria-hidden="!ariaLabel" :aria-label="ariaLabel" v-bind="$attrs" v-html="iconContent" />
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useBemm } from 'bemm'
import { getIcon, Icons } from 'open-icon'
import type { IconProps } from './Icon.model'

const props = withDefaults(defineProps<IconProps>(), {
  size: 'medium'
})

const { bemm } = useBemm('icon')

const iconClasses = computed(() => {
  const classes = [bemm()]

  if (props.size) {
    classes.push(bemm('', props.size))
  }

  if (props.color) {
    classes.push(bemm('', `color-${props.color}`))
  }

  if (isBrand.value) {
    classes.push(bemm('', 'is-brand'))
  }

  return classes
})

// Store the icon SVG content
const iconContent = ref('')
const isBrand = ref(false)

// Brand SVGs
const brandSvgs: Record<string, string> = {
  github: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M27.5 54.5c0 .2.3.4.6.4s.6-.2.6-.4-.3-.4-.6-.4-.6.2-.6.4"/><path d="M27.1 64.1c.9.2 1.7-.5 1.7-1.5v-5.4c-1.1.2-2.4.3-3 .3-1.6-.1-3.1-.3-3.9-.8-.9-.5-2.1-1.5-2.5-2.3-.5-1.1-.6-1.7-1.2-2.6-.5-.9-1.5-1.8-2.1-2.1s-1.2-.8-1.3-1.1.1-.7.7-.8 1.6.1 2.6.6c.8.4 1.7 1.4 2.3 2.3.7 1.1 1.7 2.1 2.5 2.6s2.5.7 4.1.5c.6-.1 1.3-.3 1.8-.6.2-1.5.9-2.8 1.9-3.9-8.5-1-13.1-5-13.1-13.6 0-3.3 1.1-6.1 3-8.2-.2-.5-.4-1.1-.5-1.9-.2-1.8 0-2.9.3-3.9.2-1.1.5-1.8.5-1.8s1.3-.1 2.5.2c1.1.4 2.1.7 3.5 1.5q1.05.6 1.8 1.2c2.2-.6 4.7-.9 7.3-.9q3.9 0 7.2.9c.5-.3 1.2-.8 1.8-1.2 1.4-.8 2.4-1.1 3.5-1.5s2.5-.2 2.5-.2.3.7.5 1.8.5 2.1.3 3.9c-.1.8-.3 1.4-.5 1.9 1.9 2.2 3 4.9 3 8.2 0 8.7-4.7 12.6-13.1 13.6 1.2 1.3 2 3 2 4.9v8.4c0 .9.8 1.6 1.7 1.5 11.6-3.7 19.9-14.6 19.9-27.4C64.8 20.8 51.9 7.9 36 7.9S7.2 20.8 7.2 36.7c0 12.8 8.3 23.6 19.9 27.4"/><path d="M23 54.4c0 .2.2.4.5.4s.6-.1.6-.3-.2-.4-.5-.4-.6.1-.6.3m2.3.4c0 .2.2.4.6.4.3 0 .6-.1.6-.3s-.2-.4-.6-.4-.6.1-.6.3M21.1 53q-.15.3.3.6c.2.2.5.1.6 0q.15-.3-.3-.6c-.2-.2-.5-.2-.6 0m-2.4-3.3c-.1.1-.1.4.1.5.2.2.4.2.6.1.1-.1.1-.4-.1-.5-.3-.2-.5-.2-.6-.1m-1.3-.9c-.1.1 0 .4.3.5.2.1.5.1.5-.1s0-.4-.3-.5c-.2-.1-.5-.1-.5.1m2.5 2.5c-.1.1-.1.4 0 .6.2.2.4.3.6.2.1-.1.1-.4 0-.6-.2-.2-.5-.3-.6-.2"/></svg>',
  google: '<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 72 72"><path d="M63.7 30.8H36.6V42h15.5c-.7 3.6-2.7 6.6-5.8 8.7-2.6 1.7-5.8 2.8-9.7 2.8-7.5 0-13.9-5.1-16.1-11.9-.6-1.7-.9-3.6-.9-5.5s.3-3.7.9-5.5c2.3-6.8 8.6-11.9 16.1-11.9 4.2 0 8 1.5 11 4.3l8.2-8.2c-5-4.7-11.5-7.5-19.3-7.5-11.3 0-21 6.5-25.7 15.9-1.9 3.8-3 8.1-3 12.8s1.1 9 3.1 12.9c4.7 9.4 14.5 15.9 25.7 15.9 7.8 0 14.3-2.6 19.1-7 5.4-5 8.6-12.4 8.6-21.2-.1-2-.3-4-.6-5.8"/></svg>'
}

// Map common names to open-icon names
const iconMap: Record<string, string> = {
  'chevron-down': 'chevron-down',
  'chevron-up': 'chevron-up',
  'chevron-left': 'chevron-left',
  'chevron-right': 'chevron-right',
  'eye': 'eye',
  'eye-off': 'eye-off',
  'check': 'check-m',
  'x': 'cross',
  'plus': 'add-m',
  'minus': 'subtract-m',
  'search': 'search-m',
  'user': 'user',
  'mail': 'mail',
  'phone': 'phone',
  'lock': 'lock',
  'unlock': 'unlock',
  'star': 'star',
  'heart': 'heart-m',
  'home': 'home-large',
  'settings': 'settings',
  'menu': 'hamburger',
  'close': 'cross',
  'sun': 'sun',
  'moon': 'moon',
  'edit': 'edit-m',
  'sparkles': 'sparkles',
  'database': 'database',
  'folder': 'folder',
  'package': 'package-box',
  'code': 'code-brackets',
  'users': 'users',
  'book': 'bookcase',
  'download': 'arrow-download',
  'zap': 'power',
  'shield': 'shield-keyhole',
  'globe': 'language',
  'briefcase': 'briefcase-cross',
  'award': 'trophy-cup',
  'trending-up': 'graph-up',
  'calendar': 'calendar',
  'dollar-sign': 'dollar',
  'laptop': 'laptop-large',
  'map-pin': 'map-pin',
  'key': 'key',
  'file-text': 'file-text',
  'activity': 'heart-activity',
  'check-circle': 'circled-check'
}

// Load icon when name changes
watchEffect(async () => {
  if (!props.name) {
    iconContent.value = ''
    isBrand.value = false
    return
  }

  const iconName = iconMap[props.name] || props.name

  try {
    // Check if it's a brand logo first
    if (brandSvgs[props.name]) {
      iconContent.value = brandSvgs[props.name]
      isBrand.value = true
      return
    }

    // Fall back to regular icons
    isBrand.value = false
    const iconKey = Object.keys(Icons).find(key => Icons[key as keyof typeof Icons] === iconName)
    if (iconKey) {
      const icon = Icons[iconKey as keyof typeof Icons]
      iconContent.value = await getIcon(icon)
    } else {
      console.warn(`Icon "${props.name}" not found`)
      iconContent.value = ''
    }
  } catch {
    console.warn(`Icon "${props.name}" not found`)
    iconContent.value = ''
    isBrand.value = false
  }
})
</script>

<style lang="scss">
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  color: currentColor;

  width: 1em;
  height: 1em;

  // SVG styling
  svg {
    width: 100%;
    height: 100%;

    path,
    rect,
    line,
    circle,
    polyline {
      stroke: currentColor;
    }
  }

  // Size variants
  &--small {
    width: 1em;
    height: 1em;
  }

  &--medium {
    width: 1.25em;
    height: 1.25em;
  }

  &--large {
    width: 2em;
    height: 2em;
  }

  &--xl {
    width: 4em;
    height: 4em;
  }

  &--is-brand {

    svg {
      path,
      rect,
      line,
      circle,
      polyline {
        stroke: none;
        fill: currentColor;
      }
    }
  }
}
</style>
