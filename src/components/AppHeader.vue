<template>
  <header class="header">
    <img src="/images/logo.svg" alt="logo" />
    <ul>
      <li><router-link :to="{ name: 'PageForm' }"> Форма </router-link></li>
      <li><router-link :to="{ name: 'PagePreview' }"> Превью </router-link></li>
    </ul>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 24px 92px;
  border-bottom: 1px solid $clr-grey;
  background-color: $clr-white;

  @media screen and (max-width: $tablet) {
    padding: 24px;
  }

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

    @media screen and (max-width: $tablet) {
      margin: 0 0 0 auto;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }
}
</style>
