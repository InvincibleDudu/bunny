import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Upload from '../views/Upload.vue'
import Calc from '../views/Calc'
import Blog from '../views/Blog'
import Error from '../views/Error'

const routes = [
   { path: '/', name: 'Home', component: Home },
   { path: '/test', name: 'Test', component: Test },
   { path: '/upload', name: 'upload', component: Upload },
   { path: '/calc', name: 'calc', component: Calc },
   { path: '/blog', name: 'blog', component: Blog },
   { path: '/about', name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   },
   { path: '/:pathMatch(.*)*', name:'error', component: Error, props: true }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

export default router
