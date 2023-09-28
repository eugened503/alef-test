import { defineStore } from 'pinia'

export const useStoreUser = defineStore('storeUser', {
  state: () => {
    return {
      user: null,
      children: null
    }
  },
  actions: {},
  getters: {}
})
