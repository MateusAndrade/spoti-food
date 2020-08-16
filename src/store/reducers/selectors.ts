import { TReduxState } from './interface';
import { User } from '../../services/me/interface';

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
