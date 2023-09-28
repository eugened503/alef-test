<template>
  <header class="header">
    <img src="/images/logo.svg" alt="logo" />
    <ul>
      <li><router-link :to="{ name: 'Form' }"> Форма </router-link></li>
      <li><router-link :to="{ name: 'Preview' }"> Превью </router-link></li>
    </ul>
  </header>
  <router-view />
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 92px;
  z-index: 1;
  top: 0;
  border: 1px solid $clr-grey;

  ul {
    display: flex;
    gap: 24px;
    margin: auto;
    list-style-type: none;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    color: $clr-primary-grey;

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
