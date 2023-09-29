<template>
  <div class="container">
    <div class="preview container-body">
      <div class="preview__inner" v-if="getSaveData">
        <div class="preview__info">
          <p class="title">Персональные данные</p>
          <p class="preview__title title">
            <span v-if="getSaveDataUser?.name">{{ getSaveDataUser?.name }}, </span>
            <span v-else>**** </span>
            <span v-if="getSaveDataUser?.age">{{ getSaveDataUser?.age }}</span>
            <span v-else>****</span>
          </p>
        </div>
        <div v-if="getSaveDataChildren.length" class="preview__info">
          <p class="title">Дети</p>
          <div class="preview__children">
            <div v-for="child in getSaveDataChildren" :key="child.id" class="preview__child">
              <p class="preview__title title">
                <span v-if="child.name">{{ child.name }}, </span>
                <span v-else>**** </span>
                <span v-if="child.age">{{ child.age }}</span>
                <span v-else>****</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p v-else class="title">Необходимо сохранить данные</p>
    </div>
  </div>
</template>

<script setup>
import { useStoreData } from '@/stores/storeData'
import { storeToRefs } from 'pinia'

const { getSaveData, getSaveDataChildren, getSaveDataUser } = storeToRefs(useStoreData())
</script>

<style lang="scss" scoped>
.preview {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    font-weight: 700;
  }

  &__children {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__child {
    p {
      display: inline-block;
      padding: 10px 20px;
      background: $clr-smoky-white;
      border-radius: 5px;
    }
  }
}
</style>
