import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    if (!import.meta.env.SSR) {
      import('bootstrap');
    }
  }
}

