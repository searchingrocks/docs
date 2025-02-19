import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Searching Rocks",
  description: "Where searching is a pleasure",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'API', link: 'api-refrence/uc' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Getting Started', link: 'documentation/getting-started' }
        ]
      },
      {
        text: "API Refrence",
        items: [
          { text: 'Basics', link: 'api-refrence/uc' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/searchingrocks' },
      { icon: 'telegram', link: '@searchingrocks' }
    ]
  }
})
