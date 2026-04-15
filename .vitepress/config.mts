// .vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Riyanshi's Portfolio",
  description: "UX/UI Design Portfolio | Algonquin College",

  // This MUST match your repo name exactly (including slashes)
  base: '/mtm6407-static-site-riyansidonga/',

  srcDir: '.',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Skills', link: '/skills' },
      { text: 'Contact', link: '/contact' }
    ],
    footer: {
      copyright: '© 2026 Riyanshi • Built with VitePress for MTM6407'
    }
  }
})