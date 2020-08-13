import { TReduxState } from './interface';

export const isUserAuthenticated = ({ auth }: TReduxState): boolean =>
  Boolean(auth.access_token && auth.refresh_token);
