import client from '../client-spotify';

import services from '../../constants/services';

import { User } from './interface';

const getUserProfile = async (): Promise<User | null> => {
  try {
    const { data } = await client.get<User>(services.ME);

    return data;
  } catch (error) {
    return null;
  }
};

export default getUserProfile;
