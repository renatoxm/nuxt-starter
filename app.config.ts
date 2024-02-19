import type { RouteLocationRaw } from 'vue-router'
import { type NuxtApp } from '#app'
import packageJson from './package.json'
import {
  type AwesomeLayoutPageNavbarMenu,
  type AwesomeLayoutPageNavbarMenuDropdownItem,
} from './utils/types'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** locales config */
  locales?: {
    [key: string]: {
      name: string
      iso: string
      flag: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean

  version?: string
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    awesome?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  awesome: {
    name: 'Nuxt Starter',
    description:
      'a starter template for Nuxt with minimalist themes design, built in components, drawer & menus, and more.',
    project: {
      links: {
        github: 'https://github.com/renatoxm/nuxt-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          // menus: [],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt Starter',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Nuxt',
          to: 'https://nuxt.com/',
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/renatoxm/nuxt-starter',
        },
      },
    },
    author: {
      name: 'Renato Nabinger',
      links: {
        github: 'https://github.com/renatoxm/nuxt-starter',
      },
    },
    locales: {
      en: {
        name: 'English',
        iso: 'en',
        flag: '🇺🇸',
      },
      br: {
        name: 'Português BR',
        iso: 'br',
        flag: '🇧🇷',
      },
      id: {
        name: 'Bahasa',
        iso: 'id',
        flag: '🇮🇩',
      },
      ja: {
        name: '日本語',
        iso: 'ja',
        flag: '🇯🇵',
      },
      ko: {
        name: '한국어',
        iso: 'ko',
        flag: '🇰🇷',
      },
      zh: {
        name: '简体中文',
        iso: 'zh',
        flag: '🇨🇳',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
    version: packageJson.version,
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})
