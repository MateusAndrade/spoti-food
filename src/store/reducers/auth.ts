import * as actionsTypes from '../actions/types';

import { IAction } from '../actions/interfaces';

import { TGenericState } from './interface';

export type TAuthState = {
  access_token: string;
  refresh_token: string;
  status: keyof typeof TGenericState;
  language: 'pt-BR' | 'en' | 'es';
};

const initialState: TAuthState = {
  access_token: '',
  refresh_token: '',
  status: TGenericState.PENDING,
  language: 'pt-BR',
};

const authReducer = (
  state: TAuthState = initialState,
  action: IAction<any>,
): TAuthState => {
  switch (action.type) {
    case actionsTypes.USER_AUTHENTICATED_REQUESTED:
      return {
        ...state,
        status: TGenericState.LOADING,
      };

    case actionsTypes.USER_AUTHENTICATED_FULFILLED:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        status: TGenericState.FULFILLED,
      };

    case actionsTypes.USER_AUTHENTICATED_FAILED:
      return {
        ...state,
        status: TGenericState.FAILED,
      };

    case actionsTypes.USER_CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
