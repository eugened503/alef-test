import { defineStore } from 'pinia'

export const useStoreData = defineStore('storeData', {
  state: () => {
    return {
      data: null,
      children: [],
      user: {
        name: '',
        age: ''
      },
      saveStatus: false
    }
  },
  actions: {
    addData(data) {
      this.data = data
    },
    addChild() {
      this.children.push({
        id: new Date().valueOf(),
        name: '',
        age: ''
      })
    },
    deleteChild(id) {
      this.children = this.children.filter((child) => child.id !== id)
    },
    save() {
      this.saveStatus = true
    }
  },
  getters: {
    getData(state) {
      return state.data
    },
    getChildren(state) {
      return state.children
    },
    getUser(state) {
      return state.user
    },
    getSaveStatus(state) {
      return state.saveStatus
    }
  }
})
