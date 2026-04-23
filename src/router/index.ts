import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import PromView from '@/views/PromView.vue'

const routes = [
      { path: '/', component: HomePage },
      { path: '/prom', component: PromView },
]

export const router = createRouter({
      history: createWebHistory(),
      routes,
})
