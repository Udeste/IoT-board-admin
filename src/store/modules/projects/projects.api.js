import axiosInstance from '../../api';

export default {
  getProjects() {
    return axiosInstance.get('projects')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
  deleteProject(id) {
    return axiosInstance.delete(`projects/${id}`)
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
}