
import { createRouter, createWebHistory } from 'vue-router'
import DetailOurClinic from '../pages/ourclinics/detailOurClinic.vue'

const Home = () => import('../pages/Home.vue')           
const DetailAbout = () => import('../pages/about/detailAbout.vue') 
const DetailMCU = () => import('../pages/mcu/listMCU.vue') 
const detailOurClinic = () => import('../pages/ourclinics/detailOurClinic.vue') 
const detailBlog = () => import('../pages/blog/Blog.vue')

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'DetailAbout', component: DetailAbout },
  { path: '/mcu', name: 'DetailMCU', component: DetailMCU },
  { path: '/cabang', name: 'detailOurClinic', component: detailOurClinic },
  { path: '/blog', name: 'detailBlog', component: detailBlog },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
