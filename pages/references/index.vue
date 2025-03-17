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

          <div class="max-w-[400px] flex flex-col gap-4">
            <input
              class="scalenet-input"
              type="text"
              placeholder="Search author..."
              v-model="fields.author"
              @keypress.enter="loadSearchPage"
            />

            <input
              class="scalenet-input"
              type="number"
              placeholder="Start year"
              v-model="fields.year_start"
              @keypress.enter="loadSearchPage"
            />

            <input
              class="scalenet-input"
              type="number"
              placeholder="End year"
              v-model="fields.year_end"
              @keypress.enter="loadSearchPage"
            />
          </div>
          <KeywordSelector v-model="fields.keyword_id_or" />
          <div>
            <VButton
              class="py-2"
              primary
              @click="loadSearchPage"
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
import { ref, reactive } from 'vue'
import { makeAPIRequest } from '@/utils'
import { useRouter } from 'vue-router'
import KeywordSelector from './components/KeywordSelector.vue'
import ScaleLogo from '../images/SN-logo-400.png'

const router = useRouter()
const isLoading = ref(false)
const references = ref([])
const fields = reactive({
  author: '',
  keyword_id_or: [],
  year_start: undefined,
  year_end: undefined
})

function loadSearchPage() {
  router.push({
    path: '/references/search',
    query: fields
  })
}
</script>
