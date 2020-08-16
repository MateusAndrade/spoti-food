import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import { PrivateRouter, PublicRouter } from './navigation';

import * as selectors from './store/reducers/selectors';

import routes from './constants/routes';

const useStyles = makeStyles({
  bottomBar: {
    bottom: 0,
    borderTop: '1px solid #f7f7f7',
    position: 'absolute',
    width: '100%',
  },
});

function App() {
  const authenticated = useSelector(selectors.isUserAuthenticated);

  const { t } = useTranslation();
  const history = useHistory();

  const classes = useStyles();

  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  useEffect(() => {
    if (activeTab) {
      history.replace(routes.ME);
    } else {
      history.replace(routes.PLAYLISTS);
    }
  }, [activeTab]);

  return authenticated ? (
    <>
      <PrivateRouter />
      <BottomNavigation
        value={activeTab}
        onChange={(event, value) => setActiveTab(value)}
        showLabels
        className={classes.bottomBar}>
        <BottomNavigationAction
          label={t('tabBar.labels.playlists')}
          icon={<MusicNoteIcon />}
        />
        <BottomNavigationAction
          label={t('tabBar.labels.profile')}
          icon={<AccountCircleIcon />}
        />
      </BottomNavigation>
    </>
  ) : (
    <PublicRouter />
  );
}

export default App;
