import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTodo from '../views/AddTodo.vue'
import EditTodo from '../views/EditTodo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Add',
    name: 'AddTodo',
    component: AddTodo
  },

  {
    path: '/todo/:id',
    name: 'EditTodo',
    component: EditTodo
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
