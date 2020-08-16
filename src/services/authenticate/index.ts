import client from '../client-auth';

import services from '../../constants/services';

import { OAuth2 } from './interface';

const authenticateUserOauth2 = async (code: string): Promise<OAuth2 | null> => {
  try {
    const { data } = await client.get<OAuth2>(
      `${services.OAUTH2}?code=${code}`,
    );

    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default authenticateUserOauth2;
