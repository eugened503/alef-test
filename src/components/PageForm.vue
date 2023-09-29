<template>
  <div class="container">
    <form class="form container-body" @submit.prevent="save">
      <p class="title">Персональные данные</p>
      <div class="form__user">
        <div class="form__row">
          <label for="userName">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            v-model="getUser.name"
            name="userName"
            autocomplete="on"
          />
        </div>

        <div class="form__row">
          <label for="userAge">Возраст</label>
          <input
            type="number"
            placeholder="Введите возраст"
            v-model="getUser.age"
            name="userAge"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="form__children">
        <div class="form__header">
          <p class="title">Дети (макс. 5)</p>
          <button
            v-if="getChildren.length < 5"
            type="button"
            class="form__button button-add"
            @click="addChild"
          >
            <img src="/images/btn-image.svg" alt="button-image" />
            <span>Добавить ребенка</span>
          </button>
        </div>
        <div class="form__body">
          <div v-for="child in getChildren" :key="child.id" class="form__children-row">
            <div class="form__row">
              <label for="childName">Имя</label>
              <input
                type="text"
                placeholder="Введите имя"
                v-model="child.name"
                name="childName"
                autocomplete="on"
              />
            </div>
            <div class="form__row">
              <label for="childAge">Возраст</label>
              <input
                type="number"
                placeholder="Введите возраст"
                v-model="child.age"
                name="childAge"
                autocomplete="on"
              />
            </div>
            <button type="button" class="form__button button-delete" @click="deleteChild(child.id)">
              Удалить
            </button>
          </div>
        </div>
        <button type="submit" class="form__button button-save" @click="save">
          <span>Сохранить</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useStoreData } from '@/stores/storeData'
import { storeToRefs } from 'pinia'
const { addChild, deleteChild, save } = useStoreData()
const { getChildren, getUser } = storeToRefs(useStoreData())
</script>

<style lang="scss" scoped>
.form {
  &__user {
    margin: 20px 0 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__children {
    margin: 33px 0 0;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 11px 0 0;
  }

  &__children-row {
    display: flex;
    gap: 18px;

    .form__row {
      width: calc(260 / 616 * 100%);
    }
  }

  &__row {
    position: relative;
    padding: 26px 16px 6px;
    border: 1px solid $clr-grey;
  }

  &__button {
    display: flex;
    align-items: center;
    gap: 7px;
    border: none;
    background-color: transparent;
    color: $clr-primary-blue;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    padding: 10px 20px;
    border: 2px solid $clr-primary-blue;
    border-radius: 100px;
    cursor: pointer;

    &.button-delete {
      padding: 0;
      border: none;
    }

    &.button-save {
      margin: 30px 0 0;
      background-color: $clr-primary-blue;
      color: $clr-primary-white;
    }

    &.button-add {
      @media screen and (max-width: $tablet) {
        padding: 10px;
      }
    }
  }

  input {
    display: block;
    width: 100%;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    opacity: 0.8;
    transition: 0.4s;
    color: $clr-primary-black;

    &:focus {
      opacity: 1;
    }

    &::placeholder {
      color: inherit;
    }

    &:placeholder-shown {
      text-overflow: ellipsis;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  label {
    position: absolute;
    top: 8px;
    left: 16px;
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    color: $clr-primary-grey;
  }

  &__errors {
    color: $clr-red;
    font-size: 12px;
  }
}
</style>
