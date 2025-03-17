<template>
  <section class="bg-base-foreground h-full">
    <div class="mx-auto container py-12">
      <div class="flex flex-col justify-center px-4">
        <div class="w-auto mx-auto flex flex-col gap-4">
          <img
            :src="ScaleLogo"
            class="mx-auto cursor-zoom-out my-auto w-[400px]"
          />

          <div class="max-w-[400px] flex flex-row">
            <input
              class="scalenet-input"
              type="text"
              placeholder="Search author..."
              v-model="author"
              @keypress.enter="loadSearchPage"
            />
            <VButton
              primary
              @click="loadSearchPage"
            >
              Search
            </VButton>
          </div>
          <div></div>
          <div class="max-w-[400px] text-sm">
            <p class="mb-2">
              <b>Use:</b> Search author names (ex: Miller or Miller,D.R.) to get
              a list of species and genera described by them. Search is greedy!
              For other
            </p>
            <p>
              types of queries, use the search links at the top of the page.
              Alternatively, you can search for catalogue entries by drilling
              down through the classification.
            </p>
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

const router = useRouter()
const author = ref('')

function loadSearchPage() {
  router.push({
    path: '/author/search',
    query: {
      author: author.value
    }
  })
}
</script>
