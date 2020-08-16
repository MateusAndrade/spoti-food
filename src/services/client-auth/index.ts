import axios from 'axios';

import services from '../../constants/services';

const apiInstance = axios.create({
  baseURL: services.BASE_URL_AUTH,
});

export default apiInstance;
