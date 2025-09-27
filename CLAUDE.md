# VanUI

VanUI is a modern, lightweight, and customizable design system built with Vue 3 and TypeScript. It provides a comprehensive set of UI components and utilities designed for building responsive and accessible web applications.

## Repository
- **GitHub**: https://github.com/silvandiepen/vanui
- **NPM**: @yourusername/vanui

## Architecture

### Component Structure
Each component follows a consistent structure:
- `ComponentName.vue` - Main Vue component file
- `ComponentName.model.ts` - TypeScript interfaces and types
- `index.ts` - Export file

### Component Categories
1. **UI Components** - Basic building blocks (Button, Badge, Card, etc.)
2. **Form Components** - Input elements (TextInput, SelectInput, SearchInput, etc.)
3. **Layout Components** - Page structure (AppHeader, AppSidebar, Section, etc.)
4. **Feedback Components** - User feedback (Alert, Toast, Tooltip, Popup, etc.)
5. **Specialized Components** - Domain-specific components

### Key Features
- Vue 3 Composition API
- TypeScript support
- SCSS styling with CSS custom properties
- Accessible components following ARIA guidelines
- Responsive design
- Theme support (light/dark)
- Internationalization ready

### Development
- Build: `pnpm build`
- Test: `pnpm test`
- Lint: `pnpm lint`
- Type check: `pnpm type-check`

### Publishing
The package automatically publishes to npm when changes are pushed to the main/master branch. Version bumping is determined by commit messages:
- `BREAKING CHANGE` or `major:` → major version
- `feat:` or `minor:` → minor version  
- Default → patch version