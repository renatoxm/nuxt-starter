<template>
  <div>
    <form v-if="!submitted" class="mb-4" @submit.prevent="submitForm">
      <input id="subject" v-model="subject" type="text" class="hidden" />
      <div class="mb-4">
        <label
          for="name"
          class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          >{{ t('components.contact.name') }}</label
        >
        <input
          id="name"
          v-model="name"
          type="text"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          >{{ t('components.contact.email') }}</label
        >
        <input
          id="email"
          v-model="email"
          type="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200"
          required
        />
        <p v-if="email && !isValidEmail" class="text-red-500 text-xs italic">
          Please enter a valid email address.
        </p>
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          >{{ t('components.contact.message') }}</label
        >
        <textarea
          id="message"
          v-model="message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-gray-200"
          required
        ></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {{ t('components.contact.submit') }}
        </button>
      </div>
    </form>
    <div v-else class="text-green-500 dark:text-green-300">
      <AwesomeAlertBanner
        :type="formResponseType"
        :title="
          formResponseType === 'success'
            ? t('components.contact.success_title')
            : t('components.contact.error_title')
        "
        :text="formResponse"
        class="mb-6"
        @closed="handleAlertClosed"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const config = useRuntimeConfig()

const { t } = useLang()

const isValidEmail = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email.value)
})

const submitted = ref(false)
const formResponseType = ref('')
const formResponse = ref('')

const name = ref('')
const email = ref('')
const message = ref('')
const subject = ref('') // if any value received in this field, form submission will be ignored.
const accessKey = config.public.access_key // stored in your .env file, get your access key from https://www.staticforms.xyz
const realsubject = 'Contact form'
const replyTo = '@' // this will set replyTo of email to email address entered in the form

const handleAlertClosed = () => {
  name.value = ''
  email.value = ''
  message.value = ''
  submitted.value = false
}

const submitForm = async () => {
  try {
    await axios.post('https://api.staticforms.xyz/submit', {
      name: name.value,
      email: email.value,
      message: message.value,
      honeypot: subject.value,
      realsubject,
      accessKey,
    })
    submitted.value = true
    formResponseType.value = 'success'
    formResponse.value = t('components.contact.success_message')
  } catch (error) {
    console.error('Error submitting form:', error)
    submitted.value = true
    formResponseType.value = 'danger'
    formResponse.value = t('components.contact.error_message')
  }
}
</script>
