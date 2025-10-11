<template>
  <div class="app">
    <SettingsPanel :open="settingsOpen" @toggle="settingsOpen = !settingsOpen" @apply="applySettings" />

    <div class="content">
      <AppHeader v-if="config.header.enabled" :nav-items="headerNav" />

      <main class="page">
        <component
          v-for="(section, i) in config.sections"
          :key="section.id + '-' + i"
          :is="resolveSection(section.type)"
          v-bind="section.props"
        />
      </main>

      <component
        v-if="config.footer.type"
        :is="config.footer.type === 'simple' ? 'SimpleFooter' : 'PageFooter'"
        v-bind="config.footer.props"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppHeader, BaseSection, CardSection, LogoScroller, SimpleFooter, PageFooter} from 'hukibs'
import SettingsPanel from './components/SettingsPanel.vue'

type SectionType = 'base' | 'cards' | 'logos'

const settingsOpen = ref(true)

const headerNav = [
  { label: 'Demo Home', href: '/demo/' },
  { label: 'Docs', href: '/' }
]

const config = ref({
  header: { enabled: true },
  footer: {
    type: 'simple' as 'simple' | 'page' | null,
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
      type: 'cards' as SectionType,
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
  ]
})

function resolveSection(type: SectionType) {
  switch (type) {
    case 'base': return BaseSection
    case 'cards': return CardSection
    case 'logos': return LogoScroller
  }
}

function applySettings(newConfig: any) {
  config.value = newConfig
}
</script>

<style lang="scss">
@import 'hukibs/style.css';

.app {
  min-height: 100vh;
}
.content {
  padding-top: var(--settings-panel-height, 56px);
}
.page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
