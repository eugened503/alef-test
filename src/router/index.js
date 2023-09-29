import { createRouter, createWebHistory } from 'vue-router'
import PageForm from '@/components/PageForm.vue'
import PagePreview from '@/components/PagePreview.vue'

const routes = [
  {
    path: '/',
    name: 'PageForm',
    component: PageForm
  },
  {
    path: '/preview',
    name: 'PagePreview',
    component: PagePreview
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
