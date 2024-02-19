---
title: 'Create a new project'
description: 'Hello !!!, this is a post about hello world hand demo Syntax Highlight Code.'
date: '2023-06-29'
author: 'Renato Nabinger'
---

## Clone de repo

:::div{class="mt-4 mb-4"}
::awesome-tabs
:::awesome-tab{name="git" title="Git"}
`bash
      $ git clone https://github.com/renatoxm/nuxt3-starter
      `
:::
::
:::

## Develop

:::div{class="mt-4 mb-4"}
::awesome-tabs
:::awesome-tab{name="pnpm" title="pnpm"}
`bash # install dependencies
      $ pnpm install --shamefully-hoist
      # serve
      $ pnpm dev
      `
:::
::
:::

## Build

:::div{class="mt-4 mb-4"}
::awesome-tabs
:::awesome-tab{name="pnpm" title="pnpm"}
`bash # build
    $ pnpm build
    # serve
    $ pnpm start
    `
:::
::
:::

## Build as Static Site

:::div{class="mt-4 mb-4"}
::awesome-tabs
:::awesome-tab{name="pnpm" title="pnpm"}
`bash # generate static files
    $ pnpm generate
    # serve
    $ pnpm preview
    # or serve with "serve"
    $ npx serve ./dist/
    `
:::
::
:::
