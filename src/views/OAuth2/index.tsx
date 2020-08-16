import React, { useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import qs from 'query-string';

import { FullscreenLoader } from '../../components';

import apiService from '../../services';

import * as actions from '../../store/actions/actions';
import * as selectors from '../../store/reducers/selectors';

import routes from '../../constants/routes';

const OAuth2 = () => {
  const { search } = useLocation();
  const history = useHistory();

  const authenticated = useSelector(selectors.isUserAuthenticated);

  const dispatch = useDispatch();

  const redirectToPlaylists = () => {
    history.replace(routes.PLAYLISTS);
  };

  const authUser = useCallback(async () => {
    try {
      const { code } = qs.parse(search);

      const tokens = await apiService.authenticateUserOAuth2(String(code));

      if (tokens) {
        dispatch(actions.setUserAuthenticatedFulfilled(tokens));
        // TODO: apply a elegante solution
        localStorage.setItem('@spoti-food/access_token', tokens.access_token);
        localStorage.setItem('@spoti-food/refresh_token', tokens.refresh_token);
        redirectToPlaylists();
      } else {
        throw new Error('Failed to fetch Auth Info');
      }
    } catch (error) {
      dispatch(actions.setUserAuthenticatedFailed());
    }
  }, [dispatch]);

  useEffect(() => {
    if (authenticated) {
      redirectToPlaylists();
    } else {
      authUser();
    }
  }, []);

  return <FullscreenLoader />;
};

export default OAuth2;
