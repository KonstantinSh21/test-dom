<script setup>
import { RouterLink } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

const auth = () => {
  store.authorizationPassed();
}
</script>

<template>
  <div>
    login

    <RouterLink to="/register">Регистрация</RouterLink>
    <RouterLink @click="auth" to="/">Войти</RouterLink>
  </div>
</template>

<style scoped>

</style>