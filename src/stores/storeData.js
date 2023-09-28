import { defineStore } from 'pinia'

export const useStoreData = defineStore('storeData', {
  state: () => {
    return {
      children: [],
      user: {
        name: '',
        age: ''
      },
      saveData: null
    }
  },
  actions: {
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
      this.saveData = JSON.parse(
        JSON.stringify({
          children: this.children,
          user: this.user
        })
      )
    }
  },
  getters: {
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
