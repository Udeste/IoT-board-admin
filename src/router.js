import { createWebHistory, createRouter } from 'vue-router'

import ProjectsList from './views/ProjectsList.vue'
import ProjectView from './views/ProjectView.vue'

const routes = [
  { path: '/', component: ProjectsList },
  { path: '/project/:id', name: 'project-view', component: ProjectView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router