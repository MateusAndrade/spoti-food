import * as actions from '../actions/actions';

import services from '../../services';

import i18n from '../../i18n';

export const getUserInfo = () => async (dispatch: any) => {
  try {
    dispatch(actions.setUserInfoRequested());

    const response = await services.getUserProfile();
    console.log('response', response);

    if (response) {
      dispatch(actions.setUserInfoFulfilled(response));
    } else {
      throw new Error('Deu ruim');
    }
  } catch (error) {
    dispatch(actions.setUserInfoFailed());
  }
};

export const changeLanguage = (lng: string) => (dispatch: any) => {
  dispatch(actions.setUserLanguage(lng));
  i18n.changeLanguage(lng);
};

export const logoutUser = () => (dispatch: any) => {
  dispatch(actions.logoutUser());
  localStorage.clear();
};

export const getPlaylistFilters = () => async (dispatch: any) => {
  try {
    dispatch(actions.setFiltersInfoRequested());

    const response = await services.getPlayListFilters();

    if (response) {
      dispatch(actions.setFiltersInfoFulfilled(response.filters));
    } else {
      throw new Error('Deu ruim');
    }
  } catch (error) {
    dispatch(actions.setFiltersInfoFailed());
  }
};

export const authenticateUser = (code: string) => async (dispatch: any) => {
  try {
    dispatch(actions.setUserAuthenticatedRequested());

    const tokens = await services.authenticateUserOAuth2(String(code));

    if (tokens) {
      dispatch(actions.setUserAuthenticatedFulfilled(tokens));
      // TODO: apply strategy based on persistor
      localStorage.setItem('@spoti-food/access_token', tokens.access_token);
      localStorage.setItem('@spoti-food/refresh_token', tokens.refresh_token);
    } else {
      throw new Error('Deu ruim');
    }
  } catch (error) {
    dispatch(actions.setUserAuthenticatedFailed());
  }
};
