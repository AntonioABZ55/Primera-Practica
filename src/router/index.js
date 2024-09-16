import {createRouter,createWebHistory} from 'vue-router'
import Home from '../components/home.vue'
import login from '../components/Login.vue'
import Register from '../components/register.vue'

const routes= [
  {
    path:"/",
    component: login
  },
  {
    path:"/register",
    component: Register
  },
  {
    path:"/inicio",
    component: Home
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes:routes
})
export default router