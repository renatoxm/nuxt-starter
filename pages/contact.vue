<script lang="ts" setup>
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.contact.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.contact.description'),
    },
  ],
}))
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageBody>
      <LayoutPageHeader>
        <LayoutPageTitle text="Contact" class="capitalize" />
      </LayoutPageHeader>
      <LayoutPageSection>
        <div class="prose dark:prose-invert mb-5">
          {{ $t('pages.contact.description') }}
        </div>
        <LayoutContactForm class="max-w-2xl" />
      </LayoutPageSection>
    </LayoutPageBody>
  </LayoutPageWrapper>
</template>
