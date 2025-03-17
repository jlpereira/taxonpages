<template>
  <header class="bg-[#3D3D3D]">
    <nav class="flex flex-row justify-center gap-4 py-2 mx-auto uppercase">
      <RouterLink
        v-for="{ label, link } in header_links"
        :to="link"
        class="text-white hover:text-[#008A2E] text-sm"
      >
        {{ label }}
      </RouterLink>
    </nav>
  </header>
</template>
<script setup>
const { header_links } = __APP_ENV__
</script>
