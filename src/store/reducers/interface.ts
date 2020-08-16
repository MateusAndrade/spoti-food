import { TAuthState } from '../reducers/auth';
import { TUserState } from '../reducers/user';
import { TFiltersState } from '../reducers/filters';

export enum TGenericState {
  FAILED = 'FAILED',
  FULFILLED = 'FULFILLED',
  LOADING = 'LOADING',
  PENDING = 'PENDING',
}

export type TReduxState = {
  auth: TAuthState;
  filters: TFiltersState;
  user: TUserState;
};
