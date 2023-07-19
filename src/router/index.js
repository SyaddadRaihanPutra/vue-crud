import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/Blog/View.vue'
import BlogCreate from '../views/Blog/Create.vue'
import BlogUpdate from '../views/Blog/Update.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/create',
      name: 'blog-create',
      component: BlogCreate
    },
    {
      path: '/blog/:id/edit',
      name: 'blog-update',
      component: BlogUpdate
    },
  ]
})

export default router
