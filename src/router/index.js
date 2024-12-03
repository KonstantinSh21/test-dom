import { createRouter, createWebHistory } from 'vue-router'

import Main from "@/components/Main/Main.vue";
import LoginForm from "@/components/auth/LoginForm.vue";
import RegisterForm from "@/components/auth/RegisterForm.vue";

import { useCounterStore } from '@/stores/counter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterForm,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name && to.path) {
    const store = useCounterStore();

    if (!store.isAuth && !["login", "register"].includes(to.name)) {
      router.replace({name: 'login'});
      return;
    }

    next();
  }
});

export default router
