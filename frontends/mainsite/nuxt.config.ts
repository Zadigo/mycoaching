// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/ngrok',
    '@nuxt/hints',
    '@vueuse/nuxt',
    '@vercel/analytics',
    '@vercel/speed-insights'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  ngrok: {
    authtoken: process.env.NUXT_NGROK_AUTH_TOKEN,
    authtoken_from_env: true
  },

  fonts: {
    families: [
      {
        name: 'Epunda Slab'
      },
      {
        name: 'Epunda Sans'
      }
    ]
  }
})
