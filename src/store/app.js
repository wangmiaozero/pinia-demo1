import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  actions: {
    setData(data) {
      console.log(data)
    }
  }
})
  

