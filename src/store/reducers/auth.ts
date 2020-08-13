import { PayloadActionCreator } from '@reduxjs/toolkit';

import * as actionsTypes from '../actions/types';

import { IAction } from '../actions/interfaces';

export enum TAuthStatus {
  FAILED = 'FAILED',
  FULFILLED = 'FULFILLED',
  LOADING = 'LOADING',
  PENDING = 'PENDING',
}

export type TAuthState = {
  access_token: string;
  refresh_token: string;
  status: keyof typeof TAuthStatus;
};

const initialState: TAuthState = {
  access_token: '',
  refresh_token: '',
  status: TAuthStatus.PENDING,
};

const authReducer = (
  state: TAuthState = initialState,
  action: IAction<TAuthState>,
): TAuthState => {
  switch (action.type) {
    case actionsTypes.USER_AUTHENTICATED_REQUESTED:
      return {
        ...state,
        status: TAuthStatus.LOADING,
      };

    case actionsTypes.USER_AUTHENTICATED_FULFILLED:
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        status: TAuthStatus.FULFILLED,
      };

    case actionsTypes.USER_AUTHENTICATED_FAILED:
      return {
        ...state,
        status: TAuthStatus.FAILED,
      };

    default:
      return state;
  }
};

export default authReducer;
