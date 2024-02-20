import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // exp
  experimental: {
    localLayerAliases: true,
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },

  runtimeConfig: {
    public: {
      access_key: process.env.ACCESS_KEY,
    },
  },

  // typescripts
  // todo: feat/strict-type-check
  // typescript: {
  //   strict: true,
  //   typeCheck: true,
  // },

  // modules
  modules: [
    // chore
    '@nuxtjs/eslint-module',
    // styling & ui
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    // management
    '@pinia/nuxt',
    '@vueuse/nuxt',
    // contents,
    '@nuxt/content',
    // localization
    '@nuxtjs/i18n',
  ],

  css: [
    resolve('./assets/scss/_variables.scss'),
    resolve('./assets/scss/app.scss'),
  ],

  plugins: ['~/plugins/navbar.ts'],

  components: [
    {
      prefix: 'Layout',
      path: resolve('./components/layouts'),
      global: true,
    },
    {
      prefix: 'Awesome',
      path: resolve('./components/awesome'),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve('./stores'), '~/stores'],
  },

  // module::pinia
  pinia: {
    storesDirs: ['~/stores/**', '#/stores/**', '@/stores/**'],
  },

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },

  // module::color-mode
  colorMode: {
    classSuffix: '',
  },

  // module::content
  content: {
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: 'github-dark',
    },
  },

  // module::i18n
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    langDir: 'locales',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.yml',
        flag: '🇺🇸',
      },
      {
        code: 'br',
        iso: 'br',
        name: 'Português BR',
        file: 'br.yml',
        flag: '🇧🇷',
      },
      {
        code: 'id',
        iso: 'id',
        name: 'Bahasa',
        file: 'id.yml',
        flag: '🇮🇩',
      },
      {
        code: 'ja',
        iso: 'ja',
        name: '日本語',
        file: 'ja.yml',
        flag: '🇯🇵',
      },
      {
        code: 'ko',
        iso: 'ko',
        name: '한국어',
        file: 'ko.yml',
        flag: '🇰🇷',
      },
      {
        code: 'zh',
        iso: 'zh',
        name: '简体中文',
        file: 'zh.yml',
        flag: '🇨🇳',
      },
    ],
  },

  // vueuse
  vueuse: {
    ssrHandlers: true,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
})
