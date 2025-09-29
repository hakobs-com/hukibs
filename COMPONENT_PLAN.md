# SilUI Component Organization Plan

## Current Usage Analysis (from @skumize/ui)
- **Most Used**: Icon (35), Button (26), Container (17), Card (15)
- **Medium Used**: Section (7), Colors (7), Badge (6), popupService (5)
- **Low Used**: Various form inputs, Table components, feedback components

## Proposed SilUI Structure

### 1. Core UI Components (`/src/components/ui/`)
- **Button** ✅ (already migrated)
  - Button.vue
  - ButtonGroup.vue
- **Icon** ✅ (already migrated)
  - Icon.vue
- **Card** (high priority)
  - Card.vue
- **Container** (high priority)
  - Container.vue
- **Badge** (medium priority)
  - Badge.vue
- **Section**
  - Section.vue
- **Avatar**
  - Avatar.vue

### 2. Form Components (`/src/components/forms/`)
- **Input** (base component - internal only)
  - BaseInput.vue
- **TextInput**
  - TextInput.vue
- **SearchInput**
  - SearchInput.vue
- **NumberInput**
  - NumberInput.vue
- **TextAreaInput**
  - TextAreaInput.vue
- **SelectInput**
  - SelectInput.vue
- **CheckboxInput**
  - CheckboxInput.vue
- **RadioInput**
  - RadioInput.vue
- **ToggleInput**
  - ToggleInput.vue
- **ColorPicker**
  - ColorPicker.vue

### 3. Feedback Components (`/src/components/feedback/`)
- **Popup**
  - Popup.vue
  - PopupService.ts
- **Toast**
  - Toast.vue
  - ToastService.ts
- **Tooltip**
  - Tooltip.vue
- **Alert**
  - Alert.vue
- **EmptyState**
  - EmptyState.vue

### 4. Layout Components (`/src/components/layout/`)
- **Table**
  - Table.vue
  - TableRow.vue
  - TableCell.vue
- **PageHeader**
  - PageHeader.vue
- **ContextMenu**
  - ContextMenu.vue
- **Tabs**
  - Tabs.vue
  - Tab.vue
  - TabPanel.vue

### 5. Specialized Components (`/src/components/specialized/`)
- **PricingGrid**
  - PricingGrid.vue
- **ThemeToggle**
  - ThemeToggle.vue

## Naming Conventions
1. **Consistent naming**: All components use PascalCase
2. **Form inputs**: Always end with "Input" (TextInput, SearchInput, etc.)
3. **No "T" prefix**: Remove legacy "T" prefix from form components
4. **Semantic naming**: Names should be clear and semantic

## Component APIs
1. **Consistent props**: size, variant, disabled, loading where applicable
2. **Standard events**: @input, @change, @focus, @blur for form components
3. **Unified styling**: All components use same color system and sizing
4. **Composables**: Extract common logic to composables

## Migration Priority
1. **Phase 1**: Core UI (Button✅, Icon✅, Card, Container, Badge)
2. **Phase 2**: Forms (TextInput, SearchInput, SelectInput)
3. **Phase 3**: Feedback (Popup, Toast, Alert)
4. **Phase 4**: Layout (Table, PageHeader, ContextMenu)
5. **Phase 5**: Specialized components