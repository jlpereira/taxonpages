<template>
  <section class="bg-base-foreground h-full">
    <VSpinner v-if="isLoading" />
    <div class="mx-auto container py-12">
      <div class="flex flex-col justify-center px-4">
        <div class="w-auto mx-auto flex flex-col gap-4">
          <img
            :src="ScaleLogo"
            class="mx-auto cursor-zoom-out my-auto w-[400px]"
          />
          <InputAttribute
            v-for="(label, attribute) in DWC_ATTRIBUTES"
            :key="attribute"
            :label="label"
            :attribute="attribute"
            v-model="queryParams"
            v-model:wildcards="wildcards"
            @keypress.enter="openDistributionSearch"
          />

          <div>
            <VButton
              primary
              class="py-3"
              @click="openDistributionSearch"
            >
              Search
            </VButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ScaleLogo from '../images/SN-logo-400.png'
import InputAttribute from './components/InputAttribute.vue'

const DWC_ATTRIBUTES = {
  country: 'Country',
  stateProvince: 'State/Province'
}

const router = useRouter()
const isLoading = ref(false)
const queryParams = ref({})
const wildcards = ref([])

function openDistributionSearch() {
  router.push({
    path: '/distribution/search',
    query: {
      ...queryParams.value,
      wildcard_attribute: wildcards.value
    }
  })
}
</script>
