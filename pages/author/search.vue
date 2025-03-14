<template>
  <section class="bg-white h-full">
    <VSpinner v-if="isLoading" />
    <div class="mx-auto container py-12">
      <div class="flex flex-col justify-center px-4">
        <ListTaxa :list="list" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { makeAPIRequest } from '@/utils'
import ListTaxa from './components/ListTaxa.vue'

const route = useRoute()
const isLoading = ref(false)
const list = ref([])

onMounted(() => {
  const params = {
    page: 1,
    ...route.query,
    extend: ['otus']
  }

  loadOtus(params)
})

async function loadOtus(params) {
  isLoading.value = true
  list.value = (await makeAPIRequest.get('/taxon_names', { params })).data

  if (list.value.length) {
    const { data } = await makeAPIRequest.get('/otus', {
      params: {
        taxon_name_id: list.value.map((item) => item.id)
      }
    })

    list.value.forEach((taxon) => {
      taxon.otu = data.find((item) => item.taxon_name_id === taxon.id)
    })
  }

  isLoading.value = false
}
</script>
