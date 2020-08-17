import qs from 'query-string';

import clientSpotify from '../client-spotify';

import services from '../../constants/services';

import { PlaylistsResponse } from './interface';

const getFeaturedPlaylists = async (filters: {
  [key: string]: string;
}): Promise<PlaylistsResponse | null> => {
  try {
    console.log('filters', filters);

    const { data } = await clientSpotify.get<PlaylistsResponse>(
      `${services.PLAYLISTS}?${qs.stringify(filters)}`,
    );

    return data;
  } catch (error) {
    console.log('error', error);
    return null;
  }
};

export default getFeaturedPlaylists;
