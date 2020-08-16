import * as actions from '../actions/actions';

import spotifyService from '../../services';

export const getUserInfo = () => async (dispatch: any) => {
  try {
    dispatch(actions.setUserInfoRequested());

    const response = await spotifyService.getUserProfile();
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
