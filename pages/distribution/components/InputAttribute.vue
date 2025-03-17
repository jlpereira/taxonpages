<template>
  <div class="flex flex-row items-center gap-2">
    <input
      class="scalenet-input"
      :placeholder="label"
      type="text"
      v-model="queryParam[attribute]"
    />

    <label class="flex flex-row gap-2">
      <input
        type="checkbox"
        value="attribute"
        v-model="wildcardCheckbox"
      />
      Exact
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true
  },

  attribute: {
    type: String,
    required: true
  }
})

const queryParam = defineModel({
  type: Object,
  required: true
})

const wildcards = defineModel('wildcards', {
  type: Array,
  required: true
})

const wildcardCheckbox = computed({
  get: () => !wildcards.value.some((item) => item === props.attribute),

  set: (value) => {
    if (value) {
      wildcards.value = wildcards.value.filter(
        (item) => item !== props.attribute
      )
    } else {
      wildcards.value.push(props.attribute)
    }
  }
})
</script>
