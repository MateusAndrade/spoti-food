import client from '../client-filters';

import { FiltersResponse } from './interface';

const getPlayListFilters = async (): Promise<FiltersResponse | null> => {
  try {
    const { data } = await client.get<FiltersResponse>('');

    return data;
  } catch (error) {
    return null;
  }
};

export default getPlayListFilters;
