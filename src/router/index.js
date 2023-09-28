import { createRouter, createWebHistory } from 'vue-router'
import Form from '../views/Form.vue'
import Preview from '../views/Preview.vue'

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
