<template>
  <div
    v-for="({ valid, invalid }, rank) in taxonRanks"
    :key="rank"
    class="mb-4 last:mb-0 flex flex-col gap-4"
  >
    <h3 class="capitalize text-lg font-bold">{{ rank }}</h3>
    <ListRank
      v-if="valid.length"
      :list="valid"
      title="Valid names"
      @select="openTaxaPage"
    />
    <ListRank
      v-if="invalid.length"
      :list="invalid"
      title="Invalid names"
      @select="openTaxaPage"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { makeAPIRequest } from '@/utils'
import ListRank from './ListRank.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})

const router = useRouter()

const taxonRanks = computed(() => {
  const ranks = {}

  props.list.forEach((taxon) => {
    if (!ranks[taxon.rank]) {
      ranks[taxon.rank] = {
        valid: [],
        invalid: []
      }
    }

    if (taxon.cached_is_valid) {
      ranks[taxon.rank].valid.push(taxon)
    } else {
      ranks[taxon.rank].invalid.push(taxon)
    }
  })

  return ranks
})

function openTaxaPage({ id }) {
  makeAPIRequest
    .get('/otus', {
      params: {
        taxon_name_id: id
      }
    })
    .then(({ data }) => {
      const [otu] = data

      if (otu) {
        router.push({ path: `/otus/${otu.id}` })
      }
    })
}
</script>
