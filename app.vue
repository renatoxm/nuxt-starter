<script lang="ts" setup>
const locale = useState<string>('locale.setting')
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-zinc-900"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
