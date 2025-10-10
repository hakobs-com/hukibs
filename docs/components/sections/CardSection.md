# CardSection

A versatile section component for displaying a grid of cards with optional header, footer, and various card content types including images, icons, titles, descriptions, and CTAs.

## Import

```ts
import { CardSection } from '@sil/ui'
import '@sil/ui/style.css'
```

## Usage

### Basic Card Grid

<Example>
  <CardSection 
    title="Our Services"
    description="We offer a wide range of services to help your business grow."
    :cards="[
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
    ]"
    :columns="3"
  />
</Example>

```vue
<script setup>
const cards = [
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
  }
]
</script>

<template>
  <CardSection 
    title="Our Services"
    description="We offer a wide range of services to help your business grow."
    :cards="cards"
  />
</template>
```

### With Images

<Example>
  <CardSection 
    title="Featured Projects"
    description="Check out some of our recent work."
    :cards="[
      {
        id: '1',
        image: 'https://via.placeholder.com/300x200/e1f5fe/01579b?text=Project+1',
        title: 'E-commerce Platform',
        subtitle: 'Web Development',
        content: 'A modern e-commerce solution with advanced features and seamless user experience.',
        cta: { label: 'View Project', link: '#' }
      },
      {
        id: '2',
        image: 'https://via.placeholder.com/300x200/e8f5e8/2e7d32?text=Project+2',
        title: 'Mobile App',
        subtitle: 'iOS & Android',
        content: 'Cross-platform mobile application with real-time synchronization and offline support.',
        cta: { label: 'View Project', link: '#' }
      }
    ]"
    :columns="2"
    container-color="var(--color-surface)"
  />
</Example>

### With Custom Footer

<Example>
  <CardSection 
    title="Pricing Plans"
    description="Choose the perfect plan for your needs."
    :cards="[
      {
        id: '1',
        title: 'Starter',
        subtitle: '$9/month',
        content: 'Perfect for small projects and getting started.',
        cta: { label: 'Get Started', color: 'primary' }
      },
      {
        id: '2',
        title: 'Professional',
        subtitle: '$29/month',
        content: 'Advanced features for growing businesses.',
        cta: { label: 'Get Started', color: 'success' }
      },
      {
        id: '3',
        title: 'Enterprise',
        subtitle: 'Custom pricing',
        content: 'Tailored solutions for large organizations.',
        cta: { label: 'Contact Sales', color: 'warning' }
      }
    ]"
    :columns="3"
  >
    <template #footer>
      <p>All plans include 30-day money-back guarantee and 24/7 support.</p>
      <Button href="#" variant="outline">Compare All Features</Button>
    </template>
  </CardSection>
</Example>

```vue
<CardSection 
  title="Pricing Plans"
  description="Choose the perfect plan for your needs."
  :cards="cards"
>
  <template #footer>
    <p>All plans include 30-day money-back guarantee.</p>
    <Button href="#" variant="outline">Compare Features</Button>
  </template>
</CardSection>
```

### With Custom Styling

```vue
<CardSection 
  title="Team Members"
  description="Meet our talented team of professionals."
  label="Team"
  section-color="color-mix(in srgb, var(--color-primary), transparent 95%)"
  container-color="var(--color-background)"
  :cards="[
    {
      id: '1',
      image: '/team/member1.jpg',
      title: 'John Doe',
      subtitle: 'CEO & Founder',
      content: 'Visionary leader with 15+ years of experience in technology.',
      color: '#3b82f6'
    }
  ]"
  :columns="4"
/>
```

## Props

CardSectionProps extends BaseSectionProps:
- title: `string` (optional) — Section title displayed above cards
- description: `string` (optional) — Section description displayed below title
- cards: `CardItem[]` (required) — Array of card objects to display
- columns: `number` (optional) — Number of columns in grid, defaults to `3`

CardItem:
- id: `string` (required) — Unique identifier for the card
- title: `string` (optional) — Card title
- subtitle: `string` (optional) — Card subtitle (displayed below title)
- content: `string` (optional) — Card main content/description
- cta: `object` (optional) — Call-to-action button configuration
  - label: `string` — Button text
  - color: `string` (optional) — Button color theme
  - link: `string` (optional) — Button URL/destination
- image: `string` (optional) — Image URL for card header
- icon: `string` (optional) — Icon name for card header
- color: `string` (optional) — Theme color for card accents

## Slots

- footer: `slot` — Content displayed below the card grid

## Styling

- Responsive grid automatically adjusts columns for tablet (2) and mobile (1)
- Cards have hover effects with elevation and subtle animations
- Customizable colors using CSS variables
- Consistent spacing and typography following design system