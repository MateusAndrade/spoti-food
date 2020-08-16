import axios from 'axios';

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

export default apiInstance;
