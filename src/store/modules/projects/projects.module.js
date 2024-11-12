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
    },
    [ProjectActionsTypes.DELETE_PROJECT](state, id) {
      state.allProjects = state.allProjects.filter(p => p.id !== id);
    }
  },
  actions: {
    [ProjectActionsTypes.GET_ALL_PROJECTS]({ commit }) {
      api.getProjects()
        .then(response => commit(ProjectActionsTypes.ADD_PROJECTS, response))
        .catch((e) => { throw e })
    },
    [ProjectActionsTypes.DELETE_PROJECT]({ commit }, { id }) {
      api.deleteProject(id)
        .then(() => commit(ProjectActionsTypes.DELETE_PROJECT, id))
        .catch((e) => { throw e })
    }
  },
  modules: {
  }
}