<template>
  <footer
    class="bg-[#F6F6F6] border border-t-[#DFDFDF] flex justify-center gap-4 py-8 min-h-56 flex-col md:flex-row items-center md:items-start"
  >
    <a
      v-for="item in links"
      :href="item.url"
      :title="item.title"
    >
      <img
        :src="item.img"
        :alt="item.alt"
        class="h-20"
      />
    </a>
  </footer>
</template>

<script setup>
import hardylab from '#/pages/images/hardylab.png'
import umass from '#/pages/images/umass.png'
import usda from '#/pages/images/usda.png'

const links = [
  {
    img: usda,
    alt: 'link to USDA Home',
    url: 'http://usda.gov/',
    title: 'USDA Home'
  },
  {
    img: hardylab,
    alt: 'link to Hard Lab Home',
    url: 'http://hardylab.skullisland.info/',
    title: 'Hardy Lab Home'
  },
  {
    img: umass,
    alt: 'link to UMass Amherst Biology Home',
    url: 'http://hardylab.skullisland.info/',
    title: 'UMass Amherst Biology Home'
  }
]
</script>
