# Tabs

Accessible tab system with `Tabs`, `Tab`, and `TabPanel` components.

## Import

```ts
import { Tabs, Tab, TabPanel } from 'hukibs'
import 'hukibs/style.css'
```

## Usage

```vue
<Tabs>
  <Tab id="general" label="General" />
  <Tab id="advanced" label="Advanced" />

  <TabPanel for="general">General content</TabPanel>
  <TabPanel for="advanced">Advanced content</TabPanel>
</Tabs>
```

## Props

- Tab: `id` string, `label` string
- TabPanel: `for` id of the Tab
- Tabs: manages selected tab, emits changes
