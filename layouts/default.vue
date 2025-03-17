<template>
  <div class="min-h-screen h-screen flex flex-col justify-between">
    <HeaderLayout />
    <div class="flex flex-col flex-grow">
      <slot />
    </div>
    <section class="py-8 bg-base-foreground">
      <div class="mx-auto container">
        <BottomNav />
      </div>
    </section>
    <FooterLayout />
  </div>
</template>

<script setup>
import FooterLayout from '#/components/FooterLayout.vue'
import HeaderLayout from '#/components/HeaderLayout.vue'
import BottomNav from '#/components/BottomNav.vue'
</script>

<style></style>
