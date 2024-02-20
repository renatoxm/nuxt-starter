# Nuxt Starter

A Nuxt 3 starter template or boilerplate with a lot of useful features. and integrated with TailwindCSS 3.

## Features

- [x] 💨 [Tailwind CSS v3](https://tailwindcss.com/)
- [x] ✨ [Headless UI](https://headlessui.dev/)
- [x] 🔔 [Icon Pack Component (unplugin-icons)](https://icones.js.org/)
- [x] 🛹 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 🚩 [Localization (i18n) by @intlify](https://github.com/intlify/nuxt3) & Auto Generate Locales
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 📚 [Content Management System (Nuxt Content)](https://content.nuxtjs.org/) [SSR]
- [x] 🌙 Switch Theme (light, dark, system, realtime)
- [x] 💅 [Prettier](https://prettier.io/)
- [x] 💻 [Consola](https://github.com/unjs/consola)
- [x] 🚀 [Release It](https://github.com/release-it/)
- [x] 🌎 [Vue I18n Internationalization](https://vue-i18n.intlify.dev/)
- [x] ✉️ Contact form
- [x] Configurable Theme (Easy to change)
  - [x] Primary Colors
  - [x] Font
- [ ] 📚 [Nuxt Layer Support](https://nuxt.com/docs/getting-started/layers#layers)

## Preview

<table align="center">
  <tr>
    <td align="center" width="95%" colspan="2">
      <img src="https://github.com/renatoxm/nuxt-starter/blob/main/assets/images/Nuxt3StarterScreen.png?raw=true" alt="Preview" title="Preview">
    </td>
  </tr>
</table>
<p align="center">
  <br>
  <a href="https://nuxt-starter-renatoxm.vercel.app/" target="_blank">
    Live Demo
  </a>
  <br><br>
  <a href="https://codesandbox.io/s/github/renatoxm/nuxt-starter" title="Open In Code Sandbox">
    <img src="https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandboxg" alt="Open In Code Sandbox">
  </a>
</p>

## Table of Contents

- [Nuxt 3 Starter](#nuxt-starter)
  - [Features](#features)
  - [Preview](#preview)
  - [Table of Contents](#table-of-contents)
  - [Quick Start](#quick-start)
    - [Start with this template](#start-with-this-template)
    - [Deploy as Static Site](#deploy-as-static-site)
  - [Built-in Components](#built-in-components)
  - [Notes](#notes)
    - [Nuxt Content](#nuxt-content)
    - [Custom Workspace Snippets](#custom-workspace-snippets)
    - [Styles](#styles)
    - [Localization](#localization)
    - [Contact Form](#contact-form)
  - [License](#license)

## Quick Start

For detail information, go here [Getting Started](https://nuxt-starter-renatoxm.vercel.app/)

### Start with this template

- This project using `pnpm` as package manager.
- Clone this project to your computer `git clone https://github.com/renatoxm/nuxt-starter`
- Install dependencies `pnpm install --shamefully-hoist`
- Run `pnpm dev` to start development server and open `http://localhost:3000` in your browser

### Deploy as Static Site

- Run `pnpm generate` to build the project
- Serve `dist/` folder
  Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## Built-in Components

- [x] Footer
- [x] Button
- [x] Anchor (link)
- [x] Alert
- [x] Card
- [x] Action Sheet
- [x] Theme Toggle / Switcher
- [x] Navbar
  - [x] Navbar Builder
  - [x] Drawer (on mobile)
  - [x] Options (on mobile)
- [x] Page Layout
  - [x] Wrapper
  - [x] Header
    - [x] Title
  - [x] Body
    - [x] Section
      - [x] Section Wrapper
      - [x] Section Title
- [x] Dashboard Layout
  - [x] Sidebar
- [x] Contact Form
- [ ] Modal

## Notes

### Nuxt Content

With Nuxt Content, you can just create markdown file (recommended) inside `content` folder.  
But this is only available for SSR (Server Side Rendering) mode. Static mode still not working, you can see the issue https://github.com/nuxt/content/issues/1202
For now, you can follow

### Custom Workspace Snippets

This workspace including custom snippets for VSCode.

- **n3:content**  
  content template with markdown
- **n3:page**  
  page template

### Styles

Tailwindcss import managed by windicss.
and you can add custom styles in :

```css
/path/to/assets/sass/app.scss
```

### Localization

This project uses [nuxt/i18n](https://i18n.nuxtjs.org/) to translate links and content.

To add a new language, or change default language, you need to edit `nuxt.config.ts` and add a new locale in `locales` array.

```ts
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
      ... add other languages here!
    ],
  },
```

You also need to add a locale `.yml` file in `./locales` and also ad them in `app.config.ts`

```ts
locales: {
      en: {
        name: 'English',
        iso: 'en',
        flag: '🇺🇸',
      },
      ... add other locales
```

### Contact Form

In order to use the contact form component `LayoutPageContact`, you need to create a `.env` file and add your key to it. To get the access key, visit [Static Forms Website](https://www.staticforms.xyz) and follow the instructions. Then paste it in place of `YOR_ACCESS_KEY` like bellow.

```bash
# Contact form component your access key. Get yours here https://www.staticforms.xyz
ACCESS_KEY=YOUR_ACCESS_KEY
```

## License

This project is licensed under the MIT license, Copyright (c) 2023 Renato Nabinger. For more information see the [LICENSE](LICENSE.md) file.
