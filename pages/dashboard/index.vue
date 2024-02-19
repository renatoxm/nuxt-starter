<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({
  layout: 'dashboard',
})
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt Starter' })
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageBody>
      <LayoutPageTitle
        :text="$t('pages.dashboard.index.title')"
        class="capitalize"
      />
    </LayoutPageBody>
    <LayoutPageBody>
      <LayoutPageSection class="flex-1 flex items-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem
          debitis ab dolorum tempore placeat possimus perferendis porro sit aut
          nobis quasi hic consequuntur, atque impedit nihil totam illo odit?
        </p>
      </LayoutPageSection>
      <LayoutPageSection>
        <div v-for="i in 30" :key="i" class="text-6xl uppercase">
          {{ $t('pages.blank.just_blank_page_with_title') }}
        </div>
      </LayoutPageSection>
    </LayoutPageBody>
  </LayoutPageWrapper>
</template>
