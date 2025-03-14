<template>
  <h3 class="text-lg">Keywords</h3>
  <ul>
    <li
      v-for="keyword in keywords"
      :key="keyword.id"
    >
      <label>
        <input
          type="checkbox"
          :value="keyword.id"
          v-model="selected"
        />
        {{ keyword.name }}
      </label>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { makeAPIRequest } from '@/utils'

const selected = defineModel({
  type: Array,
  required: true
})

const keywords = ref([])

onMounted(() => {
  makeAPIRequest('/controlled_vocabulary_terms', {
    params: {
      type: 'Keyword'
    }
  }).then(({ data }) => {
    keywords.value = data
  })
})
</script>
