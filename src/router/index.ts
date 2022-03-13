import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/pages/Dashboard.vue'
import Users from '@/pages/users/Users.vue'
import Register from '@/pages/Register.vue'
import Wrapper from '@/pages/Wrapper.vue'
import Login from '@/pages/Login.vue'
import UserCreate from '@/pages/users/UserCreate.vue'
import UserEdit from '@/pages/users/UserEdit.vue'
import Roles from '@/pages/roles/Roles.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {
    path: '',
    component: Wrapper,
    children: [
      {path: '', component: Dashboard},
      {path: '/users', component: Users},
      {path: '/users/create', component: UserCreate},
      {path: '/users/:id/edit', component: UserEdit},
      {path: '/roles', component: Roles},
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
