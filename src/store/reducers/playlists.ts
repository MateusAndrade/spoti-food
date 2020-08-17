import * as actionsTypes from '../actions/types';

import { IAction } from '../actions/interfaces';

import { TGenericState } from './interface';
import { Playlists } from '../../services/featuredPlaylists/interface';

export type TPlaylistsState = {
  playlists: Playlists | null;
  message: string;
  status: keyof typeof TGenericState;
};

const initialState: TPlaylistsState = {
  playlists: null,
  message: '',
  status: TGenericState.PENDING,
};

const playlistsReducer = (
  state: TPlaylistsState = initialState,
  action: IAction<any>,
): TPlaylistsState => {
  switch (action.type) {
    case actionsTypes.PLAYLISTS_INFO_REQUESTED:
      return {
        ...state,
        status: TGenericState.LOADING,
      };

    case actionsTypes.PLAYLISTS_INFO_FULFILLED:
      return {
        ...state,
        message: action.payload.message,
        playlists: action.payload.playlists,
        status: TGenericState.FULFILLED,
      };

    case actionsTypes.PLAYLISTS_INFO_FAILED:
      return {
        ...state,
        status: TGenericState.FAILED,
      };

    default:
      return state;
  }
};

export default playlistsReducer;
