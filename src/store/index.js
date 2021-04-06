import { createStore } from 'vuex'
import { projectsModule } from './modules/projects/projects.module'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    projects: projectsModule
  }
})
