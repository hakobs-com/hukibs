<template>
  <div class="app">
    <SettingsPanel :open="settingsOpen" @toggle="settingsOpen = !settingsOpen" />


      <AppHeader v-if="sharedSettings.header.enabled" :nav-items="headerNav" />

      <main class="page">
        <component
          v-for="(section, i) in sharedSettings.sections"
          :key="section.id + '-' + i"
          :is="resolveSection(section.type)"
          v-bind="section.props"
        />
      </main>

      <component
        v-if="sharedSettings.footer.enabled && sharedSettings.footer.type"
        :is="resolveFooter(sharedSettings.footer.type)"
        v-bind="sharedSettings.footer.props"
      />
    </div>
</template>

<script setup lang="ts">
import { ref, provide, reactive } from 'vue'
import { AppHeader, BaseSection, CardSection, ContentSection, HeroSection, LogoScroller, SimpleFooter, PageFooter } from 'hukibs'
import SettingsPanel from './components/SettingsPanel.vue'

type SectionType = 'base' | 'cards' | 'content' | 'hero' | 'logos'

const settingsOpen = ref(true)

const headerNav = [
  { label: 'Demo Home', href: '/demo/' },
  { label: 'Docs', href: '/' }
]

// Create a reactive settings state
const sharedSettings = reactive({
  header: { 
    enabled: true, 
    type: 'app' as 'app' | 'page' | 'simple', 
    title: 'Demo Page',
    props: {} 
  },
  footer: { 
    enabled: true, 
    type: 'simple' as 'simple' | 'page', 
    props: {
      label: 'Demo Footer',
      links: [
        { id: 'l1', title: 'Company', items: [{ id: 'i1', label: 'About', href: '#' }] },
        { id: 'l2', title: 'Product', items: [{ id: 'i2', label: 'Pricing', href: '#' }] }
      ]
    }
  },
  sections: [
    {
      id: 's1',
      type: 'cards' as 'base' | 'cards' | 'content' | 'logos',
      props: {
        title: 'Our Services',
        description: 'Quick overview of what we offer',
        columns: 3,
        cards: [
          { id: 'c1', icon: 'compass', title: 'Strategy', subtitle: 'Planning', content: 'We guide you.' },
          { id: 'c2', icon: 'rocket', title: 'Build', subtitle: 'Ship', content: 'We deliver.' },
          { id: 'c3', icon: 'star-m', title: 'Support', subtitle: 'Care', content: 'We help.' }
        ]
      }
    }
  ] as Array<{ id: string; type: 'base' | 'cards' | 'content' | 'logos'; props: any }>
})

// Provide settings to child components
provide('settings', sharedSettings)


function resolveSection(type: SectionType) {
  switch (type) {
    case 'base': return BaseSection
    case 'cards': return CardSection
    case 'content': return ContentSection
    case 'hero': return HeroSection
    case 'logos': return LogoScroller
  }
}

function resolveFooter(type: 'simple' | 'page') {
  switch (type) {
    case 'simple': return SimpleFooter
    case 'page': return PageFooter
  }
}


// Load applied config from localStorage on component initialization
function loadAppliedConfig() {
  const saved = localStorage.getItem('demo-applied-config')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      Object.assign(sharedSettings, parsed)
    } catch (e) {
      console.error('Failed to load applied config from localStorage:', e)
    }
  }
}

// Initialize applied config on mount
loadAppliedConfig()
</script>

<style lang="scss">
@import 'hukibs/style.css';

.app {
  min-height: 100vh;
}

</style>
