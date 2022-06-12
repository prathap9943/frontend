import axios from 'axios'

const kpApi = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      lang: 'en',
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
    kpApi.interceptors.request.use(
    function(config) {
    //   const token = getToken();
    //   if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    function(error) {
      return Promise.reject(error);
    }
  );
  
export {kpApi}