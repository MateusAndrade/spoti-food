import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FollowersIcon from '@material-ui/icons/SupervisedUserCircle';
import LanguageIcon from '@material-ui/icons/Language';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import * as thunks from '../../store/thunks';
import * as selectors from '../../store/reducers/selectors';

import { FullscreenLoader, UserCard, LanguageSelect } from '../../components';

const ProfileView = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const user = useSelector(selectors.getUserInfo);
  const { loading, fullfiled } = useSelector(selectors.getUserState);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!fullfiled) {
      dispatch(thunks.getUserInfo());
    }
  }, [dispatch]);

  const changeLanguage = (lng: string) => {
    setAnchorEl(null);
    dispatch(thunks.changeLanguage(lng));
  };

  const currentPlanLabel = (plan: string) => {
    const funnyEmoji = plan === 'premium' ? `🕺` : `😴`;

    return `${t(
      'profile.currentPlan',
    )}: ${plan.toLocaleUpperCase()} ${funnyEmoji}`;
  };

  const openProfilePage = () => {
    if (user.external_urls) {
      window.open(user.external_urls.spotify);
    }
  };

  if (loading) {
    return <FullscreenLoader />;
  }

  return (
    <Grid container>
      <Grid item xs={12} spacing={1}>
        <UserCard
          followers={user.followers.total}
          name={user.display_name}
          image={user.images.length ? user.images[0].url : ''}
        />
      </Grid>
      <Grid item xs={12}>
        <List component="nav">
          <ListItem>
            <ListItemIcon>
              <FollowersIcon />
            </ListItemIcon>
            <ListItemText
              primary={`${t('profile.followers')}: ${user.followers.total}`}
            />
          </ListItem>
          <Divider />
          <ListItem
            button
            onClick={(event) => setAnchorEl(event.currentTarget)}>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary={`${t('profile.changeLanguage')}`} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={currentPlanLabel(user.product)} />
          </ListItem>
          <Divider />
          <ListItem button onClick={openProfilePage}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={t('profile.openProfile')} />
          </ListItem>
          <Divider />
        </List>
      </Grid>
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <LanguageSelect
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onSelectLanguage={changeLanguage}
        />
      </ClickAwayListener>
    </Grid>
  );
};

export default ProfileView;
