// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Smart Core',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // script: [
        //   { src: 'https://awesome-lib.js' }
        // ],
        link: [
          { rel: 'stylesheet', href: 'https://awesome-lib.css' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com',},
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap' },
        { rel: 'stylesheet', href: 'assets/css/index.css' }
      ],
      noscript: [
        { children: 'JavaScript is required' }
      ]
    }
  },
})
