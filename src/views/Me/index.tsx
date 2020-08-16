import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import * as thunks from '../../store/thunks';
import * as selectors from '../../store/reducers/selectors';

import { UserCard } from '../../components';

const ProfileView = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectors.getUserInfo);
  const { loading, failed, fullfiled } = useSelector(selectors.getUserState);

  useEffect(() => {
    if (!fullfiled) {
      dispatch(thunks.getUserInfo());
    }
  }, [dispatch]);

  return (
    <Grid container>
      {loading ? (
        'Loading...'
      ) : (
        <Grid item xs={12} spacing={2}>
          <UserCard
            name={user.display_name}
            image={user.images.length ? user.images[0].url : ''}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default ProfileView;
