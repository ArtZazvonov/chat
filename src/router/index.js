import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import HomePage from '../views/HomePage'
import LoginPage from '../views/LoginPage'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'HomeView', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters['USER'].loggedIn;
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router
