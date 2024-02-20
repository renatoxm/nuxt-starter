<script lang="ts" setup>
const { awesome } = useAppConfig()
const { parseMenuRoute, parseMenuTitle } = useNavbarParser()
const $screen = useAwesomeScreen()
const nuxtApp = useNuxtApp()

const menus = computed(
  () =>
    (awesome?.layout?.page?.navbar?.menus || [
      {
        type: 'link',
        title: t('pages.getting-started.nav'),
        to: { name: 'getting-started' },
      },
      {
        type: 'link',
        title: t('pages.blank.nav'),
        to: { name: 'blank' },
      },
      {
        type: 'link',
        title: t('pages.test.nav'),
        to: { name: 'test' },
      },
      {
        type: 'link',
        title: t('pages.post.nav'),
        to: { name: 'post' },
      },
      {
        type: 'link',
        title: t('pages.setting.nav'),
        to: { name: 'setting' },
      },
      {
        type: 'link',
        title: t('pages.contact.nav'),
        to: { name: 'contact' },
      },
      {
        type: 'button',
        title: t('pages.dashboard.nav'),
        to: { name: 'dashboard' },
      },
    ]) as AwesomeLayoutPageNavbarMenu[],
)

// drawer
const showDrawer = ref(false)
const { t } = useLang()
</script>

<template>
  <div
    class="flex fixed top-0 z-40 w-full justify-center items-center text-zinc-800 text-xs text-center py-1 px-4 lg:px-8 bg-primary-500 capitalize"
  >
    <span class="mr-1">
      {{ $t('banners.welcome', { app_name: awesome.name }) }}
      <NuxtLink
        class="underline font-bold"
        to="https://github.com/renatoxm/nuxt-starter"
        >{{ $t('others.learn_more') }}</NuxtLink
      >
    </span>
  </div>

  <header
    class="flex fixed backdrop-filter backdrop-blur-md top-6 z-40 w-full h-14 flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-zinc-900/[0.5]"
  >
    <!-- content -->
    <div
      class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4"
    >
      <!-- title -->
      <div>
        <slot name="title">
          <NuxtLink
            to="/"
            class="font-bold text-sm md:text-lg text-zinc-950 dark:text-white"
          >
            <Icon
              name="simple-icons:nuxtdotjs"
              class="font-black text-xl font-mono mr-2 inline-block text-primary-500"
            />
            <span class="capitalize">{{ awesome.name }}</span>
          </NuxtLink>
        </slot>
      </div>
      <!-- menus -->
      <div
        v-if="$screen.higherThan('md', $screen.current.value)"
        class="flex space-x-4 items-center"
        :class="{ 'divide-x divide-gray-500': menus.length > 0 }"
      >
        <div class="flex space-x-4 text-sm items-center">
          <!-- dynamic menus -->
          <template v-for="(item, i) in menus" :key="i">
            <LayoutPageNavbarMenuWrapper :menu="item" />
          </template>
        </div>
        <!-- others -->
        <div class="pl-4 flex space-x-3 text-xl">
          <LayoutPageNavbarDropdownLanguageSwitcher />
          <LayoutPageNavbarDropdownThemeSwitcher />
          <AwesomeLink
            v-if="awesome?.project?.links?.github"
            class="dark:text-gray-400 text-gray-600"
            :href="awesome?.project?.links?.github"
          >
            <Icon name="mdi:github-face" />
          </AwesomeLink>
        </div>
      </div>
      <!-- drawer:btn -->
      <div
        v-else
        class="flex space-x-4 items-center"
        :class="{ 'divide-x divide-gray-500': menus.length > 0 }"
      >
        <div class="pl-4 flex space-x-3 text-xl">
          <AwesomeLink
            v-if="awesome?.project?.links?.github"
            class="text-gray-400 hover:text-gray-100"
            @click.prevent="() => (showDrawer = !showDrawer)"
          >
            <Icon name="heroicons:bars-3-bottom-right-20-solid" />
          </AwesomeLink>
        </div>
      </div>
    </div>
    <!-- misc -->
    <!-- drawer -->
    <AwesomeActionSheet
      v-if="!$screen.higherThan('md', $screen.current.value) && showDrawer"
      @close="() => (showDrawer = false)"
    >
      <AwesomeActionSheetGroup>
        <AwesomeActionSheetHeader>
          <AwesomeActionSheetHeaderTitle text="Menu" />
        </AwesomeActionSheetHeader>
        <!-- dynamic menus -->
        <AwesomeActionSheetItem>
          <div
            class="flex flex-col text-sm items-center divide-y divide-gray-400 dark:divide-gray-700 text-center"
          >
            <template v-for="(item, i) in menus">
              <template v-if="item?.type === 'link'">
                <NuxtLink
                  :key="i"
                  :to="parseMenuRoute(item.to)"
                  #="{ isActive }"
                  class="w-full py-2"
                >
                  <span
                    :class="{
                      'text-gray-900 dark:text-gray-100 font-bold': isActive,
                      'text-gray-700 dark:text-gray-300': !isActive,
                    }"
                    >{{ parseMenuTitle(item?.title) }}</span
                  >
                </NuxtLink>
              </template>
              <template v-if="item?.type === 'button'">
                <AwesomeButton
                  :key="i"
                  :text="parseMenuTitle(item?.title)"
                  size="sm"
                  :to="parseMenuRoute(item.to)"
                  class="w-full"
                />
              </template>
              <template v-if="item?.type === 'dropdown'">
                <div :key="i" class="w-full">
                  <HeadlessDisclosure v-slot="{ open }">
                    <HeadlessDisclosureButton
                      :key="i"
                      :class="[
                        'text-gray-700 dark:text-gray-300 w-full py-2 flex items-center justify-center duration-300 transition-all',
                        open ? 'font-bold' : '',
                      ]"
                    >
                      <span>{{ parseMenuTitle(item?.title) }}</span>
                      <Icon
                        name="carbon:chevron-right"
                        class="ml-1"
                        :class="[
                          open
                            ? 'duration-300 transition-all transform rotate-90'
                            : 'rotate-0',
                        ]"
                      />
                    </HeadlessDisclosureButton>
                    <Transition
                      enter-active-class="transition duration-100 ease-out"
                      enter-from-class="transform scale-95 opacity-0"
                      enter-to-class="transform scale-100 opacity-100"
                      leave-active-class="transition duration-75 ease-out"
                      leave-from-class="transform scale-100 opacity-100"
                      leave-to-class="transform scale-95 opacity-0"
                    >
                      <HeadlessDisclosurePanel class="text-gray-500 pb-2">
                        <template
                          v-for="(child, j) in item?.children || []"
                          :key="j"
                        >
                          <NuxtLink
                            :to="parseMenuRoute(child.to)"
                            #="{ isActive }"
                            class="w-full py-2"
                          >
                            <span
                              :class="[
                                isActive
                                  ? 'text-gray-900 dark:text-gray-100 font-bold'
                                  : 'text-gray-700 dark:text-gray-300',
                              ]"
                              >{{ parseMenuTitle(child?.title) }}</span
                            >
                          </NuxtLink>
                        </template>
                      </HeadlessDisclosurePanel>
                    </Transition>
                  </HeadlessDisclosure>
                </div>
              </template>
            </template>
          </div>
        </AwesomeActionSheetItem>
        <AwesomeActionSheetItem class="flex flex-col">
          <div class="pb-2">
            <div class="mt-2 mb-2 text-sm font-bold capitalize">
              Change Language
            </div>
            <LayoutPageNavbarDropdownLanguageSwitcher type="select-box" />
          </div>
        </AwesomeActionSheetItem>
        <AwesomeActionSheetItem class="flex flex-col">
          <div class="pb-2">
            <div class="mt-2 mb-2 text-sm font-bold capitalize">
              Change Theme
            </div>
            <LayoutPageNavbarDropdownThemeSwitcher type="select-box" />
          </div>
        </AwesomeActionSheetItem>
      </AwesomeActionSheetGroup>
      <AwesomeActionSheetGroup>
        <AwesomeActionSheetItemButton
          class="flex justify-center items-center text-base space-x-2"
        >
          <Icon name="mdi:github-face" class="text-lg font-bold" />
          <span class="text-sm">Github</span>
        </AwesomeActionSheetItemButton>
      </AwesomeActionSheetGroup>
      <slot name="drawer" />
    </AwesomeActionSheet>
  </header>
</template>
