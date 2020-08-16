import * as actionsTypes from '../actions/types';

import { IAction } from '../actions/interfaces';
import { User } from '../../services/me/interface';

import { TGenericState } from './interface';

export type TUserState = User & {
  status: keyof typeof TGenericState;
};

const initialState: TUserState = {
  country: '',
  display_name: '',
  email: '',
  explicit_content: null,
  external_urls: null,
  followers: {
    href: null,
    total: 0,
  },
  href: '',
  id: '',
  images: [],
  product: '',
  type: '',
  uri: '',
  status: 'PENDING',
};

const userReducer = (
  state: TUserState = initialState,
  action: IAction<any>,
): TUserState => {
  switch (action.type) {
    case actionsTypes.USER_INFO_REQUESTED:
      return {
        ...state,
        status: TGenericState.LOADING,
      };

    case actionsTypes.USER_INFO_FULFILLED:
      return {
        ...state,
        ...action.payload,
        status: TGenericState.FULFILLED,
      };

    case actionsTypes.USER_INFO_FAILED:
      return {
        ...state,
        status: TGenericState.FAILED,
      };

    default:
      return state;
  }
};

export default userReducer;
