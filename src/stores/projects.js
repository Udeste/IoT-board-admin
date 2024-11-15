import api from '@/services/projects.api'
import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    allProjects: [],
    loaded: false
  }),
  getters: {
    all: (state) => state.allProjects,
    projectIds: (state) => state.allProjects.map(p => p.id),
    project: (state) => (id) => state.allProjects.find(p => p.id === id),
    isLoaded: (state) => state.loaded
  },
  actions: {
    getAll() {
      api.getProjects()
        .then(response => {
          this.allProjects = response
          this.loaded = true
        })
        .catch((e) => {
          this.loaded = false
          throw e
        })
    },
    getOne(id) {
      api.getProject(id)
        .then((project) => this.allProjects.push(project))
        .catch((e) => { throw e })
    },
    deleteOne({ id }) {
      api.deleteProject(id)
        .then(() => this.allProjects = this.allProjects.filter(p => p.id !== id))
        .catch((e) => { throw e })
    },
    createOne(project) {
      api.createProject(project)
        .then((p) => this.allProjects.push(p))
        .catch((e) => { throw e })
    }
  }
})