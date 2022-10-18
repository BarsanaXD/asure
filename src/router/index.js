import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/vuetify',
			component: () => import('../views/vuetify.vue')
		},
		{
			path: '/api',
			component: () => import('../views/ApiCompo.vue')
		},
		{
			path: '/AreaCompute',
			component: () => import('../views/AreaCompute.vue')
		},
		{
			path: '/Axios',
			component: () => import('../views/Axios.vue')
		},
	],
})

export default router