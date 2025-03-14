<template>
  <section class="bg-white h-full">
    <VSpinner v-if="isLoading" />
    <div class="mx-auto container">
      <div class="px-4 md:px-0">
        <div class="flex flex-col justify-center px-4"></div>
        <TableReferences
          class="mt-8 w-full md:w-1/2 mx-auto"
          :list="references"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { makeAPIRequest } from '@/utils'
import TableReferences from './components/TableReferences.vue'
import ScaleLogo from '../images/SN-logo-400.png'

const route = useRoute()
const isLoading = ref(false)
const references = ref([])
const fields = reactive({
  author: '',
  keyword_id_or: [],
  year_start: undefined,
  year_end: new Date().getFullYear()
})

onMounted(() => {
  const params = {
    page: 1,
    ...route.query
  }

  loadReferences(params)
})

function loadReferences(params) {
  isLoading.value = true
  references.value = []

  makeAPIRequest
    .get('/sources', { params })
    .then(({ data }) => {
      references.value = data
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>
