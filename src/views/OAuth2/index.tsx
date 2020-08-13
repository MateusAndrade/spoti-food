import React, { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import qs from 'query-string';

import apiService from '../../services';

const OAuth2 = () => {
  const { search } = useLocation();

  const authUser = useCallback(async () => {
    const { code } = qs.parse(search);

    const tokens = await apiService.authenticateUserOAuth2(String(code));
    console.log('tokens', tokens);
  }, []);

  useEffect(() => {
    authUser();
  }, []);

  return <div>Authenticating...</div>;
};

export default OAuth2;
