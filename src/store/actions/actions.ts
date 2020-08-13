import { createAction } from '@reduxjs/toolkit';

import * as actionTypes from './types';

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
