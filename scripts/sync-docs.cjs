#!/usr/bin/env node
// Sync component READMEs into VitePress docs structure so routes resolve.
// Source patterns: src/components/(...)/README.md and src/components/(...)/<Name>.README.md
// Destination: docs/components/<category>/<Name>.md
// Categories: ui, forms, layout, feedback, specialized
const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src', 'components')
const DEST_ROOT = path.join(ROOT, 'docs', 'components')

function read(file) { try { return fs.readFileSync(file, 'utf8') } catch { return null } }
function write(file, content) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, content, 'utf8') }

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

let count = 0
for (const file of walk(SRC)) {
  if (!(file.endsWith('README.md') || /\.README\.md$/.test(file))) continue
  const rel = path.relative(SRC, file) // e.g. ui/Button/README.md or ui/ThemeToggle.README.md
  const [category, ...rest] = rel.split(path.sep)
  if (!category) continue
  const base = rest.join('/')

  let name
  if (/\.README\.md$/.test(base)) {
    name = path.basename(base).replace(/\.README\.md$/, '')
  } else if (base.endsWith('README.md')) {
    // parent folder name is the component name
    const parentDir = path.basename(path.dirname(file))
    name = parentDir
  } else {
    continue
  }

  const srcContent = read(file)
  if (!srcContent) continue

  // Ensure title at top; if not present, add one
  let content = srcContent
  if (!/^#\s+/.test(srcContent)) {
    content = `# ${name}\n\n` + srcContent
  }

  const dest = path.join(DEST_ROOT, category, `${name}.md`)
  write(dest, content)
  count++
  console.log('Synced', path.relative(ROOT, dest))
}

console.log(`Done. Synced ${count} component docs.`)
