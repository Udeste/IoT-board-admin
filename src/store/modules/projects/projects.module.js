import api from './projects.api'
import ProjectActionsTypes from './projects.types'

export const projectsModule = {
  namespaced: true,
  state: {
    allProjects: []
  },
  getters: {
    all: (state) => state.allProjects, 
    projectIds: (state) => state.allProjects.map(p => p.id),
    project: (state) => (id) => state.allProjects.find(p => p.id === id)
  },
  mutations: {
    [ProjectActionsTypes.ADD_PROJECTS](state, projects) {
      state.allProjects = [...state.allProjects, ...projects];
    },
    [ProjectActionsTypes.ADD_PROJECT](state, proj) {
      state.allProjects.push(proj);
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