import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';

import api from '../../services';

import { InformationBox } from '../../components';

const LoginView = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState<boolean>(false);

  const authenticateUser = async () => {
    setLoading(true);

    const url = await api.getOAuth2Url();

    if (url) {
      window.location.replace(url);
    } else {
      console.log('Deu ruim :(');
    }
  };

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}>
      <Grid item>
        <InformationBox
          description={t('auth.welcome.message')}
          buttonTitle={t('auth.welcome.button')}
          onClick={() => authenticateUser()}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};

export default LoginView;
