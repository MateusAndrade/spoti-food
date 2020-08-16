import React, { useCallback, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import qs from 'query-string';

import { FullscreenLoader } from '../../components';

import routes from '../../constants/routes';

import * as thunks from '../../store/thunks';

const OAuth2 = () => {
  const { search } = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();

  const authUser = useCallback(async () => {
    const { code } = qs.parse(search);

    if (code) {
      dispatch(thunks.authenticateUser(String(code)));
    } else {
      history.replace(routes.LOGIN);
    }
  }, [dispatch]);

  useEffect(() => {
    authUser();
  }, []);

  return <FullscreenLoader />;
};

export default OAuth2;
