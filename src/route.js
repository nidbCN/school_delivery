import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login'),
    },
    {
        path:'/account',
        name: 'Account',
        component:() => import('./views/Account')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes,
});

export default router;