import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => {
    return {
      name: '张三',
      age: 20,
      count: 0
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    },
    updateAge(age) {
      this.age = age
    },
    getCount() {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('run here')
          this.count = Math.random() * 100
          resolve()
        }, 1000)
      })
    }
  }
})
