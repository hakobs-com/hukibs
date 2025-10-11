<template>
  <div class="settings" :class="{ 'settings--open': open }">
    <div class="settings__bar">
      <button class="settings__toggle" @click="$emit('toggle')">
        {{ open ? 'Close' : 'Open' }} Settings
      </button>
    </div>

    <div class="settings__content" v-if="open">
      <h3>Layout</h3>
      <div class="settings__field">
        <Checkbox v-model="sharedSettings.header.enabled" label="Header" />
      </div>

      <div class="settings__grid" v-if="sharedSettings.header.enabled">
        <SelectInput v-model="sharedSettings.header.type" label="Header Type" :options="[
          { label: 'App Header', value: 'app' },
          { label: 'Page Header', value: 'page' },
          { label: 'Simple Header', value: 'simple' }
        ]" />
        <TextInput v-model="sharedSettings.header.title" label="Header Title" placeholder="Enter header title" />
      </div>

      <div class="settings__row">
        <div class="settings__field">
          <Checkbox v-model="sharedSettings.footer.enabled" label="Footer" />
        </div>
        <SelectInput v-if="sharedSettings.footer.enabled" v-model="sharedSettings.footer.type" label="Footer Type" :options="[
          { label: 'Simple Footer', value: 'simple' },
          { label: 'Page Footer', value: 'page' }
        ]" />
      </div>

      <h3>Sections</h3>
      <div class="settings__row">
        <Button @click="addSection('cards')" size="small">Add Cards</Button>
        <Button @click="addSection('content')" size="small">Add Content</Button>
        <Button @click="addSection('hero')" size="small">Add Hero</Button>
        <Button @click="addSection('logos')" size="small">Add Logos</Button>
        <Button @click="addSection('base')" size="small">Add Base</Button>
      </div>

      <div class="settings__section-editor" v-for="(s, i) in sharedSettings.sections" :key="s.id">
        <div class="settings__section-header">
          <strong>{{ i + 1 }}. {{ s.type }}</strong>
        <Button @click="removeSection(i)" size="small" variant="ghost" :color="Colors.ERROR">Remove</Button>
        </div>

        <div v-if="s.type === 'cards'" class="grid">
          <!-- CardSection Settings -->
          <label>
            Title
            <input type="text" v-model="s.props.title" />
          </label>
          <label>
            Description
            <input type="text" v-model="s.props.description" />
          </label>
          <label>
            Columns
            <input type="number" min="1" max="6" v-model.number="s.props.columns" />
          </label>
          <label>
            Card count
            <input type="number" min="1" max="12" v-model.number="s.props.cardCount" @change="syncCardCount(s)" />
          </label>

          <!-- Scrollable Settings -->
          <div class="settings__field">
            <Checkbox v-model="s.props.scrollable" label="Scrollable" />
          </div>
          <div v-if="s.props.scrollable">
            <SelectInput v-model="s.props.scrollDirection" label="Scroll Direction" :options="[
              { label: 'Horizontal', value: 'horizontal' },
              { label: 'Vertical', value: 'vertical' }
            ]" />
          </div>

          <!-- BaseSection Settings -->
          <label>
            Container Size
            <select v-model="s.props.containerSize">
              <option value="full">Full</option>
              <option value="large">Large</option>
              <option value="small">Small</option>
            </select>
          </label>
          <label>
            Section Background (Full Width)
            <select v-model="s.props.sectionColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#1e293b">Dark</option>
              <option value="#fef3c7">Light Yellow</option>
              <option value="#dbeafe">Light Blue</option>
              <option value="#dcfce7">Light Green</option>
            </select>
          </label>
          <label>
            Container Background (Centered)
            <select v-model="s.props.containerColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="white">White</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#fef3c7">Light Yellow</option>
              <option value="#dbeafe">Light Blue</option>
            </select>
          </label>
          <label>
            Label
            <input type="text" v-model="s.props.label" placeholder="Optional section label" />
          </label>
          <label>
            Padding
            <select v-model="s.props.padding">
              <option value="var(--spacing)">Default</option>
              <option value="var(--spacing-s)">Small</option>
              <option value="var(--spacing-m)">Medium</option>
              <option value="var(--spacing-l)">Large</option>
              <option value="var(--spacing-xl)">Extra Large</option>
              <option value="0">None</option>
            </select>
          </label>

          <div class="row">
            <button @click="regenerateCards(s)">Regenerate cards</button>
          </div>
        </div>

        <div v-else-if="s.type === 'base'" class="grid">
          <label>
            Label
            <input type="text" v-model="s.props.label" />
          </label>
        </div>

        <div v-else-if="s.type === 'content'" class="grid">
          <!-- ContentSection Settings -->
          <label>
            Title
            <input type="text" v-model="s.props.title" />
          </label>
          <label>
            Description
            <input type="text" v-model="s.props.description" />
          </label>
          <label>
            Layout
            <select v-model="s.props.layout">
              <option value="stacked">Stacked</option>
              <option value="side-by-side">Side by Side</option>
              <option value="grid">Grid</option>
              <option value="featured">Featured</option>
            </select>
          </label>
          <label>
            Alignment
            <select v-model="s.props.alignment">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
          <label>
            Image Aspect Ratio
            <select v-model="s.props.imageAspectRatio">
              <option value="auto">Auto</option>
              <option value="square">Square</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
            </select>
          </label>
          <label>
            Image Size
            <select v-model="s.props.imageSize">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <div class="settings__field">
            <Checkbox
              v-model="s.props.showBadges"
              label="Show Badges"
            />
          </div>
          <label>
            Content Spacing
            <select v-model="s.props.contentSpacing">
              <option value="tight">Tight</option>
              <option value="normal">Normal</option>
              <option value="loose">Loose</option>
            </select>
          </label>

          <!-- BaseSection Settings -->
          <label>
            Container Size
            <select v-model="s.props.containerSize">
              <option value="full">Full</option>
              <option value="large">Large</option>
              <option value="small">Small</option>
            </select>
          </label>
          <label>
            Section Background (Full Width)
            <select v-model="s.props.sectionColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#1e293b">Dark</option>
              <option value="#fef3c7">Light Yellow</option>
              <option value="#dbeafe">Light Blue</option>
              <option value="#dcfce7">Light Green</option>
            </select>
          </label>
          <label>
            Container Background (Centered)
            <select v-model="s.props.containerColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="white">White</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#fef3c7">Light Yellow</option>
              <option value="#dbeafe">Light Blue</option>
            </select>
          </label>
          <label>
            Label
            <input type="text" v-model="s.props.label" placeholder="Optional section label" />
          </label>
          <label>
            Padding
            <select v-model="s.props.padding">
              <option value="var(--spacing)">Default</option>
              <option value="var(--spacing-s)">Small</option>
              <option value="var(--spacing-m)">Medium</option>
              <option value="var(--spacing-l)">Large</option>
              <option value="var(--spacing-xl)">Extra Large</option>
              <option value="0">None</option>
            </select>
          </label>

          <div class="row">
            <button @click="regenerateContent(s)">Regenerate content</button>
          </div>
        </div>

        <div v-else-if="s.type === 'hero'" class="grid">
          <!-- HeroSection Settings -->
          <label>
            Horizontal Alignment
            <select v-model="s.props.align">
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
          <label>
            Vertical Alignment
            <select v-model="s.props.valign">
              <option value="top">Top</option>
              <option value="center">Center</option>
              <option value="bottom">Bottom</option>
            </select>
          </label>
          <label>
            Height
            <select v-model="s.props.height">
              <option value="auto">Auto</option>
              <option value="viewport">Viewport (100vh)</option>
              <option value="custom">Custom</option>
            </select>
          </label>
          <label v-if="s.props.height === 'custom'">
            Custom Height
            <input type="text" v-model="s.props.customHeight" placeholder="e.g., 600px, 50vh" />
          </label>
          <label>
            Text Color
            <select v-model="s.props.textColor">
              <option value="auto">Auto (based on background)</option>
              <option value="light">Light (for dark backgrounds)</option>
              <option value="dark">Dark (for light backgrounds)</option>
            </select>
          </label>
          <div class="settings__field">
            <Checkbox
              v-model="s.props.overlay"
              label="Add Background Overlay"
            />
          </div>
          <label v-if="s.props.overlay">
            Overlay Color
            <input type="text" v-model="s.props.overlayColor" placeholder="e.g., #000000, rgba(0,0,0,0.5)" />
          </label>
          <label v-if="s.props.overlay">
            Overlay Opacity
            <input type="number" min="0" max="1" step="0.1" v-model.number="s.props.overlayOpacity" />
          </label>

          <!-- BaseSection Settings -->
          <label>
            Container Size
            <select v-model="s.props.containerSize">
              <option value="full">Full</option>
              <option value="large">Large</option>
              <option value="small">Small</option>
            </select>
          </label>
          <label>
            Section Background (Full Width)
            <select v-model="s.props.sectionColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="white">White</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#1e293b">Dark Blue</option>
              <option value="#0f172a">Dark</option>
            </select>
          </label>
          <label>
            Container Background (Centered)
            <select v-model="s.props.containerColor">
              <option value="transparent">Transparent</option>
              <option value="var(--color-surface)">Surface</option>
              <option value="var(--color-primary)">Primary</option>
              <option value="var(--color-background)">Background</option>
              <option value="white">White</option>
              <option value="#f8fafc">Light Gray</option>
              <option value="#fef3c7">Light Yellow</option>
              <option value="#dbeafe">Light Blue</option>
            </select>
          </label>
          <label>
            Label
            <input type="text" v-model="s.props.label" placeholder="Optional section label" />
          </label>
          <label>
            Padding
            <select v-model="s.props.padding">
              <option value="var(--spacing)">Default</option>
              <option value="var(--spacing-s)">Small</option>
              <option value="var(--spacing-m)">Medium</option>
              <option value="var(--spacing-l)">Large</option>
              <option value="var(--spacing-xl)">Extra Large</option>
              <option value="0">None</option>
            </select>
          </label>
        </div>

        <div v-else-if="s.type === 'logos'" class="grid">
          <label>
            Variant
            <select v-model="s.props.variant">
              <option value="scroller">scroller</option>
              <option value="grid">grid</option>
            </select>
          </label>
          <label>
            Speed
            <select v-model="s.props.speed">
              <option value="slow">slow</option>
              <option value="normal">normal</option>
              <option value="fast">fast</option>
            </select>
          </label>
          <label v-if="s.props.variant === 'scroller'">
            Direction
            <select v-model="s.props.direction">
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </label>
          <label v-if="s.props.variant === 'scroller'">
            <input type="checkbox" v-model="s.props.pauseOnHover" />
            Pause on Hover
          </label>
          <label v-if="s.props.variant === 'grid'">
            Grid Size
            <input type="number" min="2" max="6" v-model.number="s.props.gridSize" />
          </label>
          <label>
            Logo Height
            <input type="text" v-model="s.props.logoHeight" placeholder="40px" />
          </label>
          <label>
            Gap
            <input type="text" v-model="s.props.gap" placeholder="2rem" />
          </label>
          <label>
            Logo count
            <input type="number" min="3" max="20" v-model.number="s.props.logoCount" @change="syncLogoCount(s)" />
          </label>
          <div class="row">
            <button @click="regenerateLogos(s)">Regenerate logos</button>
          </div>
        </div>
      </div>

      <div class="settings__row">
        <Button @click="reset" size="small">Reset</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch, inject } from 'vue'
import { faker } from '@faker-js/faker'
import { Button, TextInput, SelectInput, Checkbox, Toggle, Colors } from 'hukibs'

const props = defineProps<{ open: boolean }>()
const emit = defineEmits<{ (e: 'toggle'): void }>()

// Inject shared settings from App.vue
const sharedSettings = inject('settings')
if (!sharedSettings) {
  console.error('SettingsPanel requires settings to be provided by parent component')
}

const ICONS = ['compass', 'rocket', 'star-m', 'graph-up', 'info-l']
function randIcon() { return ICONS[Math.floor(Math.random() * ICONS.length)] }
function genCard(id: string) {
  return { id, icon: randIcon(), title: faker.commerce.productName(), subtitle: faker.commerce.department(), content: faker.commerce.productDescription() }
}
function genCards(n: number, prefix = 'c') { return Array.from({ length: n }, (_, idx) => genCard(`${prefix}-${idx + 1}`)) }
function genLogos(n: number, prefix = 'l') { return Array.from({ length: n }, (_, idx) => ({ id: `${prefix}-${idx + 1}`, icon: randIcon() })) }
function genContent(n: number, prefix = 'co') { return Array.from({ length: n }, (_, idx) => ({
  id: `${prefix}-${idx + 1}`,
  title: faker.commerce.productName(),
  subtitle: faker.commerce.department(),
  content: `<p>${faker.lorem.paragraphs(1)}</p>`,
  cta: { label: 'Learn More', link: '#' },
  icon: randIcon(),
  badge: 'Featured',
  badgeColor: 'primary' as const
})) }

function addSection(type: 'base' | 'cards' | 'content' | 'hero' | 'logos') {
  const id = Math.random().toString(36).slice(2)
  if (type === 'cards') {
    sharedSettings.sections.push({
      id, type,
      props: {
        title: 'New Cards',
        description: 'Autogenerated cards section',
        columns: 3,
        cardCount: 3,
        cards: genCards(3, id),
        // Scrollable props
        scrollable: false,
        scrollDirection: 'horizontal',
        // BaseSection props
        containerSize: 'large',
        sectionColor: 'transparent',
        containerColor: 'transparent',
        label: '',
        padding: 'var(--spacing)'
      }
    })
    return
  }
  if (type === 'logos') {
    sharedSettings.sections.push({
      id, type,
      props: {
        variant: 'scroller',
        speed: 'normal',
        direction: 'left',
        pauseOnHover: true,
        gridSize: 4,
        logoHeight: '40px',
        gap: '2rem',
        logoCount: 5,
        logos: genLogos(5, id)
      }
    })
    return
  }
  if (type === 'content') {
    sharedSettings.sections.push({
      id, type,
      props: {
        title: 'New Content Section',
        description: 'A flexible content section with customizable layout',
        layout: 'stacked',
        alignment: 'left',
        imageAspectRatio: 'auto',
        imageSize: 'medium',
        showBadges: true,
        contentSpacing: 'normal',
        content: genContent(1, id)
      }
    })
    return
  }
  if (type === 'hero') {
    sharedSettings.sections.push({
      id, type,
      props: {
        align: 'center',
        valign: 'center',
        height: 'viewport',
        textColor: 'auto',
        overlay: false,
        overlayColor: '#000000',
        overlayOpacity: 0.5,
        // BaseSection props
        containerSize: 'large',
        sectionColor: 'transparent',
        containerColor: 'transparent',
        label: '',
        padding: 'var(--spacing)'
      }
    })
    return
  }
  sharedSettings.sections.push({ id, type, props: { label: 'Base Section' } })
}

function removeSection(index: number) {
  sharedSettings.sections.splice(index, 1)
}


function syncCardCount(s: any) {
  const n = Math.max(1, Math.min(12, Number(s.props.cardCount || 1)))
  s.props.cards = genCards(n, s.id)
}
function regenerateCards(s: any) {
  const n = Number(s.props.cardCount || (s.props.cards?.length ?? 3))
  s.props.cards = genCards(n, s.id)
}
function syncLogoCount(s: any) {
  const n = Math.max(3, Math.min(20, Number(s.props.logoCount || 3)))
  s.props.logos = genLogos(n, s.id)
}
function regenerateLogos(s: any) {
  const n = Number(s.props.logoCount || (s.props.logos?.length ?? 5))
  s.props.logos = genLogos(n, s.id)
}
function regenerateContent(s: any) {
  const n = Number(s.props.content?.length ?? 1)
  s.props.content = genContent(n, s.id)
}

// Load settings from localStorage on component initialization
function loadSettings() {
  const saved = localStorage.getItem('demo-settings')
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      sharedSettings.header = parsed.header || sharedSettings.header
      sharedSettings.footer = parsed.footer || sharedSettings.footer
      sharedSettings.sections = parsed.sections || sharedSettings.sections
    } catch (e) {
      console.error('Failed to load settings from localStorage:', e)
    }
  }
}

// Save settings to localStorage whenever they change
watch(sharedSettings, () => {
  localStorage.setItem('demo-settings', JSON.stringify(sharedSettings))
}, { deep: true })

// Reset to default settings
function reset() {
  sharedSettings.header = {
    enabled: true,
    type: 'app' as 'app' | 'page' | 'simple',
    title: 'Demo Page',
    props: {} as any
  }
  sharedSettings.footer = {
    enabled: true,
    type: 'simple' as 'simple' | 'page',
    props: {} as any
  }
  sharedSettings.sections = []

  // Add default section
  addSection('cards')

  // Clear localStorage
  localStorage.removeItem('demo-settings')
}

// Initialize settings on mount
loadSettings()
</script>

<style lang="scss">
.settings {
  --settings-panel-height: 56px;
  position: fixed;
  bottom: var(--space);
  height: fit-content;
  max-height: calc(100vh - var(--space-l));
  right: var(--space);
  border-radius: var(--border-radius);
  z-index: 1000;
  border: 1px solid red;
  background: color-mix(in srgb, var(--color-background), transparent 75%);

  border: 1px solid var(--color-border);
  overflow-y: auto;
  backdrop-filter: blur(6px);
  // make sure to use var(--space-X)sizes for all sizes. NO HARD PIXEL SIZES.

  &__bar {
    height: var(--settings-panel-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  &__toggle {
    background: transparent;
    border-radius: 6px;
    padding: 0.5rem 0.75rem;
  }

  &__content {
    border-right: 1px solid var(--color-border);
    padding: 1rem;
    width: 400px;
  }


  // Clean below up, needs to be bem as well. We don't ever style like this below.
  .row {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    margin: 0.5rem 0;
  }

  .row.end {
    justify-content: flex-end;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0;
  }

  .list li {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .primary {
    background: var(--color-primary);
    color: var(--color-primary-text);
    border: none;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
  }


  &__section-editor {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: var(--space);
    margin: 0.5rem 0;
    background: color-mix(in srgb, var(--color-background), transparent 75%);

    border: 1px solid var(--color-border);
  }

  &__section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  &__row {
    display: flex;
    gap: var(--spacing-s);
    align-items: center;
    margin: var(--spacing-s) 0;
  }

  &__row.end {
    justify-content: flex-end;
  }

  &__field {
    margin: var(--spacing-s) 0;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(160px, 1fr));
    gap: var(--space);
  }

  .grid label {
    display: flex;
    flex-direction: column;
    font-size: 0.9rem;
  }

  .grid input,
  .grid select {
    padding: 0.25rem 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-s);
    background: transparent;
    color: inherit;
  }
}
</style>
