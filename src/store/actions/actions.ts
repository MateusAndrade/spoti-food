import { createAction } from '@reduxjs/toolkit';

import * as actionTypes from './types';

import { User } from '../../services/me/interface';

export const setUserAuthenticatedRequested = createAction(
  actionTypes.USER_AUTHENTICATED_REQUESTED,
);

export const setUserAuthenticatedFulfilled = createAction(
  actionTypes.USER_AUTHENTICATED_FULFILLED,
  (payload) => ({ payload }),
);

export const setUserAuthenticatedFailed = createAction(
  actionTypes.USER_AUTHENTICATED_FAILED,
);

export const logoutUser = createAction(actionTypes.USER_LOGOUT);

export const setUserInfoRequested = createAction(
  actionTypes.USER_INFO_REQUESTED,
);

export const setUserInfoFulfilled = createAction(
  actionTypes.USER_INFO_FULFILLED,
  (payload: User) => ({ payload }),
);

export const setUserInfoFailed = createAction(actionTypes.USER_INFO_FAILED);

export const setUserLanguage = createAction(
  actionTypes.USER_CHANGE_LANGUAGE,
  (payload) => ({ payload }),
);

export const setFiltersInfoRequested = createAction(
  actionTypes.FILTERS_INFO_REQUESTED,
);

export const setFiltersInfoFulfilled = createAction(
  actionTypes.FILTERS_INFO_FULFILLED,
  (payload) => ({ payload }),
);

export const setFiltersInfoFailed = createAction(
  actionTypes.FILTERS_INFO_FAILED,
);

export const setPlaylistsInfoRequested = createAction(
  actionTypes.PLAYLISTS_INFO_REQUESTED,
);

export const setPlaylistsInfoFulfilled = createAction(
  actionTypes.PLAYLISTS_INFO_FULFILLED,
  (payload) => ({ payload }),
);

export const setPlaylistsInfoFailed = createAction(
  actionTypes.PLAYLISTS_INFO_FAILED,
);
