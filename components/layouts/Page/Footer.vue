<script lang="ts" setup>
const { awesome } = useAppConfig()
</script>

<template>
  <footer class="flex border-t border-gray-900/10 dark:border-gray-50/[0.2]">
    <!-- <div
      class="flex-1 justify-between max-w-screen-2xl mx-auto px-4 flex flex-col md:flex-row py-2 space-y-2 md:space-y-0 items-center text-xs text-center md:text-left text-gray-400"
    >
      <div>
        Copyright ©
        {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
        {{ awesome?.author?.name || '' }}. All rights reserved.
      </div>
      <div>{{ awesome.name }}</div>
    </div> -->
    <section
      class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20"
    >
      <div class="w-full py-4 text-center md:text-left">
        <div class="mb-1">
          {{ awesome.name }}
        </div>
        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright ©
          {{ awesome?.layout?.footer?.year || new Date().getFullYear() }}
          {{ awesome?.author?.name || '' }}. All rights reserved. Made with
          <span class="text-red-500">❤</span>
          <div
            class="flex flex-col md:flex-row space-x-2 items-center md:float-right"
          >
            <span class="text-center md:text-right">
              designed by
              <a href="https://github.com/renatoxm">{{
                awesome?.author?.name
              }}</a>
            </span>
            <span
              class="block bg-blue-500 rounded px-1 py-0.5 text-white text-xs"
            >
              {{ awesome?.version }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
