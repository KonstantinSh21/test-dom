import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    isAuth: true
  }),
  actions: {
    authorizationPassed() {
      this.isAuth = true;
    },
    authorizationFail() {
      this.isAuth = false;
    }
  }
})