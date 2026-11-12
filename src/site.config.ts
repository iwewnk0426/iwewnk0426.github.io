import type { Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types'

export const theme: ThemeUserConfig = {
  // [Basic]
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Knox 的博客',
  /** Will be used in index page & copyright declaration */
  author: 'Knox',
  /** Description metadata for your website. Can be used in page metadata. */
  description: 'Knox 的博客',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** The default social card image for your site which should be a path to an image in the `public/` directory. */
  socialCard: '/images/social-card.png',
  /** Specify the default language for this site. */
  locale: {
    lang: 'zh-CN',
    attrs: 'zh_CN',
    // Date locale
    dateLocale: 'zh-CN',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: '/src/assets/avatar.png',
    alt: 'Knox'
  },

  titleDelimiter: '•',
  prerender: true, // pagefind search is not supported with prerendering disabled
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  head: [],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: '博客', link: '/blog' },
      { title: '分类', link: '/categories' },
      { title: '标签', link: '/tags' },
      { title: '关于', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    year: `© ${new Date().getFullYear()}`,
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** RSS is linked here and in the document head. */
    social: [{ icon: 'rss', label: 'RSS', href: '/rss.xml' }]
  },

  // [Content]
  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: { style: 'user-select:none' }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    /** No third-party share buttons. */
    share: []
  }
}

export const integ: IntegrationUserConfig = {
  // Friend-link data is unused (the links page is not published). Kept because the schema expects it.
  links: {
    logbook: [],
    applyTip: [
      { name: 'Name', val: 'Knox 的博客' },
      { name: 'Desc', val: 'Knox 的博客' },
      { name: 'Link', val: 'https://iwewnk0426.github.io/' },
      { name: 'Avatar', val: 'https://iwewnk0426.github.io/favicon/favicon.ico' }
    ],
    cacheAvatar: false
  },
  // Local static index built by the theme. Not a remote search backend.
  pagefind: true,
  // Required by the theme schema. The homepage does not render the quote widget, so this is never fetched.
  quote: {
    server: 'https://iwewnk0426.github.io/',
    target: `(data) => (typeof data === 'string' ? data : '')`
  },
  // https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base',
    blockquoteStyle: 'italic',
    inlineCodeBlockStyle: 'modern'
  },
  // https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: true,
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  // Comments are off.
  waline: {
    enable: false,
    showMeta: false
  }
}

const config = { ...theme, integ } as Config
export default config
