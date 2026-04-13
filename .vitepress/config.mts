import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Riyanshi's Creative Corner",
  description: "Photography • Travel • Digital Art • Personal Portfolio",
  base: '/mtm6407-static-site-riyansidonga/',   // Important for GitHub Pages

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Gallery', link: '/gallery' },
      { text: 'Travel', link: '/travel' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: 'Blog Posts',
          items: [
            { text: 'My First Solo Trip', link: '/blog/first-trip' },
            { text: 'Photography Tips I Learned', link: '/blog/photo-tips' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/riyansidonga' }
    ],

    footer: {
      message: 'Built with VitePress for MTM6407',
      copyright: '© 2026 Riyanshi'
    }
  }
})