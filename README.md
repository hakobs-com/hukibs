# Hukibs

[![Deploy](https://github.com/hakobs-com/hukibs/actions/workflows/deploy.yml/badge.svg)](https://github.com/hakobs-com/hukibs/actions/workflows/deploy.yml)

A modern, lightweight Vue 3 component library monorepo focused on developer experience and design consistency.

## 🚀 Live Links

- **Documentation**: https://ui.hakobs.com/docs/
- **Live Demo**: https://ui.hakobs.com/demo/
- **Homepage**: https://ui.hakobs.com/

## 📁 Monorepo Structure

```
hukibs/
├── apps/
│   ├── demo/          # Live demo application (https://ui.hakobs.com/demo/)
│   └── docs/          # VitePress documentation (https://ui.hakobs.com/docs/)
├── libs/
│   └── hukibs/        # Main library package (published to npm)
├── .github/
│   └── workflows/     # GitHub Actions for automatic deployment
├── pnpm-workspace.yaml
└── index.html         # Simple homepage (https://ui.hakobs.com/)
```

## 🎯 Design Principles

- **Consistent API**: All components follow the same patterns and naming conventions
- **Semantic Naming**: Component names clearly describe their purpose  
- **Composable Architecture**: Leverage Vue 3's composition API for maximum flexibility
- **No Bloat**: Only export what's needed, keep base components internal
- **TypeScript First**: Full TypeScript support with proper type definitions

## 📁 Component Organization

### Components Overview

- Button: versatile action button with variants and icons — see `src/components/ui/Button/README.md`
- ButtonGroup: layout for multiple buttons — see `src/components/ui/Button/README.md`
- Icon: display vector icons — see `src/components/ui/Icon/README.md`
- Card: flexible content container — see `src/components/ui/Card/README.md`
- Container: responsive layout wrapper — see `src/components/ui/Container/README.md`
- Badge: small status label — see `src/components/ui/Badge/README.md`
- ContextMenu: contextual actions — see `src/components/ui/ContextMenu/README.md`
- Tabs, Tab, TabPanel: tabbed navigation — see `src/components/ui/Tabs/README.md`
- CircularProgress: circular loader — see `src/components/ui/CircularProgress/README.md`
- StatsCard: statistic card — see `src/components/ui/StatsCard/README.md`
- OptionItem: menu/list option item — see `src/components/ui/OptionItem/README.md`
- Table (UI): table building blocks — see `src/components/ui/Table/README.md`
- Progress: linear progress bar — see `src/components/ui/Progress.README.md`
- ThemeToggle: theme switcher — see `src/components/ui/ThemeToggle.README.md`
- TextInput: standard text field — see `src/components/forms/TextInput/README.md`
- SearchInput: search field with clear — see `src/components/forms/SearchInput/README.md`
- SelectInput: select input — see `src/components/forms/SelectInput/README.md`
- TInputTextArea: multi-line input — see `src/components/forms/TInputTextArea/README.md`
- Section: page section wrapper — see `src/components/layout/Section/README.md`
- PageHeader: page header — see `src/components/layout/PageHeader/README.md`
- AppHeader: app header — see `src/components/layout/AppHeader/README.md`
- AppSidebar: app sidebar — see `src/components/layout/AppSidebar/README.md`
- SettingsLayout: settings layout — see `src/components/layout/SettingsLayout/README.md`
- Table (Layout): feature table layout — see `src/components/layout/Table/README.md`
- Popup and popupService: modal dialogs — see `src/components/feedback/Popup/README.md`
- Toast and toastService: notifications — see `src/components/feedback/Toast/README.md`
- Tooltip: hint popovers — see `src/components/feedback/Tooltip/README.md`
- Alert: status messages — see `src/components/feedback/Alert/README.md`
- EmptyState: placeholder cards — see `src/components/feedback/EmptyState/README.md`

### UI Components (`/src/components/ui/`)
Core interface elements for building layouts and displays:

- **Button** / **ButtonGroup** - Interactive buttons and button collections
- **Icon** - Icon display with open-icon integration  
- **Card** - Flexible content containers with mouse interaction effects
- **Container** - Layout containers with responsive sizing
- **Badge** - Status indicators and labels

### Form Components (`/src/components/forms/`)
Input components with unified naming and API:

- **TextInput** - Standard text input field
- **SearchInput** - Search input with built-in search icon and clear functionality
- **BaseInput** *(internal)* - Foundation component, not exported

### Feedback Components (`/src/components/feedback/`)
Components for user feedback and notifications (see overview links above).

### Layout Components (`/src/components/layout/`)
Components for structuring page layouts (see overview links above).

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm 8+

### Install dependencies
```bash
pnpm install
```

### Development mode
```bash
# Start demo (with real-time settings panel)
pnpm dev

# Start docs  
pnpm --filter docs dev

# Start library development
pnpm --filter hukibs dev
```

### Build
```bash
# Build all packages
pnpm build

# Build individual packages
pnpm build:lib    # Build library for npm publishing
pnpm build:docs   # Build documentation for GitHub Pages
pnpm build:demo   # Build demo for GitHub Pages
```

### Other scripts
```bash
pnpm typecheck    # Type check all packages
pnpm lint         # Lint all packages  
pnpm test         # Run tests
pnpm clean        # Clean build artifacts
```

## 🚀 Installation

```bash
npm install hukibs
# or
pnpm add hukibs
# or
yarn add hukibs
```

## 📖 Usage

### Setup

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import 'hukibs/style.css' // Import Hukibs styles

const app = createApp(App)
app.mount('#app')
```

### Using SCSS Mixins

If you want to use Hukibs' SCSS mixins and customize theming:

```scss
// In your app's main SCSS file
@use "hukibs/style.scss" as hukibs;

// Use the mixins
@include silui.app();
@include silui.reset();
@include silui.typography();
@include silui.fonts();

// Override CSS variables
:root {
  --color-primary: #007bff;
  --container-padding: 1.5rem;
}
```

### Basic Usage

```vue
<template>
  <Container max="medium">
    <Card title="Search Products" hoverable>
      <SearchInput 
        v-model="searchQuery" 
        placeholder="Search products..."
        @change="handleSearch"
      />
      
      <Button variant="primary" @click="performSearch">
        <Icon name="search" />
        Search
      </Button>
    </Card>
  </Container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Container, Card, SearchInput, Button, Icon } from 'hukibs'
import 'hukibs/style.css' // Import the styles

const searchQuery = ref('')

const handleSearch = (event: Event) => {
  console.log('Search query:', searchQuery.value)
}

const performSearch = () => {
  // Perform search logic
}
</script>
```

### Component Examples

#### Container Sizes
```vue
<!-- Predefined sizes -->
<Container max="small">Small container (600px)</Container>
<Container max="medium">Medium container (900px)</Container>
<Container max="large">Large container (1200px)</Container>
<Container max="wide">Wide container (1400px)</Container>

<!-- Custom size -->
<Container max-width="800px">Custom width container</Container>

<!-- Fluid (full width) -->
<Container fluid>Full width container</Container>
```

#### Card Variants
```vue
<!-- Basic card -->
<Card title="Basic Card">
  Content goes here
</Card>

<!-- Hoverable card with color theme -->
<Card color="primary" hoverable>
  Interactive card with primary color theme
</Card>

<!-- Elevated card -->
<Card variant="elevated">
  Card with shadow elevation
</Card>
```

#### Form Inputs
```vue
<!-- Search input with clear functionality -->
<SearchInput 
  v-model="query"
  placeholder="Search anything..."
  :clearable="true"
/>

<!-- Text input with validation -->
<TextInput
  v-model="name"
  label="Full Name"
  placeholder="Enter your name"
  :required="true"
  :error="nameError"
/>
```

#### Buttons and Badges
```vue
<!-- Button variants -->
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Subtle Action</Button>

<!-- Buttons with icons -->
<Button variant="primary">
  <Icon name="plus" />
  Add Item
</Button>

<!-- Status badges -->
<Badge color="success">Active</Badge>
<Badge color="warning" variant="outline">Pending</Badge>
<Badge color="error">Failed</Badge>
```

## 🎨 Theming

Hukibs uses CSS custom properties for theming. Override these variables to customize the appearance:

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #6b7280;
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-s: 0.5rem;
  --space-m: 1rem;
  --space-l: 2rem;
  --space-xl: 4rem;
  
  /* Typography */
  --font-size-xs: 0.75rem;
  --font-size-s: 0.875rem;
  --font-size-m: 1rem;
  --font-size-l: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-xxl: 2rem;
  
  /* Other theme variables... */
}
```

## 🔧 Development

### Component Naming Conventions

1. **UI Components**: Semantic names (Button, Card, Container)
2. **Form Components**: Always end with "Input" (TextInput, SearchInput)
3. **Layout Components**: Descriptive names (Table, PageHeader)
4. **No Prefixes**: Clean, semantic naming without "T" or other prefixes

### API Consistency

All components follow these patterns:

- **size** prop: `small | medium | large`
- **variant** prop: Component-specific variants
- **color** prop: Theme color names where applicable
- **disabled** prop: Consistent disabled state
- **Events**: Standard events (`@input`, `@change`, `@focus`, `@blur`)

### Internal vs External

- **BaseInput**: Internal foundation component, provides common input functionality
- **TextInput/SearchInput**: Public components that extend BaseInput
- **Export Strategy**: Only export components meant for public consumption

## 🚧 Roadmap

### Phase 1: Core UI ✅
- [x] Button & ButtonGroup
- [x] Icon 
- [x] Card
- [x] Container
- [x] Badge

### Phase 2: Forms 🔄
- [x] BaseInput (internal)
- [x] TextInput
- [x] SearchInput
- [ ] NumberInput
- [ ] SelectInput
- [ ] CheckboxInput
- [ ] RadioInput
- [ ] ToggleInput

### Phase 3: Feedback ✅
- [x] Popup & PopupService
- [x] Toast & ToastService
- [x] Tooltip
- [x] Alert
- [x] EmptyState

### Phase 4: Layout ✅
- [x] Table, TableRow, TableCell
- [x] PageHeader
- [x] ContextMenu
- [x] Tabs, Tab, TabPanel
- [x] AppSidebar
- [x] AppHeader
- [x] SettingsLayout

### Phase 5: Migration
- [ ] Update all @skumize/ui imports to Hukibs
- [ ] Remove @skumize/ui dependency
- [ ] Comprehensive documentation
- [ ] Storybook examples

## 📄 License

MIT License - see LICENSE file for details.
