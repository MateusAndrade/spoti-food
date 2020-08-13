import React from 'react';
import { Button } from 'antd';

import { useTranslation } from 'react-i18next';

import api from '../../services';

const LoginView = () => {
  const { t } = useTranslation();

  const authenticateUser = async () => {
    const url = await api.getOAuth2Url();

    if (url) {
      window.location.replace(url);
    }
  };

  return (
    <Button onClick={authenticateUser}>{t('auth.welcome.message')}</Button>
  );
};

export default LoginView;
