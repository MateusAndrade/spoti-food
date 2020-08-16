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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import * as thunks from '../../store/thunks';
import * as selectors from '../../store/reducers/selectors';

import { FullscreenLoader, UserCard, LanguageSelect } from '../../components';

const ProfileView = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectors.getUserInfo);
  const { loading, failed, fullfiled } = useSelector(selectors.getUserState);

  const { t } = useTranslation();

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
              <FollowersIcon />
            </ListItemIcon>
            <ListItemText primary={`${t('profile.changeLanguage')}`} />
          </ListItem>
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
