import axios, { AxiosResponse } from 'axios';

import services from '../../constants/services';

const apiInstance = axios.create({
  baseURL: services.BASE_URL_SPOTIFY,
});

apiInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('@spoti-food/access_token');

  if (accessToken) {
    return {
      ...config,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  } else {
    return config;
  }
});

apiInstance.interceptors.response.use((response: AxiosResponse<any>) => {
  if (response.status === 401) {
    window.location.replace('https://spotifood-front.herokuapp.com/login');
    localStorage.clear();
  }
  return response;
});

export default apiInstance;
