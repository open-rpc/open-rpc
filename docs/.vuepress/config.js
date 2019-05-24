module.exports = {
  title: 'open-rpc.org',
  description: 'OpenRPC resources',
  themeConfig: {
    nav: [
      { text: 'open-rpc.org', link: '/' },
      { text: 'Beginners', link: '/beginners/' },
      { text: 'Use', link: '/use/' },
      { text: 'Learn', link: '/learn/' },
      { text: 'Developers', link: '/developers/' }
    ]
  },
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,maximum-scale=1' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'OpenRPC' }],
    ['meta', { property: 'og:site_name', content: 'open-rpc.org' }],
    ['meta', { property: 'og:description', content: 'The OpenRPC Specification defines a standard, programming language-agnostic interface description for JSON-RPC 2.0 APIs.' }],
    ['meta', { property: 'og:url', content: 'https://open-rpc.org' }],
    ['meta', { property: 'og:image', content: 'https://github.com/open-rpc/design/raw/master/png/open-rpc-logo-320x320.png?raw=true' }],
    ['script', { async: true, defer: true, src: 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3' },
    `
      new Crate({
        server: '538420083614023710',
        channel: '554677372872294460',
        shard: 'https://disweb.deploys.io'
      })
    `]
  ],
  markdown: {
    anchor: { permalinkSymbol: '↳' }
  }
}
