<template>
  <section class="bg-white h-full">
    <VSpinner v-if="isLoading" />
    <div class="mx-auto container py-12">
      <div class="flex flex-col justify-center px-4">
        <div class="w-auto mx-auto flex flex-col gap-4">
          <img
            :src="ScaleLogo"
            class="mx-auto cursor-zoom-out my-auto w-[400px]"
          />
          <RouterLink to="/distribution/12">Argentina</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { makeAPIRequest } from '@/utils'
import { useRouter } from 'vue-router'
import ScaleLogo from '../images/SN-logo-400.png'

const router = useRouter()
const isLoading = ref(false)

const { project_token, url } = __APP_ENV__
</script>
