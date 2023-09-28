<template>
  <!-- <PageForm></PageForm> -->
  <KeepAlive>
    <component :is="PageForm" />
  </KeepAlive>
</template>

<script setup>
import PageForm from '@/components/PageForm.vue'
</script>

<style lang="scss" scoped></style>
