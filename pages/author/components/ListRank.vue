<template>
  <div>
    <div class="text-">{{ title }}</div>
    <ul class="pl-4 list list-disc">
      <li
        v-for="item in list"
        :key="item.id"
      >
        <RouterLink
          v-if="item.otu"
          :to="`/otus/${item.otu.id}`"
          v-html="item.name_string"
        />
        <span
          v-else
          v-html="item.name_string"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true
  },

  title: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['select'])
</script>
