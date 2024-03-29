<script lang="ts" setup>
const { awesome } = useAppConfig()
const { t } = useLang()
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt Starter' })

// vars
const tooltip = ref(false)

// const
const cancelTooltip = () => {
  tooltip.value = false
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copy to clipboard`
}
const copyBash = () => {
  const bash = 'git clone https://github.com/renatoxm/nuxt-starter'
  navigator.clipboard.writeText(bash)
  tooltip.value = true
  const tt = document.querySelector('.tooltiptext')
  if (tt) tt.innerHTML = `Copied!!!`
}
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageBody>
      <LayoutPageSection class="flex-1 flex items-center">
        <div class="flex-1 md:w-5/8 flex flex-col z-10">
          <div class="max-w-2xl">
            <h1
              class="text-3xl md:text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
            >
              {{ t('pages.index.title') }}
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {{ t('pages.index.description') }}
            </p>
          </div>
          <div
            class="flex space-x-4 ml-4 mt-10 justify-center md:justify-start"
          >
            <AwesomeButton
              size="lg"
              text="Nuxt 3"
              class="font-extrabold"
              href="https://v3.nuxtjs.org"
            />
            <AwesomeButton
              size="lg"
              text="Github"
              type="secondary"
              class="font-extrabold"
              href="https://github.com/renatoxm/nuxt-starter"
            />
          </div>
        </div>
        <div class="hidden md:flex md:w-3/8 justify-center items-end relative">
          <div class="ml-4 w-100 z-10 h-auto shadow">
            <div
              class="win-header bg-gray-200 dark:bg-zinc-800 flex space-x-4 px-3 py-2 rounded-t-lg relative border-b-2 border-gray-300/75 dark:border-zinc-700/75"
            >
              <div class="win-controls flex space-x-1 items-center">
                <div class="w-3 h-3 bg-red-500 rounded-full" />
                <div class="w-3 h-3 bg-green-500 rounded-full" />
                <div class="w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
              <div class="flex-1 font-bold text-center pr-12 text-sm">BASH</div>
              <div class="text-sm flex justify-center items-center">
                <div class="tooltip">
                  <AwesomeButton
                    class="text-gray-100 flex justify-center items-center"
                    @click="copyBash"
                    @mouseout="cancelTooltip"
                  >
                    <span class="tooltiptext">Copy to clipboard</span>
                    <Icon
                      name="material-symbols:content-copy-outline"
                      class="text-xl"
                    />
                  </AwesomeButton>
                </div>
              </div>
            </div>
            <div
              class="win-body rounded-b-lg bg-gray-200/90 dark:bg-zinc-800/90 px-3 py-2 font-mono backdrop-filter backdrop-blur-lg"
            >
              <div>$ git clone https://github.com/renatoxm/nuxt-starter</div>
            </div>
          </div>
        </div>
      </LayoutPageSection>
    </LayoutPageBody>
  </LayoutPageWrapper>
</template>
<style lang="scss">
@import '../assets/scss/_variables';

@keyframes anim-fg-1 {
  0%,
  16.667%,
  100% {
    opacity: 1;
  }

  33.333%,
  83.333% {
    opacity: 0;
  }
}

@keyframes anim-fg-2 {
  0%,
  16.667%,
  66.667%,
  100% {
    opacity: 0;
  }

  33.333%,
  50% {
    opacity: 1;
  }
}

@keyframes anim-fg-3 {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
}

.animated-text-bg {
  position: relative;
  display: block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  content: var(--content);
  display: block;
  width: 100%;
  color: theme('colors.zinc.800');
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding-left: $padding;
  padding-right: $padding;
  &:before {
    content: var(--content);
    position: absolute;
    display: block;
    width: 100%;
    color: theme('colors.zinc.800');
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    padding-left: $padding;
    padding-right: $padding;
  }
}
.animated-text-fg {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-left: $padding;
  padding-right: $padding;
  background-image: linear-gradient(
    90deg,
    var(--start-color),
    var(--end-color)
  );
  position: relative;
  opacity: 0;
  z-index: 1;
  animation: var(--animation-name) 8s infinite;
}

html.dark {
  .animated-text-bg {
    color: theme('colors.gray.100');
    &:before {
      color: theme('colors.gray.100');
    }
  }
}

.triangle-shape {
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 40px solid theme('colors.green.600');
  transform: translate(-15rem, -6rem) rotate(45deg);
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>
