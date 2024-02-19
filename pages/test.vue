<script lang="ts" setup>
import { useExample } from '~/stores/use-example'
import { useIdentity } from '~/stores/identity'
import { capitalize } from '~/utils/str'

// composable
const { t } = useLang()

// compiler macro
definePageMeta({
  layout: 'page',
})
useHead(() => ({
  title: capitalize(t('pages.test.title')),
  meta: [
    {
      name: 'description',
      content: t('pages.test.description'),
    },
  ],
}))

const counter = useExample()
const identity = useIdentity()
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle :text="$t('pages.test.title')" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageBody>
      <LayoutPageSection>
        <LayoutPageSectionTitle
          :text="$t('pages.test.counter')"
          class="capitalize"
        />
        <div class="">
          <div class="mb-2">Counter : {{ counter.count }}</div>
          <div
            class="flex flex-col items-center justify-items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
          >
            <AwesomeButton
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.test.increment')"
              @click.prevent="counter.increment"
            />
            <AwesomeButton
              class="w-full md:w-auto"
              type="secondary"
              size="sm"
              :text="`${$t('pages.test.increment')} 2x`"
              @click.prevent="counter.increment2x"
            />
            <AwesomeButton
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.test.decrement')"
              @click.prevent="counter.decrement"
            />
            <AwesomeButton
              class="w-full md:w-auto capitalize"
              type="secondary"
              size="sm"
              :text="$t('pages.test.reset')"
              @click.prevent="counter.reset"
            />
          </div>
        </div>
      </LayoutPageSection>
      <LayoutPageSection>
        <LayoutPageSectionTitle
          :text="$t('pages.test.identity')"
          class="capitalize"
        />
        <div class="mb-2">
          <span class="capitalize">{{ $t('pages.test.full_name') }} : </span>
          <span>{{ identity.fullName }}</span>
        </div>
        <div class="mb-2">
          <div
            class="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-2"
          >
            <AwesomeFormTextInput
              v-model="identity.firstName"
              size="md"
              class="w-full md:w-1/3"
            />
            <AwesomeFormTextInput
              v-model="identity.lastName"
              size="md"
              class="w-full md:w-1/3"
            />
            <AwesomeButton
              class="capitalize w-full md:w-auto"
              :text="$t('pages.test.reset')"
              type="secondary"
              size="md"
              @click.prevent="identity.reset"
            />
          </div>
        </div>
      </LayoutPageSection>
    </LayoutPageBody>
  </LayoutPageWrapper>
</template>
