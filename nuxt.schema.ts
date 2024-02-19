import { NuxtAwesomeAppConfig } from './app.config'

export default defineNuxtSchema({
  appConfig: {
    awesome: {
      name: 'Nuxt 3 Starter',
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
            menus: [],
          },
        },
        footer: {
          year: 2023,
        },
        welcome: {
          title: 'Nuxt Starter',
          disableInfoReplaceIndexInWelcomePage: true,
        },
      },
      author: {
        name: 'Renato Nabinger',
        links: {
          github: 'https://github.com/renatoxm/nuxt-starter',
        },
      },
    } as NuxtAwesomeAppConfig,
  },
})
