import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import filters from './filters';
import playlists from './playlists';

import { TReduxState } from './interface';
import { IAction } from '../actions/interfaces';

import * as actionTypes from '../actions/types';

const appReducer = combineReducers({
  auth,
  filters,
  user,
  playlists,
});

const rootReducer = (state: TReduxState, action: IAction<any>) => {
  if (action.type === actionTypes.USER_LOGOUT) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
