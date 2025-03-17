<template>
  <ul>
    <li
      v-for="source in list"
      :key="source.id"
      class="pb-2 last:pb-0"
    >
      <span class="font-bold mr-1"
        >{{ source.author }} ({{ source.year }})</span
      >
      <span v-html="source.title" />
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true
  }
})
</script>
