import katex from 'katex'

/** ATX headings in source order, skipping fenced code blocks. */
export function markdownHeadingTexts(source: string): string[] {
  const headings: string[] = []
  let fence: string | null = null

  for (const line of source.split('\n')) {
    const trimmed = line.trim()
    const fenceMatch = /^(```+|~~~+)/.exec(trimmed)
    if (fenceMatch) {
      const marker = fenceMatch[1][0]
      if (!fence) fence = marker
      else if (trimmed.startsWith(fence)) fence = null
      continue
    }
    if (fence) continue

    const heading = /^(#{1,6})[ \t]+(.+?)[ \t]*$/.exec(line)
    if (heading) headings.push(heading[2].replace(/\s+#+\s*$/, ''))
  }

  return headings
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

/** Render `$...$` / `$$...$$` in a markdown heading with KaTeX. Non-math text is escaped. */
export function renderHeadingLabel(raw: string): string {
  const text = raw.trim().replace(/\s+#+\s*$/, '')
  const pattern = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g
  let html = ''
  let last = 0

  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0
    html += escapeHtml(text.slice(last, index))
    const tex = (match[1] ?? match[2]).trim()
    try {
      html += katex.renderToString(tex, {
        throwOnError: true,
        displayMode: match[1] != null,
        output: 'html'
      })
    } catch {
      html += escapeHtml(tex)
    }
    last = index + match[0].length
  }

  html += escapeHtml(text.slice(last))
  return html
}

/**
 * HTML labels aligned with Astro's heading list.
 * Returns undefined when the source heading count does not match, so the TOC can fall back.
 */
export function headingLabels(source: string | undefined, count: number): string[] | undefined {
  if (!source) return
  const texts = markdownHeadingTexts(source)
  if (texts.length !== count) return
  return texts.map(renderHeadingLabel)
}
