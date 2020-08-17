import { TReduxState } from './interface';
import { User } from '../../services/me/interface';
import { Filter } from '../../services/filters/interface';
import { Playlist } from '../../services/featuredPlaylists/interface';

export const isUserAuthenticated = ({ auth }: TReduxState): boolean =>
  Boolean(auth.access_token && auth.refresh_token);

export const getActiveLanguage = ({ auth }: TReduxState): string =>
  auth.language;

export const getUserInfo = ({ user }: TReduxState): User => user;

export const getUserState = ({ user }: TReduxState) => ({
  loading: user.status === 'LOADING',
  failed: user.status === 'FAILED',
  fullfiled: user.status === 'FULFILLED',
});

export const getPlaylistFilters = ({ filters }: TReduxState): Filter[] =>
  filters.filters;

export const getPlaylistState = ({ playlists }: TReduxState) => ({
  loading: playlists.status === 'LOADING',
  failed: playlists.status === 'FAILED',
  fullfiled: playlists.status === 'FULFILLED',
});

export const getPlaylists = ({ playlists }: TReduxState): Playlist[] =>
  playlists.playlists ? playlists.playlists.items : [];

export const getPlaylistsMessage = ({ playlists }: TReduxState): string =>
  playlists.message;
