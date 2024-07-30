import axios from 'axios';
import API_URL from './../../../urls';

const axiosInstance = axios.create({
  baseURL: API_URL,
});


axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Handle the error
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Error occurred:', error.response.status);
      // Mask the URL
      error.response.config.url = 'URL hidden';
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received');
    } else {
      // Something else caused an error
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
