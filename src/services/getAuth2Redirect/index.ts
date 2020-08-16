import client from '../client-auth';

import services from '../../constants/services';

import { OAuth2Url } from './interface';

const getOauth2Redirect = async (): Promise<string | null> => {
  try {
    const { data } = await client.get<OAuth2Url>(services.OAUTH2_URL);

    return data.url;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default getOauth2Redirect;
