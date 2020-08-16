import * as actionsTypes from '../actions/types';

import { IAction } from '../actions/interfaces';

import { TGenericState } from './interface';
import { act } from 'react-dom/test-utils';

export type TFiltersState = {
  filters: [];
  status: keyof typeof TGenericState;
};

const initialState: TFiltersState = {
  filters: [],
  status: TGenericState.PENDING,
};

const filtersReducer = (
  state: TFiltersState = initialState,
  action: IAction<any>,
): TFiltersState => {
  switch (action.type) {
    case actionsTypes.FILTERS_INFO_REQUESTED:
      return {
        ...state,
        status: TGenericState.LOADING,
      };

    case actionsTypes.FILTERS_INFO_FULFILLED:
      return {
        ...state,
        filters: action.payload,
      };

    case actionsTypes.FILTERS_INFO_FAILED:
      return {
        ...state,
        status: TGenericState.FAILED,
      };

    default:
      return state;
  }
};

export default filtersReducer;
