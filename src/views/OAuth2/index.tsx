import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import qs from 'query-string';

import apiService from '../../services';

import * as actions from '../../store/actions/actions';

const OAuth2 = () => {
  const { search } = useLocation();

  const dispatch = useDispatch();

  const authUser = useCallback(async () => {
    try {
      const { code } = qs.parse(search);

      const tokens = await apiService.authenticateUserOAuth2(String(code));

      if (tokens) {
        dispatch(actions.setUserAuthenticatedFulfilled(tokens));
      } else {
        throw new Error('Failed to fetch Auth Info');
      }
    } catch (error) {
      dispatch(actions.setUserAuthenticatedFailed());
    }
  }, [dispatch]);

  useEffect(() => {
    authUser();
  }, []);

  return <div>Authenticating...</div>;
};

export default OAuth2;
