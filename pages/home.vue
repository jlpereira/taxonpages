<template>
  <section class="bg-base-foreground h-full">
    <div class="mx-auto container py-12">
      <div class="flex flex-col justify-center px-4">
        <div class="w-auto mx-auto flex flex-col gap-4">
          <img
            :src="ScaleLogo"
            class="mx-auto cursor-zoom-out my-auto w-[400px]"
          />

          <div
            class="max-w-[400px] flex flex-row"
            id="catalogue-search"
          >
            <autocomplete-otu class="w-80" />
          </div>
          <div></div>
          <div class="max-w-[400px] text-sm">
            <p class="mb-2">
              <b>Use:</b> Search by scientific name, common name or author
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
import ScaleLogo from './images/SN-logo-400.png'

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
