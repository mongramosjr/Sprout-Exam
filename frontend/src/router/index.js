import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginAdmin from '../components/LoginAdmin.vue';
import EmployeeList from '../components/EmployeeList.vue';
import EmployeeCreate from '../components/EmployeeCreate.vue';
import EmployeeEdit from '../components/EmployeeEdit.vue';
import EmployeeDetails from '../components/EmployeeDetails.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/login', component: LoginAdmin },
  { path: '/employee-list', component: EmployeeList },
  { path: '/employee-create', component: EmployeeCreate },
  { path: '/employee-edit/:id', component: EmployeeEdit },
  { path: '/employee-details/:id', component: EmployeeDetails }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
