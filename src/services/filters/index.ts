import client from '../client-auth';

import { FiltersResponse } from './interface';

import services from '../../constants/services';

const getPlayListFilters = async (): Promise<FiltersResponse | null> => {
  try {
    const { data } = await client.get<FiltersResponse>(services.FILTERS);

    return data;
  } catch (error) {
    return null;
  }
};

export default getPlayListFilters;
