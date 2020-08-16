import axios from 'axios';

import services from '../../constants/services';

const apiInstance = axios.create({
  baseURL: services.BASE_URL_SPOTIFY,
});

apiInstance.interceptors.request.use((config) => {
  const persistInfo = localStorage.getItem('persist:v1');

  if (persistInfo) {
    const {
      auth: { access_token },
    } = JSON.parse(persistInfo);

    return {
      ...config,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
  } else {
    return config;
  }
});

export default apiInstance;
