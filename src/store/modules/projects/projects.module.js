import api from './projects.api'
import ProjectActionsTypes from './projects.types'

export const projectsModule = {
  namespaced: true,
  state: {
    projects: []
  },
  getters: {
    projectIds: (state) => state.projects.map(p => p.id),
    project: (state) => (id) => state.projects.find(p => p.id === id)
  },
  mutations: {
    [ProjectActionsTypes.ADD_PROJECTS](state, projects) {
      state.projects = [...state.projects, ...projects];
    },
    [ProjectActionsTypes.ADD_PROJECT](state, proj) {
      state.projects.push(proj);
    }
  },
  actions: {
    [ProjectActionsTypes.GET_ALL_PROJECTS]({ commit }) {
      api.getProjects()
        .then(response => commit(ProjectActionsTypes.ADD_PROJECTS, response))
        .catch(() => commit(ProjectActionsTypes.ADD_PROJECTS, []))
    }
  },
  modules: {
  }
}