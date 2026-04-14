import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // Only import Bootstrap JS on the client side
    if (!import.meta.env.SSR) {
      import('bootstrap');
    }
  }
}

