import axiosInstance from '@/api';

export default {
  createProject(project) {
    return axiosInstance.post('projects', project)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
  getProjects() {
    return axiosInstance.get('projects')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
  getProject(id) {
    return axiosInstance.get(`projects/${id}`)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
  deleteProject(id) {
    return axiosInstance.delete(`projects/${id}`)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
}