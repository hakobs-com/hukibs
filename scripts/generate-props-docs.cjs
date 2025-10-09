#!/usr/bin/env node
/**
 * Generate Props sections in component READMEs from TypeScript model files.
 * - Scans src/components for *.model.ts files
 * - Extracts exported interfaces ending with `Props`
 * - Updates corresponding README.md by replacing content under `## Props` until next heading
 * - Skips README if no props found for its models to avoid wiping manual docs
 */

const fs = require('fs')
const path = require('path')

const ROOT = process.cwd()
const SRC = path.join(ROOT, 'src', 'components')

/** Read file safe */
function read(file) {
  try { return fs.readFileSync(file, 'utf8') } catch { return null }
}

/** Write file safe */
function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, content, 'utf8')
}

/**
 * Extract exported interfaces named *Props with fields and jsdoc
 */
function extractPropsFromModel(content) {
  const interfaces = []
  // Roughly match: export interface NameProps { ... }
  const ifaceRegex = /export\s+interface\s+(\w+Props)\s*\{([\s\S]*?)\n\}/g
  let m
  while ((m = ifaceRegex.exec(content))) {
    const name = m[1]
    const body = m[2]
    // Split by lines and accumulate jsdoc + field
    const lines = body.split(/\n/)
    const props = []
    let pendingDoc = []
    for (let raw of lines) {
      const line = raw.trim()
      if (!line) continue
      // JSDoc start or line
      const jsMatch = line.match(/^\/\*\*?(.*)/) || line.match(/^\*\s?(.*)/)
      if (jsMatch) {
        const text = jsMatch[1]
        if (text != null) pendingDoc.push(text.replace(/\*\//, '').trim())
        continue
      }
      // Field: name?: type; or name: type;
      const fieldMatch = line.match(/^(\w+)\??\s*:\s*([^;]+);/)
      if (fieldMatch) {
        const propName = fieldMatch[1]
        const isOptional = /\?/.test(raw)
        const type = fieldMatch[2].trim()
        const doc = pendingDoc.join(' ').replace(/\s+/g, ' ').trim()
        // Extract @default from doc if present
        let def
        const defMatch = doc.match(/@default\s+([^\s][^@]*)/)
        if (defMatch) def = defMatch[1].trim()
        props.push({ name: propName, optional: isOptional, type, doc, default: def })
        pendingDoc = []
      }
    }
    interfaces.push({ name, props })
  }
  return interfaces
}

/** Update README Props section */
function updateReadme(readmePath, interfaces) {
  const original = read(readmePath)
  if (!original) return false
  if (!/##\s+Props/.test(original)) return false

  // Build generated content
  const blocks = []
  for (const iface of interfaces) {
    if (!iface.props || iface.props.length === 0) continue
    blocks.push(`${iface.name}:`)
    for (const p of iface.props) {
      const optional = p.optional ? 'optional' : 'required'
      const def = p.default ? `, default: ${p.default}` : ''
      const doc = p.doc ? ` — ${p.doc}` : ''
      blocks.push(`- ${p.name}: \`${p.type}\` (${optional}${def})${doc}`)
    }
    blocks.push('')
  }
  const generated = blocks.join('\n').trim()
  if (!generated) return false

  // Replace between `## Props` and next `## ` or EOF
  const lines = original.split('\n')
  const startIdx = lines.findIndex(l => /^##\s+Props/.test(l))
  if (startIdx === -1) return false
  let endIdx = lines.length
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) { endIdx = i; break }
  }

  const newLines = [
    ...lines.slice(0, startIdx + 1),
    '',
    generated,
    ...lines.slice(endIdx)
  ]
  write(readmePath, newLines.join('\n'))
  return true
}

/** Walk component folders */
function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else yield full
  }
}

const byDir = new Map()
for (const file of walk(SRC)) {
  if (!file.endsWith('.model.ts')) continue
  const content = read(file)
  if (!content) continue
  const interfaces = extractPropsFromModel(content)
  if (!interfaces.length) continue
  const dir = path.dirname(file)
  const arr = byDir.get(dir) || []
  arr.push(...interfaces)
  byDir.set(dir, arr)
}

let updated = 0
for (const [dir, interfaces] of byDir.entries()) {
  // Prefer README.md in the same folder; if none, skip
  const readmePath = path.join(dir, 'README.md')
  if (!fs.existsSync(readmePath)) continue
  if (updateReadme(readmePath, interfaces)) {
    updated++
    console.log('Updated Props in', path.relative(ROOT, readmePath))
  }
}

console.log(`Done. Updated ${updated} README(s).`)

