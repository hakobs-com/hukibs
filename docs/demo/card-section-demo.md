<script setup>
import { ref, reactive } from 'vue'
import { CardSection } from 'hukibs'
import { Button, Card, TextInput, SelectInput } from 'hukibs'
import { AllColors } from '../../../src/types'

// Default cards data
const defaultCards = [
  {
    id: '1',
    icon: 'compass',
    title: 'Strategy',
    subtitle: 'Planning & Direction',
    content: 'We help you define your business strategy and create a roadmap for success.',
    cta: { label: 'Learn More', color: 'primary', link: '#' }
  },
  {
    id: '2',
    icon: 'rocket',
    title: 'Development',
    subtitle: 'Build & Deploy',
    content: 'Our team builds high-quality applications using modern technologies.',
    cta: { label: 'Learn More', color: 'success', link: '#' }
  },
  {
    id: '3',
    icon: 'star-m',
    title: 'Support',
    subtitle: '24/7 Assistance',
    content: 'Round-the-clock support to ensure your applications run smoothly.',
    cta: { label: 'Learn More', color: 'warning', link: '#' }
  }
]

// Reactive state
const cards = ref([...defaultCards])
const editingCard = ref(null)
const showAddCard = ref(false)

// BaseSection settings
const settings = reactive({
  // CardSection props
  title: 'Our Services',
  description: 'We offer a wide range of services to help your business grow.',
  columns: 3,
  
  // BaseSection props
  padding: 'var(--spacing)',
  containerSize: 'large',
  sectionColor: 'transparent',
  containerColor: 'transparent',
  label: ''
})

// New card form
const newCard = reactive({
  title: '',
  subtitle: '',
  content: '',
  icon: '',
  image: '',
  ctaLabel: '',
  ctaColor: 'primary',
  ctaLink: '',
  color: ''
})

// Available options
const containerSizes = ['full', 'large', 'small']
const colorOptions = ['transparent', 'var(--color-surface)', 'var(--color-primary)', 'var(--color-background)']
const columnOptions = [1, 2, 3, 4, 5, 6]

// Functions
const addCard = () => {
  const cardId = Date.now().toString()
  const card = {
    id: cardId,
    title: newCard.title || 'New Card',
    subtitle: newCard.subtitle,
    content: newCard.content,
    icon: newCard.icon || undefined,
    image: newCard.image || undefined,
    color: newCard.color || undefined,
    cta: (newCard.ctaLabel || newCard.ctaLink) ? {
      label: newCard.ctaLabel || 'Learn More',
      color: newCard.ctaColor || 'primary',
      link: newCard.ctaLink || '#'
    } : undefined
  }
  
  cards.value.push(card)
  
  // Reset form
  Object.assign(newCard, {
    title: '',
    subtitle: '',
    content: '',
    icon: '',
    image: '',
    ctaLabel: '',
    ctaColor: 'primary',
    ctaLink: '',
    color: ''
  })
  showAddCard.value = false
}

const updateCard = (cardId, updates) => {
  const index = cards.value.findIndex(card => card.id === cardId)
  if (index !== -1) {
    cards.value[index] = { ...cards.value[index], ...updates }
  }
  editingCard.value = null
}

const deleteCard = (cardId) => {
  cards.value = cards.value.filter(card => card.id !== cardId)
}

const startEditCard = (card) => {
  editingCard.value = { ...card }
}

const resetToDefaults = () => {
  cards.value = [...defaultCards]
  Object.assign(settings, {
    title: 'Our Services',
    description: 'We offer a wide range of services to help your business grow.',
    columns: 3,
    padding: 'var(--spacing)',
    containerSize: 'large',
    sectionColor: 'transparent',
    containerColor: 'transparent',
    label: ''
  })
}
</script>

<template>
  <div class="demo-page">
    <div class="demo-container">
      <!-- Controls Panel -->
      <Card class="controls-panel">
        <h2>CardSection Controls</h2>
        
        <!-- CardSection Settings -->
        <div class="control-group">
          <h3>CardSection Settings</h3>
          <div class="control-row">
            <TextInput 
              v-model="settings.title" 
              label="Section Title" 
              placeholder="Enter section title"
            />
          </div>
          <div class="control-row">
            <TextInput 
              v-model="settings.description" 
              label="Section Description" 
              placeholder="Enter section description"
            />
          </div>
          <div class="control-row">
            <SelectInput 
              v-model="settings.columns" 
              :options="columnOptions.map(n => ({ label: `${n} columns`, value: n }))"
              label="Columns"
            />
          </div>
        </div>

        <!-- BaseSection Settings -->
        <div class="control-group">
          <h3>Container Settings</h3>
          <div class="control-row">
            <SelectInput 
              v-model="settings.containerSize" 
              :options="containerSizes.map(size => ({ label: size.charAt(0).toUpperCase() + size.slice(1), value: size }))"
              label="Container Size"
            />
          </div>
          <div class="control-row">
            <SelectInput 
              v-model="settings.sectionColor" 
              :options="colorOptions.map(color => ({ label: color.replace('var(--color-', '').replace(')', '').replace('transparent', 'Transparent'), value: color }))"
              label="Section Background"
            />
          </div>
          <div class="control-row">
            <SelectInput 
              v-model="settings.containerColor" 
              :options="colorOptions.map(color => ({ label: color.replace('var(--color-', '').replace(')', '').replace('transparent', 'Transparent'), value: color }))"
              label="Container Background"
            />
          </div>
          <div class="control-row">
            <TextInput 
              v-model="settings.label" 
              label="Section Label" 
              placeholder="Optional label"
            />
          </div>
        </div>

        <!-- Card Management -->
        <div class="control-group">
          <h3>Card Management</h3>
          <div class="cards-list">
            <div 
              v-for="card in cards" 
              :key="card.id" 
              class="card-item"
            >
              <div class="card-info">
                <strong>{{ card.title || 'Untitled Card' }}</strong>
                <span class="card-id">ID: {{ card.id }}</span>
              </div>
              <div class="card-actions">
                <Button size="small" @click="startEditCard(card)">Edit</Button>
                <Button size="small" variant="ghost" color="error" @click="deleteCard(card.id)">Delete</Button>
              </div>
            </div>
          </div>
          
          <Button 
            v-if="!showAddCard" 
            @click="showAddCard = true"
            color="primary"
          >
            Add New Card
          </Button>
          
          <Button 
            variant="outline" 
            @click="resetToDefaults"
            style="margin-left: 0.5rem;"
          >
            Reset to Defaults
          </Button>
        </div>
      </Card>

      <!-- Add/Edit Card Forms -->
      <Card v-if="showAddCard" class="form-panel">
        <h3>Add New Card</h3>
        <div class="form-grid">
          <TextInput v-model="newCard.title" label="Card Title" placeholder="Enter title" />
          <TextInput v-model="newCard.subtitle" label="Subtitle" placeholder="Enter subtitle" />
          <TextInput v-model="newCard.content" label="Content" placeholder="Enter content" />
          <TextInput v-model="newCard.icon" label="Icon Name" placeholder="e.g., compass" />
          <TextInput v-model="newCard.image" label="Image URL" placeholder="Enter image URL" />
          <TextInput v-model="newCard.color" label="Card Color" placeholder="e.g., #3b82f6" />
          <TextInput v-model="newCard.ctaLabel" label="CTA Label" placeholder="e.g., Learn More" />
          <SelectInput 
            v-model="newCard.ctaColor" 
            :options="AllColors.map(color => ({ label: color, value: color }))"
            label="CTA Color"
          />
          <TextInput v-model="newCard.ctaLink" label="CTA Link" placeholder="Enter link URL" />
        </div>
        <div class="form-actions">
          <Button @click="addCard" color="primary">Add Card</Button>
          <Button variant="ghost" @click="showAddCard = false">Cancel</Button>
        </div>
      </Card>

      <Card v-if="editingCard" class="form-panel">
        <h3>Edit Card: {{ editingCard.title }}</h3>
        <div class="form-grid">
          <TextInput v-model="editingCard.title" label="Card Title" placeholder="Enter title" />
          <TextInput v-model="editingCard.subtitle" label="Subtitle" placeholder="Enter subtitle" />
          <TextInput v-model="editingCard.content" label="Content" placeholder="Enter content" />
          <TextInput v-model="editingCard.icon" label="Icon Name" placeholder="e.g., compass" />
          <TextInput v-model="editingCard.image" label="Image URL" placeholder="Enter image URL" />
          <TextInput v-model="editingCard.color" label="Card Color" placeholder="e.g., #3b82f6" />
          <TextInput v-model="editingCard.cta?.label" label="CTA Label" placeholder="e.g., Learn More" />
          <SelectInput 
            v-model="editingCard.cta?.color" 
            :options="AllColors.map(color => ({ label: color, value: color }))"
            label="CTA Color"
          />
          <TextInput v-model="editingCard.cta?.link" label="CTA Link" placeholder="Enter link URL" />
        </div>
        <div class="form-actions">
          <Button @click="updateCard(editingCard.id, editingCard)" color="primary">Update Card</Button>
          <Button variant="ghost" @click="editingCard = null">Cancel</Button>
        </div>
      </Card>
    </div>

    <!-- Live Preview -->
    <div class="preview-container">
      <h2>Live Preview</h2>
      <div class="preview-area">
        <CardSection 
          :title="settings.title"
          :description="settings.description"
          :cards="cards"
          :columns="settings.columns"
          :padding="settings.padding"
          :container-size="settings.containerSize"
          :section-color="settings.sectionColor"
          :container-color="settings.containerColor"
          :label="settings.label"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-page {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  min-height: 100vh;
  padding: 2rem;
}

.controls-panel {
  position: sticky;
  top: 2rem;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

.control-group {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}

.control-group:last-child {
  border-bottom: none;
}

.control-group h3 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-heading);
}

.control-row {
  margin-bottom: 1rem;
}

.cards-list {
  margin-bottom: 1rem;
  max-height: 200px;
  overflow-y: auto;
}

.card-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: var(--color-surface);
  border-radius: 4px;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-id {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.card-actions {
  display: flex;
  gap: 0.25rem;
}

.form-panel {
  margin-top: 1rem;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-actions {
  display: flex;
  gap: 0.5rem;
}

.preview-container h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-heading);
}

.preview-area {
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 2rem;
  background: var(--color-background);
}

@media (max-width: 1024px) {
  .demo-page {
    grid-template-columns: 1fr;
  }
  
  .controls-panel {
    position: static;
    max-height: none;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
}
</style>