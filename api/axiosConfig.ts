import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://nicoservices.clobitech.com',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export default axiosInstance;