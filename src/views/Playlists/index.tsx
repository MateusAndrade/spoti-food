import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { Filters } from '../../components';

import * as thunks from '../../store/thunks';
import * as selectors from '../../store/reducers/selectors';

const PlayslistsView = () => {
  const dispatch = useDispatch();

  const featuredMessage = useSelector(selectors.getPlaylistsMessage);
  const playlists = useSelector(selectors.getPlaylists);

  useEffect(() => {
    dispatch(thunks.getPlaylistFilters());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Filters />
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">{featuredMessage}</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* {JSON.stringify(playlists)} */}
      </Grid>
    </Grid>
  );
};

export default PlayslistsView;
