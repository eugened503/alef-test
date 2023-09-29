<template>
  <AppHeader></AppHeader>
  <router-view />
  <AppFooter></AppFooter>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss" scoped></style>
