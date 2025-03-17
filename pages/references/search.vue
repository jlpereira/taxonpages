<template>
  <section class="bg-base-foreground h-full">
    <VSpinner v-if="isLoading" />
    <div class="mx-auto container py-12">
      <template v-if="pagination">
        <h1 class="text-xl mb-4">{{ pagination.total }} references found.</h1>
        <VPagination
          :total="pagination.total"
          :per="pagination.per"
          v-model="pagination.page"
          @update:modelValue="(page) => loadReferences({ ...parameters, page })"
        />
      </template>

      <div class="px-4 md:px-0">
        <div class="flex flex-col justify-center px-4"></div>
        <ListReferences
          class="mt-8 w-full mx-auto"
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
import { makePagination } from '#/pages/utils'
import ListReferences from './components/ListReferences.vue'

const route = useRoute()
const isLoading = ref(false)
const references = ref([])
const pagination = ref()
const { page, ...parameters } = route.query

onMounted(() => {
  loadReferences({
    page: page || 1,
    ...parameters
  })
})

function loadReferences(params) {
  isLoading.value = true
  references.value = []

  makeAPIRequest
    .get('/sources', { params })
    .then((response) => {
      references.value = response.data
      pagination.value = makePagination(response.headers)
    })
    .finally(() => {
      isLoading.value = false
    })
}
</script>
