import { TAuthState } from '../reducers/auth';
import { TUserState } from '../reducers/user';

export type TReduxState = {
  auth: TAuthState;
  user: TUserState;
};
