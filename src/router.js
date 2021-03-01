import {createRouter, createWebHistory} from 'vue-router'

import Home from './views/Home.vue'
import Dogs from './views/Dogs.vue'
import Cats from './views/Cats.vue'
import NotFound from './views/404.vue'
import Horses from './views/Horses.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/Dogs', component: Dogs },
    { path: '/Cats', component: Cats },
    { path: '/Horses', component: Horses },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]

export const router = createRouter({
    history:createWebHistory(),
    routes,
})