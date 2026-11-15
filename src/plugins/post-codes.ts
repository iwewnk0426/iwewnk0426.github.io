/**
 * Yeezy-style post codes. Add a category here to assign its two-letter prefix.
 * Unlisted categories use the first two Latin letters of the name, or XX.
 */
export const categoryCodeStems = {
  微积分: 'CA',
  力学: 'ME',
  函数: 'FN',
  音乐: 'MU',
  杂谈: 'MS'
} as const

export function categoryPrefix(category: string | undefined): string {
  if (category && category in categoryCodeStems) {
    return categoryCodeStems[category as keyof typeof categoryCodeStems].slice(0, 2).toUpperCase()
  }
  const letters = (category ?? '')
    .normalize('NFKD')
    .replace(/[^A-Za-z]/g, '')
    .toUpperCase()
  if (letters.length >= 2) return letters.slice(0, 2)
  if (letters.length === 1) return `${letters}X`
  return 'XX'
}

type CodePost = {
  id: string
  data: { category?: string; publishDate: Date }
}

/** Oldest post in each category is 01. Ties break by id. */
export function assignPostCodes(posts: CodePost[]): Map<string, string> {
  const groups = new Map<string, CodePost[]>()
  for (const post of posts) {
    const key = post.data.category ?? ''
    const list = groups.get(key) ?? []
    list.push(post)
    groups.set(key, list)
  }

  const codes = new Map<string, string>()
  for (const [category, list] of groups) {
    const prefix = categoryPrefix(category || undefined)
    list.sort((a, b) => {
      const delta = a.data.publishDate.getTime() - b.data.publishDate.getTime()
      if (delta !== 0) return delta
      return a.id < b.id ? -1 : a.id > b.id ? 1 : 0
    })
    list.forEach((post, index) => {
      codes.set(post.id, `${prefix}-${String(index + 1).padStart(2, '0')}`)
    })
  }
  return codes
}
