import axiosInstance from '../../api';

export default {
  getProjects() {
    return axiosInstance.get('projects')
      .then((response) => Promise.resolve(response.data))
      .catch((error) => Promise.reject(error));
  },
}