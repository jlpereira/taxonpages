<template>
  <section class="h-full">
    <VSpinner v-if="isLoading" />
    <div class="container mx-auto py-12">
      <h1 class="text-xl mb-4">
        {{ list.length }} scales found in {{ GEOGRAPHIC_AREA[id] }}
      </h1>
      <ul class="list-disc pl-4">
        <li
          v-for="item in list"
          :key="item.id"
          class="my-2"
        >
          <RouterLink
            :to="`/otus/${item.id}`"
            v-html="item.object_tag"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { makeAPIRequest } from '@/utils'

const GEOGRAPHIC_AREA = {
  12: 'Argentina'
}

const route = useRoute()
const list = ref([])
const isLoading = ref(false)
const id = ref(route.params.id)

function loadOTUs(id) {
  const params = {
    geographic_area_mode: true,
    geographic_area_id: [id],
    per: 100
  }

  isLoading.value = true

  makeAPIRequest
    .get('/otus', { params })
    .then(({ data }) => {
      list.value = data
    })
    .finally(() => {
      isLoading.value = false
    })
}

onBeforeMount(() => {
  if (id.value) {
    loadOTUs(id.value)
  }
})
</script>
