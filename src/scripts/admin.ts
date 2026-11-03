// Client-side publishing against the GitHub Contents API.
// The token stays in localStorage and is only sent to api.github.com.

const OWNER = 'iwewnk0426'
const REPO = 'iwewnk0426.github.io'
const BRANCH = 'main'
const API = 'https://api.github.com'
const SITE = 'https://iwewnk0426.github.io'
const TOKEN_KEY = 'knox-admin-token'
const BLOG_DIR = 'src/content/blog'

type Fields = {
  title: string
  description: string
  publishDate: string
  body: string
}

export type ParsedPost = Fields & { draft: boolean }

type Parts = {
  bom: string
  newline: '\n' | '\r\n'
  open: string
  fm: string
  close: string
  body: string
}

export function bytesToBase64(bytes: Uint8Array): string {
  let binary = ''
  const size = 0x8000
  for (let i = 0; i < bytes.length; i += size) {
    binary += String.fromCharCode(...bytes.subarray(i, i + size))
  }
  return btoa(binary)
}

export function base64ToBytes(b64: string): Uint8Array {
  const clean = b64.replace(/\s/g, '')
  if (!clean) return new Uint8Array()
  const binary = atob(clean)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

export function utf8ToBase64(text: string): string {
  return bytesToBase64(new TextEncoder().encode(text))
}

export function base64ToUtf8(b64: string): string {
  return new TextDecoder('utf-8', { fatal: true }).decode(base64ToBytes(b64))
}

function firstNewline(text: string): '\n' | '\r\n' | null {
  const index = text.indexOf('\n')
  if (index === -1) return null
  return index > 0 && text[index - 1] === '\r' ? '\r\n' : '\n'
}

function splitFrontmatter(raw: string): Parts | null {
  const bom = raw.charCodeAt(0) === 0xfeff ? '\uFEFF' : ''
  const text = bom ? raw.slice(1) : raw
  const newline = firstNewline(text)
  if (!newline || !text.startsWith(`---${newline}`)) return null
  const open = `---${newline}`
  let pos = open.length
  while (pos <= text.length) {
    const next = text.indexOf(newline, pos)
    const lineEnd = next === -1 ? text.length : next
    if (text.slice(pos, lineEnd) === '---') {
      return {
        bom,
        newline,
        open,
        fm: text.slice(open.length, pos),
        close: `---${next === -1 ? '' : newline}`,
        body: next === -1 ? '' : text.slice(next + newline.length)
      }
    }
    if (next === -1) return null
    pos = next + newline.length
  }
  return null
}

function parseScalar(raw: string): string {
  const value = raw.trim()
  if (value.startsWith('"')) {
    let out = ''
    for (let i = 1; i < value.length; i++) {
      const char = value[i]
      if (char === '\\') {
        const next = value[++i]
        if (next === 'n') out += '\n'
        else if (next === 'r') out += '\r'
        else if (next === 't') out += '\t'
        else if (next === undefined) out += '\\'
        else out += next
        continue
      }
      if (char === '"') return out
      out += char
    }
    return out
  }
  if (value.startsWith("'")) {
    let out = ''
    for (let i = 1; i < value.length; i++) {
      if (value[i] === "'" && value[i + 1] === "'") {
        out += "'"
        i++
        continue
      }
      if (value[i] === "'") return out
      out += value[i]
    }
    return out
  }
  const comment = value.search(/(^|\s)#/)
  return (comment === -1 ? value : value.slice(0, comment)).trim()
}

function linesOf(fm: string, nl: string): { lines: string[]; trailing: boolean } {
  const trailing = fm.endsWith(nl)
  const lines = fm.split(nl)
  if (trailing) lines.pop()
  return { lines, trailing }
}

function fieldIndex(lines: string[], key: string): number {
  const pattern = new RegExp(`^${key}[ \\t]*:`)
  return lines.findIndex((line) => pattern.test(line))
}

function readKey(fm: string, key: string, nl: string): string {
  const { lines } = linesOf(fm, nl)
  const index = fieldIndex(lines, key)
  if (index === -1) return ''
  const raw = lines[index].replace(new RegExp(`^${key}[ \\t]*:[ \\t]*`), '')
  const marker = raw.trim()
  if (!/^[|>][+-]?$/.test(marker)) return parseScalar(raw)
  const collected: string[] = []
  for (let i = index + 1; i < lines.length; i++) {
    if (lines[i] !== '' && !/^[ \t]/.test(lines[i])) break
    collected.push(lines[i])
  }
  const indents = collected
    .filter((line) => line.trim() !== '')
    .map((line) => /^[ \t]*/.exec(line)?.[0].length ?? 0)
  const min = indents.length ? Math.min(...indents) : 0
  return collected
    .map((line) => (line.trim() === '' ? '' : line.slice(min)))
    .join('\n')
    .replace(/\s+$/, '')
}

export function formatScalar(value: string): string {
  if (value === '') return '""'
  const reserved = /^(true|false|yes|no|null|on|off|~)$/i.test(value)
  const plain =
    !reserved &&
    !/^[\s\-?:]/.test(value) &&
    !/\s$/.test(value) &&
    !/[\n\r:#&*!|>'"%@`{}[\],\\?]/.test(value)
  if (plain) return value
  return `"${value
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')}"`
}

function setField(fm: string, key: string, value: string, nl: string): string {
  const { lines } = linesOf(fm, nl)
  const written =
    key === 'publishDate' && /^\d{4}-\d{2}-\d{2}$/.test(value) ? value : formatScalar(value)
  const line = `${key}: ${written}`
  const index = fieldIndex(lines, key)
  if (index === -1) lines.push(line)
  else {
    let end = index + 1
    while (end < lines.length && /^[ \t]/.test(lines[end])) end++
    lines.splice(index, end - index, line)
  }
  return `${lines.join(nl)}${nl}`
}

export function parsePost(raw: string): ParsedPost | null {
  const parts = splitFrontmatter(raw)
  if (!parts) return null
  return {
    title: readKey(parts.fm, 'title', parts.newline),
    description: readKey(parts.fm, 'description', parts.newline),
    publishDate: readKey(parts.fm, 'publishDate', parts.newline),
    body: parts.body,
    draft: readKey(parts.fm, 'draft', parts.newline) === 'true'
  }
}

export function serializePost(raw: string, next: Fields): string {
  const parts = splitFrontmatter(raw)
  if (!parts) throw new Error('这个文件没有 frontmatter')
  const current = parsePost(raw)
  if (!current) throw new Error('这个文件没有 frontmatter')
  if (
    current.title === next.title &&
    current.description === next.description &&
    current.publishDate === next.publishDate &&
    parts.body === next.body
  ) {
    return raw
  }
  let fm = parts.fm
  if (current.title !== next.title) fm = setField(fm, 'title', next.title, parts.newline)
  if (current.description !== next.description)
    fm = setField(fm, 'description', next.description, parts.newline)
  if (current.publishDate !== next.publishDate)
    fm = setField(fm, 'publishDate', next.publishDate, parts.newline)
  return parts.bom + parts.open + fm + parts.close + next.body
}

export function createPost(input: Fields): string {
  const nl = '\n'
  let body = input.body.replace(/\r\n/g, '\n')
  if (body.length > 0 && !body.endsWith(nl)) body += nl
  const fm = [
    `title: ${formatScalar(input.title)}`,
    `description: ${formatScalar(input.description)}`,
    `publishDate: ${input.publishDate}`
  ].join(nl)
  return `---${nl}${fm}${nl}---${nl}${body.startsWith(nl) ? body : nl + body}`
}

export function editorBody(originalBody: string): string {
  if (originalBody.startsWith('\r\n')) return originalBody.slice(2)
  if (originalBody.startsWith('\n')) return originalBody.slice(1)
  return originalBody
}

export function bodyForSave(originalBody: string, textareaValue: string): string {
  const shown = editorBody(originalBody).replace(/\r\n/g, '\n')
  if (textareaValue.replace(/\r\n/g, '\n') === shown) return originalBody
  const newline = originalBody.includes('\r\n') ? '\r\n' : '\n'
  let next = textareaValue.replace(/\r\n/g, '\n').replace(/\n/g, newline)
  if (
    (originalBody.startsWith('\n') || originalBody.startsWith('\r\n')) &&
    !next.startsWith(newline)
  ) {
    next = newline + next
  }
  return next
}

export function todayShanghai(now = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(now)
  const pick = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? ''
  return `${pick('year')}-${pick('month')}-${pick('day')}`
}

function isRealDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return false
  const year = Number(match[1])
  const month = Number(match[2])
  const day = Number(match[3])
  const date = new Date(Date.UTC(year, month - 1, day))
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  )
}

export function validateFields(input: {
  title: string
  description: string
  publishDate: string
  slug: string | null
}): string | null {
  if (input.title.trim() === '') return '请填写标题。'
  if (/[\r\n]/.test(input.title)) return '标题请写成一行。'
  if (input.title.length > 60) return '标题不能超过 60 个字符。'
  if (input.description.trim() === '') return '请填写简介。'
  if (/[\r\n]/.test(input.description)) return '简介请写成一行。'
  if (input.description.length > 160) return '简介不能超过 160 个字符。'
  if (!isRealDate(input.publishDate)) return '请填写有效日期。'
  if (input.slug === null) return null
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input.slug)) {
    return '文件名只能使用小写字母、数字和连字符，且不能以连字符开头或结尾。'
  }
  if (input.slug.length > 80) return '文件名不能超过 80 个字符。'
  return null
}

export function commitMessage(kind: 'publish' | 'update' | 'delete', title: string): string {
  const clean = title.replace(/[\r\n]+/g, ' ').trim() || 'untitled'
  if (kind === 'publish') return `admin: publish ${clean}`
  if (kind === 'update') return `admin: update ${clean}`
  return `admin: delete ${clean}`
}

export function postUrl(repoPath: string): string {
  const id = repoPath.replace(/^src\/content\/blog\//, '').replace(/\.mdx?$/, '')
  return `${SITE}/blog/${id}`
}

type FetchLike = typeof fetch

function assertApiPath(path: string): void {
  const pathname = path.split('?')[0]
  const allowed =
    pathname === '/user' ||
    pathname === `/repos/${OWNER}/${REPO}` ||
    pathname.startsWith(`/repos/${OWNER}/${REPO}/`)
  if (!allowed) throw new Error('拒绝向 api.github.com 以外的路径发送令牌')
}

function safeDetail(value: string): string {
  const clean = value
    .replace(/github_pat_[A-Za-z0-9_]+/g, '[token]')
    .replace(/ghp_[A-Za-z0-9]+/g, '[token]')
    .replace(/\s+/g, ' ')
    .trim()
  return clean.length > 180 ? `${clean.slice(0, 180)}…` : clean
}

function messageFor(status: number, json: unknown, action: string): string {
  const detail =
    json && typeof json === 'object' && 'message' in json && typeof json.message === 'string'
      ? safeDetail(json.message)
      : ''
  if (status === 401) return '令牌无效或已过期。请重新生成后再粘贴。'
  if (status === 409) {
    return action === '删除'
      ? '删除失败：远程文件已经变了。请返回列表重新打开后再删。'
      : '保存失败：远程文件已经变了，这次没有写入。你改的内容还在，请先复制，再返回列表重新打开后保存。'
  }
  if (status === 403) {
    return `没有权限${action}。请确认 Contents 是 Read and write。${detail ? `（${detail}）` : ''}`
  }
  if (status === 404) return `${action}失败：找不到文件或仓库。`
  if (status === 422 && /sha/i.test(detail)) {
    return '这个文件名已经存在，没有保存，避免覆盖。请换一个文件名。'
  }
  return `${action}失败（HTTP ${status}）${detail ? `：${detail}` : '。'}`
}

type HttpOk = { ok: true; status: number; json: unknown }
type HttpErr = { ok: false; status: number; message: string }

async function request(
  token: string,
  path: string,
  init: { method?: string; json?: unknown; action: string },
  fetchImpl: FetchLike
): Promise<HttpOk | HttpErr> {
  assertApiPath(path)
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token}`,
    'X-GitHub-Api-Version': '2022-11-28'
  }
  let body: string | undefined
  if (init.json !== undefined) {
    headers['Content-Type'] = 'application/json'
    body = JSON.stringify(init.json)
  }
  let response: Response
  try {
    response = await fetchImpl(`${API}${path}`, {
      method: init.method ?? 'GET',
      headers,
      body,
      cache: 'no-store',
      credentials: 'omit'
    })
  } catch {
    return { ok: false, status: 0, message: '连不上 GitHub（api.github.com）。请检查网络后再试。' }
  }
  const text = await response.text()
  let json: unknown = null
  if (text) {
    try {
      json = JSON.parse(text)
    } catch {
      json = null
    }
  }
  if (!response.ok)
    return {
      ok: false,
      status: response.status,
      message: messageFor(response.status, json, init.action)
    }
  return { ok: true, status: response.status, json }
}

function contentsPath(filePath: string): string {
  const encoded = filePath
    .split('/')
    .map((part) => encodeURIComponent(part))
    .join('/')
  return `/repos/${OWNER}/${REPO}/contents/${encoded}`
}

export async function verifyToken(
  token: string,
  fetchImpl: FetchLike = fetch
): Promise<{ ok: true } | { ok: false; message: string }> {
  const trimmed = token.trim()
  if (!trimmed) return { ok: false, message: '请粘贴访问令牌。' }
  const user = await request(trimmed, '/user', { action: '验证令牌' }, fetchImpl)
  if (!user.ok)
    return {
      ok: false,
      message: user.status === 401 ? user.message : `无法验证令牌。${user.message}`
    }
  const login =
    user.json && typeof user.json === 'object' && 'login' in user.json ? user.json.login : undefined
  if (typeof login !== 'string' || login === '') {
    return { ok: false, message: '没有读到 GitHub 用户名，已拒绝。' }
  }
  if (login !== OWNER)
    return { ok: false, message: `这个令牌属于「${login}」，不是 ${OWNER}，已拒绝。` }
  const repo = await request(trimmed, `/repos/${OWNER}/${REPO}`, { action: '读取仓库' }, fetchImpl)
  if (!repo.ok) {
    return {
      ok: false,
      message: `这个令牌访问不了仓库 ${OWNER}/${REPO}。请只授权这一个仓库，并把 Contents 设为 Read and write。`
    }
  }
  const permissions =
    repo.json && typeof repo.json === 'object' && 'permissions' in repo.json
      ? repo.json.permissions
      : undefined
  const push =
    permissions && typeof permissions === 'object' && 'push' in permissions
      ? permissions.push
      : undefined
  const fullName =
    repo.json && typeof repo.json === 'object' && 'full_name' in repo.json
      ? repo.json.full_name
      : undefined
  if (fullName !== `${OWNER}/${REPO}`) {
    return { ok: false, message: `读到的仓库不是 ${OWNER}/${REPO}，已拒绝。` }
  }
  if (push !== true) {
    return {
      ok: false,
      message: '这个令牌不能写入仓库。请把 Contents 设为 Read and write 后重新生成。'
    }
  }
  return { ok: true }
}

type ListedPost = {
  name: string
  path: string
  title: string
  publishDate: string
  draft: boolean
  broken: boolean
}

function nextLink(header: string | null): string | null {
  if (!header) return null
  for (const part of header.split(',')) {
    const match = /<([^>]+)>;\s*rel="next"/.exec(part)
    if (match) return match[1]
  }
  return null
}

async function getFile(
  token: string,
  filePath: string,
  fetchImpl: FetchLike
): Promise<
  | { ok: true; sha: string; text: string }
  | { ok: false; missing: boolean; status: number; message: string }
> {
  const result = await request(
    token,
    `${contentsPath(filePath)}?ref=${BRANCH}`,
    { action: '读取文件' },
    fetchImpl
  )
  if (!result.ok)
    return {
      ok: false,
      missing: result.status === 404,
      status: result.status,
      message: result.message
    }
  const json = result.json
  if (!json || typeof json !== 'object') {
    return { ok: false, missing: false, status: result.status, message: '文件内容的返回格式不对。' }
  }
  const encoding = 'encoding' in json ? json.encoding : undefined
  const content = 'content' in json ? json.content : undefined
  const sha = 'sha' in json ? json.sha : undefined
  if (encoding !== 'base64' || typeof content !== 'string' || typeof sha !== 'string') {
    return {
      ok: false,
      missing: false,
      status: result.status,
      message: 'GitHub 没有返回可编辑的文件内容。'
    }
  }
  try {
    return { ok: true, sha, text: base64ToUtf8(content) }
  } catch {
    return {
      ok: false,
      missing: false,
      status: result.status,
      message: '文件不是合法的 UTF-8，已停止，避免写坏。'
    }
  }
}

async function listPosts(
  token: string,
  fetchImpl: FetchLike
): Promise<{ ok: true; posts: ListedPost[] } | { ok: false; status: number; message: string }> {
  const items: { name?: string; path?: string; type?: string }[] = []
  let path = `/repos/${OWNER}/${REPO}/contents/${BLOG_DIR}?ref=${BRANCH}`
  for (let page = 0; page < 20; page++) {
    assertApiPath(path)
    let response: Response
    try {
      response = await fetchImpl(`${API}${path}`, {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28'
        },
        cache: 'no-store',
        credentials: 'omit'
      })
    } catch {
      return {
        ok: false,
        status: 0,
        message: '连不上 GitHub（api.github.com）。请检查网络后再试。'
      }
    }
    const text = await response.text()
    let json: unknown = null
    if (text) {
      try {
        json = JSON.parse(text)
      } catch {
        json = null
      }
    }
    if (response.status === 404) return { ok: true, posts: [] }
    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        message: messageFor(response.status, json, '读取文章列表')
      }
    }
    if (!Array.isArray(json))
      return { ok: false, status: response.status, message: '文章目录的返回格式不对。' }
    items.push(...json)
    const next = nextLink(response.headers.get('Link') ?? response.headers.get('link'))
    if (!next) break
    const url = new URL(next)
    if (url.origin !== API) return { ok: false, status: 0, message: '拒绝了非 GitHub 的分页链接。' }
    path = `${url.pathname}${url.search}`
  }

  const files = items.filter(
    (item) =>
      item.type === 'file' && typeof item.path === 'string' && /\.mdx?$/.test(item.name ?? '')
  )
  const posts: ListedPost[] = []
  for (const file of files) {
    const loaded = await getFile(token, file.path as string, fetchImpl)
    if (!loaded.ok) {
      if (loaded.status === 401) return { ok: false, status: 401, message: loaded.message }
      posts.push({
        name: file.name ?? file.path ?? '',
        path: file.path as string,
        title: file.name ?? '',
        publishDate: '',
        draft: false,
        broken: true
      })
      continue
    }
    const parsed = parsePost(loaded.text)
    posts.push({
      name: file.name ?? '',
      path: file.path as string,
      title: parsed?.title || file.name || '',
      publishDate: parsed?.publishDate ?? '',
      draft: parsed?.draft ?? false,
      broken: !parsed
    })
  }
  posts.sort(
    (a, b) => b.publishDate.localeCompare(a.publishDate) || a.title.localeCompare(b.title, 'zh')
  )
  return { ok: true, posts }
}

async function putFile(
  token: string,
  filePath: string,
  text: string,
  message: string,
  sha: string | undefined,
  fetchImpl: FetchLike
): Promise<{ ok: true; sha: string } | { ok: false; message: string }> {
  const payload: { message: string; content: string; branch: string; sha?: string } = {
    message,
    content: utf8ToBase64(text),
    branch: BRANCH
  }
  if (sha) payload.sha = sha
  const result = await request(
    token,
    contentsPath(filePath),
    { method: 'PUT', json: payload, action: '保存' },
    fetchImpl
  )
  if (!result.ok) return result
  const content =
    result.json && typeof result.json === 'object' && 'content' in result.json
      ? result.json.content
      : undefined
  const nextSha =
    content && typeof content === 'object' && 'sha' in content ? content.sha : undefined
  if (typeof nextSha === 'string') return { ok: true, sha: nextSha }
  const again = await getFile(token, filePath, fetchImpl)
  if (again.ok) return { ok: true, sha: again.sha }
  return { ok: true, sha: sha ?? '' }
}

async function deleteFile(
  token: string,
  filePath: string,
  sha: string,
  message: string,
  fetchImpl: FetchLike
): Promise<{ ok: true } | { ok: false; message: string }> {
  const result = await request(
    token,
    contentsPath(filePath),
    { method: 'DELETE', json: { message, sha, branch: BRANCH }, action: '删除' },
    fetchImpl
  )
  if (!result.ok) return result
  return { ok: true }
}

function readToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY)
  } catch {
    return null
  }
}

function writeToken(token: string | null): string | null {
  try {
    if (token) localStorage.setItem(TOKEN_KEY, token)
    else localStorage.removeItem(TOKEN_KEY)
    return null
  } catch {
    return '浏览器禁止了本地存储，无法记住登录。'
  }
}

function must<T extends Element>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector)
  if (!element) throw new Error(`缺少页面元素 ${selector}`)
  return element
}

export function startAdmin(root: ParentNode = document): void {
  const app = must<HTMLElement>(root, '#admin')
  if (app.dataset.ready === '1') return
  app.dataset.ready = '1'

  const loginView = must<HTMLElement>(app, '#view-login')
  const listView = must<HTMLElement>(app, '#view-list')
  const editorView = must<HTMLElement>(app, '#view-editor')
  const sessionBar = must<HTMLElement>(app, '#session-bar')
  const loginForm = must<HTMLFormElement>(app, '#login-form')
  const tokenInput = must<HTMLInputElement>(app, '#token')
  const loginError = must<HTMLElement>(app, '#login-error')
  const loginSubmit = must<HTMLButtonElement>(app, '#login-submit')
  const postList = must<HTMLElement>(app, '#post-list')
  const listEmpty = must<HTMLElement>(app, '#list-empty')
  const listStatus = must<HTMLElement>(app, '#list-status')
  const template = must<HTMLTemplateElement>(app, '#post-row')
  const editorForm = must<HTMLFormElement>(app, '#editor-form')
  const heading = must<HTMLElement>(app, '#editor-heading')
  const titleInput = must<HTMLInputElement>(app, '#field-title')
  const descriptionInput = must<HTMLTextAreaElement>(app, '#field-description')
  const dateInput = must<HTMLInputElement>(app, '#field-date')
  const slugWrap = must<HTMLElement>(app, '#slug-wrap')
  const slugInput = must<HTMLInputElement>(app, '#field-slug')
  const slugLocked = must<HTMLElement>(app, '#slug-locked')
  const bodyInput = must<HTMLTextAreaElement>(app, '#field-body')
  const saveButton = must<HTMLButtonElement>(app, '#save-btn')
  const deleteButton = must<HTMLButtonElement>(app, '#delete-btn')
  const editorStatus = must<HTMLElement>(app, '#editor-status')

  let token = ''
  let mode: 'new' | 'edit' = 'new'
  let filePath = ''
  let sha: string | null = null
  let raw: string | null = null
  let listGen = 0
  let busy = false

  const show = (view: 'login' | 'list' | 'editor') => {
    loginView.hidden = view !== 'login'
    listView.hidden = view !== 'list'
    editorView.hidden = view !== 'editor'
    sessionBar.hidden = view === 'login'
  }

  const logout = () => {
    token = ''
    raw = null
    sha = null
    listGen++
    writeToken(null)
    tokenInput.value = ''
    loginError.textContent = ''
    show('login')
  }

  const showSaved = (url: string) => {
    editorStatus.replaceChildren()
    editorStatus.append('已保存到 main。网站大约 1–2 分钟后会重新部署。文章地址：')
    const link = document.createElement('a')
    link.href = url
    link.textContent = url
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    editorStatus.append(document.createElement('br'), link)
  }

  const loadList = async () => {
    const generation = ++listGen
    listStatus.textContent = '正在读取文章…'
    listEmpty.hidden = true
    postList.replaceChildren()
    const result = await listPosts(token, fetch)
    if (generation !== listGen) return
    if (!result.ok) {
      if (result.status === 401) {
        logout()
        loginError.textContent = result.message
        return
      }
      listStatus.textContent = result.message
      return
    }
    listStatus.textContent = ''
    if (result.posts.length === 0) {
      listEmpty.hidden = false
      return
    }
    for (const post of result.posts) {
      const row = template.content.cloneNode(true) as DocumentFragment
      const title = row.querySelector('[data-title]')
      const meta = row.querySelector('[data-meta]')
      const button = row.querySelector('button')
      if (title) title.textContent = post.broken ? `${post.name}（无法解析）` : post.title
      if (meta) {
        meta.textContent = `${post.publishDate || '未写日期'} · ${post.name}${post.draft ? ' · 草稿' : ''}`
      }
      button?.addEventListener('click', () => {
        void openEdit(post.path)
      })
      postList.append(row)
    }
  }

  const openNew = () => {
    mode = 'new'
    filePath = ''
    sha = null
    raw = null
    heading.textContent = '新建文章'
    titleInput.value = ''
    descriptionInput.value = ''
    dateInput.value = todayShanghai()
    slugInput.value = ''
    slugInput.disabled = false
    slugWrap.hidden = false
    slugLocked.hidden = true
    bodyInput.value = ''
    deleteButton.hidden = true
    editorStatus.textContent = ''
    saveButton.disabled = false
    show('editor')
    titleInput.focus()
  }

  const openEdit = async (path: string) => {
    mode = 'edit'
    filePath = path
    sha = null
    raw = null
    heading.textContent = '编辑文章'
    slugInput.disabled = true
    slugWrap.hidden = true
    slugLocked.hidden = false
    slugLocked.textContent = `文件：${path}（已有文章不能改文件名）`
    deleteButton.hidden = false
    editorStatus.textContent = '正在读取…'
    saveButton.disabled = true
    show('editor')
    const file = await getFile(token, path, fetch)
    if (filePath !== path) return
    if (!file.ok) {
      editorStatus.textContent = file.message
      return
    }
    const parsed = parsePost(file.text)
    if (!parsed) {
      editorStatus.textContent = '这个文件没有标准 frontmatter（以 --- 开头），不能在这里改。'
      return
    }
    raw = file.text
    sha = file.sha
    titleInput.value = parsed.title
    descriptionInput.value = parsed.description
    dateInput.value = /^\d{4}-\d{2}-\d{2}$/.test(parsed.publishDate) ? parsed.publishDate : ''
    bodyInput.value = editorBody(parsed.body)
    saveButton.disabled = false
    if (parsed.title.includes('\n')) {
      saveButton.disabled = true
      editorStatus.textContent = '标题是多行 YAML，这里不能安全保存。'
      return
    }
    editorStatus.textContent = dateInput.value
      ? ''
      : '发布日期不是 YYYY-MM-DD。填一个新日期再保存，其他未改的字段会原样保留。'
  }

  const findClash = async (mdPath: string): Promise<string | null> => {
    for (const candidate of [mdPath, mdPath.replace(/\.md$/, '.mdx')]) {
      const file = await getFile(token, candidate, fetch)
      if (file.ok) return `已经有文件 ${candidate}，没有保存，避免覆盖。请换一个文件名。`
      if (!file.missing) return file.message
    }
    return null
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    void (async () => {
      const pasted = tokenInput.value.trim()
      loginSubmit.disabled = true
      loginError.textContent = '正在验证…'
      const result = await verifyToken(pasted)
      loginSubmit.disabled = false
      if (!result.ok) {
        loginError.textContent = result.message
        return
      }
      const stored = writeToken(pasted)
      if (stored) {
        loginError.textContent = stored
        return
      }
      tokenInput.value = ''
      token = pasted
      loginError.textContent = ''
      show('list')
      await loadList()
    })()
  })

  must<HTMLButtonElement>(app, '#logout').addEventListener('click', logout)
  must<HTMLButtonElement>(app, '#new-post').addEventListener('click', openNew)
  must<HTMLButtonElement>(app, '#reload-list').addEventListener('click', () => {
    void loadList()
  })
  must<HTMLButtonElement>(app, '#back-btn').addEventListener('click', () => {
    show('list')
    void loadList()
  })

  editorForm.addEventListener('submit', (event) => {
    event.preventDefault()
    void (async () => {
      if (busy) return
      const fields = {
        title: titleInput.value,
        description: descriptionInput.value,
        publishDate: dateInput.value,
        slug: mode === 'new' ? slugInput.value.trim() : null
      }
      const problem = validateFields(fields)
      if (problem) {
        editorStatus.textContent = problem
        return
      }
      busy = true
      saveButton.disabled = true
      editorStatus.textContent = '正在保存…'
      try {
        let text = ''
        let target = filePath
        let message = ''
        let useSha: string | undefined
        if (mode === 'new') {
          target = `${BLOG_DIR}/${fields.slug}.md`
          const clash = await findClash(target)
          if (clash) {
            editorStatus.textContent = clash
            return
          }
          text = createPost({
            title: fields.title,
            description: fields.description,
            publishDate: fields.publishDate,
            body: bodyInput.value
          })
          message = commitMessage('publish', fields.title)
        } else {
          if (!raw || !sha) {
            editorStatus.textContent = '还没有读到原文件，请返回列表重试。'
            return
          }
          const parsed = parsePost(raw)
          if (!parsed) {
            editorStatus.textContent = '原文件的 frontmatter 已无法解析，没有保存。'
            return
          }
          text = serializePost(raw, {
            title: fields.title,
            description: fields.description,
            publishDate: fields.publishDate,
            body: bodyForSave(parsed.body, bodyInput.value)
          })
          if (text === raw) {
            editorStatus.textContent = '没有改动，未提交。'
            return
          }
          message = commitMessage('update', fields.title)
          useSha = sha
        }
        const saved = await putFile(token, target, text, message, useSha, fetch)
        if (!saved.ok) {
          editorStatus.textContent = saved.message
          return
        }
        mode = 'edit'
        filePath = target
        sha = saved.sha
        raw = text
        slugWrap.hidden = true
        slugLocked.hidden = false
        slugLocked.textContent = `文件：${target}（已有文章不能改文件名）`
        deleteButton.hidden = false
        heading.textContent = '编辑文章'
        const parsed = parsePost(text)
        if (parsed) bodyInput.value = editorBody(parsed.body)
        showSaved(postUrl(target))
      } finally {
        busy = false
        saveButton.disabled = false
      }
    })()
  })

  deleteButton.addEventListener('click', () => {
    void (async () => {
      if (busy || mode !== 'edit' || !sha || !filePath) return
      const label = titleInput.value.trim() || filePath
      if (!window.confirm(`确定删除《${label}》吗？\n文件会从仓库移除，网站大约 1–2 分钟后更新。`))
        return
      busy = true
      deleteButton.disabled = true
      editorStatus.textContent = '正在删除…'
      try {
        const result = await deleteFile(token, filePath, sha, commitMessage('delete', label), fetch)
        if (!result.ok) {
          editorStatus.textContent = result.message
          return
        }
        show('list')
        await loadList()
        listStatus.textContent = '已删除。网站大约 1–2 分钟后更新。'
      } finally {
        busy = false
        deleteButton.disabled = false
      }
    })()
  })

  const saved = readToken()
  if (!saved) {
    show('login')
    return
  }
  loginSubmit.disabled = true
  loginError.textContent = '正在验证已保存的令牌…'
  void verifyToken(saved).then(async (result) => {
    loginSubmit.disabled = false
    if (!result.ok) {
      writeToken(null)
      loginError.textContent = result.message
      show('login')
      return
    }
    token = saved
    show('list')
    await loadList()
  })
}
